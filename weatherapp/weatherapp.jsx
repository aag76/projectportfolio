import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  async function fetchCoordinates(city) {
    const url = 'https://geocoding-api.open-meteo.com/v1/search';
    try {
      const response = await axios.get(url, { params: { name: city } });
      const result = response.data.results?.[0];
      if (!result) throw new Error('Location not found.');
      return { latitude: result.latitude, longitude: result.longitude };
    } catch {
      throw new Error('Could not fetch location coordinates.');
    }
  }

  async function fetchHistoricalWeather(latitude, longitude, date) {
    const url = 'https://archive-api.open-meteo.com/v1/archive';
    const params = {
      latitude,
      longitude,
      start_date: date,
      end_date: date,
      daily: 'temperature_2m_max,temperature_2m_min,precipitation_sum',
      timezone: 'auto'
    };

    try {
      const response = await axios.get(url, { params });
      return response.data.daily;
    } catch {
      throw new Error('Could not fetch weather data.');
    }
  }

  const handleFetch = async () => {
    setError('');
    setWeather(null);
    if (!date || !location) {
      setError('Please enter both a date and location.');
      return;
    }

    try {
      const coords = await fetchCoordinates(location);
      const data = await fetchHistoricalWeather(coords.latitude, coords.longitude, date);
      setWeather({ ...data, location });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '3rem auto',
      fontFamily: 'Georgia, serif',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
      backgroundColor: '#fdfdfd'
    }}>
      <h1 style={{
        fontSize: '2rem',
        marginBottom: '1rem',
        textAlign: 'center',
        color: '#2c3e50'
      }}>
        📜 Historical Weather Archive
      </h1>

      <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
            Location:
          </label>
          <input
            type="text"
            placeholder="e.g. London"
            value={location}
            onChange={e => setLocation(e.target.value)}
            style={{
              padding: '0.5rem',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ fontWeight: 'bold', marginRight: '0.5rem' }}>
            Date:
          </label>
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            style={{
              padding: '0.5rem',
              fontSize: '1rem',
              borderRadius: '5px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        <button
          onClick={handleFetch}
          style={{
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            borderRadius: '5px',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Fetch Weather
        </button>
      </div>

      {error && (
        <div style={{
          color: '#c0392b',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          {error}
        </div>
      )}

      {weather && (
        <div style={{
          backgroundColor: '#ecf0f1',
          padding: '1rem',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: '0.5rem' }}>
            📍 {weather.location} — 📅 {date}
          </h2>
          <p><strong>🌡️ Max Temp:</strong> {weather.temperature_2m_max[0]} °C</p>
          <p><strong>🌡️ Min Temp:</strong> {weather.temperature_2m_min[0]} °C</p>
          <p><strong>🌧️ Precipitation:</strong> {weather.precipitation_sum[0]} mm</p>
        </div>
      )}
    </div>
  );
}

export default App;
