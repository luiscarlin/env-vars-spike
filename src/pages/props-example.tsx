import ExampleProps from '@/components/ExampleProps';
import { env } from '@/env';

export default function PropsExample(props: {
  title: string;
  somethingShared: string;
}) {
  return (
    <div>
      <ExampleProps
        title={props.title}
        somethingShared={props.somethingShared}
      />
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
