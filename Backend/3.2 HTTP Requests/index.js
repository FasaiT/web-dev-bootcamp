import express from "express";
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   console.log(req.rawHeaders);
// });

// app.get("/", (req, res) => {
//   res.send("Hello World !");
// });

app.get("/", (req, res) => {
  res.send("<h1>Hello !</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Fasai</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Via Email: fasai1470@gmail.com</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
