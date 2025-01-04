import cors from "cors"
import express from 'express';
import { router } from './router';
import { _errorHandler } from './middlewares/error-handler';

const app = express()
app.use(express.json())
app.use(cors())

app.use("/biblioteca", router);
app.use(_errorHandler)

const PORT = process.env.PORT || 8000 
app.listen(PORT, () => {
  console.log(`servidor iniciado em http://localhost:${PORT}`)
})