import * as React from "react";
import Link from "next/link";

import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

import classes from "./navigation.module.css";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.navigation}>
        <div className={classes.hidemenu}>
      <Link className='menu-link' href="#technologies" scroll={false}>
        Technologies
      </Link>
      <Link className='menu-link' href="#projects" scroll={false}>
        Projects
      </Link>
      <Link className='menu-link' href="#explorations" scroll={false}>
        Explorations
      </Link>
      </div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <Link className='menu-link' href="#technologies" scroll={false}>
            Technologies
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className='menu-link' href="#projects" scroll={false}>
            Projects
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className='menu-link' href="#explorations" scroll={false}>
            Explorations
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
