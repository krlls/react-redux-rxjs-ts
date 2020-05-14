import * as React from 'react'

import styles from './index.scss'

import { Action } from 'actions'
import ReactLogo from 'svg/reactLogo.svg'
import ReduxObserbleLogo from 'svg/reduxObservable.svg'
import ReduxLogo from 'svg/reduxLogo.svg'

type OwnProps = {
  headerTitle: string,
  buttonOnClick(): Action,
  children?: any,
}

class HeaderCmp extends React.Component<OwnProps> {
  render() {
    const { headerTitle } = this.props

    return (
      <div className={styles.Header}>
        <div className={styles.Title}>
          <h1 className={styles.Title__h1}>
            {headerTitle}
          </h1>
          {this.renderLogos()}
          {this.renderButton()}
        </div>
      </div>
    )
  }

  renderButton = () => {
    const { buttonOnClick } = this.props

    return (
      <button
        className={styles.Title__button_hi}
        onClick={buttonOnClick}
      >
        Send Hi
      </button>
    )
  }

  renderLogos = () => {
    return (
      <div className={styles.Title__logo__container}>
        <div className={styles.Title__logo}>
          <img src={ReactLogo} alt={'react-logo'}/>
        </div>
        <div className={styles.Title__logo}>
          <img src={ReduxLogo} alt={'redux-logo'}/>
        </div>
        <div className={styles.Title__logo}>
          <img src={ReduxObserbleLogo} alt={'Redux-Obserble-logo'}/>
        </div>
      </div>
    )
  }
}

export const Header = HeaderCmp
