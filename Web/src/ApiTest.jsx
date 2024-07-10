import React, { useState, useEffect } from 'react';

function ApiTest() {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const url = 'https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=fishermans%20wharf&language=en';
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '15c31f710bmshe587124dfc6a402p110be6jsndf7effbde797',
                        'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
                    }
                };

                const response = await fetch(url, options);
                const result = await response.text();
                setWeatherData(result); // Assuming the API returns text
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {weatherData && <p>Weather Data: {weatherData}</p>}
        </div>
    );
}

export default ApiTest;
