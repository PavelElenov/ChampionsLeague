const { register, login } = require('../services/userService');

const router = require('express').Router();

//Create router. When method is get on url-"http://localhost:3000/".
//Req-request; Res-response. And response will render home.hbs.
router.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page'
    })
});

router.get('/login', (req, res) => {
    res.render("login", {
        title: "Login Page",
    })
});

router.post('/login', async (req, res) => {
    try{
        const user = await login(req.body.email, req.body.password);
        
        const token = req.createToken({username:user.username});
        res.cookie("token", token);
        res.redirect('/');
    }catch(err){
        const error = err.message;
        res.render("login", {
            title: "Login Page",
            error,
        })
    }
});

router.get("/register", (req, res) => {
    res.render("register", {
        title:"Register Page",
    })
});

router.post('/register', async (req, res) => {
    try{
        const user = await register(req.body.username, req.body.email, req.body.password, req.body.repeatPassword);
        
        const token = req.createToken({username:user.username});
        res.cookie("token", token);
        res.redirect('/');
    }catch(err){
        const error = err.message;
        res.render("register", {
            title:"Register Page",
            error,
        })
    }
});

router.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
})

module.exports = router