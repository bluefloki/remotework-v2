'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    employerName: DataTypes.STRING,
    logoPath: DataTypes.STRING,
    title: DataTypes.STRING,
    typeOfWork: DataTypes.STRING,
    category: DataTypes.STRING,
    location: DataTypes.STRING,
    applyAt: DataTypes.STRING,
    description: DataTypes.STRING,
    tags: DataTypes.STRING
  }, {});
  Job.associate = function(models) {
    // associations can be defined here
  };
  return Job;
};