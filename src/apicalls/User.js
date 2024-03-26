import  axios from "axios";


export const LoginUser=async (user)=>{
     console.log("apicalls_User.js_Loginapi")
   try{
        const response=await axios.post('https://tutor-octopus-1.onrender.com/login',user);
        return response.data;
   }
   catch(error)
   {
        return error.response.data;
   }

};






export const RegisterUser=async (user)=>{
    try{
         const response=await axios.post('https://tutor-octopus-1.onrender.com/register',user);
         return response.data;
    }
    catch(error)
    {
         return error.response.data;
    }
 
 };