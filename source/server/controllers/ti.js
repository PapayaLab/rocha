import Ti from '../models/ti';

function saveTi(req, res) {
  const ti = new Ti();
  ti.numero_ti = req.body.numero_ti;
  ti.id_client = req.body.id_client;
  ti.fecha_realizacion = req.body.fecha_realizacion;
  ti.puestos = req.body.puestos;
  ti.proyecto = req.body.proyecto;
  ti.direccion_factura = req.body.direccion_factura;
  ti.direccion_entrega = req.body.direccion_entrega;
  ti.director_proyecto = req.body.director_proyecto;
  ti.fecha_reunion = req.body.fecha_reunion;

  ti.save().then((tiStored) => {
    res.status(200).send({ ti: tiStored });
  }, (err) => {
    res.status(500).send({ message: `Error al salvar en la base de datos: ${err} ` });
  });
}


module.exports = {
  saveTi,
};
