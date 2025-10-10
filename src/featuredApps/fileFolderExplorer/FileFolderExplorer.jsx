import { useState } from 'react';
import folderData from './data.json';
import './FileFolderExplorer.css';
import ListOfFilesFolderComponent from './ListOfFilesAndFolders';

const FileFolderExplorer = () => {
    const [data, setData] = useState(folderData);

    const addNodeToList = (parentId) => {
        const folderName = prompt('Enter folder name');

        const updateTree = (list) => {
            return list.map(node => {
                if(node.id === parentId) {
                    return {
                        ...node,
                        children: [ 
                            ...node.children, 
                            { id: Date.now(), name: folderName, isFolder: true, children: []}
                        ]
                    }
                };

                if(node.children) {
                    return { ...node, children: updateTree(node.children)};
                }
                return node;
            });
        };

        setData(prev => updateTree(prev));
    }

    return (
        <section>
            <ListOfFilesFolderComponent data={data} addNodeToList={addNodeToList}/>
        </section>
    )
};

export default FileFolderExplorer;