require('dotenv').config({path: './env'})
const connectDB  = require("./db/index.js")


connectDB()










/*
import mongoose from "mongoose"
import {DB_NAME} from "./constants"
import express from "express"
const app = express()

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is Listening on PORT ${process.env.PORT}`)
        })
    } catch (err) {
        console.error("ERROR: ", err)
    }
}) ()

*/