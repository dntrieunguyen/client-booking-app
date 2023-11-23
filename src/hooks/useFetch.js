import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [err, setErr] = useState(false);

   useEffect(() => {
      const fetchData = async () => {
         setLoading(false);
         try {
            const res = await axios.get(url);
            setData(res.json());
         } catch (err) {
            console.log(err);
            setErr(err);
        }
        setLoading(false);
      };

      fetchData();
   }, [url]);

   return { data, loading, err };
}

export default useFetch;
