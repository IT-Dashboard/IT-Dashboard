import { withSessionRoute } from "../../lib/session";
import prisma from "../../lib/prisma";
const { PrismaClient } = require('@prisma/client')
export default withSessionRoute(createUsersRoute);

const prisma = new PrismaClient()

async function createUsersRoute(req, res) {
    const { id } = await req.body;
    const { firstName } = await req.body;
    const { lastName } = await req.body;
    const { address } = await req.body;
    const { phoneNumber } = await req.body;
    const { email } = await req.body;

    const user = await prisma.user.create({
      data: {
        ///Unsure about this part - should prisma syntax be followed?
        ///id = await req.body;,
        ///firstName = await req.body;,
        ///lastName = await req.body;,
        ///address = await req.body;,
        ///phoneNumber = await req.body;,
        ///email = await req.body;,
      }
    });
     console.log(user);
    }
    if (result) {
      req.session.user = {
        isLoggedIn: true,
        id: result.id,
        name: result.firstName,
        admin: true,
      };
      await req.session.save();
      res.json({ isLoggedIn: true });
    } else {
      res.status(403).json({ message: "unauthorized" });
    }


  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    })