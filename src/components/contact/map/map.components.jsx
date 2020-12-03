import React from "react"

const MapLocation = () => {
  return (
    <div style={{ width: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d883.3430095181097!2d85.3518768!3d27.674894!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f6f14b0867%3A0x9a02175c712b8410!2sJadibuti%20Pedestrian%20Bridge!5e0!3m2!1sen!2snp!4v1606984053983!5m2!1sen!2snp"
        width="100%"
        height="550"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen=""
        aria-hidden="false"
        title="institute location"
      ></iframe>
    </div>
  )
}

export default MapLocation
