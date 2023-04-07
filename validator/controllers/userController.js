const userRegister = (req,res)=>{
    try {
        const {name, email, password, dob} = req.body;
        const newUser = {
            name, email, password, dob
        }
        return res.status(202).json({
            message:"user created",
            data:newUser
        });
    } catch (error) {
        return res.status(500).json({
            message:error.message,
        });
    }
}

const userLogin = (req,res)=>{
    try {
        const { email, password} = req.body;
        if (email ==="shahidul@gmail.com" && password === "12345678") {
            return res.status(202).json({
                message:"user was logged In",
            });
        }else{
            return res.status(400).json({
                message:"password and email not match",
            });
        }
        
    } catch (error) {
        return res.status(500).json({
            message:error.message,
        });
    }
}

module.exports = {userRegister,userLogin}