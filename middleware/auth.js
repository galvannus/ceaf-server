const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    
    //Read header token
    const token = req.header('x-auth-token');

    //Check if token exist
    if(!token) {
        return res.status(401).json({ msg: 'No hay token, permiso no válido'});
    }

    //Validate token
    try {
        
        const encryption = jwt.verify(token, process.env.SECRET);
        req.user = encryption.user;
        next();
        
    } catch (error) {
        res.status(401).json({msg: 'Token no valido'});
    }

}