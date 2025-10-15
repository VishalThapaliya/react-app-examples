import { useState } from 'react';
import explorerData from './data.json';
import ListOfFilesAndFolders from './ListOfFilesAndFolders';
import './FileFolderExplorer.css';

const FileFolderExplorer = () => {
    const [data, setData] = useState(explorerData);
    

    const addNodeToTree = (parentId) => {
        const folderName = prompt('Please give a name to the folder.');

        const updateTree = (list) => {
            return list.map(node => {
                if(node.id === parentId) {
                    return {
                        ...node,
                        children: [ ...node.children, {id: Date.now(), name: folderName, isFolder: true, children: []}]
                    }
                }

                if(node.children) {
                    return {
                        ...node,
                        children: updateTree(node.children)
                    }
                }
                return node;
            });
        };
        setData(prev => updateTree(prev));
    }

    const deleteNodeFromTree = (item) => {
        const confirmation = window.confirm(`Do you want to delete ${item.name} ${item.isFolder ? 'folder' : 'file'}?`);

        if(confirmation) {
            const updateTree = (list) => {
                return list.filter(node => node.id !== item.id).map(node => {
                    if(node.children) {
                        return {
                            ...node,
                            children: updateTree(node.children)
                        }
                    }

                    return node;
                })
            }

            setData(prev => updateTree(prev));
        }
    }

  return (
    <section className='explorer-container'>
        <div className='file-folder-explorer'>
            <div className="file-explorer-header">
                <img 
                    src="https://files.softicons.com/download/toolbar-icons/flatastic-icons-part-1-by-custom-icon-design/png/512x512/folder.png" 
                    alt="File Explorer Icon" 
                    className='header-icon'
                />

                <div>
                    <h2 className='header-title'>File/Folder Explorer</h2>
                    <p className="header-subtitle">Manage your project structure</p>
                </div>
            </div>

            <ListOfFilesAndFolders data={data} addNodeToTree={addNodeToTree} deleteNodeFromTree={deleteNodeFromTree} />
        </div>

    </section>
  )
}

export default FileFolderExplorer