import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function PostCard({ postTitle }: { postTitle: string }) {
  return (
    <Link href={postTitle} passHref>
      <a>
        <div className={styles.card}>{postTitle}</div>
      </a>
    </Link>
  );
}
