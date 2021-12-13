import React from 'react';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  const paths = data.map(datum => {
    return {
      params: { id: datum.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const datum = await res.json();

  return {
    props: {
      datum: datum,
    },
  };
};

const TodoDetails = ({ datum }) => {
  return (
    <>
      <h1>{datum.title}</h1>
      <p>{datum.completed.toString()}</p>
    </>
  );
};

export default TodoDetails;
