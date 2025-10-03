const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  username: String,
  content: String,
  space: { type: String, enum: ['save', 'daily'], default: 'daily' },
  createdAt: { type: Date, default: Date.now, expires: 86400 } // dailyのみ自動削除
});

// TTLは daily のみ効くように index を設定
messageSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400, partialFilterExpression: { space: 'daily' } });

module.exports = mongoose.model('Message', messageSchema);
