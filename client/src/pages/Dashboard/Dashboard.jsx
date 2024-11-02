import React from 'react'
import styles from './styles/Dashboard.module.css'


export default function DashBoard() {
 
  const today = new Date();

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Welcome! Vennela</h2>
        <h3 className={styles.date}>{formattedDate}</h3>
      </div>
      <div className={styles.header2}>
        <h2>Board</h2>
        <p>Week</p>
      </div>
      <div className={styles.board}>
        <div>Backlog</div>
        <div>To do</div>
        <div>In progress</div>
        <div>Done</div>
      </div>
    </div>
  )
}










  