import prismaPackage from "@prisma/client";
const { PrismaClient } = prismaPackage;
import { generateHash } from "../lib/encrypt.mjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      {
        id: 1,
        firstName: "Kyle",
        lastName: "Hoganson",
        address: "Somewhere, Georgia",
        phoneNumber: "123-456-7890",
        email: "khogans1@students.kennesaw.edu",
        password: await generateHash(""),
      },
      {
        id: 2,
        firstName: "Jake",
        lastName: "Hooker",
        address: "Here, Georgia",
        phoneNumber: "011-211-7516",
        email: "jhooker3@students.kennesaw.edu",
        password: await generateHash(""),
      },
      {
        id: 3,
        firstName: "Sam",
        lastName: "Kharel",
        address: "There, Georgia",
        phoneNumber: "788-962-7516",
        email: "skharel@students.kennesaw.edu",
        password: await generateHash(""),
      },
      {
        id: 4,
        firstName: "Sky",
        lastName: "Kim",
        address: "Someplace, Georgia",
        phoneNumber: "011-962-111",
        email: "skim148@students.kennesaw.edu",
        password: await generateHash(""),
      },
      {
        id: 5,
        firstName: "Robert",
        lastName: "Raheja",
        address: "Overthere, Georgia",
        phoneNumber: "3231-962-7516",
        email: "rraheja@students.kennesaw.edu",
        password: await generateHash(""),
      },
    ],
  });

  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
