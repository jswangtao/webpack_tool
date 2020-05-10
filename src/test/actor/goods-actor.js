import { Action, Actor } from 'plume2';
// import { fromJS } from 'immutable';  //如果是引用类型，在此处可以植入immutable

export default class GoodsActor extends Actor {
  defaultState() {
    return {
      showModal: false,
      list: [],
    };
  }

  /**
   * 点击flag
   */
  @Action('goodsActor:showModal')
  setCateData(state, flag) {
    return state.set('showModal', flag);
  }

  /**
   * 商家列表
   */
  @Action('goodsActor:list')
  setListData(state, list) {
    return state.set('list', list);
  }
}
