import nameControler from "./controler.js"
import express from "express"

const nameRouter = new express.Router();
nameRouter.get("/", nameControler.get3);
nameRouter.get("/init", nameControler.init);

export default nameRouter;