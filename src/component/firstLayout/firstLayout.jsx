import classes from "./firstLayout.module.css";

const FirstLayout = () => {
  return (
    <div className={classes.firstHeaderContainer}>
      <div className="d-flex" style={{ marginRight: "auto" }}>
        <div className={classes.freeContainer}>
          <img src="layer.svg" alt="layer" style={{ marginRight: "8px" }} />
          <span className="">Free Delivery</span>
        </div>
        <div className={`${classes.horizontalLine} mx-2 mx-md-3`} />
        <div>
          <span>Return Policy</span>
        </div>
      </div>
      <div>
        <span className="mx-2 mx-md-3">Login</span>
      </div>
      <div>
        <span className="mx-2 mx-md-3 d-none d-md-block">Follow US</span>
      </div>
      <div>
        <img src="faceBook.svg" alt="layer" className={classes.imgCss} />
      </div>
      <div>
        <img src="linkedin.svg" alt="layer" className={classes.imgCss} />
      </div>
      <div>
        <img src="twitter.svg" alt="layer" className={classes.imgCss} />
      </div>
      <div>
        <img src="instagram.svg" alt="layer" className={classes.imgCss} />
      </div>
    </div>
  );
};

export default FirstLayout;
