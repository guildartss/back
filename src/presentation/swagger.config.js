const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'Documentation for the API',
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 8000}/api/v1`,
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '60c72b2f9b1e8a001f8e4caa'
          },
          name: {
            type: 'string',
            example: 'John Doe'
          },
          email: {
            type: 'string',
            example: 'jhon.doe@example.com'
          },
          roles: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['user']
          }
        }
      },
      UserInput: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'John Doe'
          },
          email: {
            type: 'string',
            example: 'jhon.doe@exmaple.com'
          },
          password: {
            type: 'string',
            example: 'password123'
          },
          roles: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['user']
          }
        }
      },
      Product: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '60c72b2f9b1e8a001f8e4caa'
          },
          name: {
            type: 'string',
            example: 'John Doe'
          },
          price: {
            type: 'number',
            example: 100
          },
          description: {
            type: 'string',
            example: 'John Doe'
          },
          stock: {
            type: 'number',
            example: 100
          },
          category: {
            type: 'string',
            example: 'John Doe'
          },
          imageUrl: {
            type: 'string',
            example: 'John Doe'
          },
          roles: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['user']
          }
        }
      },
      authInput: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            example: 'jhon.doe@example.com'
          },
          password: {
            type: 'string',
            example: 'password123'
          }
        }
      },
      authOutput: {
        type: 'object',
        properties: {
          token: {
            type: 'string',
            example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
          }
        }
      },
      Cupon: {
        type: 'object',
        properties: {
          id: { type: 'string', 
                example: '60c72b2f9b1e8a001f8e4caa' 
              },
          code: { type: 'string', 
                  example: 'SUMMER2025' 
                },
          type: { type: 'string', 
                  example: 'percentage' 
                },
          value: { type: 'number', 
                   example: 20 
                 },
          minPurchaseAmount: { type: 'number', 
                                example: 50 
                            },
          expireDate: { type: 'string', 
                        format: 'date-time', 
                        example: '2025-12-31T23:59:59Z' 
                      },
          active: { type: 'boolean', 
                    example: true 
                  }
        }
      },
      CuponInput: {
        type: 'object',
        properties: {
          code: { type: 'string', 
                  example: 'SUMMER2025' 
                },
          type: { type: 'string', 
                  example: 'percentage' 
                },
          value: { type: 'number', 
                   example: 20 
                 },
          minPurchaseAmount: { type: 'number', 
                                example: 50 
                             },
          expireDate: { type: 'string', 
                        format: 'date-time', 
                        example: '2025-12-31T23:59:59Z' 
                      },
          active: { type: 'boolean', 
                    example: true 
                  }
        }
      }
    }
  },
  security: [{
    bearerAuth: []
  }]
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/presentation/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
