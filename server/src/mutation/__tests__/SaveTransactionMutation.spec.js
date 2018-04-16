import { graphql } from 'graphql';
import { schema } from '../../schema';
import { Wallet } from '../../model';
import { getContext, setupTest } from '../../../test/helper';

beforeEach(async () => setupTest());

describe('SaveTransactionMutation', () => {
  it('should create a new record if the parameters are valid', async () => {
    const value = 10;
    const description = 'Bought some React stickers';
    const type = 'EXPENSE';
    const date = new Date().toISOString();

    const wallet = new Wallet({
      name: 'My Wallet',
      balance: 1000,
    });

    await wallet.save();

    const query = `
      mutation M {
        SaveTransaction(input: {
          value: ${value},
          description: "${description}",
          type: ${type},
          date: "${date}",
          walletId: "${wallet._id}"
        }) {
          newTransaction {
            value,
            description,
            type,
            date,
            wallet {
              _id,
              name,
              balance
            }
          },
          error
        }
      }
    `;

    const rootValue = {};
    const context = getContext();

    const result = await graphql(schema, query, rootValue, context);
    const { SaveTransaction: { error, newTransaction } } = result.data;

    expect(error).toBeNull();
    expect(newTransaction).toBeDefined();
    expect(newTransaction).not.toBeNull();

    expect(newTransaction).toHaveProperty('value', value);
    expect(newTransaction).toHaveProperty('description', description);
    expect(newTransaction).toHaveProperty('type', type);
    expect(newTransaction).toHaveProperty('date', date);

    expect(newTransaction).toHaveProperty('wallet._id', wallet._id.toString());
    expect(newTransaction).toHaveProperty('wallet.name', wallet.name);
    expect(newTransaction).toHaveProperty('wallet.balance', wallet.balance - value);
  });
});
