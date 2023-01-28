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
        title: "Login page",
    })
});

router.get("/register", (req, res) => {
    res.render("register", {
        title:"Register page",
    })
})

module.exports = router