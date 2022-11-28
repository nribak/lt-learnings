# Newsletter API

#### Base Model
```
    interface NewsLetterSummary {
            id: string,
            title: string,
            createdAt: number,
            updatedAt: number
}

    interface NewsLetter extends NewsPostSummary {
        details: string,
}
```

### Base URL
```https://frozen-stream-57269.herokuapp.com/news```

#### API

| endpoint  | method | body             | Response          |
|-----------|:------:|:-----------------|-------------------|
| /news     |  GET   | none             | NewsPostSummary[] |
| /news/:id |  GET   | none             | NewsPost          |
| /news     |  POST  | {title, details} | NewsPost          |
| /news/:id | DELETE | none             | NewsPost          |
| /news/:id |  PUT   | {title, details} | NewsPost          |

