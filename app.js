const express = require('express');
const app = express();
const usersRouter = require('./routes/usersRouter');

app.set('view engine', 'ejs')
app.set(express.urlencoded({extended: true}));
app.use(usersRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server listening at ${PORT}`));