import React, { Fragment, useState } from "react";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Button,
  Card,
  Divider,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  tableCellClasses,
} from "@mui/material";
import employee from "../employee.json";
import { ReadOnlyRow } from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import { nanoid } from "nanoid";
import "../css/header.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [employeeData, setEmployeeData] = useState(employee);
  const [selectedEmpId, setSelectedEmpId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [filterTableData, setFilterTableData] = useState([]);
  const [addFormData, setAddFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newEmployee = {
      id: nanoid(),
      firstName: addFormData.firstName,
      lastName: addFormData.lastName,
      email: addFormData.email,
    };

    const newEmployees = [...employeeData, newEmployee];
    setEmployeeData(newEmployees);
    setOpen(false);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedEmployee = {
      id: selectedEmpId,
      firstName: editFormData.firstName,
      lastName: editFormData.lastName,
      email: editFormData.email,
    };
    const newEmployee = [...employeeData];
    const index = employeeData.findIndex((emp) => emp.id === selectedEmpId);
    newEmployee[index] = editedEmployee;
    setEmployeeData(newEmployee);
    setSelectedEmpId(null);
  };

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleDeleteClick = (empId) => {
    const newEmployee = [...employeeData];

    const index = employeeData.findIndex((emp) => emp.id === empId);
    newEmployee.splice(index, 1);
    setEmployeeData(newEmployee);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditClick = (event, emp) => {
    console.log(emp);
    event.preventDefault();
    setSelectedEmpId(emp.id);

    const formData = {
      firstName: emp.firstName,
      lastName: emp.lastName,
      email: emp.email,
    };

    setEditFormData(formData);
  };

  const filterData = (e) => {
    if (e.target.value !== "") {
      setSearchValue(e.target.value);
      const filterTable = employeeData.filter((obj) =>
        Object.keys(obj).some((key) =>
          String(obj[key]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setFilterTableData([...filterTable]);
    } else {
      setSearchValue(e.target.value);
      setEmployeeData([...employeeData]);
    }
  };

  return (
    <div>
      <Box component="div" sx={{ textAlign: "center", mt: "15px" }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          onChange={(e) => filterData(e)}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Button variant="contained" onClick={handleClickOpen}>
          Add Employee
        </Button>

        <Dialog open={open}>
          <form onSubmit={handleAddFormSubmit}>
            <DialogTitle>Add User</DialogTitle>
            <DialogContent>
              <TextField
                margin="dense"
                id="name"
                required={true}
                name="firstName"
                label="First Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleAddFormChange}
              />
              <TextField
                margin="dense"
                id="name"
                required={true}
                name="lastName"
                label="Last Name"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleAddFormChange}
              />
              <TextField
                margin="dense"
                id="name"
                name="email"
                required={true}
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                onChange={handleAddFormChange}
              />
            </DialogContent>
            <DialogActions>
              <Button type="submit" fullWidth={true} variant="contained">
                Add User
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Box>
      <Divider />

      <form onSubmit={handleEditFormSubmit}>
        <TableContainer component={Card} sx={{ width: "95%", margin: "auto" }}>
          <Table
            sx={{ minWidth: 700, mt: "15px" }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">First Name</StyledTableCell>
                <StyledTableCell align="left">Last Name</StyledTableCell>
                <StyledTableCell align="left">Email Id</StyledTableCell>
                <StyledTableCell align="left">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {searchValue.length > 0
                ? filterTableData.map((emp) => (
                    <Fragment>
                      {selectedEmpId === emp.id ? (
                        <EditableRow
                          editFormData={editFormData}
                          handleEditFormChange={handleEditFormChange}
                        />
                      ) : (
                        <ReadOnlyRow
                          employee={emp}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                        />
                      )}
                    </Fragment>
                  ))
                : employeeData.map((emp) => (
                    <Fragment>
                      {selectedEmpId === emp.id ? (
                        <EditableRow
                          editFormData={editFormData}
                          handleEditFormChange={handleEditFormChange}
                        />
                      ) : (
                        <ReadOnlyRow
                          employee={emp}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                        />
                      )}
                    </Fragment>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </div>
  );
};

export default Header;
