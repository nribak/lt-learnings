export interface NewsLetterSummary {
    id: string,
    title: string,
    updatedAt: number,
    createdAt: number
}

export interface NewsLetter extends NewsLetterSummary {
    details: string
}

