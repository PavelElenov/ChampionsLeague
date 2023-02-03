const jwt = require("jsonwebtoken");

module.exports = () => (req, res, next) => {
    const secret = "gjiajf324nkfn2"

    if(req.cookies.token){
        const verificationToken = jwt.verify(req.cookies.token, secret);
        res.locals.user = verificationToken.username;
    }

    req.createToken = (data) => jwt.sign(data, secret);
    next();
}