import React from 'react'
import styles from './Settings.module.css'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Settings() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Settings</h2>
      <div className={styles.form}>
      <input type="text" placeholder='Name'/>
      <input type="text" placeholder='Email'/>
      <input type="text" placeholder='Old Password'/>
      <input type="text" placeholder='New Password'/>
      <button>Update</button>
      </div>
    </div>
  )
}
