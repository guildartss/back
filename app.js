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

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/roles', roleRoutes);
app.use('/api/v1/auth', authRoutes);

// Healthcheck Endpoint (para probar) el estatus de servidor
app.get('/api/v1/healthcheck', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});
const PORT = process.env.PORT || 8000; //si en env no esta el puerto entonces por defecto carga el 8080
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`)); //levanta el servidor en el puerto indicado