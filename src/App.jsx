import './App.css'
import './Bootstrap.min.css';
import {Routes ,Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ListInstructors from './components/ListInstructors';
import DetailCours from './components/DetailCours';
import UpdateInstructor from './components/UpdateInstructor';
import AddInstructor from './components/AddInstructor';
import Connexion from './components/Connexion';
import ListDepartments from './components/ListDepartments';
import ListCourses from './components/ListCourses';
import ListStudents from './components/ListStudents';

function App() {
  return (
    <>
       <div className='app'>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='instructors' element={<ListInstructors/>}/>
        <Route path='/detail/:InstrID' element={<DetailCours/>}/>
        <Route path='instructors/edit' element={<UpdateInstructor/>}/>
        <Route path='instructors/add' element={<AddInstructor/>}/>
        <Route path='connexion' element={<Connexion/>}/>
        <Route path='departments' element={<ListDepartments/>}/>
        <Route path='courses' element={<ListCourses/>}/>
        <Route path='students' element={<ListStudents/>}/>

        </Route>
      </Routes>
    </div>
    </>
  )
}


export default App
