import React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
// import {ADD_INST}from './Store/CounterSlice';

function AddInstructor() {
const navigate=useNavigate();
 const dispatch = useDispatch();

const onSubmit = (e) => {
    e.preventDefault();
  
    navigate('instructors');
  }
  return (
    <div className='add'>
      <h2>Create</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="lname">Last Name</label><br />
        <input type="text" name='lname' className='form-control' /><br />
      
      <label htmlFor="fname">First Name</label><br />
        <input type="text" name='fname' className='form-control' /><br />

        <label htmlFor="date">Hire Date</label><br />
        <input type="text" name='date' className='form-control' /><br />

        <label htmlFor="office">Office Location</label><br />
        <input type="text" name='office' className='form-control' /><br />

      <table>
        <tr>
          <td><input type="checkbox" value={1000}/>1000 Algebra </td>
          <td><input type="checkbox" value={1045}/>1045 Calculus </td>
          <td><input type="checkbox" value={1050}/>1050 Chemistry </td>
        </tr>

         <tr>
          <td><input type="checkbox" value={2021}/>2021 Composition </td>
          <td><input type="checkbox" value={2042}/>2042 Literature </td>
          <td><input type="checkbox" value={3141}/>3141 Trigonomety </td>
        </tr>

         <tr>
          <td><input type="checkbox" value={4022}/>4022 Microeconomics </td>
          <td><input type="checkbox" value={4041}/>4041 Macroeconomics </td>
        </tr>
        </table> 
        <button type='submit' className='btn btn-secondary' >Create</button>     
      </form>
      <Link to="instructors" onClick={(e)=>{e.preventDefault();navigate(-1)}}>Back to List</Link>
      </div>
  )
}

export default AddInstructor
