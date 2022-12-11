import { Suspense, useState } from 'react'
import AlwaysSuspend from './components/AlwaysSuspend';
import Loading from './components/Loading';
import './css/Search.css'

function App() {
  const [isResult, setIsResult] = useState(false);

  return (
    <div>
        <Suspense fallback={<Loading />}>
          <AlwaysSuspend>
            <div className='search'>
              <button className="border p-1" onClick={() => setIsResult((prev) => !prev)}>
                検索ボタン
              </button>
              {isResult &&  <p>表示結果...</p>}
            </div>
          </AlwaysSuspend>
        </Suspense>
    </div>
  );
}

export default App;
