import { APIResponce, APIError } from "../util/api.js";
import { userModel } from "../schema/user.js";
import Bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    const hashPsaaeord = await Bcrypt.hash(password, 10);
    const newUser = new userModel({ name, email, password: hashPsaaeord });
    await newUser.save();
    new APIResponce(res, null, "User added Successfully").json();
  } catch (error) {
    new APIResponce(res, error, "Error creating new user").json();
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      const { password: dbpassword, _id } = user;
      const matchPassword = await Bcrypt.compare(password, dbpassword);
      // console.log(matchPassword);
      if (matchPassword) {
        const token = jwt.sign({ id: _id }, SECRET_KEY);
        new APIResponce(res, { accessToken: token }, "User Log in").json();
      } else {
        new APIError(res, null, "Invalid password").json();
      }
    } else {
      throw new error("Invalid User");
    }
  } catch (error) {}
}
