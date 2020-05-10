import React from 'react';
import { StoreProvider } from 'plume2';

import AppStore from './store';
// import GoodsList from './component/goods-list';
import GoodsItem from './component/goods-item';


@StoreProvider(AppStore, { debug: __DEV__ })
export default class GoodsListIndex extends React.Component {
  componentDidMount() {
    this.store.init();
  }


  render() {
    return (
      <div style={{ paddingBottom: 50 }}>

        {/* 商品列表 */}
        {/* <GoodsList refresh={this.store.state().get('refresh')} /> */}
        <GoodsItem />
      </div>
    );
  }
}
