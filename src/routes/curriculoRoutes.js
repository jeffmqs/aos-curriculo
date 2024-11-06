const express = require('express');
const router = express.Router();
const { criarCurriculo, mostrarCurriculos, editarCurriculo, deletarCurriculo } = require('../controllers/curriculoController');

router.post('/curriculo', criarCurriculo); // POST
router.get('/curriculo', mostrarCurriculos); // GET all
router.put('/curriculo', editarCurriculo); // PUT
router.delete('/curriculo/:id', deletarCurriculo); // DELETE by ID

module.exports = router;
