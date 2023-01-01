import {DataResponse, NewsItem} from "../../data/models";
import {GetServerSideProps} from "next";
import API from "../../data/api";
import Article from "../../components/Article";
import RedisCache from "../../data/redis";

export default function ArticlePage({response}: {response: DataResponse<NewsItem>}) {
    return <Article item={response.data} />
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;
    const redisCache = new RedisCache<NewsItem>();
    const cached = await redisCache.getById(id as string);
    if(cached) {
        return {
            props: {response: {fromCache: true, data: cached}}
        }
    } else {
        const item = await API.getById(id as string);
        if(item) {
            await redisCache.putItem(item.id, item);
            return {
                props: {response: {fromCache: false, data: item}}
            }
        }
        else return {
            notFound: true
        }
    }
}
