import express from 'express';
import clientCtrl from '../controllers/client';

const client = express.Router();
const clients = express.Router();

client.post('/', clientCtrl.saveClient);
clients.get('/', clientCtrl.getClients);

export default {
  client,
  clients,
};
