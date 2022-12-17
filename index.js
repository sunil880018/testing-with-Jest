import express from "express";
import { dbConnection } from "./database/db.js";
import bodyParser from "body-parser";
import { apiRequestLimiter } from "./middleware/apiRateLimiter.js";
import { CONFIG } from "./config/config.js";
import { Sum } from "./utils/sum.js";
// dbConnection();
const app = express();
const PORT = CONFIG.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(apiRequestLimiter);



app.get("/",(req,res)=>{
    const sum = Sum(10,20);
    res.send(sum);
});



app.listen(PORT, () => {
  console.log(`server run at ${PORT}`);
});