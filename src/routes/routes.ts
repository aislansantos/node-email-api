import { Router } from "express";

import * as ApiController from "../controller/email.Controller";
import * as EmailController from "../controller/email.Controller";

const router = Router();

router.get("/ping", ApiController.ping);


router.post("/contato", EmailController.contato);

export default router;