import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios";

    export interface Platform {
        id: number;
        name: string;
    }

   export interface Genre {
        id: number;
        name: string;
        background_image: string;
        parent_platforms: {platform: Platform}[]
        metacritic: number;
    }

    interface GenreResponse {
        count: number;
        results: Genre[];
    }
    
    

const useGenres = () => {

    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const controller = new AbortController();
        
        setIsLoading(true);
        apiClient.get<GenreResponse>('/genres', {signal: controller.signal})
            .then(response => {
                setGenres(response.data.results)
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

    return {genres, error, isLoading}
}

export default useGenres