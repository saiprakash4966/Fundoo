import React from 'react';
import './Header.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import DescriptionIcon from '@mui/icons-material/Description';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import { yellow } from '@mui/material/colors'; 
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
    return (
        <div className="header">
        <MenuOutlinedIcon sx={{ fontSize: 25 }} onClick=''/>
        <div className="keep">
            <DescriptionIcon sx={{ color: yellow[500], fontSize: 45 }} />
            <h1>Keep</h1>
        </div>
        <div className="search">
            <IconButton type="button" sx={{ p: '10px' }} aria-label="Search">
                <SearchIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
        </div>
        <div className="refresh">
            <RefreshIcon sx={{ fontSize: 25 }} />
            <ViewStreamOutlinedIcon sx={{ fontSize: 30 }} />
            <SettingsTwoToneIcon sx={{ fontSize: 25 }} />
        </div>
        <div className="googleaccount">
            <AppsRoundedIcon sx={{ fontSize: 25 }} />
            <AccountCircleIcon sx={{ fontSize: 40 }} />
        </div>
    </div>
    );
}

export default Header;