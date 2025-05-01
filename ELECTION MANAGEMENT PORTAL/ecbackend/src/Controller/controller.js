import User from "../Model/user.model.js";


export const signupUser = (req,res)=>{
    const {name,email,phone,id}=req.body
    const newUser=User.create({name,email,phone,id});
    res.statusCode(200).json({message:`welcome ${newUser.name}`})
}
export const loginUser= (req,res)=>{
    console.log("login done")
}
export const logoutUser = (req,res)=>{
    console.log("logout done")
}