import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function LastSales() {
  const [sales, setSales] = useState([]);

  const { data, error } = useSWR(
    'https://nextjs-course-ad146-default-rtdb.firebaseio.com/sales.json',
    (url) => fetch(url).then(res => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      setSales(transformedSales);
    }
  }, [data]);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            {sale.username} - ${sale.volume}
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    'https://nextjs-course-ad146-default-rtdb.firebaseio.com/sales.json'
  );
  const data = await response.json();

  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return {
    props: {
      sales: transformedSales,
    },
    revalidate: 10,
  };
}
