import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import z from "zod";

export const questionRouter = createTRPCRouter({
  getQuestions: publicProcedure
    .input(z.object({ quizId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.question.findMany({
        where: { ...input },
        include: {
          Answer: true,
        },
      });
    }),
});
