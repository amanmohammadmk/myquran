import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


function Voice() {
    const [ayahs, setAyahs] = useState([]);
    const [number, setnumber] = useState();
    const [name, setname] = useState();


    const fetchAyahs = async () => {
        try {
            const response = await fetch(`http://api.alquran.cloud/v1/surah/${number}/ar.alafasy`);
            const data = await response.json();
            console.log(data);

            if (data && data.data && data.data.ayahs) {
                setAyahs(data.data.ayahs);
            } else {
                console.error('No Ayahs data found in the API response.');
            }

            if (data && data.data && data.data.englishName) {
                setname(data.data.englishName);
            }
        } catch (error) {
            console.error('Error fetching Ayahs data:', error);
        }
    };


    const handleInputChange = (e) => {
        setnumber(e.target.value);
    };

    return (
        <div>
            <div style={{ width: "100%", height: "auto" }} className='bg-info p-3 text-white' >
                <Link style={{ textDecoration: "none", color: "white" }} to={'/'}>
                    <h2 style={{ textDecoration: "none", color: "white" }}>Quran.com</h2>
                </Link>
            </div>

            <p className='container text-center mt-5'>On this page, you have the power to delve into the beauty of the Quran by entering the chapter number of your choice. With just a simple input, you'll gain access to the each Ayah along with the soothing recitation by various Alafasy. Immerse yourself in the verses, explore their beauty, and experience the spiritual journey of the Quran with the accompanying audio for each Ayah. Discover the wisdom and guidance of the Quran at your fingertips. Enter a chapter number and let the exploration begin</p>

            <div className='container d-flex mt-4 mb-3 gap-5'>
                <Form.Label htmlFor="inputPassword5"></Form.Label>
                <Form.Control
                    type="text"
                    value={number}
                    placeholder='search by surah number'
                    onChange={handleInputChange}
                />
                <button className='btn btn-info' onClick={fetchAyahs}>Search</button>


            </div>

          

            <h1 className='container'>{name}</h1>
            {ayahs.map((ayah, index) => (
                <div key={index} style={{ width: "90%", height: "auto" }} className='p-3 bg-white rounded container mt-4 shadow-lg text-center d-flex flex-column justify-content-center align-items-center'>

                    <p>{index + 1}: {ayah.text}</p>
                    <audio className='text-clack fs-5 mt-3 mb-3' controls src={ayah.audio} />

                </div>
            ))}
        </div>
    );
}

export default Voice;
