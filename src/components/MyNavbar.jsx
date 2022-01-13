// import React from "react";
// import styled from "styled-components";
// import PersonIcon from "@mui/icons-material/Person";
// import { Link } from "react-router-dom";

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 1rem;
//   background-color: gray;
// `;

// const Logo = styled.img`
//   width: 45px;
//   height: 45px;
//   object-fit: cover;
// `;
// const Title = styled.h1``;
// const Icon = styled.i`
//   font-size: 2rem;
//   color: white;
// `;
// const myNavbar = () => {
//   return (
//     <Container>
//       <Link to="/" style={{ textDecoration: "none" }}>
//         <Logo src="https://eds-fireblog.herokuapp.com/static/media/cw.041cf5e8.jpeg" />
//       </Link>
//       <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
//         <Title>Sato's Blog</Title>
//       </Link>
//       <Icon>
//         <PersonIcon fontSize="2rem" />
//       </Icon>
//     </Container>
//   );
// };

// export default myNavbar;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CW from "../assets/cw.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   link: {
//     textDecoration: "none",
//   },
// }));

const MyNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const myMail = useSelector((state) => state.myEmailReducer);
  const isLogged = useSelector((state) => state.isLogged);

  let settings;
  // if (myMail) {
  //   settings = [("Profile", "NewBlog", "Logout")];
  // } else {
  //   settings = ["Login", "Register"];
  // }
  {
    isLogged && myMail
      ? (settings = ["Profile", "NewBlog", "Logout"])
      : (settings = ["Login", "Register"]);
  }
  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Link to="/">
              <img src={CW} alt="" style={{ width: 40 }} />
            </Link>
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "flex",
                md: "none",
              },
            }}
          >
            <Link to="/">
              <img src={CW} alt="" style={{ width: 40 }} />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={myMail.charAt(0).toUpperCase()}
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={
                      setting.toLowerCase() === "logout"
                        ? "/login"
                        : `/${setting.toLowerCase()}`
                    }
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MyNavbar;
