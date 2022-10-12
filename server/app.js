const express =require('express'),
bodyParser = require('body-parser')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(require('./src/routes/userRoutes'));
app.use(require('./src/routes/testRoutes'));

app.listen(5000);