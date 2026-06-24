// import React from 'react'
// import {useParams,Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';


// function DetailCours() {
//   const {InstrID} = useParams();
//   const {instructors, cours,departments}=useSelector((state)=>state.counter)
//   const instructor=instructors.find((i)=>i.InstrID==InstrID);
//   // const cour=cours.find((c)=>c.CoursID===instructor.Cours[0]);
//     const listCours = cours.filter((c) => instructor.Cours.includes(c.CoursID));
//   return (
//     <div className='detail'>
//       <h2>Details</h2>
//       {listCours.map((cour,index)=>{
//   const department=departments.find((d)=>d.DepartmentID===cour.DepartmentID);

//         return(
//           <table key={index}>
//         <tr>
//           <th>Number</th>
//         </tr>
//         <tr>
//           <td>{cour.CoursID}</td>
//         </tr>

//         <tr>
//           <th>Title</th>
//         </tr>
//         <tr>
//           <td>{cour.title}</td>
//         </tr>

//         <tr>
//           <th>Credits</th>
//         </tr>
//         <tr>
//           <td>{cour.Credits}</td>
//         </tr>

//          <tr>
//           <th>Name</th>
//         </tr>
//         <tr>
//           <td>{department.Name}</td>
//         </tr>

// </table>
//         )
//       })

//       }
        
      
//     </div>
//   )
// }

// export default DetailCours


import React from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function DetailCours() {
  const { InstrID } = useParams();
  const navigate=useNavigate();
  const { instructors, cours, departments } = useSelector((state) => state.counter);
const id = parseInt(InstrID);
const instructor = instructors.find((i) => i.InstrID === id);

  const listCours = cours.filter((c) => instructor.Cours.includes(c.CoursID));

  return (
    <div className='detail'>
      <h2>Details</h2>

      {listCours.map((cour, index) => {
        const department = departments.find((d) => d.DepartmentID === cour.DepartmentID);

        return (
          <table key={index}>
            <tbody>
              <tr><th>Number</th></tr>
              <tr><td>{cour.CoursID}</td></tr>

              <tr><th>Title</th></tr>
              <tr><td>{cour.Title}</td></tr>

              <tr><th>Credits</th></tr>
              <tr><td>{cour.Credits}</td></tr>

              <tr><th>Department</th></tr>
              <tr><td>{department.Name}</td></tr>
               <tr>
              <td><Link to="edit">Edit</Link> |
      <Link to="instructors" onClick={(e)=>{e.preventDefault();navigate(-1)}}>Back to List</Link>
          </td>
            </tr>
            </tbody>
           
          </table>
          
        );
      
      })}
    </div>
  );
}

export default DetailCours;
