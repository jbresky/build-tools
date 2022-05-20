const express = require('express');
const { appendFileSync } = require('fs');
const app = express();
const path = require('path');

const index = require('./routes/index')

const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

app.use('/', index )

app.listen(3070, () => {
    console.log('runnin on 3070');
})

app.set('view engine', 'ejs');
app.set('views', 'src/views')