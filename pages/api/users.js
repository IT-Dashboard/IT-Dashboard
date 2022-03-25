import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  // let result = { env: process.env.DATABASE_URL };

  const result = await prisma.user.findMany();

  res.status(200).json(result);
}
