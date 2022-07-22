import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
    return (
        <div style={{ marginLeft: "500px", marginTop: "-20px" }}>
            
                <Stack spacing={2}>
                    <Pagination count={5} shape="rounded" color="primary" />
                    {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
                </Stack>
            

        </div>
    );
}
