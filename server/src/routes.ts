import dayjs from "dayjs";
import { FastifyInstance } from "fastify";
import { prisma } from "./lib/prisma";
import { z } from "zod";

export async function appRoutes(app: FastifyInstance) {
	// Create a new habit
	app.post("/habits", async (request, reply) => {
		const createHabitBody = z.object({
			title: z.string(),
			weekDays: z.array(z.number().min(0).max(6)),
		});

		const { title, weekDays } = createHabitBody.parse(request.body);
		const created_at = dayjs().startOf("day").toDate();

		await prisma.habit.create({
			data: {
				title,
				created_at,
				weekDays: {
					create: weekDays.map((week_day) => ({ week_day })),
				},
			},
		});
	});

	// Get all day habits
	app.get("/day", async (request, reply) => {
		const getDayParams = z.object({
			date: z.date(),
		});

		const { date } = getDayParams.parse(request.query);

		const parsedDate = dayjs(date).startOf("day");
		const weekDay = parsedDate.get("day");

		const possibleHabits = await prisma.habit.findMany({
			where: {
				created_at: {
					lte: date,
				},
				weekDays: {
					some: {
						week_day: weekDay,
					},
				},
			},
		});

		const day = await prisma.day.findUnique({
			where: {
				date: parsedDate.toDate(),
			},
			include: {
				dayHabits: true,
			},
		});
		const completedHabits = day?.dayHabits.map((dh) => dh.habit_id) ?? [];

		return {
			possibleHabits,
			completedHabits,
		};
	});
}
