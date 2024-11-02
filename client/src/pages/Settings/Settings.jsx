import React from 'react';
import styles from './Settings.module.css';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export default function Settings() {
  const [showOldPassword, setShowOldPassword] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false);

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Settings</h2>
      <div className={styles.form}>
        <div className={styles.inputContainer}>
          <Person2OutlinedIcon className={styles.icon} />
          <input type="text" placeholder='Name' />
        </div>
        
        <div className={styles.inputContainer}>
          <EmailOutlinedIcon className={styles.icon} />
          <input type="text" placeholder='Email' />
        </div>
        
        <div className={styles.inputContainer}>
          <LockOutlinedIcon className={styles.icon} />
          <input 
            type={showOldPassword ? 'text' : 'password'} 
            placeholder='Old Password' 
          />
          <span onClick={toggleOldPasswordVisibility} className={styles.eyeIcon}>
            {showOldPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
          </span>
        </div>
        
        <div className={styles.inputContainer}>
          <LockOutlinedIcon className={styles.icon} />
          <input 
            type={showNewPassword ? 'text' : 'password'} 
            placeholder='New Password' 
          />
          <span onClick={toggleNewPasswordVisibility} className={styles.eyeIcon}>
            {showNewPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
          </span>
        </div>

        <button className={styles.updateButton}>Update</button>
      </div>
    </div>
  );
}














// import React from 'react'
// import styles from './Settings.module.css'
// import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// export default function Settings() {
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.heading}>Settings</h2>
//       <div className={styles.form}>
//       <input type="text" placeholder='Name'/>
//       <input type="text" placeholder='Email'/>
//       <input type="text" placeholder='Old Password'/>
//       <input type="text" placeholder='New Password'/>
//       <button>Update</button>
//       </div>
//     </div>
//   )
// }
