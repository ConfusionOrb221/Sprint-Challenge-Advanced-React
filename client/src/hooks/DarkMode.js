import { useEffect, useState } from 'react';

const useDarkMode = (mode) =>{
    const [darkMode, setDarkMode] = useState(mode);

    useEffect(() =>{
        const body = document.querySelector('body');
        if(darkMode){
            body.className = "dark-mode";
        }
        else{
            body.className = "";
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
};

export default useDarkMode;