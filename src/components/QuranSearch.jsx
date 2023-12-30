import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './quransearc.css';

function QuranSearch() {
  const [surahnumber, setSurahnumber] = useState('');
  const [name, setName] = useState("")
  const [eng, setEng] = useState([]);
  const [arab, setArab] = useState([]);

  const fetchSurah = async () => {
    try {
      const [engresponse, araresponse] = await Promise.all([
        fetch(`http://api.alquran.cloud/v1/surah/${surahnumber}/en.asad`),
        fetch(`http://api.alquran.cloud/v1/surah/${surahnumber}`)
      ]);
      // const engresponse = await fetch(`http://api.alquran.cloud/v1/surah/${surahnumber}/en.asad`);
      const engdata = await engresponse.json();

      // const araresponse = await fetch(`http://api.alquran.cloud/v1/surah/${surahnumber}`);
      const aradata = await araresponse.json();


      if (engdata && engdata.data && engdata.data.englishName) {
        setName(engdata.data.englishName)
      }


      if (aradata && aradata.data && aradata.data.ayahs) {
        setArab(aradata.data.ayahs);
      }

      if (engdata && engdata.data && engdata.data.ayahs) {
        setEng(engdata.data.ayahs);
      }


    } catch (error) {
      console.error('Error fetching surah data:', error);
    }
  };

  const handleInputChange = (e) => {
    setSurahnumber(e.target.value);
  };

  return (
    <>
    <div style={{width:"100%",height:"auto"}} className='bg-info p-3 text-white' >
      <Link style={{textDecoration:"none",color:"white"}} to={'/'}>
      <h2 style={{textDecoration:"none",color:"white"}}>Quran.com</h2>
      </Link>
    </div>

    <div className='container p-3 mt-4'>
      <p> Enter the surah number in the provided text box, and discover the beauty and meaning of each ayah. Simply input the desired surah number, and our page will fetch the verses along with their corresponding meanings. Immerse yourself in the wisdom and guidance of the Quran with this easy-to-use search feature. Explore the profound messages of each surah at your fingertips.</p>
    </div>

      <div className='container d-flex mt-4 mb-3 gap-5'>
        <Form.Label htmlFor="inputPassword5"></Form.Label>
        <Form.Control
          type="text"
          value={surahnumber}
          placeholder='search by surah number'
          onChange={handleInputChange}
        />
        <button className='btn btn-info' onClick={fetchSurah}>Search</button>
      </div>

      <div className='container'>

        <h2>{name}</h2>

        {/* {arab.map((ayah, index) => (
          <div style={{ width: "90%", height: "auto" }} className='p-3 container mt-4 shadow-lg text-center d-flex justify-content-center align-items-center'>
            <p key={ayah.number} className='text-right'>
              {index + 1}: <span className='text-clack fs-5'>{ayah.text}</span>
            </p>
          </div>
        ))}

        {eng.map((ayah, index) => (
          <div style={{ width: "90%", height: "auto" }} className='p-3 container mt-4 shadow-lg text-center d-flex flex-column justify-content-center align-items-center'>
            <p key={ayah.number} className='text-right'>
              {index + 1}: <span className='text-clack fs-5'>{ayah.text}</span>
            </p>
          </div>
        ))} */}

        <div>
          {arab.map((ayah, index) => (
            <div className='p-3 bg-white container rounded mt-4 shadow-lg text-center d-flex flex-column justify-content-center align-items-center' key={index}>
     
              {index + 1}  <p>{ayah.text}</p>

              {eng[index] && (
                <div>
                
                  <p>{eng[index].text}</p>
                </div>
              )}
            </div>
          ))}
        </div>





      </div>
    </>
  );
}

export default QuranSearch;
