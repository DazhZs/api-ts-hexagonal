import express from 'express';
import cors from 'cors';

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

app.listen(PORT, () => {
  console.log(`Server runnig on port ${PORT}`);
});
