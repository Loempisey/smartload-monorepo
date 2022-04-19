import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TablePagination from "@mui/material/TablePagination";
import Switch from "@mui/material/Switch";
import { Link, Typography } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 30,
  height: 30,
  border: `2px solid ${theme.palette.background.paper}`,
}));

function callData(name) {
  return { name };
}

const list = [
  callData("Frozen yoghurt"),
  callData("Ice cream sandwich"),
  callData("Eclair"),
  callData("Cupcake"),
  callData("Gingerbread"),
];

const columns = [
  { id: "name", label: "Profile", minWidth: 170 },
  {
    id: "location",
    label: "Location",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "phonenumber",
    label: "Phone Number",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },

  { id: "code", minWidth: 100, align: "center" },
];

const rows = [
  {
    profile: "https://www.saharaprofessional.in/images/men1.png",
    name: "Pisey",
    location: "Kompong Cham",
    phonenumber: "017583802",
    code: "001",
  },
  {
    profile: "https://planw.in/wp-content/uploads/2021/02/avatar-4.png",
    name: "Sokha",
    location: "Toul Kok",
    phonenumber: "069649490",
    code: "002",
  },
  {
    profile: "https://icon-library.com/images/4_avatar-512.png",
    name: "Kimleng",
    location: "Eden",
    phonenumber: "016311249",
    code: "003",
  },
  {
    profile:
      "https://vbdigital.com.au/wp-content/uploads/2019/10/iconfinder.avatar-8.png",
    name: "Chenglee",
    location: "Toul Tompung",
    phonenumber: "068832237",
    code: "004",
  },
  {
    profile:
      "https://art.ngfiles.com/images/1416000/1416404_alert222_script-alert-1-script.png?f1599429715",
    name: "Kanhchana",
    location: "7 Makara Market",
    phonenumber: "069649490",
    code: "005",
  },
  {
    Profile:"https://cdn1.iconfinder.com/data/icons/user-pictures/100/boy-512.png",
    name: "Ratha",
    location: "Sovanna",
    phonenumber: "093352560",
    code: "006",
  },
  {
    profile: "https://www.smacgigworld.com/assets/img/avatar.png",
    name: "Sievmey",
    location: "Beong Keng Korng",
    phonenumber: "068832237",
    code: "007",
  },
  {
    profile: "https://www.saharaprofessional.in/images/men1.png",
    name: "Lalin",
    location: "Tek Tla",
    phonenumber: "085352560",
    code: "008",
  },
  {
    profile: "https://www.saharaprofessional.in/images/men1.png",
    name: "Kimteang",
    location: "Toul Sangkair",
    phonenumber: "069649490",
    code: "009",
  },
  {
    profile: "https://www.saharaprofessional.in/images/men1.png",
    name:"Sokmean",
    location: "Prek Leap",
    phonenumber: "093352560",
    code: "010",
  },
  {
    profile: "https://www.saharaprofessional.in/images/men1.png",
    name:"Mouyhean",
    location: "Ressey Keo",
    phonenumber: "016311249",
    code: "011",
  },
  {
    profile:"https://www.saharaprofessional.in/images/men1.png", 
    name:"Mengheang",
    location: "Ta kmao",
    phonenumber: "068832237",
    code: "012",
  },
  {
    profile:"https://www.saharaprofessional.in/images/men1.png", 
    name:"Pisey",
    location: "Psa Dey Huy",
    phonenumber: "017583802",
    code: "013",
  },
  {
    profile: "https://www.saharaprofessional.in/images/men1.png", 
    name:"Lalin",
    location: "Phnom Penh Tmey",
    phonenumber: "068832237",
    code: "014",
  },
  {
    profile: "https://www.saharaprofessional.in/images/men1.png",
    name:"Kimmeng",
    location: "Boeung Snao",
    phonenumber: "068832237",
    code: "015",
  },
];
const label = { inputProps: { "aria-label": "Switch demo" } };

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
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 300 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        fontWeight: "bold",
                        fontSize: "medium",
                        backgroundColor: "whitesmoke",
                      }}
                    >
                      {column.label}
                      {index === 3 && (
                        <Button variant="contained" size="small">
                          <Link
                            href="/customer"
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            View ALL
                          </Link>
                        </Button>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row,index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                          <TableCell key={index} align={'left'}>
                              <div style={{ display: "flex" }}>
                                <Avatar
                                  src="https://www.saharaprofessional.in/images/men1.png"
                                  alt="img"
                                />
                                <Typography
                                  style={{
                                    marginLeft: "20px",
                                    marginTop: "7px",
                                  }}
                                >
                                  Sokmean
                                </Typography>
                              </div>
                            </TableCell>
                           
                            <TableCell>
                              {
                                row.location
                              }
                            </TableCell>
                            <TableCell>
                              {
                                row.phonenumber
                              }
                            </TableCell>
                            <TableCell>
                              {
                                row.code
                              }
                            </TableCell>
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
       
      </Grid>
    </Grid>
  );
}


