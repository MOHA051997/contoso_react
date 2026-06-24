let instructors = [ 
  { InstrID: 1, LastName: 'Abercrombie', FirstMidName: 'Kim', HireDate: '03/11/1995', Cours: [1010] }, 
  { InstrID: 2, LastName: 'Fakhouri', FirstMidName: 'Fadi', HireDate: '07/06/2002', Cours: [1020] }, 
  { InstrID: 3, LastName: 'Harui', FirstMidName: 'Roger', HireDate: '07/01/1998', Cours: [1050, 3140] }, 
  { InstrID: 4, LastName: 'Kapour', FirstMidName: 'Candace', HireDate: '03/11/1995', Cours: [4041] }, 
  { InstrID: 5, LastName: 'Zheng', FirstMidName: 'Roger', HireDate: '02/12/2004', Cours: [1000, 1045] }
]; 

let offices = [ 
  { Location: 'Smith 17', InstrID: 2 }, 
  { Location: 'Gowan 27', InstrID: 3 }, 
  { Location: 'Thompson 314', InstrID: 4 }
]; 

let cours = [ 
  { CoursID: 1010, Title: 'English', Credits: 2, DepartmentID: 3 }, 
  { CoursID: 1020, Title: 'Frensh', Credits: 2, DepartmentID: 3 }, 
  { CoursID: 4041, Title: 'Macroeconomics', Credits: 2, DepartmentID: 4 }, 
  { CoursID: 1050, Title: 'Chemitry', Credits: 3, DepartmentID: 1 },  
  { CoursID: 3140, Title: 'Trigonometry', Credits: 3, DepartmentID: 2 }, 
  { CoursID: 1000, Title: 'Algebre II', Credits: 3, DepartmentID: 2 }, 
  { CoursID: 1045, Title: 'Calculus', Credits: 3, DepartmentID: 2 }
]; 

let departments = [ 
  { DepartmentID: 1, Name: 'Engineering' }, 
  { DepartmentID: 2, Name: 'Mathematics' },  
  { DepartmentID: 3, Name: 'Literature' }, 
  { DepartmentID: 4, Name: 'Economie' } 
]; 
let users = [
    {id: 1, uname: 'user1', upass: 'pass1'},
    {id: 2, uname: 'user2', upass: 'pass2'},
    {id: 3, uname: 'user3', upass: 'pass3'},
    {id: 4, uname: 'user4', upass: 'pass4'},
    {id: 5, uname: 'user5', upass: 'pass5'}
];

export { instructors, offices, cours, departments,users };
