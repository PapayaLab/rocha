import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const ClientSchema = Schema({
  rut_cliente: String,
  cliente: String,
  razon_social: String,
  giro: String,
  rubro: String,
  numero_empleado: Number,
  tipo_cliente: String,
  mercado: String,
  empresa: String,
  sucursal: String,
  director_proyecto: String,
  cliente_activo: String,
});

module.exports = mongoose.model('Client', ClientSchema);
