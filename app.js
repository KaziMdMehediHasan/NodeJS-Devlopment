const express = require('express');
const app = express();
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const bodyParser = require('body-parser');
const path = require('path');
// path of the module where the file is running
const rootDir = require('./util/path');


// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRoute);
app.use('/shop', shopRoute);

app.use('/', (req, res, next) => {
    console.log('In the middleware');
    next();
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'notFound.html'));
})

app.listen(5000);
