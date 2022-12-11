import { Suspense, useState } from 'react'
import AlwaysSuspend from './components/AlwaysSuspend';
import Loading from './components/Loading';
import Loading2 from './components/Loading2';
import './css/Search.css'

function App() {
  const [isResult, setIsResult] = useState(false);

  return (
    <div>
        <Suspense fallback={<Loading2 />}>
          <AlwaysSuspend>
            <div className='search'>
              <button onClick={() => setIsResult((prev) => !prev)}>
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
