const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup',(request,response)=>{

    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        userName:request.body.userName,
        email:request.body.email,
        password:request.body.password,

    })

    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })

})   // User sent post request

router.get('/signin')
module.exports = router