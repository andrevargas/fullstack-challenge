import { graphql } from 'graphql';
import { schema } from '../../schema';
import { Wallet } from '../../model';
import { getContext, setupTest } from '../../../test/helper';

beforeEach(async () => setupTest());

describe('SaveTransactionMutation', () => {
  it('should create a new record if the parameters are valid', async () => {
    const value = 20;
    const description = 'Bought some React stickers';
    const type = 'expense';
    const date = Date.now;

    const wallet = new Wallet({
      name: 'My Wallet',
      balance: 100,
    });

    await wallet.save();

    const query = `
      mutation M {
        SaveTransaction(input: {
          value: ${value},
          description: ${description},
          type: "${type}",
          date: "${date}",
          wallet: "${wallet._id}"
        }) {
          newTransaction,
          error
        }
      }
    `;

    const rootValue = {};
    const context = getContext();

    const result = await graphql(schema, query, rootValue, context);
    const { SaveWallet } = result.data;

    expect(SaveWallet.error).toBeNull();
    expect(SaveWallet.newTransaction).toBeDefined();
    expect(SaveWallet.newTransaction).not.toBeNull();

    expect(SaveWallet.newTransaction).toHaveProperty('value', value);
    expect(SaveWallet.newTransaction).toHaveProperty('description', description);
    expect(SaveWallet.newTransaction).toHaveProperty('type', type);
    expect(SaveWallet.newTransaction).toHaveProperty('date', date);
    expect(SaveWallet.newTransaction).toHaveProperty('wallet', wallet._id);
  });
});
