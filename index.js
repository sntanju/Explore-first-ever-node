const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('WOW, I am excited to Learning Node Express With Nodemon autometic restart.');
});


const users = [
    
    { id: 0, name: "Shabana", email: "Shabana@gmail.com", phone: "01788888888" },

    { id: 1, name: "Shabnor", email: "Shabnor@gmail.com", phone: "01788888888" },

    { id: 2, name: "Shabonti", email: "Shabonti@gmail.com", phone: "01788888888" },

    { id: 3, name: "Shuhorita", email: "Shuhorita@gmail.com", phone: "01788888888" },

    { id: 4, name: "Soniya", email: "Soniya@gmail.com", phone: "01788888888" },

    { id: 5, name: "Shusmita", email: "Shusmita@gmail.com", phone: "01788888888" },

];

app.get('/users', (req, res) => {
    const search = req.query.search
    //console.log(req.query.search);
    //use query parameter
    if(search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
    
});

//app.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body);
    //res.send(JSON.stringify(newUser));
    res.json(newUser);
})
 
//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    //console.log(req.params.id);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple', 'grapes', ])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yammi Yammi tok marka fazli');
})

app.listen(port, () => {
    console.log("Listening to port", port);
});