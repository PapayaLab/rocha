import express from 'express';
import tiCtrl from '../controllers/ti';

const ti = express.Router();

ti.post('/', tiCtrl.saveTi);

export default {
  ti,
};
