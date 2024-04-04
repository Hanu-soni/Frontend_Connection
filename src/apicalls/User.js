import  axios from "axios";
import baseurl from ".";

export const LoginUser=async (user)=>{
     console.log("apicalls_User.js_Loginapi")
   try{
        const response=await axios.post(`${baseurl}/login`,user);
        console.log(response);
        return response.data;
   }
   catch(error)
   {
        return error;
   }

};






export const RegisterUser=async (user)=>{
    try{
         const response=await axios.post(`${baseurl}/register`,user);
         return response.data;
    }
    catch(error)
    {
         return error.response.data;
    }
 
 };



 export const AnnouncementUser=async (user)=>{
     console.log(user)
     try{
          const response=await axios.post(`${baseurl}/teacher/announcement`,user);
          return response.data;
     }
     catch(error)
     {
          return error.response.data;
     }
  
  };


export const getAnnouncementUser=async (id)=>{
     try{
          //console.log(id)
          const response = await axios.get(`${baseurl}/announcement/read`, {
               params: { id: id }
           });
          return response.data;
     }
     catch(error)
     {
          return error.response.data;
     }

}

