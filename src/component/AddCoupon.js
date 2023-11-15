import { Container, TextField, Button } from '@mui/material'
import React from 'react'

function AddCoupon() {
  return (
    <div style={{marginTop:'150px'}}>
        <center>
            <h2>Add Coupon</h2>
        </center>
        <Container maxWidth="xs">
            <TextField
                id=""
                label="Coupon Name"
                variant="outlined"
                size="Normal"
                fullWidth
                required
            />
            <TextField
                id=""
                label="Coupon Code"
                variant="outlined"
                size="Normal"
                fullWidth
                required
                sx={{ mt: 2 }}
            />
            <TextField
                id=""
                label="Discount"
                variant="outlined"
                size="Normal"
                fullWidth
                required
                sx={{ mt: 2 }}
            />
            <TextField
                id=""
                label="Minimum Purchase"
                variant="outlined"
                size="Normal"
                fullWidth
                required
                sx={{ mt: 2 }}
            />
            <TextField
                id=""
                label="Discount Upto"
                variant="outlined"
                size="Normal"
                fullWidth
                required
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

export default AddCoupon