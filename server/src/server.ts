import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

// Create Fastify server
const app = Fastify();

// Enable CORS
app.register(cors);

// Add routes
app.register(appRoutes);

// Start server
app.listen({ port: Number(process.env.PORT) || 3000 }).then((address) => {
	console.log(`Server listening on ${address}`);
});
