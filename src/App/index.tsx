import * as React from 'react'

import styles from './app.scss'

class AppCmp extends React.Component {
  render() {
    return (
          <div className={styles.title}>
            <h1>Hi React App</h1>
          </div>
    )
  }
}

export const App = AppCmp
