import React from 'react'
import styles from './styles/Sidebar.module.css'
import appName from '../assets/appName.png'
import { SidebarData} from './SidebarData'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export default function Sidebar() {

  return (
    <div className={styles.container}>
      <div className={styles.appName}><img src={appName} alt="applogo" /></div>
      <ul className={styles.SidebarList}>
        {SidebarData.map((val, key)=>{
          return <li key={key} className={styles.row} onClick={() => {window.location.pathname = val.link}}> 
          <div id={styles.icon}>{val.icon}</div>
          <div id={styles.title}>{val.title}</div>
          </li>
        })}
        <li className={styles.logout}>
          <div id={styles.icon}><LogoutOutlinedIcon/></div> 
          <div id={styles.title}>Log Out</div>
        </li>
      </ul>
    </div>
  )
}
