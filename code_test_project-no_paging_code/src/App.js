import MailService from "./pages/MailService";
import './App.css';
import DataStore from "./utils/contextApi";



function App() {


    return (
        <div className="App">
            <DataStore>
                <MailService/>
            </DataStore>
        </div>
    );
}

export default App;
