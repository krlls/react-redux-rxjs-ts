import * as React from 'react'
import { connect } from 'react-redux'

import styles from './app.scss'

import { State } from 'store'
import { Action, actionEmpty, Actions } from 'actions'
import { Header } from 'components/Header'
import { ReactLogo, ReduxLogo } from 'svg'

type TStateToProps = {
  header: string,
}

type TDispatchedProps = {
  sendHi(): Action,
}

type TProps = TStateToProps & TDispatchedProps

class AppCmp extends React.Component<TProps> {
  render() {
    const { header, sendHi } = this.props

    return (
      <div>
        <Header>
          <div className={styles.Title}>
              <h1 className={styles.Title__h1}>
                {header}
              </h1>
            <div className={styles.Title__logo__container}>
              <div className={styles.Title__logo}>
                <ReactLogo />
              </div>
              <div className={styles.Title__logo}>
                <ReduxLogo />
              </div>
            </div>
            <button
              className={styles.Title__button_hi}
              onClick={sendHi}
            >
              Send Hi
            </button>
          </div>
        </Header>
      </div>
    )
  }
}

const stateToProps = (state: State): TStateToProps => ({
  header: state.headerState.header,
})

const dispatchToProps: TDispatchedProps = {
  sendHi: (): Action => actionEmpty(Actions.SEND_HI),
}

export const App = connect(stateToProps, dispatchToProps)(AppCmp)
