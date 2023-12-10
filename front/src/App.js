import {useEffect, useState} from "react";

export const apiUrl = process.env.REACT_APP_API_URL;

function App() {
    const [answer, setAnswer] = useState("");
    useEffect(() => {
        const getAnswer = async () => {
            const response = await fetch(apiUrl + '/hello');
            const responseText = await response.json();
            setAnswer(responseText);
        };
        getAnswer().catch(console.error);
    }, []);

    return (
        <div className="App">
            <p>{answer}</p>
        </div>
    );
}

export default App;
