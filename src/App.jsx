// import axios from 'axios';
// import { useEffect, useState } from 'react';
import './App.css'
import Home from './pages/Home'


function App() {
  // const [location, setLocation] = useState({ lat: 40.3909, lng: 49.8759 });
  // const [ip, setIp] = useState("188.253.229.29");
  // useEffect(() => {
  //   axios
  //     .get(`https://ipapi.co/${ip}/json/`)
  //     .then(
  //       (res) => (
  //         setData(res.data),
  //         setLocation({ lat: res.data.latitude, lng: res.data.longitude })
  //       )
  //     );
  // }, []);
  // console.log(data)

  return (
 <>
<Home/>
 </>
  )
}

export default App
