import * as React from 'react'

import styles from './index.scss'

type OwnProps = {
  children?: any,
}

class HeaderCmp extends React.Component<OwnProps> {
  render() {
    return (
      <div className={styles.Header}>
        {this.props.children}
      </div>
    )
  }
}

export const Header = HeaderCmp
