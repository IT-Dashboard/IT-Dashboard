const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const updateUser = await prisma.user.update({
    where:{
      id:"",
      firstName:"",
      lastName:"",
      address:"",
      phoneNumber:"",
      email:"",
    }
  })
  console.log(updateUser);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });