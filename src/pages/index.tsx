import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <h1>ENV VARS SPIKE</h1>
      <ul>
        <li>
          <Link href="/props-example">
            Env vars passed from server to client via getServerSideProps
          </Link>
        </li>
        <li>
          <Link href="/env-context-example">
            Env vars passed from server to client via context
          </Link>
        </li>
      </ul>
    </div>
  );
}
