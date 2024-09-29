"use client";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Sidebar = ({ window }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const textStyle = {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "22.68px",
    color: "#18181B",
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleSidebarToggle}
        sx={{ mr: 2, display: { md: "none" } }}
      >
        <img src="/menu.svg" alt="menu" />
      </IconButton>
      <Drawer
        container={
          window !== undefined ? () => window().document.body : undefined
        }
        variant="temporary"
        open={sidebarOpen}
        onClose={handleSidebarToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        <Box>
          <div className="p-5">
            <img src="/logo.png" alt="logo" className="h-[29px] w-[139px]" />
          </div>
          <List>
            <ListItemButton>
              <ListItemText primary="Features" sx={textStyle} />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <ListItemText primary="Pricing" sx={textStyle} />
            </ListItemButton>
            <Divider />
            <ListItemButton>
              <LockOutlinedIcon fontSize="14px" />
              <ListItemText
                primary="Login"
                sx={{ ...textStyle, marginLeft: 1 }}
              />
            </ListItemButton>
            <Divider />
          </List>
          <div className="h-[39px] rounded-[5px] cursor-pointer flex justify-center items-center bg-[#7261FF] text-white font-medium px-5 mx-2">
            Try For Free
          </div>
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
