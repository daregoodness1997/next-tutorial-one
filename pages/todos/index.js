import Link from 'next/link';
import React from 'react';
import styles from '../../styles/todos.module.css';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();

  return {
    props: { data: data },
  };
};

const Index = ({ data }) => {
  return (
    <div>
      <h1>All Todos </h1>

      {data.map(datum => (
        <>
          <Link key={datum.id} href={`/todos/${datum.id}`}>
            <a className={styles.single}>{datum.title}</a>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Index;
