const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('../models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const user = models.User;
const tracking = models.Tracking;
const product = models.Product;

app.post('/login', async (request, response) => {

  const login = await user.findOne({
    where: { name: request.body.name, password: request.body.password }
  });
  if (login === null) {
    response.send(JSON.stringify('error'));
  } else {
    response.send(login);
  }
});

/* app.post('/create', async (request, response) => {
  const create = await user.create({
    name: 'Thiago',
    password: 'abc',
    createdAt: new Date(),
    updatedAt: new Date()
  });
  response.send('User created with success!');
});

app.get('/read', async (request, response) => {
  const read = await user.findAll({
    raw: true
  });
  console.log(read);
});

app.put('/update', async (request, response) => {
  const update = await user.findByPk(1, {
    include: [{ all: true }]
  }).then(response => {
    response.Tracking[0].local = "Brasília";
    response.Tracking[0].save();

  })
});

app.delete('/delete', async (request, response) => {
  user.destroy({
    where: { id: 1 }
  });
}); */

const port = process.env.PORT || 3000;
app.listen(port, (request, response) => {
  console.log('Serve Started');
});