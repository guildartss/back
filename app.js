require('dotenv').config(); //necesita dotenv
const express = require('express'); //necesita express
const morgan = require('morgan'); //necesita morgan
const { connectDB } = require('./src/infrastructure/repositories/database/mongo/config');
const app = express(); //le indica que se va trabajar con express
// Middlewares 
app.use(morgan('dev'));
app.use(express.json());
connectDB();
// TODO: Cargar Rutas (lo haremos en Clase 2)
const userRoutes = require('./src/presentation/routes/user.routes');
const roleRoutes = require('./src/presentation/routes/role.routes');
const authRoutes = require('./src/presentation/routes/auth.routes'); 

const productRoutes = require('./src/presentation/routes/product.routes'); 
app.use('/api/v1/products', productRoutes);
const orderRoutes = require('./src/presentation/routes/order.routes'); 
app.use('/api/v1/order', orderRoutes);
const cuponsRoutes = require('./src/presentation/routes/cupons.routes'); 
app.use('/api/v1/cupons', cuponsRoutes);

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/roles', roleRoutes);
app.use('/api/v1/auth', authRoutes);

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/presentation/swagger.config');

// Healthcheck Endpoint (para probar) el estatus de servidor
app.get('/api/v1/healthcheck', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const errorHandler = require('./src/presentation/middlewares/error.handler');
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    console.log(`Swagger UI disponible en http://localhost:${PORT}/api-docs`);
});