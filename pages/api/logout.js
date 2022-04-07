import { withSessionRoute } from "../../lib/session";

export default withSessionRoute(logoutRoute);

async function logoutRoute(req, res) {
  req.session.destroy();
  res.json({ isLoggedIn: false });
}
