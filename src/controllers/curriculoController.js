const { Curriculo } = require('../../models');

// CREATE (POST)
const criarCurriculo = async (req, res) => {
  const { nome, email, telefone } = req.body;
  try {
    const curriculo = await Curriculo.create({ nome, email, telefone });
    res.status(201).json({ message: 'Currículo criado com sucesso!', data: curriculo });
  } catch (error) {
    console.error('Erro ao criar currículo:', error);
    res.status(500).json({ message: 'Erro ao criar currículo' });
  }
};

// READ (GET)
const mostrarCurriculos = async (req, res) => {
  try {
    const curriculos = await Curriculo.findAll();
    res.status(200).json(curriculos);
  } catch (error) {
    console.error('Erro ao exibir currículos:', error);
    res.status(500).json({ message: 'Erro ao exibir currículos' });
  }
};

// UPDATE (PUT)
const editarCurriculo = async (req, res) => {
  const { id, nome, email, telefone } = req.body;
  try {
    const curriculo = await Curriculo.findByPk(id);
    if (!curriculo) return res.status(404).json({ message: 'Currículo não encontrado' });

    await curriculo.update({ nome, email, telefone });
    res.status(200).json({ message: 'Currículo editado com sucesso!', data: curriculo });
  } catch (error) {
    console.error('Erro ao editar currículo:', error);
    res.status(500).json({ message: 'Erro ao editar currículo' });
  }
};

// DELETE
const deletarCurriculo = async (req, res) => {
  const { id } = req.params;
  try {
    const curriculo = await Curriculo.findByPk(id);
    if (!curriculo) return res.status(404).json({ message: 'Currículo não encontrado' });

    await curriculo.destroy();
    res.status(200).json({ message: 'Currículo deletado com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar currículo:', error);
    res.status(500).json({ message: 'Erro ao deletar currículo' });
  }
};

module.exports = { criarCurriculo, mostrarCurriculos, editarCurriculo, deletarCurriculo };

