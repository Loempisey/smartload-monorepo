import * as React from "react";
import { useEffect } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Dialog, IconButton, Typography } from "@mui/material";
import ChangEmail from "../EditAccount/ChangEmail";
import ChangPass from "../EditAccount/ChangPass";
import ChangUser from "../EditAccount/ChangUser";
import { fireAuth, fireStorage } from "../../../services/firebase";
import { USERSTATE } from "../../../states/userState";
import { useRecoilValue } from "recoil";
import { makeStyles } from "@mui/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { Button } from "@mui/material";
const Input = styled("input")({
  display: "none",
});

const useStyles = makeStyles({
  user: {
    color: "grey",
  },
});

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
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
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));
const preventDefault = (event) => event.preventDefault();

export default function SettingContent() {
  const classes = useStyles();

  const userInfo = useRecoilValue(USERSTATE);

  const [file, setFile] = React.useState(null);
  const [updating, setUpdating] = React.useState(false);

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const storageRef = fireStorage.ref("");
    const fileRef = storageRef.child(file.name);
    setUpdating(true);
    fileRef
      .put(file)
      .then((res) => {
        fileRef.getDownloadURL().then((URL) => {
          const user = fireAuth.currentUser;
          user
            .updateProfile({
              photoURL: URL,
            })
            .then((res) => {
              setUpdating(false);
              window.location.reload();
            })
            .catch((err) => {
              setUpdating(false);
              console.error(err);
            });
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  if (!userInfo) return <div />;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container item xs={12}>
        <Grid>
          <h1 style={{ marginLeft: "20px" }}>Settings</h1>
          <div style={{ marginLeft: "100px" }}></div>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={7}>
            <Stack
              direction="row"
              spacing={1}
              style={{
                width: 250,
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <Typography
                    style={{
                      marginLeft: "30px",
                      fontSize: "15px",
                      color: "grey",
                    }}
                  ></Typography>
                }
              >
                <div>

                    {/* GET URL FROM CURRENT USER */}
                  {Boolean(userInfo.profile) && (
                    <img
                      src={userInfo.profile}
                      style={{
                        width: 250,
                        height: 250,
                        position: "absolute",
                        marginTop: "50px",
                      }}
                    />
                  )}
                  {/* {updating && (
                    <img
                      src={URL.createObjectURL(file)}
                      style={{
                        width: 250,
                        height: 250,
                        marginLeft: -120,
                        position: "absolute",
                        marginTop: "50px",
                      }}
                    />
                  )} */}
                </div>
                <div style={{ marginTop: "310px", marginLeft: "-45px" }}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    {/* <label htmlFor="contained-button-file">
                                            <Input accept="image/*" id="contained-button-file" multiple type="file" />
                                            <Button variant="contained" component="span">
                                                Upload
                                            </Button>
                                        </label> */}
                    <label htmlFor="icon-button-file">
                      <Input
                        onChange={handleUploadFile}
                        accept=".jpg, .png"
                        id="icon-button-file"
                        type="file"
                        position="absolute"
                      />
                      <IconButton
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        style={{marginLeft:"100px",width:"150px" }} //Update on 2/2/2022
                      >
                        <PhotoCamera />{" "}
                        <Typography style={{ padding: "10px", }}>
                          Upload
                        </Typography>
                      </IconButton>
                    </label>
                  </Stack>
                </div>
              </Badge>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <div
              style={{
                fontSize: "18px",
                fontFamily: "'Quicksand', sans-serif",
                marginTop: "35px",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Username
              </h3>
              {userInfo.username}
              <Link href="/#" onClick={preventDefault} underline="hover">
                <ChangUser />
              </Link>
            </div>
            <div
              style={{
                fontSize: "18px",
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Email
              </h3>
              {userInfo.email}
              <Link href="/" onClick={preventDefault}>
                <ChangEmail />
              </Link>
            </div>
            <div
              style={{
                fontSize: "20px",
                fontFamily: "'Quicksand', sans-serif",  
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                Password
              </h3>

              <Link href="/#" onClick={preventDefault}>
                <ChangPass />
              </Link>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
