import { useState } from 'react';
import ChatSpace from './components/ChatSpace';

function App() {
  const [space, setSpace] = useState('save');

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">拓也両性界面活性剤 チャット</h1>
      <div className="mb-4">
        <button
          onClick={() => setSpace('save')}
          className={`px-4 py-2 rounded ${space==='save'?'bg-blue-500 text-white':'bg-gray-300'}`}
        >
          保存スペース
        </button>
        <button
          onClick={() => setSpace('daily')}
          className={`px-4 py-2 rounded ml-2 ${space==='daily'?'bg-blue-500 text-white':'bg-gray-300'}`}
        >
          会話スペース
        </button>
      </div>
      <ChatSpace space={space} />
    </div>
  );
}

export default App;
