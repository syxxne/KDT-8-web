import img from "./pngwing.com.png";
import "./Worm.scss";

// function 컴포넌트명 {} or const 컴포넌트명 = () => {}
function Worm() {
  return (
    <>
      <div className="parent">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="grass">
          <img src={img} width="350px" height="100px" alt="pngwing.com" />
        </div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="black"></div>
        <div className="white"></div>
        <div className="circle circle5"></div>
      </div>
    </>
  );
}

export default Worm;
