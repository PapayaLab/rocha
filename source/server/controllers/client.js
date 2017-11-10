import Client from '../models/client';

function saveClient(req, res) {
  const client = new Client();
  client.rut_cliente = req.body.rut_cliente;
  client.cliente = req.body.cliente;
  client.razon_social = req.body.razon_social;
  client.giro = req.body.giro;
  client.rubro = req.body.rubro;
  client.numero_empleado = req.body.numero_empleado;
  client.tipo_cliente = req.body.tipo_cliente;
  client.mercado = req.body.mercado;
  client.empresa = req.body.empresa;
  client.sucursal = req.body.sucursal;
  client.director_proyecto = req.body.director_proyecto;
  client.cliente_activo = req.body.cliente_activo;

  client.save().then((clientStored) => {
    res.status(200).send({ client: clientStored });
  }, (err) => {
    res.status(500).send({ message: `Error al salvar en la base de datos: ${err} ` });
  });
}

module.exports = {
  saveClient,
};
