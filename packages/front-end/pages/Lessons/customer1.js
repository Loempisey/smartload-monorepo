import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';


const columns = [
  { id: 'name', label: 'Profile', minWidth: 170, },
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
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },

  { id: 'code', label: 'Code Item ', minWidth: 100, align: 'center' },
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
    name:<div style={{ display: "flex" }}>
    <Avatar src='https://www.smacgigworld.com/assets/img/avatar.png' alt="img" />
    <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
  </div>,
    location: 'Beong Keng Korng',
    phonenumber: '068832237',
    code: '007',
  },
  {
    name:<div style={{ display: "flex" }}>
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
export default function StickyHeadTable() {
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
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
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
                  {index === 3 && <Switch {...label} defaultChecked />}
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
  );
}

