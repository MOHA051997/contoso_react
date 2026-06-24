
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ListDepartments() {
     const { instructors, cours, departments, offices } = useSelector((state) => state.counter);
  const Select = (instructor) => {
    // const Cour = cours.filter((c) => instructor.Cours.includes(c.CoursID));
    // setCour(Cour);
    // setSelectedInstructor(instructor);
  }
  return (
    <div className='department'>
      <h2>Departments</h2>
      <table className='table'>
        <thead className='table-secondary'>
            <tr>
                <th></th>
                <th>ID</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {departments.map((d,index)=>{
                return(
                    <tr key={index}>
                        <td> <Link onClick={() => Select(d)}>Select</Link></td>
                        <td>{d.DepartmentID}</td>
                        <td>{d.Name}</td>

                    </tr>
                )
            })}
        </tbody>

      </table>
    </div>
  )
}

export default ListDepartments
