import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      //   router.go(-1);
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className='not-found'>
      <h1 className={styles.title}>Oooops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the <Link href='/'>Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
