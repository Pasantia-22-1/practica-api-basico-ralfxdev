const getHome = (req, res)=>{
    res.json({message: "This is route home"});
}

const getProfile = (req, res)=>{
    res.json({message: "This is route profile"});
}

const getContact = (req, res)=>{
    res.json({message: "This is route contact"});
}

const getSignin = (req, res)=>{
    res.json({message: "This is route signin"});
}

const getSignup = (req, res)=>{
    res.json({message: "This is route signup"});
}

module.exports = {getHome, getProfile, getContact, getSignin, getSignup};