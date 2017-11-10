import express from 'express';
import clientCtrl from '../controllers/client';
const router = express.Router();

router.post('/', clientCtrl.saveClient);

export default router;
