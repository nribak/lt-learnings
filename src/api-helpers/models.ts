export interface PostSummary {
    id: string,
    title: string,
    updatedAt: number,
    createdAt: number
}

export interface Post extends PostSummary {
    details: string
}
