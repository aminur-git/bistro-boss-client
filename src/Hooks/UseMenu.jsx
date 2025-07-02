import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UseMenu = () => {
     const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)

      useEffect(() => {
        axios.get('http://localhost:5000/menu')
        .then(data => {
          setMenu(data.data)
          setLoading(false)
        })
      }, []);
      return [menu, loading]
};

export default UseMenu;