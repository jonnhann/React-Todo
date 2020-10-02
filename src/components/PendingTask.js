import React from 'react';
import PropTypes from 'prop-types';

import TaskName from './TaskName';

const PendingTask = props => {
  if(props.name) {
    return(
      <li className="pending">
        <span>
          {props.name}
        </span>
      </li>
    )
  }
  return null;
}

PendingTask.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PendingTask;