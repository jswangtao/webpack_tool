import React from 'react';
import { Relax } from 'plume2';


@Relax
class GoodItem extends React.Component {
  static relaxProps = {
    list: 'list',
  };


  render() {
    const { relaxProps } = this.props;
    const { list } = relaxProps;
    console.log(list);
    return (
      <>
        {list.map((item, index) => <div key={index}>{item.storeName}</div>)}
      </>
    );
  }
}

export default GoodItem;
