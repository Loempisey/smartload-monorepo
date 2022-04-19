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
    <div style={{marginLeft:"950px", marginTop:"-385px"}}>
    <Grid container spacing={1} paddingTop="35px">
      {/* <Grid item xs={12} md={4} sm={12}> */}
        <TableContainer component={Paper} style={{ height: "350px" }}>
          <Table sx={{ minWidth: 50 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "100px", fontWeight: "bold" }}>
                  {" "}
                  Orders
                </TableCell>
                <TableCell align="right">
                  <Stack spacing={2} direction="row">
                    <Button variant="contained" size="small">
                      <Link
                        href="/order"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        View ALL
                      </Link>
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((list) => (
                <TableRow
                  key={list.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                    color="info"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://image.freepik.com/free-photo/profile-serious-woman-with-healthy-pure-skin-has-bushy-hairstyle_273609-44522.jpg"
                    />
                  </StyledBadge>

                  <TableCell component="th" scope="row">
                    {list.name}
                  </TableCell>
                  <Stack spacing={2} direction="row">
                    <Button
                      variant="outlined"
                      style={{
                        width: "90px",
                        fontSize: "10px",
                        padding: "0px",
                        marginRight: "15px",
                      }}
                    >
                      View Profile
                    </Button>
                  </Stack>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      {/* </Grid> */}
    </Grid>

    </div>
  );
}


