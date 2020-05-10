import { Fetch } from 'wmkit';


/**
 * 商家列表
 */
export const fetchStoreList = (obj) => Fetch('/stores/more', {
  method: 'POST',
  body: JSON.stringify(obj),
});
