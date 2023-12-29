import React, { useState, createContext} from 'react';

export const DataContext = createContext(null);

const DataStore = (props) => {
  const [clickedData, setClickedData] = useState({});
  const [clicked, setClicked] = useState(false);
  const [settingClose, setSettingClose] = useState(false);
  const [listClose, setListClose] = useState(false);

  return (
    <DataContext.Provider value={{ 
        clickedData, 
        setClickedData,
        clicked,
        setClicked,
        settingClose,
        setSettingClose,
        listClose,
        setListClose
        }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataStore;