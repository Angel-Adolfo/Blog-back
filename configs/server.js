'use strict'

import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { dbConnection } from "./db";

export default class ExpressServer {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3001;
    }
}