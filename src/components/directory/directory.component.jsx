import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';

const mapStateToProps=createStructuredSelector({
    sections:selectDirectorySections
})

const Directory=({sections})=>(
            <div className="directory-menu">
                {
                    sections.map(({id,...otherSectionProps})=>(
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    

export default connect(mapStateToProps)(Directory);