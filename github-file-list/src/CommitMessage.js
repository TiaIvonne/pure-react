import React from 'react';
import PropTypes from 'prop-types'

const CommitMessage = ({ latestCommit }) => (
    <td className='commit-message'>{latestCommit.message}</td>
);

CommitMessage.propTypes = {
    latestCommit: PropTypes.object.isRequired
};

export default CommitMessage