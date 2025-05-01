import express from "express";
import connectDB from "./src/Config/db.js";
import router from "./src/Router/admin.router.js"
import crouter from "./src/Router/candidate.router.js";
import vrouter from "./src/Router/voter.router.js"
const app = express();

app.use(express.json());



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/admin", router);
app.use("/api/candidate", crouter);
app.use("/api/voter",  vrouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  connectDB();
});
