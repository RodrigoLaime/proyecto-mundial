const dbConnection = require('../../config/dbConnection');

module.exports = app => {
  const connection = dbConnection();

  app.get('/', (req, res) => {
    connection.query('SELECT * FROM name_table', (err, result) => {
      console.log(result)
      res.render('news/news', {
        name_table: result
      });
    });
  });

  app.post('/news', (req, res) => {
    const { Equipo_1, Goles_E1, Equipo_2, Goles_E2 } = req.body;
    connection.query('INSERT INTO name_table SET?', {
      Equipo_1,
      Goles_E1,
      Equipo_2,
      Goles_E2
    }, (err, result) => {
      res.redirect('/');
    })
  })
}