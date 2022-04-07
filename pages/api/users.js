import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  // let result = { env: process.env.DATABASE_URL };

  const result = await prisma.user.findMany();
  const result = await prisma.user.create();
  const result = await prisma.user.delete();
  const result = await prisma.user.update();

  res.status(200).json(result);
}
