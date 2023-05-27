import express from "express";
import bodyParser from "body-parser";

import todosRoutes from "./routes/todos.routes";

const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);

app.listen({ port: 3000 });
