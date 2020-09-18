import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types'
import Time from './Time'
import CommitMessage from './CommitMessage'
import FileName from './FileName'




// todo
// eslint-disable-next-line no-lone-blocks
 
    // File list
    //     file list items
    //         file name
    //             icon
    //         commit
    //         time



// mapping over an array of objects, mapping from an existent array and creates a new one
// file list seria mi tabla principal
// este componente toma la variable files que viene del render y genera un nuevo array que es el que va a mostrar la 
// lista de archivos
const FileList = ({ files }) => (
    <table className="file-list">
        <tbody>
            {files.map(file => 
            <FileListItem key={file.id} file={file}/>
            )}
        </tbody>
    </table>
)

FileList.propTypes = {
    files: PropTypes.array
};

const FileListItem = ({ file }) => (
    <tr className='file-list-item'>
        {/* aqui renderizo las llaves del objeto que deseo desplegar */}
        <FileName file={file} />
        <CommitMessage latestCommit={file.latestCommit} />
        <td className='age'>
            <Time time={file.updated_at} />
        </td>
    </tr>

);

FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};

const testFiles = [ 
    {
        id: 1,
        name: 'src',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00", 
        latestCommit: {
            message: 'Initial commit'
        }
    }, {
        id: 2,
        name: 'tests',
        type: 'folder',
        updated_at: "2016-07-11 21:24:00", 
        latestCommit: {
            message: 'Initial commit'
        }
    }, {
        id: 3,
        name: 'README',
        type: 'file',
        updated_at: "2016-07-18 21:24:00", 
        latestCommit: {
            message: 'Added a readme'
        }
    },

]

export default FileList;

ReactDOM.render(
    <FileList files = {testFiles}/>,
    document.getElementById('root')
)
