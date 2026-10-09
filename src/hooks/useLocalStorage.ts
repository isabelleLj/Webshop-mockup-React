import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue);

    useEffect(() => {
        const savedValue = localStorage.getItem(key);

        if (savedValue) {
            setValue(JSON.parse(savedValue));
        }
    }, [key]);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    
    return { value, setValue };
}

export default useLocalStorage;