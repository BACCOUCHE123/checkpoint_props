import React from 'react'
import PropTypes from 'prop-types';

function Profile(props) {
  return (
    <div>

            <h1 style={{color:"pink" ,textDecoration:'underline' ,size:20}}>Bonjour je m'appelle  {props.Name} et je suis {props.pro} </h1>
    </div>
  )
}
Profile.defaultProps={
  Name:"WASSILA",
  pro:"devloppreur"
}
Profile.propTypes={
  Name:PropTypes.string,
  pro :PropTypes.string,
}


export default Profile


