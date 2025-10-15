import { useState } from "react"


const ListOfFilesAndFolders = ({ data, addNodeToTree, deleteNodeFromTree }) => {
    const [isExpanded, setIsExpanded] = useState({});

    const toggleExpanded = (name) => {
        setIsExpanded(prev => ({ ...prev, [name]: !prev[name]}))
    }

  return (
    <div className="container">
        {data.map(node => (
            <div key={node.id}>

                <div className={`node-item ${node.isFolder ? 'folder' : 'file'}`} onClick={() => toggleExpanded(node.name)}>
                    <div className="node-item-content">
                        {node?.isFolder && 
                            <span className={`expand-toggle ${isExpanded ? 'expanded' : 'collapsed'}`}>
                                {isExpanded?.[node.name] ? 
                                    <img className="toggle-icon" src="https://freepngimg.com/save/24837-down-arrow-photo/512x512"/> : 
                                    <img className="toggle-icon" src="https://www.freeiconspng.com/uploads/orange-right-arrow-icon-18.png"/>
                                }
                            </span>
                        }

                        <img src={`${node.isFolder ? 
                            'https://www.iconpacks.net/icons/2/free-folder-icon-1484-thumb.png' : 
                            'https://images.freeimages.com/fic/images/icons/2813/flat_jewels/512/file.png'}`} 
                            alt="File Folder Icon" 
                            className={node.isFolder ? 'folder-icon' : 'file-icon'}
                        />
                        <span className="node-name">{node.name}</span>

                        <div className="node-actions">
                            {node?.isFolder && 
                                <span onClick={() => addNodeToTree(node.id)}>
                                    <img 
                                        src="https://cdn-icons-png.flaticon.com/512/4732/4732459.png" 
                                        alt="Add Icon" 
                                        className="action-icon add-icon" 
                                    />
                                </span>
                            }
                    
                            <span onClick={() => deleteNodeFromTree(node)}>
                                <img 
                                    src="https://cdn-icons-png.flaticon.com/512/3161/3161358.png" 
                                    alt="Delete Icon" 
                                    className="action-icon delete-icon" 
                                />
                            </span>
                        </div>
                    </div>

                </div>
                
                

                { isExpanded?.[node.name] && node?.children && 
                    <div className="children-container">
                        <ListOfFilesAndFolders 
                            data={node.children} 
                            addNodeToTree={addNodeToTree} 
                            deleteNodeFromTree={deleteNodeFromTree}
                        />
                    </div>
                }
            </div>
        ))}
    </div>
  )
}

export default ListOfFilesAndFolders