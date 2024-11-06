const { Curriculo } = require('../../models');

const criarCurriculo = async (req, res) => {
  const { nome, email, telefone } = req.body;
  try {
    const novoCurriculo = await Curriculo.create({ nome, email, telefone });
    res.status(201).json({ message: 'Currículo criado com sucesso!', data: novoCurriculo });
  } catch (error) {
    console.error('Erro ao criar currículo:', error);
    res.status(500).json({ message: 'Erro ao criar currículo' });
  }
};

const mostrarCurriculos = async (req, res) => {
  try {
    const curriculos = await Curriculo.findAll();
    res.status(200).json(curriculos);
  } catch (error) {
    console.error('Erro ao exibir currículos:', error);
    res.status(500).json({ message: 'Erro ao exibir currículos' });
  }
};

const editarCurriculo = async (req, res) => {
  const { id } = req.params;
  const { nome, email, telefone } = req.body;
  try {
    const [updated] = await Curriculo.update({ nome, email, telefone }, { where: { id } });
    if (updated) {
      const curriculoAtualizado = await Curriculo.findOne({ where: { id } });
      res.status(200).json({ message: 'Currículo atualizado com sucesso!', data: curriculoAtualizado });
    } else {
      res.status(404).json({ message: 'Currículo não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao editar currículo:', error);
    res.status(500).json({ message: 'Erro ao editar currículo' });
  }
};

const deletarCurriculo = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Curriculo.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: 'Currículo deletado com sucesso!' });
    } else {
      res.status(404).json({ message: 'Currículo não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao deletar currículo:', error);
    res.status(500).json({ message: 'Erro ao deletar currículo' });
  }
};

module.exports = { criarCurriculo, mostrarCurriculos, editarCurriculo, deletarCurriculo };

