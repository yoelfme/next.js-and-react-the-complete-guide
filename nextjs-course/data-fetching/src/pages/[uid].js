export default function UseIdPage(props) {
  return (
    <>
      <h1>{props.id}</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  console.log('Server side code')

  return {
    props: {
      id: `userid-${params.uid}`,
    },
  };
}
