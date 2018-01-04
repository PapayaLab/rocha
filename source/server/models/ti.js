import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const TiSchema = Schema({
  numero_ti: { type: String, unique: true },
  id_client: [{ type: Schema.Types.ObjectId, ref: 'Client' }],
  fecha_realizacion: Date,
  puestos: Number,
  proyecto: String,
  direccion_factura: String,
  direccion_entrega: String,
  director_proyecto: String,
  fecha_reunion: Date,
});

module.exports = mongoose.model('Ti', TiSchema);
