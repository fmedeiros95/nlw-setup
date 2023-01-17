import Fastify from 'fastify';
import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';

// Create Fastify server
const app = Fastify();

// Create Prisma client
const prisma = new PrismaClient();

// Enable CORS
app.register(cors);

// Example route
app.get('/', async (request, reply) => {
    const habits = await prisma.habit.findMany();
    return habits;
});

// Start server
app.listen({ port: Number(process.env.PORT) || 3000 }).then((address) => {
    console.log(`Server listening on ${address}`);
});