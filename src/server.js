import path from 'node:path'
import express from 'express';
import handlebars from 'express-handlebars'
import userRoutes from './routes/usersRoute.js';
import viewsRoutes from './routes/viewsRoute.js';
import { initMongoDB } from './connections/mongo.js';
import { errorHandler } from './middlewares/userMiddlewares.js';

const app = express();
app.use(express.json());

app.engine('hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs'); 
app.set('views', path.join(process.cwd(), 'src', 'views'));

initMongoDB()
  .then(() => console.log('conectado exitosamente a MongoDB'))
  .catch(err => console.error('error al conectar MongoDB:', err));
  
  app.use('/', viewsRoutes);
  app.use('/users', userRoutes);

app.use(errorHandler);

app.listen(8080, () => {
  console.log(`Server is running on port 8080`);
});