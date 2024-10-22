import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//generating accessToken for access to the api's
export const controllerForGeneratingJWT = (req, res) => {
  try {
    const payload = {
      message: "This is Token Payload",
    };

    // Generating JWT Token
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "60m",
    });

    res.status(200).json({ accessToken });
  } catch (error) {
    console.error("JWT generation error: ", error);
    res.status(500).json({ message: "Error generating token" });
  }
};
