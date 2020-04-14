import * as React from 'react'
import { connect } from 'react-redux'

import styles from './app.scss'

import { State } from 'store'
import { Action, actionEmpty, Actions } from 'actions'
import { Header } from 'Components/Header'

type TStateToprops = {
  header: string,
}

type TDispatchedProps = {
  sendHi(): Action,
}

type TProps = TStateToprops & TDispatchedProps

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
            <button className={styles.Title__button_hi} onClick={sendHi}>Send Hi</button>
          </div>
        </Header>
      </div>
    )
  }
}

const StateToProps = (state: State): TStateToprops => ({
  header: state.headerState.header,
})

const dispatchToProps: TDispatchedProps = {
  sendHi: (): Action => actionEmpty(Actions.SEND_HI),
}

export const App = connect(StateToProps, dispatchToProps)(AppCmp)
