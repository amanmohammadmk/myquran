import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


function More() {
  const { surahNumber, surahName } = useParams();
  const [ayahs, setAyahs] = useState([]);
  const[surahname,setSurahname]=useState();
  const [loading, setLoading] = useState(true);
  const[mean, setmean]=useState()
  const[numberof, setsumberof]=useState()
  const[revl,setrevl]=useState()

  useEffect(() => {
    const fetchAyahs = async () => {
      try {
        const response = await fetch(`http://api.alquran.cloud/v1/surah/${surahNumber}`);
        const data = await response.json();
        console.log("data",data);

        if(data && data.data && data.data.englishName){
          setSurahname(data.data.englishName)
        }

        if(data && data.data && data.data.englishNameTranslation){
          setmean(data.data.englishNameTranslation)
        }

        if(data && data.data && data.data.numberOfAyahs){
          setsumberof(data.data.numberOfAyahs)
        }

        if(data && data.data && data.data.numberOfAyahs){
          setsumberof(data.data.numberOfAyahs)
        }

        if(data && data.data && data.data.revelationType){
          setrevl(data.data.revelationType)
        }
        
        
        

        if (data && data.data && data.data.ayahs) {
          setAyahs(data.data.ayahs);
          console.log(ayahs);
        } else {
          console.error('No ayahs data found in the API response.');
        }
      } catch (error) {
        console.error('Error fetching ayahs data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAyahs();
  }, [surahNumber]);

  if (loading) {
    return  <h1 className='m-5 d-flex justify-content-center align-items-center text-center'>Loading Surahs data...</h1>;
  }

  return (
  <>
  <div style={{width:"100%",height:"auto"}} className='bg-info p-3 text-white' >
      <Link style={{textDecoration:"none",color:"white"}} to={'/'}>
      <h2 style={{textDecoration:"none",color:"white"}}>Quran.com</h2>
      </Link>
    </div>

    <div className='container p-3 mt-4'>
      <p></p>
    </div>
      <div className='container m-5 d-flex text-right flex-column '>
      <Link style={{textDecoration:"none",color:"white"}} className='mb-4' to={'/edition'}>
        <button className='btn btn-info' >Go Back </button>
      </Link>
        <h1> Surah {surahname}({mean})</h1>
        <p>Number of ayahs : {numberof}</p>
        <p>Revalation type : {revl}</p>
        <p></p>
        <div>
          {ayahs.map((ayah, index) => (
            <div style={{width:"90%",height:"auto"}} className='p-3 bg-white rounded container mt-4 shadow-lg text-center d-flex justify-content-center align-items-center'>
              <p key={ayah.number} className='text-right'>
                {index + 1}: <span className='text-clack fs-5'>{ayah.text}</span>
              </p>
            </div>
          ))}
        </div>

        
        
      </div>
  </>
  );
}

export default More;
