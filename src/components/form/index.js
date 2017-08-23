import React from 'react'
import styles from './style.css'

export const FormItem = ({ children, label }) => (
  <div className={styles.formItemWrapper}>
    <label><span>{label}: </span>{children}</label>
  </div>
)
