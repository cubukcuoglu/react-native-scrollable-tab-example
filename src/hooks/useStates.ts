import { useState, useRef, useEffect } from "react"

const useStates = <T>(initialState: T) => {
    type ISetState<T> = {
        [K in keyof T]?: T[K];
    };

    const [state, setStateData] = useState({ ...initialState });
    const stateRef = useRef({ ...initialState });

    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        return () => { isMounted.current = false };
    }, []);

    const setState = (data: ISetState<T>) => {
        if (!isMounted.current) return;

        stateRef.current = { ...stateRef.current, ...data };
        setStateData({ ...stateRef.current });
    };

    return { state, stateRef, setState }
};

export { useStates }