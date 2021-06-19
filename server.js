const express = require('express');
const cors = require('cors');

const app = express();
const port = 40000; //A like this port, ty teacher.

app.use(express.json({ limit: '100mb' }));
app.use(cors());


app.post('/api/postName', function (req, res) {
    let body = req.body; //Body = cadaver :D
    let fullName = `Greetings ${body.firstname} ${body.lastname}!`
    //JSON RETURNED
    res.send({
        "status": "OK",
        "message": fullName
    }
    );
})

app.get('/api/getGreetings', function (req, res) {
    res.send({
        "status": "OK",
        "message": 'SALUDOS HUMANO'
    })
})


app.listen(port, function () {
    console.log(`Working in ${port} `);
})