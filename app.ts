import express from 'express';
import cors from 'cors';
import UserRouter from './src/user/infrastructure/user.route';

const app = express();
const PORT = 3000;

app.disable('x-powered-by');

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE',
  })
);

app.use(express.json());

app.use('/', UserRouter);

app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`);
});
