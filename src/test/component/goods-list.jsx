import React, { Component } from 'react';
import { Relax } from 'plume2';


@Relax
export default class GoodsList extends Component {
  static relaxProps = {
    storeData: 'storeData',
    init: noop,
    _storeMore: noop,
    refresh: 'refresh',
    changeRefresh: noop,
    total: 'total',
    pageNum: 'pageNum',
  };


  render() {
    return (
      <div />
    );
  }
}
