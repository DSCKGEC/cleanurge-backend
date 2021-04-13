/* ------------ Imports ----------- */

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');

/* ------------ Configs ----------- */

// initialize module to access .env variables
require('dotenv').config();

// access port from env
const port = Number(process.env.PORT);

// db connection variables
const uri = String(process.env.MONGO_URI);
const connectOptions = {
    useNewUrlParser: true, // used for parsing the uri
    useCreateIndex: true, // use mongoose's default index
    useUnifiedTopology: true, // use the newer topology engine
    useFindAndModify: false, // allow findOneAndUpdate()
};

/* ------------ MongoDB Setup ----------- */

// initiate connection to mongodb
mongoose
    .connect(uri, connectOptions)
    .then()
    .catch((err) => console.log('Error:' + err));

// log message on connection success
mongoose.connection.once('open', () =>
    console.log('Connected to DB successfully...')
);

/* ------------ Express Setup ----------- */

// initialize the express application
const app = express();

// add swagger config.
const swaggerSpec = require('./config/swagger.config');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// allow cors, json, string and array parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// include routes from /routes
const beaconRouter = require('./routes/beacon.route');
const reportRouter = require('./routes/report.route');
const userRouter = require('./routes/user.route');

app.use('/api/beacon', beaconRouter);
app.use('/api/report', reportRouter);
app.use('/api/user', userRouter);

// start the cleanurge-backend server
app.listen(port, () =>
    console.log(`Cleanurge server running at http://localhost:${port}`)
);
