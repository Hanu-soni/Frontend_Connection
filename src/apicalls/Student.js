import  axios from "axios";
import baseurl from ".";

export const AddNewStudentRouter=async (studentData)=>{
    console.log("AddNewStudentRouter")
    console.log(studentData);
  try{
       const response=await axios.post(`${baseurl}/student/add`,studentData);
       console.log(response);
       return response.data;
  }
  catch(error)
  {
       return error.message;
  }

};


export const DeleteStudentRouter=async (data)=>{
     
   try{
          console.log(data);
        const response=await axios.post(`${baseurl}/student/delete`,data);
        console.log(response);
        return response.data;
   }
   catch(error)
   {
        return error.message;
   }
 
 };



