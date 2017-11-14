import express from 'express';
import clientCtrl from '../controllers/client';

const client = express.Router();
const clients = express.Router();

client.post('/', clientCtrl.saveClient);
clients.get('/:cliente/:director/:empresa/:skip/:limit', clientCtrl.getClients);

export default {
  client,
  clients,
};
