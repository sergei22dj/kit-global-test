"use client";
import { useAuth0 } from "@auth0/auth0-react";
import { Wrapper } from "./NavBarStyles";
import { Avatar, Button, CircularProgress } from "@mui/material";

const NavBar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  return (
    <>
      <Wrapper>
        {isAuthenticated ? (
          <Button variant="outlined" color="error" onClick={() => logout()}>
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "logout"
            )}
          </Button>
        ) : (
          <Button variant="contained" onClick={() => loginWithRedirect()}>
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "login"
            )}
          </Button>
        )}
        {isAuthenticated && <Avatar alt="?" src={user?.picture} />}
      </Wrapper>
    </>
  );
};
export default NavBar;
