const pool = require('../db/database');

const getCurriculo = async () => {
  const res = await pool.query('SELECT * FROM curriculos');
  return res.rows;
};

const updateCurriculo = async (curriculo) => {
  const { id, nome, email, telefone, linkedin } = curriculo;
  await pool.query(
    'UPDATE curriculos SET nome = $1, email = $2, telefone = $3, linkedin = $4 WHERE id = $5',
    [nome, email, telefone, linkedin, id]
  );
};

module.exports = { getCurriculo, updateCurriculo };
