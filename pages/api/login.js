import { withSessionRoute } from "../../lib/session";
import prisma from "../../lib/prisma";
import { compareHash } from "../../lib/encrypt";

// Wrap with session helper to ensure session is available to this route
export default withSessionRoute(loginRoute);

async function loginRoute(req, res) {
  // Email and password inputs are attached to the request body
  const { email, password } = await req.body;

  // Load the user corresponding to the input email
  const user = await prisma.user.findUnique({ where: { email } });

  // If no user is found, return an unauthorized response early
  if (!user) {
    return res.status(403).json({ message: "unauthorized" });
  }

  // A user was found, so check if the password is matches the user's hashed password
  const match = await compareHash(password, user.password);

  // If passwords match add user information to the session and confirm logged in state
  if (match) {
    req.session.user = {
      isLoggedIn: true,
      id: user.id,
      name: user.firstName,
      admin: true,
    };
    await req.session.save();
    res.json({ isLoggedIn: true });
  } else {
    // Password did not match, return unauthorized response
    res.status(403).json({ message: "unauthorized" });
  }
}
