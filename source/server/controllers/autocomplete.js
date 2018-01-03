import Client from '../models/client';

function getClients(req, res) {
  const query = {};

  if (req.params.cliente !== 'null') {
    query.cliente = { $regex: new RegExp(req.params.cliente, 'i') };
  }
  const skip = parseInt(req.params.skip, 10);
  const limit = parseInt(req.params.limit, 10);
  Client.find(query, { cliente: 1, _id: 1, contacto: 1, rut_cliente: 1 }, (err, clients) => {
    if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
    if (!clients) return res.status(404).send({ message: 'No existen personas' });
    return res.status(200).send({ clients });
  }).skip(skip).limit(limit);
}

module.exports = {
  getClients,
};
