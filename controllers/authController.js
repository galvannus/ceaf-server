const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authenticateUser = async (req, res) => {
    //Check if errors exist
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({ errors: errors.array() })
    }

    //Extract email and password
    const { email, password } = req.body;

    try {
        //Check user registered
        let user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({msg: 'El usuario no existe'})
        }

        //Check password
        const rightPassword = await bcryptjs.compare(password, user.password);
        if(!rightPassword) {
            return res.status(400).json({msg: 'Contraseña incorrecto'});
        }

        //If all is correct
        //Create and sign JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        //Firmar el JWT
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: 3600
        }, (error, token) => {
            if(error) throw error;
            
            //Messsage of confirmation
            res.json({ token });

        });

    } catch (error) {
        console.log(error);
    }
}