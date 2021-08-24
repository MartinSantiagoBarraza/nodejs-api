const DB = require("../database/conexion.js");

/*const getArticulos = (req, res) => {
  const SQLsentence = "SELECT * FROM articulos";
  DB.query(SQLsentence, (error, resultado) => {
    if (error) {
      console.log(error);
    } else {
      res.json({ resultado });
    }
  });
};

const postArticulos = (req, res) => {
  const { nombre, precio } = req.body;
  const SQLsentence = "INSERT INTO articulos SET ?";
  DB.query(SQLsentence, [{ nombre, precio }], (error, resultado) => {
    if (error) {
      console.log(error);
    } else {
      res.json({
        resultado,
      });
    }
  });
};

const putArticulo = (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  const SQLsentence =
    "UPDATE articulos SET nombre = ?, precio = ? WHERE id = ?";
  DB.query(SQLsentence, [nombre, precio, id], (error, resultado) => {
    if (error) {
      console.log(error);
    } else {
      res.json({
        mensaje: "Se modifico",
        resultado,
      });
    }
  });
};

const deleteArticulo = (req, res) => {
  const { id } = req.params;

  const SQLsentence1 = "SELECT * FROM articulos WHERE id = ?";
  DB.query(SQLsentence1, { id }, (error, respuesta) => {
    if (error) {
      console.log(error);
    } else {
      if (respuesta.length < 1) {
        res.status(404).send("No existe");
      }
      console.log(respuesta);
      const SQLsentence = "DELETE from articulos WHERE id= ?";
      DB.query(SQLsentence, [id], (error, resultado) => {
        if (error) {
          console.log(error);
        } else {
          res.json({
            mensaje: "Se modifico",
            resultado,
          });
        }
      });
    }
  });
};

module.exports = {
  getArticulos,
  postArticulos,
  putArticulo,
  deleteArticulo,
};*/

const getAccounts = (req, res) => {
  const { id } = req.params;
  /*const id = req.params.id*/
  DB.query(
    "SELECT users.name, accounts.cbu, accounts.money_in_account FROM accounts, users WHERE accounts.id_username = users.id_user",
    [id],
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        let object = {};
        result.forEach((element) => {
          if (object[element.name]) {
            object[element.name].push({
              cbu: element.cbu,
              money: element.money_in_account,
            });
          } else {
            object[element.name] = [
              { cbu: element.cbu, money: element.money_in_account },
            ];
          }
        });
        res.json(object);
      }
    }
  );
};

module.exports = {
  getAccounts,
};
