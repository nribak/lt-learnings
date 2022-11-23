export interface NewsPostSummary {
    id: string,
    title: string,
    updatedAt: number
}

export default interface NewsPost extends NewsPostSummary {
    details: string
    createdAt: number,
}
