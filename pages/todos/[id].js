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

const TodoDetails = () => {
  return (
    <>
      <h1>Details</h1>
    </>
  );
};

export default TodoDetails;
