import swaggerAutogen from "swagger-autogen";
const swaggerDocDev = {
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

swaggerAutogen('./swagger-output.json', ['../newsletter/route.ts'], swaggerDocDev);
