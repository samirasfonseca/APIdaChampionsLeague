import express, {json, Request, Response} from "express";
import createApp from "./app";



const app = createApp();
const port = process.env.PORT;




app.listen(port, ()=>{
    console.log(`🏆 server running at port http:localhost:${port}`);
});
