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