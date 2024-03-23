import  axios from "axios";


export const LoginUser=async (user)=>{
   try{
        const response=await axios.post('http://localhost:8080/login',user);
        return response;
   }
   catch(error)
   {
        return error.response.data;
   }

};






export const RegisterUser=async (user)=>{
    try{
         const response=await axios.post('http://localhost:8080/register',user);
         return response.data;
    }
    catch(error)
    {
         return error.response.data;
    }
 
 };