// @flow

import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
    value: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
      enum: ['expense', 'revenue'],
    },
    date: {
      type: Date,
      required: true,
    },
    wallet: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Wallet',
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'transaction',
  },
);

export default mongoose.model('Transaction', Schema);
