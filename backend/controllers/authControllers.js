const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const User=require('../models/user')
exports.register=async(req,res)=>{
    const{name,email,password}=req.body;
    try{
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:'email already exists'});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new User({name,email,password:hashedPassword});
        await newUser.save();
        const token=jwt.sign({userId:newUser._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRES_IN});
        res.status(201).json({message:'User registered successfully', token});
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Internal server error'});
    }
}
exports.login=async(req,res)=>{ //login function to authenticate user
    const{email,password}=req.body;//extract email and password from request body
    try{
        const user=await User.findOne({email});//find user by email in database
        if(!user){//if user not found
            return res.status(404).json({message:'User not found'});//send 404 response
        }
        const isMatch=await bcrypt.compare(password,user.password);//compare provided password with stored hashed password
        if(!isMatch){
            return res.status(401).json({message:'Invalid credentials'});//if passwords do not match, send 401 response
        }
        const token=jwt.sign({userId:user._id},'secretkey',{expiresIn:'1h'});
        res.status(200).json({message:'Login successful', token});
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Internal server error'});//send 500 response for server errors
    }
}
