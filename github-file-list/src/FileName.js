import React from 'react';
import PropTypes from 'prop-types'

function FileName({ file }) {
    return (
        <>
            <FileIcon file={file} />
            <td className='file-name'>{file.name}</td>
        </>
    )
}

FileName.propTypes = {
    file: PropTypes.string.isRequired
}

// file icon es hijo de file name
function FileIcon({ file }) {
    let icono = 'fa-file-text-o';
    if (file.type === 'folder') {
        icono = 'fa-folder';
    }
    return (
        <td className="file-icon">
            <i className={`fa ${icono}`} /> </td>
    );

}

FileIcon.propTypes = {
    icon: PropTypes.string
}

export default FileName