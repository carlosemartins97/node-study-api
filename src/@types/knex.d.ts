// eslint-disable-next-line
import { Knex } from 'knex';

declare module 'knex/types/tables' {
  export interface Tables {
    transactions: {
      amount: number,
      title: string,
      id: string,
      created_at: string,
      session_id?: string
    }
  }
}

