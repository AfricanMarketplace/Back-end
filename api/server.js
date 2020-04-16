const express = require('express');
require('dotenv').config()
//added cors
const cors = require('cors');
const userRouter = require("./user/user-Router.js");
const locationRouter = require("./location/location-Router.js");
const authRouter = require("./auth/authRouter.js");
const itemRouter = require("./item/itemRouter.js");
const CategoryRouter = require("./category/categoryRouter.js");
const app = express();

const tokenCheck = require("./auth/restricted.js");

app.use(express.json());
app.use(cors());
app.use('/users',tokenCheck.restricted, userRouter)
app.use('/location',tokenCheck.restricted, locationRouter)
app.use('/item',tokenCheck.restricted, itemRouter);
app.use('/category',tokenCheck.restricted, CategoryRouter);
app.use('/auth', authRouter);

module.exports = app;