import { graphql } from 'graphql';
import { schema } from '../../schema';
import { Wallet } from '../../model';
import { getContext, setupTest } from '../../../test/helper';

beforeEach(async () => setupTest());

describe('SaveWalletMutation', () => {
  it('should create a new record if the parameters are valid', async () => {
    const name = 'My Wallet';
    const balance = 999.99;

    const query = `
      mutation M {
        SaveWallet(input: {
          name: "${name}",
          balance: ${balance}
        }) {
          newWallet,
          error
        }
      }
    `;

    const rootValue = {};
    const context = getContext();

    const result = await graphql(schema, query, rootValue, context);
    const { SaveWallet } = result.data;

    expect(SaveWallet.error).toBeNull();
    expect(SaveWallet.newWallet).toBeDefined();
    expect(SaveWallet.newWallet).not.toBeNull();

    expect(SaveWallet.newWallet).toHaveProperty('name', name);
    expect(SaveWallet.newWallet).toHaveProperty('balance', balance);
  });

  it('should update the record if it already exists', async () => {
    const wallet = new Wallet({
      name: 'My Leather Wallet',
      description: 'I know this is a virtual wallet, ok?',
      balance: 99.99,
    });

    await wallet.save();

    const name = 'Virtual Wallet';
    const description = "Now it's ok";
    const balance = 999.99;

    const query = `
      mutation M {
        SaveWallet(input: {
          _id: "${wallet._id}",
          name: "${name}",
          description: "${description}",
          balance: ${balance}
        }) {
          newWallet,
          error
        }
      }
    `;

    const rootValue = {};
    const context = getContext();

    const result = await graphql(schema, query, rootValue, context);
    const { SaveWallet } = result.data;

    expect(SaveWallet.error).toBeNull();

    expect(SaveWallet.newWallet).toHaveProperty('name', name);
    expect(SaveWallet.newWallet).toHaveProperty('description', description);
    expect(SaveWallet.newWallet).toHaveProperty('balance', balance);

    expect(SaveWallet.newWallet).toHaveProperty('_id', wallet._id);
  });
});
