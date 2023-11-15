import { Container, TextField, Button } from '@mui/material'
import React from 'react'

function AddCategory() {
  return (
    <div style={{marginTop:'150px'}}>
        <center>
            <h2>Add Category</h2>
        </center>
        <Container maxWidth="xs">
            <TextField
                id=""
                label="Category Name"
                variant="outlined"
                size="Normal"
                fullWidth
                required
            />
            <TextField
                id=""
                label="Description"
                variant="outlined"
                size="Normal"
                fullWidth
                sx={{ mt: 2 }}
            />
            <center>
                <Button sx={{ mr: 2, mt: 2 }} variant="contained">
                    Add
                </Button>
                <Button sx={{ mr: 2, mt: 2 }} variant="outlined">
                    Discard
                </Button>
            </center>
        </Container>
    </div>
  )
}

export default AddCategory