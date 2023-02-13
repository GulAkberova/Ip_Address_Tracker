import React, { useEffect, useState } from 'react'
import Information from './Information'
import Loading from './Loading';

function Search(props) {

  let {data, setData}=props

  const [value, setValue] = useState("");
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      if (change) {
          setLoading(true)
          fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_dTDi6Hf6A6iEvt5cf8S2qP56U2uIq&ipAddress=${value}`)
              .then(res => res.json())
              .then(data => {
                  if (Object.keys(data).includes("code")) {
                      setData({ error: "Not Data Found" });
                  } else {
                      setData(data)
                  }
                  setChange(false)
                  setLoading(false)
              })
      }
      // eslint-disable-next-line
  }, [change])

  const handleSumbit = (e) => {
    e.preventDefault();
    if (!value.trim().length) {
        setValue("89.219.155.176");
    }
    setChange(true)
    setData({})
}
  return (
    <>
        <section className='search_bigdiv'>
            <h1>IP Address Tracker</h1>
            <form onSubmit={(e)=>handleSumbit(e)}>
                <input value={value}
                onChange={(e)=>setValue(e.target.value)} type="text" placeholder='Search for any IP address or domain'/>
                <button><i className="fa-solid fa-angle-right"></i></button>
            </form>


            {JSON.stringify(data) !== "{}" && !Object.keys(data).includes("error") && !loading &&
                    <Information data={data} />
                }

        </section>
        {loading && <Loading />}

{Object.keys(data).includes("error") &&
    <div className="error">Please make sure enter valid IP Address or Domain name</div>
}


    </>
  )
}

export default Search