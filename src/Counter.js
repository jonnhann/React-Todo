import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => {
  return (
    <table className='counter'>
      <tbody>
      <tr>
        <td>Completed</td>
        <td>{props.numberCompleted}</td>
      </tr>
      <tr>
        <td>Incompleted</td>
        <td>{props.numberIncompleted}</td>
      </tr>
      <tr>
        <td>Total Tasks:</td>
        <td>{props.totalTasks}</td>
      </tr>
    </tbody>
    </table>
  );
};

Counter.propTypes = {
  numberCompleted : PropTypes.number,
  numberIncompleted: PropTypes.number,
  totalTasks: PropTypes.number,
}

export default Counter;
