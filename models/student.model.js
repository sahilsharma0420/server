module.exports = (sequelize, Sequelize) => {
    const Student  = sequelize.define("student", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      number: {
        type: Sequelize.INTEGER,
      },
     batch: {
        type: Sequelize.STRING,
      },
    });
    return Student;
  };
  