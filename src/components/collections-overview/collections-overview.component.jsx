import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './collections-overview.styles.scss';

import CollectionPreview from '../collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';


const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
})

const CollectionsOverview=({collections})=>(
    <div className='collections-overview'>
        {collections
            .map(({id,...otherCollectionProps})=>(
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

export default connect(mapStateToProps)(CollectionsOverview);