


export const exerciseOptions = {
    
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '56ce8a9b51mshd8dce4cd8e17f44p1ec384jsne3c681d9679b', //ye meri api h
      // 'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',  // ye dusre wali h agar ruk jaye to comment out and use above one
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
      
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '56ce8a9b51mshd8dce4cd8e17f44p1ec384jsne3c681d9679b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData =async (url, options)=>{
    const res = await fetch(url,options);
    const data = await res.json();

    return data;
}


