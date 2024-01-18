import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './Avatar';
import { Comment } from './Comment'
import styles from "./Post.module.css";

export function Post({ author, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm 'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime="2024-01-10 23:00">
          {publishedDateRelativeToNow}
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
