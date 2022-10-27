const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PoRT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/Courses.json');


app.get('/', (req, res) => {
    res.send('learning platform');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;

    const category_course = courses.filter(n => n.category_id === id);
    res.send(category_course);

})

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/course/:id', (req, res) => {
    // console.log(req.params);
    const id = req.params.id;
    const selectedcourses = courses.find(n => n._id === id);
    res.send(selectedcourses);
});
