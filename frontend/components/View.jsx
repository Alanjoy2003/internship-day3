import{Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from'axios';

//const rows={"name":"Alan","adm":"CH0234","department":"Chemistry","semester":"s4"},
          //  {"name":"Abin","adm":"CH0235","department":"computer science","semester":"s5"},
       // {"name":"joyel","adm":"CH0236","department":"english","semester":"s6"};
const View = () => {
  const [rows,setRows]=useState([]);
  useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((res)=>{
      setRows(res.data.users);
    })
  },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>MovieName</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Movie Director</TableCell>
            <TableCell align="right">Release Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((rows) => (
            <TableRow
              key={rows.MovieName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {rows.firstName}
              </TableCell>
              <TableCell align="right">{rows.category}</TableCell>
              <TableCell align="right">{rows.MovieDirector}</TableCell>
              <TableCell align="right">{rows.ReleaseYear}</TableCell>
             </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
    
  
}

export default View