import express from 'express'

const app = express();
const PORT = 8000
const students = [{
  id: 1,
  firstName:'Ernest',
  lastName: 'Daniel',
  gender: 'Male', 
},{
  id: 2,
  first_name: "Erastus",
  last_name: "Kelshaw",
  gender: "Male"
}, {
  id: 3,
  first_name: "Fleur",
  last_name: "Wigan",
  gender: "Female"
}, {
  id: 4,
  first_name: "Alastair",
  last_name: "Spino",
  gender: "Male"
}, {
  id: 5,
  first_name: "Ezechiel",
  last_name: "Eade",
  gender: "Male"
}, {
  id: 6,
  first_name: "Darsie",
  last_name: "Lude",
  gender: "Female"
}, {
  id: 7,
  first_name: "Delaney",
  last_name: "Twigge",
  gender: "Male"
}, {
  id: 8,
  first_name: "Ruy",
  last_name: "Pratt",
  gender: "Female"
}, {
  id: 9,
  first_name: "Shana",
  last_name: "Forrington",
  gender: "Female"
}, {
  id: 10,
  first_name: "Calley",
  last_name: "Dudley",
  gender: "Female"
}];

app.get('/', (req, res)=>{      
  res.status(500).send('Hello world')
});

app.get('/about', (req, res)=>{
  res.send('Welcome to our about page and this is for users like you!!')
});

app.get('/students', (req, res)=>{
  res.send(students)
});

app.get('/students:id',(req,res)=>{
  const id = req.params.id;
  if(!id) {
    res.status(400).send({message:"ID is required"});
    return;
  }

  const student = students.find((j)=>j.id==id);
  if(!student){
    res.status(404).send({message:`Student with the id: ${id} is not found`});
    return;
  }

  return res.send(student);
})

app.get('/femalestudents', (req, res)=>{
  const femaleStudents = students.filter(student => student.gender === 'Female');
  return res.send(femaleStudents)
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




