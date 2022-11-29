module.exports = {
    host: 'frozen-stream-57269.herokuapp.com',
    schemes: ['https'],
    info: {
        title: "Newsletter API"
    },
    basePath: '/news',
    securityDefinitions: {
        apiKeyHeader: {
            type: "apiKey",
            in: "header",
            name: "Authorization"
        }
    }
}
