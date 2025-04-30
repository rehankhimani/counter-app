// import Counter from "./counter";
import StudentList from "./StudentList";
// import Counter from "./StudentList"
import Counter from "./countertask";
// const students = [
//   {
//   name : "rehan",
//   rollNum : 226720,
//   feepaid : true
// },
// {
//   name : "ali",
//   rollNum : 226720,
//   feepaid : true
// },
// {
//   name : "ayan",
//   rollNum : 226720,
//   feepaid : true
// },
// {
//   name : "mahad",
//   rollNum : 226720,
//   feepaid : true
// }
// ];

export default function Home() {
  return (
    <>
    
     <Counter 
            message={"Counter App"}
            count={10}
          />
          </>
    // {/* {students.map(({name,rollNum,feepaid}, i) =>(
    // <StudentList name={name} rollNum={rollNum}  feepaid={feepaid} ></StudentList> 

    // ))}
    //  </> */}






  )
}