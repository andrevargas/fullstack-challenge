// @flow

import mongoose from 'mongoose';

const Schema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'wallet',
  },
);

Schema.statics = {
  getTotalBalance: async function getTotalBalance() {
    const total = await this.aggregate([
      { $group: { _id: null, balance: { $sum: '$balance' } } },
      { $project: { _id: 0 } },
      { $limit: 1 },
    ]);
    return total[0];
  },
};

export default mongoose.model('Wallet', Schema);
