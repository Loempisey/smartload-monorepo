import User from "../../../../back-end/models/user.model";
import dbConnection from "../../../services/db";

dbConnection();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({success: true, data:users });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "POST":
      try {
        const { fullname, username, email, role, password} = req.body;

        if (!fullname && !username && !email && !role && !password) throw "invalid data";
        const user = await User.create({ fullname, username, email, role, password});

        res.status(201).json({success:true, data:user});
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
  }
}
