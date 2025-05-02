import express from 'express';
import {ping} from "../../controller/pingController.js";

const router = express.Router();


router.use('/ping', ping);

export default router;