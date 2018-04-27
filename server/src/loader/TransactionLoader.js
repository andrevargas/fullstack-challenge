// @flow
import DataLoader from 'dataloader';
import { connectionFromMongoCursor, mongooseLoader } from '@entria/graphql-mongoose-loader';

import type { ConnectionArguments } from 'graphql-relay';
import type { GraphQLContext } from '../TypeDefinition';

import TransactionModel, { REVENUE, EXEPENSE } from '../model/Transaction';

type TransactionType = {
  id: string,
  _id: string,
  value: number,
  description: string,
  type: EXEPENSE | REVENUE,
  date: string,
};

export default class Transaction {
  constructor(data: TransactionType) {
    this.id = data.id;
    this._id = data._id;
    this.value = data.value;
    this.description = data.description;
    this.type = data.type;
    this.date = data.date;
  }
}

export const getLoader = () => new DataLoader(ids => mongooseLoader(TransactionModel, ids));

export const load = async (context: GraphQLContext, id: string): Promise<?Transaction> => {
  if (!id) {
    return null;
  }

  let data;
  try {
    data = await context.dataloaders.TransactionLoader.load(id);
  } catch (err) {
    return null;
  }

  return new Transaction(data);
};

export const clearCache = ({ dataloaders }: GraphQLContext, id: string) =>
  dataloaders.TransactionLoader.clear(id.toString());

export const loadTransactions = async (context: GraphQLContext, args: ConnectionArguments) => {
  const transactions = TransactionModel.find().sort({ createdAt: -1 });
  return connectionFromMongoCursor({
    cursor: transactions,
    context,
    args,
    loader: load,
  });
};
