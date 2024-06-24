import { Router } from "express";
import * as CC from "./Currency_Exchange.js"
import { asyncHandler } from "../../utils/globalErrorHandling.js"

const router = Router()

router.post("/rates",asyncHandler((CC.Exchange)))

export default router