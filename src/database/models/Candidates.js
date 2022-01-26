module.exports = (sequelize, DataTypes) => {
  const candidates = sequelize.define('Candidates', {
    cpf: DataTypes.STRING,
    name: DataTypes.STRING,
    score: DataTypes.FLOAT,
    }, {
    timestamps: false,
    tableName: 'approved_candidates',
    });
    return candidates;
};