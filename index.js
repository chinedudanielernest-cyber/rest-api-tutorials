import express from 'express'

const app = express();
const PORT = 8000
const students = [{
  id: '1',
  firstName:'Ernest',
  lastName: 'Daniel',
  gender: 'Male', 
},];

app.get('/', (req, res)=>{      
  res.status(500).send('Hello world')
});

app.get('/about', (req, res)=>{
  res.send('Welcome to our about page and this is for users like you!!')
});

app.get('/students', (req, res)=>{
  res.send(students)
});

app.post('/students', (req, res)=>{
  const student = {
    id: students.id,
    name: req.body.name,
    age: req.body.age,
    score: req.body.score
  }

  students.push(student);

  return res.send(student)
  
});

app.listen(PORT, ()=>{
  console.log('server is running at port '+PORT)
});




