import { useState } from "react";
import folderData from "./data.json";

const ListOfFilesAndFolders = ({ list }) => {
  return (
    <div className="container">
      {list.map((node) => (
        <div key={node.id}>
            <span>{node.name}</span>
            { node.children && <ListOfFilesAndFolders list={node.children} />}
        </div>
      ))}
    </div>
  );
};

const FileFolderExplorer = () => {
    const [data, setData] = useState(folderData);

    return (
        <section>
            <ListOfFilesAndFolders list={data}/>
        </section>
    );
};

export default FileFolderExplorer;
