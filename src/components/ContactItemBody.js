import React from 'react';
import PropTypes from 'prop-types';

function ContactItemBody({ name, tag }) {
 return (
   <div className="contact-item__body">
     <div className="contact-item__title" contentEditable>{name}</div>
     <p className="contact-item__username">@{tag}</p>
   </div>
 );
}

ContactItemBody.propTypes = {
  name: PropTypes.string.isRequired,
  tag:  PropTypes.string.isRequired,
}

export default ContactItemBody;