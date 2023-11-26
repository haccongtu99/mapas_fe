import { Emoji } from '@/assets'
import Button from '../Button'
import styles from './ErrorBoundary.module.scss'

export const ErrorFallback = () => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.icon}>
          4<img src={Emoji} className={styles.image} />4
        </h1>
        <Button>Back to homepage</Button>
      </div>
    </div>
  )
}
