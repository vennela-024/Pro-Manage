import React from 'react'
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


export const SidebarData = [
    {
        title: "Board",
        icon: <SpaceDashboardOutlinedIcon/>,
        link: "/dashboard"
    },
    {
        title: "Analytics",
        icon: <LeaderboardOutlinedIcon/>,
        link: "/analytics"
    },
    {
        title: "Settings",
        icon: <SettingsOutlinedIcon/>,
        link: "/settings"
    }
] 
