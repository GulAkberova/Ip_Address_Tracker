import React from "react";

function Information(props) {
    const { data } = props
  return (
    <>
      <section className="info_bigdiv">
        <div className="info_div">
          <div>
            <p>Ip Address</p>
            <h3>{data.ip}</h3>
          </div>
          <div>
            <p>Location</p>
            <h3>{data.location.city},{data.location.country}</h3>
          </div>
          <div>
            <p>TIMEZONE</p>
            <h3>UTC {data.location.timezone}
</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Information;
