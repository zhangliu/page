import React from 'react';

const DEFAULT_COUNT = 10;

export default () => {
  const [count, setCount] = React.useState(DEFAULT_COUNT);
  let current = count;
  
  React.useEffect(() => {
    setInterval(() => {
      current = current - 1;
      if (current < 0) {
        current = DEFAULT_COUNT;
      }

      setCount(current);
    }, 1000);
  }, []);

  return (
    <div className="mt:40 fs:32">{count}</div>
  );
}
