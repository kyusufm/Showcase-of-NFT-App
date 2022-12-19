import React from 'react'

import assets from '../assets'
import styles from '../styles/Global'

const FeatureCard = ({iconUrl, iconText}) => (
  <div className={styles.featureCard}> 
  <img src={iconUrl} alt="icon"/>
  {iconText} </div>
);

const Features = () => {
  return (
    <div className={
      `${styles.bgPrimary} banner03`
    }>
      <div className={`${styles.subSection} flex-col text-center py-10`}>
        <h1 className={`${styles.h1Text} ${styles.whiteText}`}> Technologies </h1>
        <p className={`${styles.pText} ${styles.whiteText}`}> KyuNeft has been developed using cross platform technology such React-Native</p>
      </div>

      <div className={styles.flexWrap}>
        <FeatureCard iconUrl={assets.react} iconText="React Native"/>
        <FeatureCard iconUrl={assets.javascript} iconText="Javascript"/>

      </div>
    </div>
  )
}

export default Features