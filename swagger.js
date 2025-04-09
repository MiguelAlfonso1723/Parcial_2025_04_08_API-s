import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {

    openapi: '3.0.0',
    info:{
        title : 'API Products',
        version: '1.0.0',
        description: 'API de productos',
        license:{
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html'
        },
        contact:{
            name: 'Migue Alfonso',
            url: 'https://github.com/MiguelAlfonso1723'
        }
    },
    tags:[{
        name: "Loggin Controller",
        description: "Creación de usuario e inicio de sesión"
    },
    {
        name: "Product Controller",
        description: "Gestión y administración de productos pertenecientes la compañía"
    }],
    servers:[{
        url: 'http://localhost:3000',
        description: 'Development API Products'
    }],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                description: 'Ingresa el token JWT en el formato: Bearer <token>'
            }
        }
    },
    security: [{
        bearerAuth: []
    }]
    
}


const options = {
    swaggerDefinition,
    apis:['./routes/*.mjs']
}

const swaggerSepc = swaggerJSDoc(options);

export default swaggerSepc;