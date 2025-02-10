import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios";



interface FetchResponse<T> {
        count: number;
        results: T[];
}
    
    

const useData = <T>(endpoint: string) => {

    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const controller = new AbortController();
        
        setIsLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal})
            .then(response => {
                setData(response.data.results)
                setIsLoading(false);
            })
            .catch(err => {
                if (err instanceof CanceledError) {
                    console.log('error type cancel');
                    return;
                } 
                setError(err.message)
                setIsLoading(false);
            });

        return () => controller.abort();
    }, [])

    return {data, error, isLoading}
}

export default useData