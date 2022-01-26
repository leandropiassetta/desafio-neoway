module.exports = (sequelize, DataTypes) => {
  const candidates = sequelize.define('Candidates', {
    cpf:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: DataTypes.STRING,
    score: DataTypes.FLOAT,
    }, {
    timestamps: false,
    tableName: 'approved_candidates',
    });
    return candidates;
};