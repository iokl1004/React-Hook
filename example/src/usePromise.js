import { useState, useEffect } from 'react';

export default function usePromise(promiseCreator, deps) {
    const [resolved, setResolved] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const process = async () => {
        setLoading(true);
        try {
            const result = await promiseCreator();
            setResolved(result);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    // useEffect 를 사용하실 때 주의할 점!
    // useEffect 에 파라미터로 전달해주는 함수에서 async 를 사용하면 안됨.
    // useEffect 에서는 뒷정리 함수를 반환해야 하는데,
    // async 를 사용하게 되면 함수가 아닌
    // 프로미스를 반환하기 때문에 오류가 발생하게 됩니다.
    useEffect(() => {
        process();
    }, deps);


    return [loading, resolved, error];
}