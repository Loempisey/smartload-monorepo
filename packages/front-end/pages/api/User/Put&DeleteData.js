import User from "../../../../back-end/models/user.model";
import dbConnection from "../../../services/db";

dbConnection();

export default async function handler(req, res) {
  const { method } = req;
  const { UserID } = req.query;
  switch (method) {
    case "PUT":
      try {
        const { fullname, username, email, role, password } = req.body;
        if (!fullname && !username && !email && !role && !password) return "inavalid data";
        await User.updateOne({ _id: UserID }, {  fullname, username, email, role, password });
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;

    case "DELETE":
      try {
        await User.deleteOne({ _id: UserID });
        res.status(200).json({ success: true });
      } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error });
      }
      break;
  }
}
