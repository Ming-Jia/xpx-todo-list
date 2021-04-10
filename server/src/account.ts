import { Account, NetworkType } from 'tsjs-xpx-chain-sdk';

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const privateKey = process.env.XPX_PRIVATE_KEY as string;
const NETWORK = NetworkType.TEST_NET;
const ACCOUNT = Account.createFromPrivateKey(privateKey, NETWORK);
const API_URL = 'https://bctestnet1.brimstone.xpxsirius.io';

export { ACCOUNT, NETWORK, API_URL };
