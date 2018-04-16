// @flow

import { GraphQLObjectType } from 'graphql';

import LoginEmail from '../mutation/LoginEmailMutation';
import RegisterEmail from '../mutation/RegisterEmailMutation';
import ChangePassword from '../mutation/ChangePasswordMutation';
import SaveWallet from '../mutation/SaveWalletMutation';
import SaveTransaction from '../mutation/SaveTransactionMutation';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // auth
    LoginEmail,
    RegisterEmail,
    ChangePassword,
    SaveWallet,
    SaveTransaction,
  }),
});
