const swaggerAutogen = require('swagger-autogen')()
swaggerAutogen('./swagger-output.json', ['../newsletter/route.ts'], require('./swagger-doc.dev'))
