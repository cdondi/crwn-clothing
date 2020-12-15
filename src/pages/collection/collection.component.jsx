import React from 'react';
import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';

//import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ( { match }) => {
    console.log(match);
    return (
        <div className='collection'>
            <h2>COLLECTION PAGE</h2>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);