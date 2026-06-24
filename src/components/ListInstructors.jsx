// import React,{useState}from 'react'
// import { useSelector} from 'react-redux'
// import { Link} from 'react-router-dom'

// function ListInstructors() {
//   const { instructors, cours, departments,offices } = useSelector((state) => state.counter);
//   const [cour, setCour] = useState([]);

// const Select=(e)=>{
//   e.preventDefault();
// let instructor = instructors.find((i) => i.InstrID === id);
//   let Cour = cours.filter((c) => instructor.Cours.includes(c.CoursID));
// setCour(cour);
// }
//     return (
//     <div className='instructors'>
//       <h2>Instructors</h2>
//       <Link to="add">Create New</Link>
//       <table className='table '>
//         <thead className='table-secondary'>
//           <tr>
//             <th></th>
//             <th>Last name</th>
//             <th>First name</th>
//             <th>Date</th>
//             <th>Office</th>
//           </tr>
//         </thead>
//         <tbody>
//           {instructors.map((i,index)=>{
//             const office = offices.find((o) => o.InstrID === i.InstrID);
//           return (

//             <tr key={index}>
//                         <td>
//                  <Link onClick={Select}>Select</Link>|
//                 <Link  to={`/detail/${i.InstrID}`}>Details</Link>|
//                 <Link to="edit">Edit</Link>|
//                 <Link to="delete">Delete</Link>

//               </td>
//               <td>{i.LastName}</td>
//               <td>{i.FirstMidName}</td>
//               <td>{i.HireDate}</td>
//               <td >{office ? office.Location : ''}</td>

//             </tr>
//           )
//           })
//           }
//         </tbody>
//       </table>
//       {cour.length >0 &&
//       <>
//       <h3>Couses Taught Selected Instructure</h3>
//       <table>
//         <thead>
//           <tr>
//           <th></th>
//           <th>ID</th>
//           <th>Title</th>
//           <th>Department</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cour.map((cour,index)=>{
//         const department = departments.find((d) => d.DepartmentID === cour.DepartmentID);
//             <tr key={index}>
//               <td>
//                 <Link  to={`/detail/${i.InstrID}`}>Details</Link>
//               </td>
//               <td>{cour.CoursID}</td>
//               <td>{cour.title}</td>
//               <td>{department.name}</td>
//             </tr>
//           })

//           }
//         </tbody>

//       </table>
      
      
      
//       </>

//       }
//     </div>
//   )
// }

// export default ListInstructors


import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ListInstructors() {
  const { instructors, cours, departments, offices } = useSelector((state) => state.counter);
  const [cour, setCour] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const Select = (instructor) => {
    const Cour = cours.filter((c) => instructor.Cours.includes(c.CoursID));
    setCour(Cour);
    setSelectedInstructor(instructor);
  };

  return (
    <div className='instructors'>
      <h2>Instructors</h2>
      <Link to="add">Create New</Link>

      <table className='table'>
        <thead className='table-secondary'>
          <tr>
            <th></th>
            <th>Last name</th>
            <th>First name</th>
            <th>Date</th>
            <th>Office</th>
          </tr>
        </thead>

        <tbody>
          {instructors.map((i, index) => {
            const office = offices.find((o) => o.InstrID === i.InstrID);

            return (
              <tr key={index}>
                <td>
                  <Link onClick={() => Select(i)}>Select</Link> |
                  <Link to={`/detail/${i.InstrID}`}>Details</Link> |
                  <Link to="edit">Edit</Link> |
                  <Link to="delete">Delete</Link>
                </td>

                <td>{i.LastName}</td>
                <td>{i.FirstMidName}</td>
                <td>{i.HireDate}</td>
                <td>{office ? office.Location : ''}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {cour.length > 0 && (
        <>
          <h4>Courses Taught by Selected Instructor</h4>

          <table className='table'>
            <thead className='table-secondary'>
              <tr>
                <th></th>
                <th>ID</th>
                <th>Title</th>
                <th>Department</th>
              </tr>
            </thead>

            <tbody>
              {cour.map((c, index) => {
                const department = departments.find(
                  (d) => d.DepartmentID === c.DepartmentID
                );

                return (
                  <tr key={index}>
                    <td>
                      <Link to={`/detail/${selectedInstructor.InstrID}`}>Details</Link>
                    </td>
                    <td>{c.CoursID}</td>
                    <td>{c.Title}</td>
                    <td>{department?.Name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default ListInstructors;

