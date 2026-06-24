import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ListCourses() {
     const { instructors, cours, departments, offices } = useSelector((state) => state.counter);

  return (
       <div className='department'>
         <h2>Courses</h2>
         <table className='table'>
           <thead className='table-secondary'>
               <tr>
                   <th></th>
                   <th>ID</th>
                   <th>Title</th>
                   <th>Credits</th>
                   <th>Department</th>
               </tr>
           </thead>
           <tbody>
               {cours.map((c,index)=>{
                 const department = departments.find(
                  (d) => d.DepartmentID === c.DepartmentID
                );
                   return(
                       <tr key={index}>
                           <td></td>
                           <td>{c.CoursID}</td>
                           <td>{c.Title}</td>
                           <td>{c.Credits}</td>
                           <td>{department.name}</td>
   
                       </tr>
                   )
               })}
           </tbody>
   
         </table>
       </div>
  )
}

export default ListCourses
