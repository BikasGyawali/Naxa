import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const pages = ['Services', 'Portfolio', 'Company', 'GeoAI', 'Events & Media', 'Blogs'];
  const [anchorElNav, setAnchorElNav] = useState()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#f4f4f4" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img src="https://naxa.com.np/792f5bf2487bd27628a54fe64a712630.png" alt="logo" height="70%" width="70%" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', justifyContent: "flex-end", md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', alignItems: 'center' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    textTransform: 'none',
                    color: "#222222",
                    fontSize: '1.1rem',
                    '&:hover': {
                      color: '#184add',
                    },
                    my: 2,
                    px: 4
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end', alignItems: 'center' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  textTransform: 'none',
                  backgroundColor: "#ffdc1c",
                  fontSize: '1.1rem',
                  my: 2,
                  px: 4
                }}
              >
                Let's Talk
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Navbar;
