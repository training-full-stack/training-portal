import React from 'react';
import '../components.css';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

function header() {
  return (
    // <div>
    //   <div className="header">
    //     Header
    //   </div>
    // </div>
    <AppBar position="static">
      <Typography variant="h6">
          News
        </Typography>
    </AppBar>
  );
}

export default header;

{/* <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar> */}
