import * as React from 'react'
import { connect } from 'react-redux'

// import styles from './app.scss'

import { State } from 'store'
import { Action, actionEmpty, Actions } from 'actions'
import { Header } from './Header'
import { Readme } from './Readme'

type TStateToProps = {
  header: string,
  content: string,
}

type TDispatchedProps = {
  sendHi(): Action,
}

type TProps = TStateToProps & TDispatchedProps

class AppCmp extends React.Component<TProps> {
  render() {
    const { header, sendHi, content } = this.props

    return (
      <div>
        <Header headerTitle={header} buttonOnClick={sendHi} />
        <Readme content={content}/>
      </div>
    )
  }
}

const stateToProps = (state: State): TStateToProps => ({
  header: state.content.header,
  content: state.content.data,
})

const dispatchToProps: TDispatchedProps = {
  sendHi: (): Action => actionEmpty(Actions.SEND_HI),
}

export const App = connect(stateToProps, dispatchToProps)(AppCmp)
