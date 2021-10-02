let express = require('express')

let app = express()

app.get("/", (req, res) => {
    res.send("<h1>Hello this is test, created by from prendi</h1>")
})

app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})

//http://localhost:8081/user?fnm=Prendi&lnm=Bobo
// ^ querry string = GET!
app.get("/user", (req, res) => {
    var first_name = req.query.fnm
    var last_name = req.query.lnm

    //Create the JS Object
    let response = {
        first_name,
        last_name
    }

    //Send JSON - Convert JS object to JSON
    //res.send(JSON.stringify(response))
    res.send(response)
})


//http://localhost:8089/name/Prendi/Bobo
// path parameter
app.get("/name/:fname/:lname", (req, res) => {
    let first_name = req.params.fname //req.params["fname"]
    let last_name = req.params.lname

    //Create JS Object
    let response = {
        status: 'Success',
        first_name,
        last_name
    }

    res.send(response)
})


let server = app.listen(8081, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("server running at http://%s:%s", host,port)
})