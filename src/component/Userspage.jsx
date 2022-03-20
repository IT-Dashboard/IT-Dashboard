import React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(fistname, lastname, fat, carbs, protein, add, email) {
    return { fistname, lastname, fat, carbs, protein, add, email };
  }
  
  const rows = [
    createData('Kyle',"Henderson", "ninja123", "admin", 5, 1, "khogans1@students.kennesaw.edu"),
    createData('Jacob',"Hooker", "JakeHook", "admin", 5, 2, "jhooker3@students.kennesaw.edu"),
    createData('Sam',"Kharel", "skharel", "admin", 5, 2, "skharel@students.kennesaw.edu"),
    createData('Sky',"Kim", "Skim145", "admin", 5, 1, "skim145@students.kennesaw.edu"),
    createData('Rob',"Raheja", "rraheja", "admin", 5, 2, "rraheja@students.kennesaw.edu"),
   
  ];
const Userspage = () => {
    
  return (
    <div className="p-3 min-h-screen">
      <h1 className="text-gray-600  mt-32 text-2xl font-medium w-full text-center">
        Hello User
      </h1>
      <h1 className="text-gray-600  mt-3 text-2xl font-medium w-full text-center">
        Welcome To User Page!
      </h1>
      <div className="mt-3 w-full grid grid-cols-1 lg:grid-cols-3">
        <div className=" cursor-pointer bg-purple-600 hover:bg-purple-800 border-r-2 border-white text-white py-2 flex items-center justify-center">
          Add User
        </div>
        <div className=" cursor-pointer bg-pink-600 hover:bg-pink-800 border-r-2 border-white text-white flex items-center justify-center">
          Edit User
        </div>
        <div className=" cursor-pointer bg-red-600 hover:bg-red-800  text-white flex items-center justify-center">
          Delete User
        </div>
     
      </div>
      <div className=" mt-3">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Access Level</TableCell>
            <TableCell align="right">Group</TableCell>
            <TableCell align="right">Project</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
         
              <TableCell align="left">{row.fistname}</TableCell>
              <TableCell align="right">{row.lastname}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.add}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  );
};

export default Userspage;
