import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
// import {EDIT_INST}from './Store/CounterSlice';


function UpdateInstructor() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {instructors,offices}=useSelector((state)=>state.counter)
// dispatch(EDIT_INST())
  return (
     <div className='edit'>
      <h2>Edit</h2>
      <form action="">
        <label htmlFor="lname">Last Name</label><br />
        <input type="text" name='lname' className='form-control'/><br />
      
      <label htmlFor="fname">First Name</label><br />
        <input type="text" name='fname' className='form-control' /><br />

        <label htmlFor="date">Hire Date</label><br />
        <input type="text" name='date' className='form-control' /><br />

        <label htmlFor="office">Office Location</label><br />
        <input type="text" name='office' className='form-control' /><br />

      <table>
        <tr>
          <td><input type="checkbox" />1000 Algebra </td>
          <td><input type="checkbox" />1045 Calculus </td>
          <td><input type="checkbox" />1050 Chemistry </td>
        </tr>

         <tr>
          <td><input type="checkbox" />2021 Composition </td>
          <td><input type="checkbox" />2042 Literature </td>
          <td><input type="checkbox" />3141 Trigonomety </td>
        </tr>

         <tr>
          <td><input type="checkbox" />4022 Microeconomics </td>
          <td><input type="checkbox" />4041 Macroeconomics </td>
        </tr>
        </table> 
        <button type='button' className='btn btn-secondary' onClick={(e)=>onClick(e)}>Save</button>     
      </form>
      <Link to="instructors" onClick={(e)=>{e.preventDefault();navigate(-1)}}>Back to List</Link>
      </div>
  )
}

export default UpdateInstructor
