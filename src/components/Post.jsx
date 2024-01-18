import { Avatar } from './Avatar';
import { Comment } from './Comment'
import styles from "./Post.module.css";

export function Post(props) {
  console.log(props)
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://avatars.githubusercontent.com/u/75049024?v=4"/>
          <div className={styles.authorInfo}>
            <strong>Guilherme Kunsch</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="10 de Janeiro de 2024" dateTime="2024-01-10 23:00">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea placeholder="Deixe seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
