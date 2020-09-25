require('dotenv').config();

const 
    express = require('express'),
    massive = require('massive'),
    session = require('express-session'),
    authCtrl = require('./controllers/authController'),
    abilityCtrl = require('./controllers/abilityController'),
    // emailCtrl = require('./controllers/emailController'),
    path = require('path'),
    
    {SERVER_PORT,CONNECTION_STRING,SESSION_SECRET} = process.env,
    port = SERVER_PORT,
    app = express();

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then((db: any) => {
    app.set('db', db);
    console.log('db connected');
});

//auth endpoints
app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login);
app.get('/api/logout', authCtrl.logout);
app.get('/api/checkuser', authCtrl.checkuser);

// //ability endpoints
app.post('/api/ability', abilityCtrl.addAbility);
app.get('/api/abilities/:id', abilityCtrl.getUserPosts);
app.delete('/api/ability/:id', abilityCtrl.deletePost);

// //user endpoints
// app.put('/api/user/:id', mainCtrl.updateUsername);

// //stock endpoints
// app.post('/api/symbol', mainCtrl.addSymboltoDB)
// app.get('/api/symbols/:id', mainCtrl.getSymbolfromDB)
// app.delete('/api/symbol/:id', mainCtrl.deleteSymbol)

// //contact endpoint - nodemailer
// app.post('/api/email', emailCtrl.email) 

// app.use(express.static(__dirname + '/../build'))

// app.get('*', (req, res)=> {
//     res.sendFile(path.join(__dirname, '../build/index.html'))


app.listen(port, () => console.log(`Running Stock Alert on port ${port}`));