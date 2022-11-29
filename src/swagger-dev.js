const swaggerAutogen = require('swagger-autogen')()
const outputFile = './swagger_output.json'
const endpointsFiles = ['./newsletter/route']

swaggerAutogen(outputFile, endpointsFiles)
