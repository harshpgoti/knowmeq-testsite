const express =require('express'),
bodyParser = require('body-parser')

const db = require('./src/config/db')
db.sync();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

db.authenticate()
.then(()=>console.log("Connection has been established successfully."))
.catch((error)=>console.log('Unable to connect to the database: ', error));

app.get('/', (request, response) => {
    response.json({ info: 'Testsite APIs' })
})
app.use(require('./src/routes/userRoutes'));
app.use(require('./src/routes/testRoutes'));

app.listen(5000);