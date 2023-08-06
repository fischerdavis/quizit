import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import z from "zod";

export const quizRouter = createTRPCRouter({
  getAll: publicProcedure
    .input(z.object({ name: z.string().nullable() }))
    .query(async ({ ctx, input }) => {
      if (input.name) {
        const name = input.name;

        return await ctx.prisma.quiz.findMany({
          where: {
            name,
          },
        });
      }
      return ctx.prisma.quiz.findMany();
    }),
});
