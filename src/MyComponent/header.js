import React from 'react'
import PropTypes from 'prop-types'

export default function header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" to="#">{props.title}</a>
      
     
       
    </div>
  </nav>
  )
}
header.defaultProps={
title:"Your Title Here",
searchBar:true
}

header.propTypes = {
title: PropTypes.string,
searchBar: PropTypes.bool
}
