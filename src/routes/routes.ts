import { Router } from "express";

import * as ApiController from "../controller/email.Controller";

const router = Router();

router.get("/ping", ApiController.ping);




export default router;