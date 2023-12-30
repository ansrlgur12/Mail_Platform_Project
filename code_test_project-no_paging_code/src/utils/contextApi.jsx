import React, { useState, createContext} from 'react';

export const DataContext = createContext(null);

const DataStore = (props) => {
  const [clickedData, setClickedData] = useState({});
  const [clickAdd, setClickAdd] = useState(true);

  const [settingClose, setSettingClose] = useState(true);
  const [listClose, setListClose] = useState(false);
  const [searchClose, setSearchClose] = useState(false);

  const [updateData, setUpdateData] = useState([]);
  const [change, setChange] = useState(false);
  
  const [searchValue, setSearchValue] = useState([]);

  return (
    <DataContext.Provider value={{ 
        clickedData, 
        setClickedData,
        settingClose,
        setSettingClose,
        listClose,
        setListClose,
        clickAdd,
        setClickAdd,
        updateData,
        setUpdateData,
        change,
        setChange,
        searchValue,
        setSearchValue,
        searchClose,
        setSearchClose
        }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataStore;