import { withSessionRoute } from "../../lib/session";
import prisma from "../../lib/prisma";

export default withSessionRoute(loginRoute);

async function loginRoute(req, res) {
  const { email } = await req.body;

  const result = await prisma.user.findUnique({ where: { email } });

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
    res.status(500).json({ message: "unauthorized" });
  }
}
