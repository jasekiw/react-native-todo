// @flow

export type Todo = {
  text: string,
  // remote server id
  id?: number,
  // locally assigned id
  uuid: number,
  // corresponds to SYNC_ACTION
  sync_action: number,
  updated_at?: string,
  created_at?: string
}


export const SYNC_ACTION = {
  CREATE: 1,
  UPDATE: 2,
  DELETE: 3
};