import styles from './TagsPrato.module.scss';

import classNames from 'classnames';

import { Prato } from 'types/Prato';

export default function TagsPrato({
  category,
  size,
  serving,
  price
}: Prato) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__tipo]: true,
        [styles[`tags__tipo__${category.label.toLocaleLowerCase()}`]]: true
      })}>
        {category.label}
      </div>
      <div className={styles.tags__porcao}>
        {size}g
      </div>
      <div className={styles.tags__qtdpessoas}>
        {serving === 1 ? `Serve ${serving} pessoa` : `Serve ${serving} pessoas`}
      </div>
      <div className={styles.tags__valor}>
        R$ {price.toFixed(2)}
      </div>
    </div>
  );
}