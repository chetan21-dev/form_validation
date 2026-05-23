import { Button,TextField } from '@mui/material'
import React from 'react'

 const EditableRow = ({editFormData,handleEditFormChange}) => {
    return (
        <tr>
            <td>
            <TextField
              margin="dense"
              id="name"
              required={true}
              name="firstName"
              value={editFormData.firstName}
              type="text"
              fullWidth
              variant="outlined"
              onChange={handleEditFormChange}
            />
            </td>
            <td>
            <TextField
              margin="dense"
              id="name"
              required={true}
              name="lastName"
              value={editFormData.lastName}
              type="text"
              fullWidth
              variant="outlined"
              onChange={handleEditFormChange}
            />
            </td>
            <td>
            <TextField
              margin="dense"
              id="name"
              name="email"
              required={true}
              value={editFormData.email}
              type="email"
              fullWidth
              variant="outlined"
              onChange={handleEditFormChange}
            /> 
            </td>
            <td>
                <Button type="submit" variant="contained">Save</Button>
            </td>
        </tr>
    )
}

export default EditableRow
