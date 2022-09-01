import React from 'react';
import PropTypes from 'prop-types';

function ContactItemBody({ name, tag }) {
 return (
   <div className="contact-item__body">
     <h2 className="contact-item__title">{name}</h2>
     <p className="contact-item__username">@{tag}</p>
   </div>
 );
}

ContactItemBody.propTypes = {
  name: PropTypes.string.isRequired,
  tag:  PropTypes.string.isRequired,
}

export default ContactItemBody;