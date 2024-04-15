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




 export const updateStudentAttendenceRouter=async(data)=>{
     //console.log(id);
     try{
          const response=await axios.put(`${baseurl}/student/Attendenceupdate`,
          data
          );
          console.log(response)
          return response.data;

     }catch(err){
          return err.response.data
     }
}

export const getAttendenceRecordRouter=async(id)=>{
     //console.log(id);
     try{
          const response=await axios.get(`${baseurl}/student/read/AttendenceRecord`,{
               params:{student_id:id}
          });
          //console.log(response)
          return response.data;

     }catch(err){
          return err.response.data
     }
}






