import express from 'express';
import autocompleteCtrl from '../controllers/autocomplete';

const autocompleteClient = express.Router();

autocompleteClient.get('/:cliente/:skip/:limit', autocompleteCtrl.getClients);

export default {
  autocompleteClient,
};
