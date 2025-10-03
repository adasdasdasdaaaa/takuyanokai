import { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

export default function ChatSpace({ space }) {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000); // 5秒ごとに更新
    return () => clearInterval(interval);
  }, [space]);

  const fetchMessages = async () => {
    const res = await axios.get(`http://localhost:5000/messages/${space}`);
    setMessages(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return;
    await axios.post('http://localhost:5000/messages', {
      username: '拓也両性界面活性剤',
      content,
      space
    });
    setContent('');
    fetchMessages();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="投稿を入力"
        />
        <button className="bg-blue-500 text-white px-4 ml-2 rounded">送信</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {messages.map(msg => <Card key={msg._id} message={msg} />)}
      </div>
    </div>
  );
}
