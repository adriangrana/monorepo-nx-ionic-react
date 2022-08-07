import styles from './ui-header.module.less';
import { ReactComponent as Logo } from '../../assets/icons/user.svg';
import { ReactComponent as Jumbo } from '../../assets/icons/jumbo.svg';
/* eslint-disable-next-line */
export interface UiHeaderProps { }

export function UiHeader(props: UiHeaderProps) {
  return (<>
    <div className={styles.topbar}>
      <div className={styles.topbar__left}>
        <div className={styles.topbar__left__store}>
          <Jumbo className={styles.topbar__left__store__icon} /> <span>J511 · Alto las condes</span>
        </div>
      </div>
      <div className={styles.topbar__right}>
        <div className={styles.topbar__right__user}>
          <Logo />
        </div>
      </div>
    </div>
    <div className={styles.greet}>
      Hola,
    </div>
    <div className={styles.username}>
      Adrian <span role="img" aria-label=''> 👋🏼 </span>
    </div></>
  );
}

export default UiHeader;
