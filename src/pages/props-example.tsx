import { env } from '@/env';

export default function PropsExample(props: {
  title: string;
  somethingShared: string;
}) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.somethingShared}</p>
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
