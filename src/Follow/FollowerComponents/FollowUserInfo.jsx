

import { DisabledByDefault } from '@mui/icons-material';
import { Avatar, Box, Skeleton, Typography } from '@mui/material';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
// import PropTypes from 'prop-types'


const FollowUserInfo = ({whatsapp_number, user_name}) =>{

    const [picinfo, setpicinfo] = useState("");
    
    useEffect(()=>{
        setTimeout(() => {
            let disppicinfo = "/images/img" + (Math.floor(Math.random() * 4) + 1) +".jpg";
            if("" !== whatsapp_number){
                setpicinfo(disppicinfo);
            }
        }, 2000);
    },[whatsapp_number]);

  return (
    <div>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>

            <Box sx={{ margin: 1 }}>
            {("" === picinfo) ? (
                <Skeleton variant="circular" animation="wave" >
                    <Avatar alt='f' src={null}/>
                </Skeleton>
            ) : (
                <Avatar src={picinfo} />
            )}
            </Box>

            <Box sx={{ width: '100%' }}>
            {("" === picinfo) ? (
                <Skeleton width="70%"  style={{height:"30px",  marginTop: "0px"}} animation="wave">
                <Typography>.....................................</Typography>
                </Skeleton>
            ) : (
                <Typography>{user_name}</Typography>
            )}
            </Box>            
        </Box>
    </div>
  )
}

// FollowUserInfo.propTypes = {
//     whatsapp_number : PropTypes.string,
//     userinfo        : PropTypes.object
// };

export default FollowUserInfo;

