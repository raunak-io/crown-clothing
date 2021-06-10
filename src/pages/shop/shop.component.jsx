import React from "react";
import PreviewCollection from './../../components/preview-collection/preview-collection.component'
import SHOP_DATA from './shop.data.js'


class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

render(){
    const {collections} = this.state;
    return <div className='shop-page'>
        {
collections.map(({id,...otherProps})=>(
    <PreviewCollection key={id} {...otherProps}></PreviewCollection>
))
        }
    </div>
}

}

export default ShopPage;
