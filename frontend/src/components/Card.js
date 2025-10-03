export default function Card({ message }) {
  return (
    <div className="bg-white shadow p-4 rounded m-2">
      <div className="font-bold">{message.username}</div>
      <div>{message.content}</div>
      <div className="text-xs text-gray-400">{new Date(message.createdAt).toLocaleString()}</div>
    </div>
  );
}
