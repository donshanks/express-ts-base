import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import { Request, Response } from "express";
import session from "express-session";
import lusca from "lusca";
import path from "path";
// import logger from 'morgan';

/**
 * Controllers
 */
import * as homeController from "./controllers/home";

const app = express();

app.set("views", path.join(__dirname, "./views" ));
app.set("view engine", "pug");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "This is really a secret ... ssssh!"
}));

app.use(lusca({
    xframe: "SAMEORIGIN",
    xssProtection: true
}));

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Routes
 */
app.get("/", homeController.index);

export default app;
