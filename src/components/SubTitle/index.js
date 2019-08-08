import React from 'react';
import styles from './index.module.less';
const SubTitle = (props) => { 
  return (
    <div className={styles.subtitle}>
      <h3>{props.title}</h3>
      {props.children}
    </div>
  )
}

export default SubTitle;