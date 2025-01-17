import express from "express";
const app = express(); //express object
const port = 3000;//port is the location of our server ที่เรากำลังจะรับอีรีเควสจาก client-side.

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
