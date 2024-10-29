import express from 'express';
import {  getAllOrders } from '../controllers/orderStatus.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get('/',protectRoute ,getAllOrders);




export default router;