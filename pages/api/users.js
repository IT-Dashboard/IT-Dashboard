import { withSessionRoute } from "../../lib/session";
import prisma from "../../lib/prisma";
import { generateHash } from "../../lib/encrypt";

const userFields = {
  id: true,
  firstName: true,
  lastName: true,
  address: true,
  phoneNumber: true,
  email: true,
};

export default withSessionRoute(userRoute);

async function userRoute({ query: { id, name }, body, method, session }, res) {
  if (session.user) {
    switch (method) {
      case "GET":
        // If no inputs provided, return current user information
        if (!id && !name) {
          res.status(200).json({
            ...session.user,
            isLoggedIn: true,
          });
        }
        // If request is to retreive all users, return the complete list
        else if (id === "all") {
          const users = await prisma.user.findMany({
            select: userFields,
            orderBy: {
              id: "asc",
            },
          });
          res.status(200).json(users);
        }
        // Otherwise, return user for the requested id
        else {
          const user = await prisma.user.findUnique({
            where: { id: parseInt(id, 10) },
            select: userFields,
          });
          res.status(200).json(user);
        }
        break;
      case "PUT":
        // Try creating the user and report any failures back to the client
        try {
          const user = await prisma.user.create({
            data: {
              firstName: body.firstName,
              lastName: body.lastName,
              address: body.address,
              phoneNumber: body.phoneNumber,
              email: body.email,
              password: await generateHash(body.password),
            },
          });
          // Remove the password field from the response
          delete user.password;
          // Return new user object
          res.status(200).json(user);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
        break;
      case "POST":
        let userUpdate = {
          firstName: body.firstName,
          lastName: body.lastName,
          address: body.address,
          phoneNumber: body.phoneNumber,
          email: body.email,
        };

        // Only update the password value if a new one is provided
        if (body.password) {
          userUpdate.password = await generateHash(body.password);
        }

        // Try updating the user and report any failures back to the client
        try {
          const user = await prisma.user.update({
            data: userUpdate,
            where: { id: body.id },
          });
          // Remove the password field from the response
          delete user.password;
          // Return updated user object
          res.status(200).json(user);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
        break;
      case "DELETE":
        // Try deleting the user and report any failures back to the client
        try {
          const user = await prisma.user.delete({
            where: { id: body.id },
          });
          // Remove the password field from the response
          delete user.password;
          // Return deleted user object
          res.status(200).json(user);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
        break;
      default:
        res.setHeader("Allow", ["GET", "PUT", "POST", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } else {
    res.json({
      isLoggedIn: false,
    });
  }
}
