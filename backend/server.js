const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Message = require('./models/Message');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/chat_site', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 投稿を取得
app.get('/messages/:space', async (req, res) => {
  const space = req.params.space; // 'save' or 'daily'
  const messages = await Message.find({ space }).sort({ createdAt: -1 });
  res.json(messages);
});

// 投稿を作成
app.post('/messages', async (req, res) => {
  const { username, content, space } = req.body;
  const msg = new Message({ username, content, space });
  await msg.save();
  res.json(msg);
});

app.listen(5000, () => console.log('Server running on port 5000'));
