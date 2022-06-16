const express = require('express');
const app = express();
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const bodyParser = require('body-parser');

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin', adminRoute);
app.use('/shop', shopRoute);

app.use('/', (req, res, next) => {
    console.log('In the middleware');
});

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not Found</h1>")
})
app.listen(5000);
