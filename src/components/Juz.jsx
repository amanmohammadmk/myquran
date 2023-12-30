import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './quransearc.css';

function Juz() {
  const [juznumber, setJuznumber] = useState('');
  const [surahNames, setSurahNames] = useState([]);
  const[total,settotal]=useState([])

  const fetchSurah = async () => {
    try {
      const response = await fetch(`http://api.alquran.cloud/v1/juz/${juznumber}/en.asad`);
      const data = await response.json();
      console.log(data);

      if (data && data.data && data.data.ayahs && data.data.ayahs) {
        const uniqueSurahNames = Array.from(new Set(data.data.ayahs.map((ayah) => ayah.surah.englishName)));
        setSurahNames(uniqueSurahNames);
      }

      if (data && data.data && data.data.ayahs && data.data.ayahs) {
        settotal(data.data.ayahs);
      }

      

    } catch (error) {
      console.error('Error fetching surah data:', error);
    }
  };

  const totalAyahs = total.flat().length

  const handleInputChange = (e) => {
    setJuznumber(e.target.value);
  };

  return (
    <>
      <div style={{ width: "100%", height: "auto" }} className='bg-info p-3 text-white'>
        <Link style={{ textDecoration: "none", color: "white" }} to={'/'}>
          <h2 style={{ textDecoration: "none", color: "white" }}>Quran.com</h2>
        </Link>
      </div>

      <div className='container p-3 mt-4'>
        <p>Discover the beauty of the Quran, divided into 30 Juz for easy navigation and exploration. Simply enter the Juz number of your choice, ranging from 1 to 30, and unlock a wealth of knowledge. Our page provides you with a comprehensive list of all the Surahs within the selected Juz, along with their names and details. Immerse yourself in the wisdom and guidance of each Surah, allowing you to delve into the profound messages of the Quran with ease. Explore, learn, and connect with the teachings of the Quran by entering the Juz number of your interest. Let the journey begin!</p>
      </div>

      <div className='container d-flex mt-4 mb-3 gap-5'>
        <Form.Label htmlFor="inputPassword5"></Form.Label>
        <Form.Control
          type="text"
          value={juznumber}
          placeholder='search by JUZ number'
          onChange={handleInputChange}
        />
        <button className='btn btn-info' onClick={fetchSurah}>Search</button>
      </div>

      <div className='container'>
        <div>
            Total Number Of Ayahs : {totalAyahs}
          {surahNames &&
            surahNames.map((englishName, index) => (
              <p key={index} style={{ width: "90%", height: "auto" }} >
                <p className='text-right'>
                  Surah: {englishName}
                </p>
              </p>
            ))}
        </div>
      </div>
    </>
  );
}

export default Juz;
