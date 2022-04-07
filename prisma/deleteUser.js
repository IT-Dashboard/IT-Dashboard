const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const deleteUsers = await prisma.user.delete({
    where: {
      id:"",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      email: "",
    }
  });
  console.log(deleteUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
