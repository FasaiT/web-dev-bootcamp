import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const getfNameAndlNameLength = req.body["fName"].length + req.body["lName"].length; //รับ name ของ fName และ lName จากหนาบ้าน มาหา length
  res.render("index.ejs", { letterNum: getfNameAndlNameLength }); //ต้องมีการส่ง { letterNum: getfNameAndlNameLength } ซึ่งก็คือ data ออกไปด้วย
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
