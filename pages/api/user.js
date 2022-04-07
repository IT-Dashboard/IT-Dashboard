import { withSessionRoute } from "../../lib/session";
import prisma from "../../lib/prisma";

export default withSessionRoute(userRoute);

async function userRoute(req, res) {
  if (req.session.user) {
    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
    res.json({
      ...req.session.user,
      isLoggedIn: true,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
}
