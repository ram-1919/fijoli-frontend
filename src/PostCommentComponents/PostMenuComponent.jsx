

import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ReportIcon from '@mui/icons-material/Report';
import HideImageIcon from '@mui/icons-material/HideImage';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import EnumPostMenuOptions from './PostControllers/PostMenuOptions';

// const iconStyle = {
//     fontSize: '25px', // Adjust the size as needed
//     color  : "black"
// };

// const selectediconStyle = {
//     fontSize : "25px",
//     color    : "red"
// }

// const followiconStyle = {
//     color: "black"
// }

// const followSelectediconStyle = {
//     color: "red"
// }

const PostMenuComponent = ({menuOptions, isfollower, handleClick}) =>{
    const ITEM_HEIGHT = 48;       
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handlemenuIconClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = (seletedmenuItem) => {
        if(typeof seletedmenuItem === "string"){
            handleClick(seletedmenuItem);
        }
        setAnchorEl(null);
    };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handlemenuIconClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '15ch',
          },
        }}
      >
        {menuOptions.map((option) => {
            switch (option) {
                case EnumPostMenuOptions.report:
                    return <MenuItem key={option} selected={option === menuOptions[0]} onClick={()=> handleClose(EnumPostMenuOptions.report)}>
                            <ReportIcon/> {option}
                    </MenuItem>
                break;

                case EnumPostMenuOptions.hide:
                    return <MenuItem key={option} selected={option === menuOptions[0]} onClick={()=> handleClose(EnumPostMenuOptions.hide)}>
                            <HideImageIcon/> {option}
                    </MenuItem>
                break;

                case EnumPostMenuOptions.follow:
                    return <MenuItem key={option} selected={option === menuOptions[0]} onClick={()=> handleClose(EnumPostMenuOptions.follow)}>
                                {
                                    (isfollower)?<Button variant="outlined" style={{height: "25px"}}>UnFollow</Button>:
                                    <Button variant="contained" style={{height: "25px"}}>Follow</Button>
                                }
                            </MenuItem>
                break;

                case EnumPostMenuOptions.edit:
                    return <MenuItem key={option} selected={option === menuOptions[0]} onClick={()=> handleClose(EnumPostMenuOptions.edit)}>
                            <EditIcon/> {option}
                    </MenuItem>
                break;

                case EnumPostMenuOptions.delete:
                    return <MenuItem key={option} selected={option === menuOptions[0]} onClick={()=> handleClose(EnumPostMenuOptions.delete)}>
                            <DeleteIcon/> {option}
                    </MenuItem>
                break;
            }
        })}
      </Menu>
    </div>
  )
}

export default PostMenuComponent