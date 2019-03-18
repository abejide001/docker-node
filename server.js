const express = require('express');
const app = express();

const port = 3000 || process.env.PORT
app.listen(3000, () => {
    console.log(`App listening on ${port}`)
})