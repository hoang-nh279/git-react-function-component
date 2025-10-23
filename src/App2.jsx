import { useEffect, useState } from "react";

function App2() {
    const [color, setColor] = useState("black");

    useEffect(() => {
        const timer = setTimeout(() => {
            setColor("pink");
        }, 3000);

        // Cleanup nếu component bị unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div
                style={{
                    backgroundColor: color,
                    paddingTop: 20,
                    width: 400,
                    height: 80,
                    margin: "auto"
                }}
            />
        </div>
    );
}

export default App2;