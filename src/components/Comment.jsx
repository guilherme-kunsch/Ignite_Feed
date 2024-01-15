import styles from './Comment.module.css';
import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';


export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/75049024?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Kunsch</strong>
              <time title="10 de Janeiro de 2024" dateTime="2024-01-10 23:00">Cerca de 1h atrás</time>
            </div>
            <button title='deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>
          <p>Muito bem Guilherme, parabéns!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
