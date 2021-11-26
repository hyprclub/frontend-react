import React, { useState, useEffect } from "react";
import cn from "classnames";
import styles from "./Discover.module.sass";
import { Range, getTrackBackground } from "react-range";
import Slider from "react-slick";
import Icon from "../../../components/Icon";
import Items from "../../../screens/Profile/Items";
import Card from "../../../components/Card";
import Dropdown from "../../../components/Dropdown";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
// data
import { bids } from "../../../mocks/bids";

const navLinks = ["All items", "Art", "Game", "Photography", "Music", "Video"];

const dateOptions = ["Recently added", "Long added"];
const priceOptions = ["Highest price", "The lowest price"];
const likesOptions = ["Most liked", "Least liked"];
const creatorOptions = ["Verified only", "All", "Most liked"];
const sortingOptions = [];
navLinks.map((x) => sortingOptions.push(x));

const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
  <button {...props}>{children}</button>
);

const Discover = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#F80764");


  const [activeIndex, setActiveIndex] = useState(0);
  const [date, setDate] = useState(dateOptions[0]);
  const [price, setPrice] = useState(priceOptions[0]);
  const [likes, setLikes] = useState(likesOptions[0]);
  const [creator, setCreator] = useState(creatorOptions[0]);
  const [sorting, setSorting] = useState(sortingOptions[0]);
  const UserData = useSelector((state) => state.UserData);

  const [values, setValues] = useState([5]);

  const [visible, setVisible] = useState(false);
  const [sliceIntial, setSliceInitial] = useState(6);

  const STEP = 0.1;
  const MIN = 0.01;
  const MAX = 10;

  const IncreaseSlice = () => {
    setSliceInitial(sliceIntial + 5);
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: (
      <SlickArrow>
        <Icon name="arrow-next" size="14" />
      </SlickArrow>
    ),
    prevArrow: (
      <SlickArrow>
        <Icon name="arrow-prev" size="14" />
      </SlickArrow>
    ),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 100000,
        settings: "unslick",
      },
    ],
  };



  return (
    <>
    {/* <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input value={color} onChange={(input) => setColor(input.target.value)} placeholder="Color of the loader" />

      <ClipLoader color={color} loading={loading} size={150} />
    </div> */}
    <ClipLoader color={color} loading={loading} size={150} />
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <h3 className={cn("h3", styles.title)}>Discover</h3>
          <div className={cn(styles.filters, { [styles.active]: visible })}>
            <div className={styles.sorting}>
              <div className={styles.cell}>
                <div className={styles.label}>Price</div>
                <Dropdown
                  className={styles.dropdown}
                  value={price}
                  setValue={setPrice}
                  options={priceOptions}
                />
              </div>
              <div className={styles.cell}>
                <div className={styles.label}>likes</div>
                <Dropdown
                  className={styles.dropdown}
                  value={likes}
                  setValue={setLikes}
                  options={likesOptions}
                />
              </div>
              <div className={styles.cell}>
                <div className={styles.label}>creator</div>
                <Dropdown
                  className={styles.dropdown}
                  value={creator}
                  setValue={setCreator}
                  options={creatorOptions}
                />
              </div>
              <div className={styles.cell}>
                <div className={styles.label}>Price range</div>
                <Range
                  values={values}
                  step={STEP}
                  min={MIN}
                  max={MAX}
                  onChange={(values) => setValues(values)}
                  renderTrack={({ props, children }) => (
                    <div
                      onMouseDown={props.onMouseDown}
                      onTouchStart={props.onTouchStart}
                      style={{
                        ...props.style,
                        height: "27px",
                        display: "flex",
                        width: "100%",
                      }}
                    >
                      <div
                        ref={props.ref}
                        style={{
                          height: "8px",
                          width: "100%",
                          borderRadius: "4px",
                          background: getTrackBackground({
                            values,
                            colors: ["#ED0090", "#E6E8EC"],
                            min: MIN,
                            max: MAX,
                          }),
                          alignSelf: "center",
                        }}
                      >
                        {children}
                      </div>
                    </div>
                  )}
                  renderThumb={({ props, isDragged }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "24px",
                        width: "24px",
                        borderRadius: "50%",
                        backgroundColor: "#ED0090",
                        border: "4px solid #FCFCFD",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-33px",
                          color: "#fff",
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "18px",
                          fontFamily: "Poppins",
                          padding: "4px 8px",
                          borderRadius: "8px",
                          backgroundColor: "#141416",
                        }}
                      >
                        {values[0].toFixed(1)}
                      </div>
                    </div>
                  )}
                />
                <div className={styles.scale}>
                  <div className={styles.number}>0.01 ETH</div>
                  <div className={styles.number}>10 ETH</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.list}>
            <Slider
              className={cn("discover-slider", styles.slider)}
              {...settings}
            >
              {<Items
                className={styles.items}
                items={UserData.nftIdsLogOut.slice(0, 10)}
                buttonclass={true}
              />}
            </Slider>
          </div>
          <div className={styles.btns}>
            <button className={cn("button-stroke button-small", styles.button)}>
              <span>Load more</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discover;
