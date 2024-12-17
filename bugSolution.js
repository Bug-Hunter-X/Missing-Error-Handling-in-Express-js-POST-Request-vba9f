const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user) {
    return res.status(400).send({ error: 'User object is missing' });
  }
  if (!user.name || !user.email) {
    return res.status(400).send({ error: 'Name and email are required' });
  }
  console.log(user); 
  res.status(201).send('User created');
});
app.listen(3000, () => console.log('Server listening on port 3000'));