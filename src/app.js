const express = require("express");
const app = express();
const PORT = 8080;

//Middleware para trabajar con JSON
app.use(express.json());


//Routes



app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}`);
})