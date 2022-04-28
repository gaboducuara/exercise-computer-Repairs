const express = require ('express');
const app = express ();

// -- routers

const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');


    // database
const { cc } = require('./utils/database');

app.use (express.json());

//endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

cc.authenticate()
    .then(() => console.log('Databse autenticated'))
    .catch(err => console.log(err));

cc.sync()
    .then(() => console.log('Databse sync'))
    .catch(err => console.log(err));

const PORT = 4500;
app.listen(PORT, () => {
    console.log('express runnning');
});
