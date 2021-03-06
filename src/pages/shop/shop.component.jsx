import React from 'react';
import './shop.data';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...collectionsProps}) => (
                        <CollectionPreview key={id} {...collectionsProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;