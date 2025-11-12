import express from 'express'
const app = express();
const PORT = 8000
const students = [{
  id: 1,
  firstName:'Ernest',
  lastName: 'Daniel',
  gender: 'Male',
  score: 100,
  age: 17,
  proffesion: 'Software developer' 
},{
  id: 2,
  first_name: "Erastus",
  last_name: "Kelshaw",
  gender: "Male",
  score: 10,
  age: 25,
  proffesion: 'Business administrator ' 
}, {
  id: 3,
  first_name: "Fleur",
  last_name: "Wigan",
  gender: "Female",
  score: 50,
  age: 40,
  proffesion: 'Marketer' 
}, {
  id: 4,
  first_name: "Alastair",
  last_name: "Spino",
  gender: "Male",
  score: 85,
  age: 32,
  proffesion: 'Teacher' 
}, {
  id: 5,
  first_name: "Ezechiel",
  last_name: "Eade",
  gender: "Male",
  score: 66,
  age: 30,
  proffesion: 'Food seller' 
}, {
  id: 6,
  first_name: "Darsie",
  last_name: "Lude",
  gender: "Female",
  score: 46,
  age: 31,
  proffesion: 'Doctor' 
}, {
  id: 7,
  first_name: "Delaney",
  last_name: "Twigge",
  gender: "Male",
  score: 19,
  age: 49,
  proffesion: 'Mechanic' 
}, {
  id: 8,
  first_name: "Ruy",
  last_name: "Pratt",
  gender: "Female",
  score: 23,
  age: 47,
  proffesion: 'Lawyer' 
}, {
  id: 9,
  first_name: "Shana",
  last_name: "Forrington",
  gender: "Female",
  score: 57,
  age: 81,
  proffesion: 'Famer' 
}, {
  id: 10,
  first_name: "Calley",
  last_name: "Dudley",
  gender: "Female",
  score: 71,
  age: 60,
  proffesion: 'Driver' 
}];


app.get('/', (req, res)=>{      
  res.status(500).send(students)
});

app.get('/about', (req, res)=>{
  res.send('Welcome to our about page and it exist')
});

app.get('/scores', (req, res)=>{
  const studentsScoreAbove40 = students.filter(student => student.score < 30)
  res.send(studentsScoreAbove40)
})

app.get('/age', (req, res)=>{
  const studentsAgeAbove25 = students.filter(student => student.age < 50)
  res.send(studentsAgeAbove25)
})

app.get('/students', (req, res)=>{
  res.send(students)
});

app.get('/students:id',(req,res)=>{
  const id = req.params.id;
  if(!id) {
    res.status(400).send({message:"ID is required"});
    return;
  }

  const student = students.find((student)=>student.id==id);
  if(!student){
    res.status(404).send({message:`Student with the id: ${id} is not found`});
    return;
  }

  return res.send(student);
})


app.get('/female-students', (req, res)=>{
  const femaleStudents = students.filter(student => student.gender === 'Female');
  return res.send(femaleStudents)
});


app.post('/create',(req,res)=>{
  const data=req?.body

  console.log(data)
})


app.delete('/student/:id', (req, res)=>{
  console.log(req.params.id)
  const student = students.filter((s)=>s.id==req.params.id)
  return res.send(student)
  
});

app.listen(PORT, ()=>{
  console.log('server is running at port '+PORT)
});