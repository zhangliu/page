import React from 'react';

const Page = React.lazy(() => import(`./pages/index`));

function App() {
  return (
    <React.Suspense fallback={<div className="ta:c mt:20">加载中...</div>}>
      <div className="d:f ai:c jc:c">
        <Page />
      </div>
    </React.Suspense>
  );
}

export default App;
