import express from "express";
import { MongoClient } from "mongodb";

const app = express()
app.use(express.json());
const PORT = 8080;

// const uri = "mongodb+srv://venkatasrinu3:Chathan2569@cluster0.2kp8o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// const client = MongoClient.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

app.get("/users",async(req, res)=>{
    const client = new MongoClient("mongodb+srv://venkatasrinu3:Chathan2569@cluster0.2kp8o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    await client.connect();

    const db = client.db("care-pulse");
    console.log("User data from moongo", db);
    const user = await db.collection("users_list").findOne({firstName: "Srivatsava"})
    console.log("User data from moongo", user);
    
    res.send("Hello");

})
app.listen(PORT,(d)=>{console.log("Server Started successfully", d)})

/*
To get the query params from the url in the server function we have to use req.params
*/
