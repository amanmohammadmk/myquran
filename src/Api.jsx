import React, { useEffect, useState } from 'react';

const QuranComponent = ({ edition }) => {
  const [quranData, setQuranData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://api.alquran.cloud/v1/quran/${edition}`);
        const data = await response.json();
        setQuranData(data);
      } catch (error) {
        console.error('Error fetching Quran data:', error);
      }
    };

    fetchData();
  }, [edition]);

  return (
    <div>
      {quranData ? (
        <div>
          {/* Render your data here */}
          <p>{quranData.edition}</p>
          {/* Additional data rendering based on the API response */}
        </div>
      ) : (
        <p>Loading Quran data...</p>
      )}
    </div>
  );
};

export default QuranComponent;
