import React from 'react'
import styles from '../styles/Global'

const Button = ({assetUrl,link}) => {
  return (
    <div className={styles.btnBlack}
    onClick={() => window.open(link, "_blank")}
    >
      <img src={assetUrl} alt="expo icon" className={styles.btnIcon}/>
      <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
      <p className={`${styles.btnText} font-bold text-sm`}>Expo Stores</p>
    </div>
  )
}

export default Button