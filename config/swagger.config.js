const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for Cleanurge',
        version: '1.0.0',
        description:
            'REST API for Cleanurge, an IoT Powered waste management system, made by the students of KGEC.',
        license: {
            name: 'GPL-3.0 Public License',
            url: 'https://github.com/DSCKGEC/cleanurge-mcu/blob/main/LICENSE',
        },
    },
    servers: [
        {
            url: `http://localhost:${process.env.PORT}`,
            description: 'Development Server',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
