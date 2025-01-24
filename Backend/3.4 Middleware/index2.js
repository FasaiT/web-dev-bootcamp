import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan("tiny")); //ต้องการทดสอบอันนี้กับ postman ดังนั้นควรเอาอันนี้ไว้อันแรก ในpostman เลือก get request แล้วsend 
//เจอผล GET / 200 5 - 0.276 ms ในหน้า terminal 

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

