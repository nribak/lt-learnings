const swaggerAutogen = require('swagger-autogen')()
const outputFile = '../dist/swagger_output.json';
const endpointsFiles = ['./newsletter/route'];

swaggerAutogen(outputFile, endpointsFiles)
