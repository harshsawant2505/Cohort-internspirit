// const express = require('express');
// const app = express();
// const PORT = 5000; 


// app.get('/', (req, res) => {
//   res.send('Hello Internspirit World!');
// });


// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json())

const users = []


app.get('/user', (req, res) => {

   return res.json(users);
});


app.post('/user', (req, res) => {
  const user = req.body;
  if(user.age < 18){
    return res.status(401).json({"message": "User must be at least 18 years old."});
  }
  users.push(user);
  return res.status(200).json({
      "message": "User added successfully!",
      user
  });
});



 app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
 });

