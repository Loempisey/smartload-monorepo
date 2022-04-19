import React from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { ClassNames } from "@emotion/react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import styles from "../../../styles/nav.module.css";
import PropTypes from 'prop-types';


export const Nav = ({home, service, pay, about, login, signup}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={10} md={12} >

      <div>
        <nav
          style={{
            margin: "-50px auto -180px",
            padding: "1px 0",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            borderBottom: "0px solid #ddd",
            position: "absolute",
            marginLeft: "250px",
            marginTop:"-45px"
          }}
        >
          <Link href="/">
            <a
              style={{
                color: "#145DA0",
                margin: "-50px",
                letterSpacing: "0.5px",
                fontSize: "20px",
                fontFamily: "'Quicksand', sans-serif",
                marginTop: "-50px",
                position: "absolute",
                marginRight: "830px",
                marginBottom: "3px",
              }}
            >
              {home}
            </a>
          </Link>
          <div
            style={{
              marginRight: "200px",
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            <div>
              <Stack direction="row" spacing={2}>
                <div>
                  <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={{
                      fontSize: "20px",
                      color: "#145DA0",
                      letterSpacing: "0.5px",
                      marginTop: "-45px",
                      left: "150px",
                      fontFamily: "'Quicksand', sans-serif",
                      textTransform: "none",
                    }}
                  >
                    {service}
                  </Button>
                  <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left top"
                              : "left bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              <MenuItem onClick={handleClose}>
                                <a
                                  href="#chatbot"
                                  style={{
                                    color: "#145DA0",
                                    letterSpacing: "0.8px",
                                    fontSize: "18px",
                                  }}
                                >
                                  {chatbot}
                                </a>
                              </MenuItem>
                              <MenuItem onClick={handleClose}>
                                <a
                                  href="#dashboard"
                                  style={{
                                    color: "#145DA0",
                                    letterSpacing: "0.8px",
                                    fontSize: "18px",
                                  }}
                                >
                                  {dashboard}
                                </a>
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>
              </Stack>
            </div>

            <div style={{ marginTop: "-40px", marginLeft: "250px" }}>
              <Link href="/package">
                <a
                  style={{
                    marginLeft: "30px",
                    color: "#145DA0",
                    paddingLeft: "20px",
                    margin: "20px",
                    letterSpacing: "0.5px",
                    fontSize: "20px",
                  }}
                >
                  {pay}
                </a>
              </Link>

              <a
                href="#about"
                style={{
                  marginLeft: "30px",
                  color: "#145DA0",
                  paddingLeft: "20px",
                  margin: "20px",
                  letterSpacing: "0.5px",
                  fontSize: "20px",
                }}
              >
                {about}
              </a>
            </div>
          </div>
          <Grid/>
          <Grid item xs={10} sm={10} md={5}>
            <div style={{ fontFamily: "'Quicksand', sans-serif" }}>
              <Link href="/signin">
                <a
                  style={{
                    color: "#145DA0",
                    padding: "80px",
                    marginLeft: "20px",
                    margin: "0px",
                    fontSize: "20px",
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  {login}
                </a>
              </Link>
              <Link href="/signup">
                <a
                  style={{
                    color: "black",
                    display: "inline-block",
                    width: "110px",
                    height: "50px",
                    padding: "12px 0",
                    margin: "-40px ",
                    background: "#145DA0",
                    borderRadius: "1px",
                    color: "white",
                    textAlign: "center",
                    marginLeft: "-60px",
                    fontSize: "20px",
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  {signup}
                </a>
              </Link>
            </div>
          </Grid>
        </nav>
      </div>
      </Grid>
    </Grid>
  );
}
export default Nav;

Nav.PropTypes ={
  home: PropTypes.func,
  service: PropTypes.func,
  pay: PropTypes.func,
  about: PropTypes.func,
  login: PropTypes.bool,
  signup: PropTypes.bool,
}

Nav.defaultProps={
  home: 'Home',
  service: 'Service',
  pay: 'Package',
  about: 'About',
  login:'Log in',
  signup:'Sing Up',
}
