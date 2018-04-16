// @flow

import mongoose, { SchemaTypes } from 'mongoose';
import Wallet from './Wallet';

export const EXEPENSE = 'expense';
export const REVENUE = 'revenue';

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
      enum: [EXEPENSE, REVENUE],
    },
    date: {
      type: Date,
      required: true,
    },
    wallet: {
      type: SchemaTypes.ObjectId,
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

Schema.post('save', async transaction => {
  const wallet = await Wallet.findById(transaction.wallet);

  if (transaction.type === EXEPENSE) {
    wallet.balance -= transaction.value;
  }

  if (transaction.type === REVENUE) {
    wallet.balance += transaction.value;
  }

  await wallet.save();
});

export default mongoose.model('Transaction', Schema);
