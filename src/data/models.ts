export interface NewsItem {
    id: string,
    title?: string,
    createdAt: number,
    updatedAt: number,
    details?: string,
    imageIds: string[]
}

export interface DataResponse<T> {
    data: T,
    fromCache: boolean
}

export interface PostsState {
    posts: NewsItem[],
    isLoading: boolean
}

export interface PostState {
    post: NewsItem,
    isLoading: boolean,
    editMode: boolean
}
