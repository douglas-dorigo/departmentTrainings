import { getStore, AppActions } from "../store";

export const initStoreWithActions = (actions: AppActions[]) => {
  const store = getStore()
  for (const action of actions){
    store.dispatch(action)
  }
  return store
}

export type TestCase = {
  name: string;
  actions: AppActions[];
}
