import "../Home.css";

function Banner() {
  return (
    <img
      className="top"
      srcSet="img/banner-320.png 580w, img/banner2.png "
      sizes="(max-width: 540px) 580px"
      alt="Banner"
    ></img>
  );
}

export default Banner;
