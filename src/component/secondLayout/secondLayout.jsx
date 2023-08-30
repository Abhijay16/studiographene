import { useState } from "react";
import classes from "./secondLayout.module.css";

const SecondLayout = () => {
  const [toggle, setToggle] = useState(false);
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <>
      <div className="d-block d-md-none">
      <div className={classes.topnav}>
          <div className={classes.container}>
            <div
              className={classes.shopKartCss}
              style={{ marginRight: "auto" }}
            >
              Shopkart
            </div>
            <a>
              <img
                onClick={() => {
                  setToggle(!toggle);
                }}
                src={`${toggle ? "cross.svg" : "hamburger.svg"}`}
              />
            </a>
          </div>

          <div className={toggle ? "d-block" : "d-none"}>
            {navbar.map((item) => (
              <a key={item.id}>{item.name}</a>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.containerMain}>
        <div className={classes.shopKartCss} style={{ marginRight: "auto" }}>
          Shopkart
        </div>
        <div className={classes.txtCss}>
          <div className="d-md-block d-none" style={{ marginRight: "20px" }}>
            WISHLIST(0)
          </div>
          <div className="d-md-block d-none">BAG(0)</div>
        </div>
      </div>
      <hr className={classes.verticalLine} />
      <div className={classes.mainContainer}>
        <nav className="d-none d-md-block">
          <ul className={classes.container}>
            {navbar.map((item) => (
              <div key={item.id}>
                {item.name}
                {item.child && (
                  <ul className={classes.subnav}>
                    {item.child.map((subItem) => (
                      <li key={subItem.id} className={classes.subnavContent}>
                        <a>{subItem.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </nav>
        <div className={classes.orangeDiv}>
          <span className={classes.freshStyle}>Fresh</span>
          <span className={classes.txtStyle}>2022</span>
          <span className={classes.lookStyle}>Look</span>
          <img src="Star.png" className={classes.star} />
          <img src="jessica.png" alt="" className={classes.imgCss} />
          <div />
        </div>
      </div>
    </>
  );
};

export default SecondLayout;
