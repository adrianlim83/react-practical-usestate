import './App.css';
import Button from "./components/Button";

function App() {
    const matrix = 3
    return (
        <div className="App">
            {Array.from<number>(Array(matrix)).map((e, i) => {
                return (<div>
                    {Array.from<number>(Array(matrix)).map((e, i) => {
                        return (<Button/>)
                    })}
                </div>)
            })}

        </div>
    );
}

export default App;
