import Redis from 'ioredis';

const objectEmpty = (obj: any): boolean => (typeof obj === 'object') && Object.keys(obj).length === 0;

const redisPrimaryKey = '_newsletter';

export default class RedisCache<T extends {}> {
    private client: Redis;

    constructor() {
        this.client = new Redis(process.env.REDIS_CONNECTION!);
    }

    async getAll(): Promise<T[] | null> {
        const keys = await this.client.lrange(redisPrimaryKey, 0, -1);
        const pipe = this.client.pipeline();
        keys.forEach(key => pipe.hgetall(key));
        const res = await pipe.exec();
        if (res && res.length > 0)
            return res.map(([err, item]) => item as T);
        else return null;
    }

    async getById(id: string): Promise<T | null> {
        const data = await this.client.hgetall(id);
        if (objectEmpty(data))
            return null;
        else
            return data as T;
    }

    async putItem(key: string, item: T) {
        await this.client.hmset(key, item);
        await this.client.lpush(redisPrimaryKey, key);
    }
}
