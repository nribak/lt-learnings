module.exports = {
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
    },
    host: 'localhost:4000',
    schemes: ['http']
}
