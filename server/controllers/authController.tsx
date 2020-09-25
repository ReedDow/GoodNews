require('dotenv').config();

const bcrypt = require('bcryptjs');

module.exports = {
    register: async(req: any, res:any) => {
        const {username, email, password} = req.body,
              db = req.app.get('db');
        const foundUser = await db.users.check_user({email});
        if(foundUser[0]){
            return res.status(400).send('Email already in use')
        }

        let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt);

        const newUser = await db.users.register_user({username, password: hash});
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);
    },

    checkuser: (req:any, res:any) => {
        if(req.session && req.session.user){
            res.sendStatus(200);
        
        }else res.sendStatus(404)
        },

    login: async(req:any, res:any) => {
        const {email, password} = req.body,
              db = req.app.get('db');

        const foundUser = await db.users.check_user({email});
        if(!foundUser[0]){
            return res.status(400).send('Email not found');
        }

        const authenticated = bcrypt.compareSync(password, foundUser[0].password);
        if(!authenticated){
            return res.status(401).send('Password is incorrect')
        }

        delete foundUser[0].password;
        req.session.user = foundUser[0];
        res.status(202).send(req.session.user);
    },

    logout: (req:any, res:any) => {
        req.session.destroy();
        res.sendStatus(200);
    }

}