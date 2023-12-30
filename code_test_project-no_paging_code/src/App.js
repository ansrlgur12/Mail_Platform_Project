import MailService from "./pages/MailService";
import './App.css';
import DataStore from "./utils/contextApi";
import MockApi from "./utils/mockApi";
import { useEffect, useState } from "react";
import { column } from "./utils/column";
import Test2 from "./components/Test2";


function App() {


    return (

        <div className="App">
            {/* <Test column={column}/> */}
            <DataStore>
                <MailService/>
                {/* <Test2/> */}
            </DataStore>
            
        </div>
    );
}

export default App;
