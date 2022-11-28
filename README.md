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

### Security
```Authorization: 020e46c2-864c-46b5-9ca9-db6367317b3c```

#### API

| endpoint  | method | body             | Response          |
|-----------|:------:|:-----------------|-------------------|
| /news     |  GET   | none             | NewsPostSummary[] |
| /news/:id |  GET   | none             | NewsPost          |
| /news     |  POST  | {title, details} | NewsPost          |
| /news/:id | DELETE | none             | NewsPost          |
| /news/:id |  PUT   | {title, details} | NewsPost          |

