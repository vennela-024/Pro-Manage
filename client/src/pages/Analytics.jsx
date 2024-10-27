import React from 'react'
import styles from './Analytics.module.css'
export default function Analytics() {
  return (
    <div>
        <h1>Analytics</h1>
        <div className={styles.container}>
        <ul className={styles.list}>
          <li>Backlog Tasks <span id={styles.count}>10</span></li>
          <li>To-do Tasks <span>19</span></li>
          <li>In-progress Tasks</li>
          <li>Completed Tasks</li>
        </ul>
        <ul className={styles.list}>
          <li>Low Priority</li>
          <li>Moderate Priority</li>
          <li>High Priority</li>
          <li>Due Date Tasks</li>
        </ul>
        </div>
    </div>
  )
}
