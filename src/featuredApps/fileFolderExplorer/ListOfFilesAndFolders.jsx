import { useState } from 'react';
import './FileFolderExplorer.css';

const ListOfFilesFolderComponent = ({ data, addNodeToList }) => {
    const [isExpanded, setIsExpanded] = useState({});

    const toggleExpanded = (name) => {
        setIsExpanded(prev => ({...prev, [name]: !prev[name]}));
    };

    return (
        <div className='container'>
            {data.map(node => (
                <div key={node.id}>
                    {node?.isFolder && (
                        <span 
                            className='expand' 
                            onClick={() => toggleExpanded(node.name)}
                        >
                            {isExpanded?.[node.name] ? '+ ' : '- '}
                        </span>
                    )}
                    <span>{node.name}</span>
                    { node?.isFolder && 
                        <span onClick={() => addNodeToList(node.id)}>
                            <img src="https://cdn-icons-png.flaticon.com/512/4732/4732459.png" 
                                alt="icon" 
                                className='icon' 
                            />
                        </span>}
                    {!isExpanded?.[node.name] && node?.children && <ListOfFilesFolderComponent data={node.children} addNodeToList={addNodeToList}/>}
                </div>
            ))}
        </div>
    )
};

export default ListOfFilesFolderComponent;