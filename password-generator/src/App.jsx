import { useCallback, useEffect, useRef, useState } from "react";

function App() {
    const [length, setLength] = useState(6);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(true);
    const [password, setPassword] = useState("");
    // useRef Hook
    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEZGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "01234567890454532054354354543";
        if (charAllowed) str += "!@#$%^&*()_+@#$%^&*&^%$##";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
        console.log(str);
    }, [length, numberAllowed, charAllowed, setPassword]);
    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charAllowed, passwordGenerator]);

    const copyPasswordToClip = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
    }, [password]);
    return (
        <>
            <div className="text-white w-full max-w-md mx-auto bg-purple-600 rounded-lg p-6">
                <h1 className="text-4xl text-center text-bold">
                    Password Generator
                </h1>
                <div className="w-full flex justify-between py-4 read-only:">
                    <input
                        value={password}
                        type="text"
                        className="flex-1 py-1 px-3 outline-none text-gray-800 font-bold"
                        ref={passwordRef}
                    />
                    <button
                        className="py-4 px-6 bg-slate-600 hover:bg-slate-300 hover:text-black transition-all duration-300"
                        onClick={copyPasswordToClip}
                    >
                        Copy
                    </button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1">
                        <input
                            type="range"
                            min={6}
                            max={30}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => {
                                setLength(e.target.value);
                            }}
                        />
                        <span>{`length(${length})`}</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numberAllowed}
                            id="numberInput"
                            onChange={() => {
                                setNumberAllowed(!numberAllowed);
                            }}
                        />
                        <span>number</span>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            id="numberInput"
                            onChange={() => {
                                setCharAllowed(!charAllowed);
                            }}
                        />
                        <span>character</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
