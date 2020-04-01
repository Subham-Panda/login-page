const express = require('express')
const app = express()

const users = [
    {
        username: 'user1',
        email: 'user1@vitstudent.ac.in',
        password: '1'
    },
    {
        username: 'user2',
        email: 'user2@vitstudent.ac.in',
        password: '12'
    },
    {
        username: 'user3',
        email: 'user3@vitstudent.ac.in',
        password: '123'
    },
    {
        username: 'user4',
        email: 'user4@vitstudent.ac.in',
        password: '1234'
    },
    {
        username: 'user5',
        email: 'user5@vitstudent.ac.in',
        password: '12345'
    }
]

app.set('view-engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.render('index.ejs', {msg: ''})
})

app.post('/', (req, res) => {
    let user = null;

    for(let i=0;i<users.length;i++){
        if(users[i].username === req.body.username){
            user = users[i]
            break
        }
    }

    if(user == null) {
        return res.render('index.ejs', {msg: 'USERNAME NOT FOUND'})
    }

    if(user.email == req.body.email && user.password == req.body.password){
        return res.render('index.ejs', {msg: 'USER EXISTS'})
    } else {
        return res.render('index.ejs', {msg: 'PASSWORD DOES NOT MATCH'})
    }
})
 

app.listen(3000)