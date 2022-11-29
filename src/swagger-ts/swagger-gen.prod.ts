import swaggerAutogen from "swagger-autogen";

const swaggerDocProd = {
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
    host: 'frozen-stream-57269.herokuapp.com',
    schemes: ['https']
}

swaggerAutogen('./swagger-output.json', ['../newsletter/route.js'], swaggerDocProd);
