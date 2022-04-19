import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TablePagination from '@mui/material/TablePagination';

import Switch from '@mui/material/Switch';
import { Link, Typography } from '@mui/material';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));



function callData(name) {
  return { name };
}

const list = [
  callData('Chhenglee'),
  callData('Vutey'),
  callData('Pisey'),
  callData('Chhenglim'),
  callData('Sophea'),
];

const columns = [
  { id: 'name', label: 'Profile', minWidth: 170,},
  {
    id: 'location',
    label: 'Location',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phonenumber',
    label: 'Phone Number',
    minWidth: 150,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },

  { id: 'code',label:'Code', minWidth: 150, align: 'left' },
];


const rows = [
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
    </div>,
    location: 'Kompong Cham',
    phonenumber: '017583802',
    code: '001',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://planw.in/wp-content/uploads/2021/02/avatar-4.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Lux</Typography>
    </div>,
    location: 'Toul Kok',
    phonenumber: '069649490',
    code: '002',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://icon-library.com/images/4_avatar-512.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Vutey</Typography>
    </div>,
    location: 'Eden',
    phonenumber: '016311249',
    code: '003',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://vbdigital.com.au/wp-content/uploads/2019/10/iconfinder.avatar-8.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Chhenglee</Typography>
    </div>,
    location: 'Toul Tompung',
    phonenumber: '068832237',
    code: '004',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://art.ngfiles.com/images/1416000/1416404_alert222_script-alert-1-script.png?f1599429715' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
    </div>,
    location: '7 Makara Market',
    phonenumber: '069649490',
    code: '005',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/boy-512.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
    </div>,
    location: 'Sovanna',
    phonenumber: '093352560',
    code: '006',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://www.smacgigworld.com/assets/img/avatar.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
    </div>,
    location: 'Beong Keng Korng',
    phonenumber: '068832237',
    code: '007',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
    </div>,
    location: 'Tek Tla',
    phonenumber: '085352560',
    code: '008',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
    </div>,
    location: 'Toul Sangkair',
    phonenumber: '069649490',
    code: '009',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
    </div>,
    location: 'Prek Leap',
    phonenumber: '093352560',
    code: '010',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
    </div>,
    location: 'Ressey Keo',
    phonenumber: '016311249',
    code: '011',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
    </div>,
    location: 'Ta kmao',
    phonenumber: '068832237',
    code: '012',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
    </div>,
    location: 'Psa Dey Huy',
    phonenumber: '017583802',
    code: '013',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
    </div>,
    location: 'Phnom Penh Tmey',
    phonenumber: '068832237',
    code: '014',
  },
  {
    name: <div style={{ display: "flex" }}>
      <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" />
      <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
    </div>,
    location: 'Boeung Snao',
    phonenumber: '068832237',
    code: '015',
  },
];
const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Grid container spacing={1} paddingTop="35px">
      <Grid item xs={12} md={8} sm={12}>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 300 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth, fontWeight: "bold", fontSize: "medium", backgroundColor: "whitesmoke" }}
                    >
                      {column.label}
                      {index === 3 && <Button variant="contained" size="small" style={{marginLeft:"40px"}}><Link href="/customer" style={{textDecoration:"none",color:"white",}}>View ALL</Link></Button>}
                    </TableCell>

                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>

      </Grid>
      <Grid item xs={12} md={4} sm={12}>

        <TableContainer component={Paper} style={{ height: "350px" }}>
          <Table sx={{ minWidth: 50 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "100px", fontWeight: "bold" }}> Orders</TableCell>
                <TableCell align="right">
                  <Stack spacing={2} direction="row">
                    <Button variant="contained" size="small"><Link href="/order" style={{textDecoration:"none",color:"white"}}>View ALL</Link></Button>
                  </Stack>
                </TableCell>
                {/* <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}

              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((list) => (
                <TableRow
                  key={list.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                >

                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    color="info"
                  >
                    <Avatar alt="Remy Sharp" src="https://image.freepik.com/free-photo/profile-serious-woman-with-healthy-pure-skin-has-bushy-hairstyle_273609-44522.jpg" />
                  </StyledBadge>


                  <TableCell component="th" scope="row" >
                    {list.name}
                  </TableCell>
                  {/* <TableCell align="right">{row.calories}</TableCell> */}
                  {/* <TableCell align="right">{row.pf}</TableCell> */}
                  {/* <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell> */}
                  <Stack spacing={2} direction="row">
                    <Button variant="outlined" style={{ width: "90px", fontSize: "10px", padding: "0px", marginRight: "15px" }}>View Profile</Button>
                  </Stack>
                </TableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>

  );
}
