import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './quransearc.css';

function Ayah() {
    const [juznumber, setJuznumber] = useState('');
    const [ayahData, setAyahData] = useState(null);

    const fetchSurah = async () => {
        try {
            const response = await fetch(`http://api.alquran.cloud/v1/ayah/${juznumber}/ar.alafasy`);
            const data = await response.json();
            console.log(data);

            if (data && data.data) {
                setAyahData(data.data);
            } else {
                console.error('No ayah data found in the API response.');
            }
        } catch (error) {
            console.error('Error fetching surah data:', error);
        }
    };

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
                <p> Delve into the profound wisdom of the Quran by entering the Ayah number of your choice. Our page provides a seamless experience to explore and listen to the recitation of any Ayah in Arabic. Simply enter the desired Ayah number, and unlock the beauty of the Quranic verses, accompanied by the soul-soothing audio recitation. Immerse yourself in the divine teachings and gain a deeper understanding of the sacred text. Whether you seek reflection, recitation, or contemplation, our user-friendly interface allows you to engage with the Quran effortlessly. Discover the power of each Ayah, as you navigate through the verses with the guidance of audio recitation. Let the journey begin!</p>
             </div>

            <div className='container d-flex mt-4 mb-3 gap-5'>
                <Form.Label htmlFor="inputPassword5"></Form.Label>
                <Form.Control
                    type="text"
                    value={juznumber}
                    placeholder='search by AYAH number'
                    onChange={handleInputChange}
                />
                <button className='btn btn-info' onClick={fetchSurah}>Search</button>
            </div>

            <div className='container'>
                <div>
                    {ayahData && (
                        <div style={{ width: "90%", height: "auto" }} className='p-3 bg-white rounded container mt-4 shadow-lg text-center d-flex justify-content-center align-items-center'>
                            <p className='text-right'>
                                {ayahData.surah.englishName} ({ayahData.surah.name})<br />
                                Ayah Number: {ayahData.numberInSurah}<br />
                                <span className='text-clack fs-5 mt-3 mb-3'>{ayahData.text}</span><br />
                                <audio className='text-clack fs-5 mt-3 mb-3' controls src={ayahData.audio} />
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Ayah;
