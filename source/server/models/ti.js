import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const TiSchema = Schema({
  numero_ti: String,
  id_cliente: [{ type: Schema.Types.ObjectId, ref: 'Client' }],
  fecha_realizacion: Date,
  puestos: Number,
  proyecto: String,
  direccion_factura: String,
  direccion_entrega: String,
  director_proyecto: String,
});

module.exports = mongoose.model('Ti', TiSchema);
