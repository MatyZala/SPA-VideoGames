const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    ID:{
      type: DataTypes.UUID,                             //creo un uuid para no pisar los de la api  
      allowNull: false,                                //no puede estar vacio
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,                                       
    },
    released: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER
    },
    platforms:{
      type: DataTypes.STRING,
      allowNull: false,
    }


  });
};
