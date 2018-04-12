// @flow

import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  balance: {
    type: Number,
    required: false,
  },
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
  collection: 'wallet',
});

export default mongoose.model('Wallet', Schema);
