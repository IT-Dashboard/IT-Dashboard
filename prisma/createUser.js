const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
const user = await prisma.user.create({
  data: {
    id:"",
  	firstName: "",
  	lastName: "",
    address: "",
    phoneNumber: "",
    email: "",
  }
});
console.log(user);
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })