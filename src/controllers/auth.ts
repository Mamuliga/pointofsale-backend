import { Router } from "express";
import Person from "../db/Person";

const authRoute = Router();

authRoute.get("/login", async (req, res) => {
  try {
    const person = new Person({ firstName: "Rizan" });
    await person.save();
    res.status(201).json({ message: "success" });
  } catch (ex) {
    console.log(ex);
    res.status(401).json({
      error: "UnAuthorized"
    });
  }
});

export default authRoute;
