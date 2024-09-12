import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../ThemeContext';

const pages = ['Home','Features','Portfolio','Resume','Testimonial','Clients','Pricing','Blog','Contacts'];
const settings = ['Profile','Logout'];

function Navbar() {
  const colorMode = useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

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
    <AppBar position="static" sx={{ backgroundColor: theme.palette.background.paper ,padding:"4px"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Avatar
            alt="Usman Cheema"
            src="https://images.generated.photos/avhG5o52U47-dI3s8ebjDKxFRxTCNvz8wjtLSMbSYoc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUxMTMzLmpwZw.jpg"
            sx={{
              display: { xs: 'none', md: 'flex' },
              mr: 1,
              border: `5px solid ${theme.palette.divider}`,
              width: 65,
              height: 65,
            }}
          />  
          
              <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: theme.palette.text.primary,
              textDecoration: 'none',
            }}
          >
           USMAN
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
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
          <Avatar
            alt="Usman Cheema"
            src="https://images.generated.photos/avhG5o52U47-dI3s8ebjDKxFRxTCNvz8wjtLSMbSYoc/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTUxMTMzLmpwZw.jpg"
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              border: `5px solid ${theme.palette.divider}`,
              width: 65,
              height: 65,
            }}
          />  
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: theme.palette.text.primary,
              textDecoration: 'none',
            }}
          >
                USMAN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },gap:"5px", justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2,color: theme.palette.text.primary, display: 'block',fontSize:"14px",fontWeight:"bold",'&:hover': {
                  color: 'red', 
      }, }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Toggle light/dark theme">
              <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? '🌙' : '☀️'}
              </IconButton>
            </Tooltip>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,ml: '10px' }}>
                <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
