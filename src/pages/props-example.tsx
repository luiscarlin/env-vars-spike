import { env } from '@/env';
import Link from 'next/link';

export default function PropsExample(props: {
  title: string;
  somethingShared: string;
}) {
  return (
    <div>
      <h1>{props.title}</h1>
      <Link href="/">Home</Link>
      <p>{props.somethingShared}</p>
      <button
        onClick={() => {
          alert(props.title);
        }}
      >
        Alert title
      </button>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: {
      title: env.TITLE,
      somethingShared: env.SOMETHING_SHARED,
    },
  };
}
