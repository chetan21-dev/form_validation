import React from 'react'
import { styled,ThemeProvider } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4569',
      main: '#ff1744',
      dark: '#b2102f',
      contrastText: '#fff',
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

export const ReadOnlyRow = ({employee,handleEditClick,handleDeleteClick}) => {
    return (
        <StyledTableRow key={employee.id}>
            <StyledTableCell align="left">{employee.firstName}</StyledTableCell>
            <StyledTableCell align="left">{employee.lastName}</StyledTableCell>
            <StyledTableCell align="left">{employee.email}</StyledTableCell>
            <StyledTableCell align="left">
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" sx={{mr : '6px'}} onClick={(e) => handleEditClick(e,employee)}>Edit</Button>
                    <Button variant="contained" color="secondary" onClick={handleDeleteClick}>Delete</Button>
                </ThemeProvider>
            </StyledTableCell>
        </StyledTableRow>
    )
}
