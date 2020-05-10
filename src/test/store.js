import {
  Store,
} from 'plume2';
// import { fromJS } from 'immutable';
// import { config } from 'config';
import { Toast } from 'antd-mobile';
import { config } from 'config';
import * as webapi from './webapi';
import GoodsActor from './actor/goods-actor';


export default class AppStore extends Store {
  constructor(props) {
    super(props);
    if (__DEV__) {
      window._store = this;
    }
  }

  bindActor() {
    return [new GoodsActor()]; // 此处可放置多个actor
  }

  /**
   * 数据初始化
   */
  init = async () => {
    const data = {
      latitude: 29.55625, // mapObj.Latitude,
      longitude: 106.56927, // mapObj.Longitude,
      pageNum: 0,
      pageSize: 10,
      distance: 1000,
    };
    const res = await webapi.fetchStoreList(data);
    if (res.code === config.SUCCESS_CODE) {
      this.dispatch('goodsActor:list', res.context.storeLocalVOList);
    } else {
      Toast.info(res.message);
    }
  };

  /**
   * 弹框显示隐藏
   */
  _getProps = async () => {

  };
}
