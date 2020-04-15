import * as React from 'react'
import Markdown from 'markdown-to-jsx';

import styles from './index.scss'

type TOwnProps = {
  content: string,
}

class ReadmeCmp extends React.Component<TOwnProps> {
  render() {
    const { content } = this.props
    return (
      <div className={styles.Readme}>
        <div className={styles.Readme__container}>
          <Markdown>
            {content}
          </Markdown>
        </div>
      </div>
    )
  }
}

export const Readme = ReadmeCmp
