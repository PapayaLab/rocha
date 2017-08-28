import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  res.json({ server: 'Todo bien desde el server' });
});

export default router;
