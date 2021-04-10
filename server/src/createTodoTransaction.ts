import { ACCOUNT, NETWORK, API_URL } from './account';
import {
  Deadline,
  NetworkType,
  PlainMessage,
  TransactionHttp,
  TransferTransaction,
} from 'tsjs-xpx-chain-sdk';

const transactionHttp = new TransactionHttp(API_URL);

// Return: Transaction Hash for future references
const addTodoToXpx = (todoName: string): string => {
  const transferTransaction = TransferTransaction.create(
    Deadline.create(),
    ACCOUNT.address,
    [],
    PlainMessage.create(todoName),
    NETWORK
  );

  const generationHash = process.env.XPX_GENERATION_HASH as string;

  const signedTransaction = ACCOUNT.sign(transferTransaction, generationHash);

  transactionHttp.announce(signedTransaction);

  return signedTransaction.hash;
};

const logTransactionStatus = async (hashRef: string) => {
  // transactionHttp.getTransaction(hashRef).subscribe((transaction) => {
  //   console.log(transaction);
  // });

  const transaction = await transactionHttp.getTransaction(hashRef);
  transaction.forEach(tx => console.log(tx))
};

logTransactionStatus('E187F7D9F3A8893B434E571C997C5128901EFFF4C4A4A9F1B6EA656AE04EB52C')
