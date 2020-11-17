import React from 'react'
import './directory.styles.scss'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selectors'



const Directory = ({sections}) => {
  return(
    <div className='directory-menu'>
      {
        sections.map(({ id, ...otherSectionProps }) => ( //size, linkUrl,title, imageUrl,
            
            <MenuItem key={id} {...otherSectionProps}></MenuItem>
        ))
      }
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory)