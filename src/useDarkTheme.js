import { useCallback, useEffect, useState } from "react";

export default function useDarkTheme() {

    function getInitialTheme() {
        const theme = window.localStorage.getItem("theme");
        return theme === 'dark';
    }

    const [toogle, setToogle] = useState(getInitialTheme);

    useEffect(() => {
        window.localStorage.setItem('theme', toogle ? 'dark' : 'light');
        document.documentElement.classList.toggle("dark", toogle);
    }, [toogle])

    const changeTheme = useCallback(() => {
        setToogle(prevState => !prevState);
    }, [])

    return { toogle, changeTheme };
}