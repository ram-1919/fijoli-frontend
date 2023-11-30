

import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CoffeeIcon from '@mui/icons-material/Coffee';
import FilterTwoToneIcon from '@mui/icons-material/FilterTwoTone';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import ManIcon from '@mui/icons-material/Man';
import EnumPostCategory from '../enums/EnumPostCategory';
import { IconButton, Menu, MenuItem } from '@mui/material';

const PostCategoryMenuComponent = ({menuOptions, handleClick}) =>{

    const ITEM_HEIGHT = 48;       
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handlemenuIconClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = (e, seletedmenuItem) => {
        if((typeof seletedmenuItem === "string") &&
            (seletedmenuItem !== "backdropClick")){
            handleClick(e, seletedmenuItem);
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
        <AddCircleIcon />
      </IconButton>
      <Menu id="long-menu" anchorEl={anchorEl}
                                  keepMounted open={open} onClose={handleClose}
                                  PaperProps={{ style: { maxHeight: 40 * 4.5,width: "35ch" }}}
      >
        {menuOptions.map((option) => {
            switch (option) {
                case EnumPostCategory.FitRecipesPost:
                    return <MenuItem key={option} selected={option === menuOptions[0]} onClick={(e)=> handleClose(e, option)}>
                            <div style={{
                                display: "flex", flexDirection: "row", 
                                height: "20px", width: "100%", fontSize: "18px"
                                }}>
                                <span style={{alignItems: "left", width:"90%"}}>{option}</span>
                                <span style={{alignItems: "left",width: "10%"}}><CoffeeIcon/></span>
                            </div>
                    </MenuItem>
                break;

                case EnumPostCategory.FitStoryboardsPost:
                    return <MenuItem key={option} selected={option === menuOptions[0]} onClick={(e)=> handleClose(e, option)}>
                            <div style={{
                                display: "flex", flexDirection: "row", 
                                height: "20px", width: "100%", fontSize: "18px"
                                }}>
                                <span style={{alignItems: "left", width:"90%"}}>{option}</span>
                                <span style={{alignItems: "left",width: "10%"}}><FilterTwoToneIcon/></span>
                            </div>
                    </MenuItem>
                break;

                case EnumPostCategory.FitnessProductsPost:
                    return <MenuItem key={option} selected={option === menuOptions[0]} onClick={(e)=> handleClose(e, option)}>
                            <div style={{
                                display: "flex", flexDirection: "row", 
                                height: "20px", width: "100%", fontSize: "18px"
                                }}>
                                <span style={{alignItems: "left", width:"90%"}}>{option}</span>
                                <span style={{alignItems: "left",width: "10%"}}><FitnessCenterIcon/></span>
                            </div>
                    </MenuItem>
                break;

                case EnumPostCategory.FitnessServicesPost:
                    return <MenuItem key={option} selected={option === menuOptions[0]} onClick={(e)=> handleClose(e, option)}>
                            <div style={{
                                display: "flex", flexDirection: "row", 
                                height: "20px", width: "100%", fontSize: "18px"
                                }}>
                                <span style={{alignItems: "left", width:"90%"}}>{option}</span>
                                <span style={{alignItems: "left",width: "10%"}}><SettingsAccessibilityIcon/></span>
                            </div>
                    </MenuItem>
                break;

                case EnumPostCategory.TransformationStoriesPost:
                    return <MenuItem key={option} selected={option === menuOptions[0]} onClick={(e)=> handleClose(e, option)}>
                            <div style={{
                                display: "flex", flexDirection: "row", 
                                height: "20px", width: "100%", fontSize: "18px"
                                }}>
                                <span style={{alignItems: "left", width:"90%"}}>{option}</span>
                                <span style={{alignItems: "left",width: "10%"}}><ManIcon style={{fontSize: '25px'}}/></span>
                            </div>
                    </MenuItem>
                break;

                case EnumPostCategory.FitRecipesPost:
                    return <MenuItem key={option} selected={option === menuOptions[0]} onClick={(e)=> handleClose(e, option)}>
                            <div style={{
                                display: "flex", flexDirection: "row", 
                                height: "20px", width: "100%", fontSize: "18px"
                                }}>
                                <span style={{alignItems: "left", width:"90%"}}>{option}</span>
                                <span style={{alignItems: "left",width: "10%"}}><CoffeeIcon/></span>
                            </div>
                    </MenuItem>
                break;

            }
        })}
      </Menu>

    </div>
  )
}

export default PostCategoryMenuComponent