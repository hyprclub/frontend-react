import React, { useEffect, useState } from 'react'
import styles from './comingsoon.module.sass'
import cn from 'classnames'
import FlipCountdown from '@rumess/react-flip-countdown';
import Image from './Image'
// import image from "./gradient.png"
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Link } from "react-router-dom";

const BuAlumni = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div className={styles.cont}>
            <div className={cn('container-fluid')}>
                <div className="row">
                    <div data-aos="fade-left" className={cn("col-xl-12 col-lg-12 col-md-12", styles.start)}>
                        <Image className="img-fluid" src="/bennett.png" srcDark="/joinhypr1.png" />
                    </div>
                    {/* <div data-aos="fade-right" className={cn("col-xl-5 col-lg-5 col-md-5", styles.start2)}>
                        <div >
                            <div className={styles.sty}>Unique NFTS,
                                For Our Very Unique Alumni.</div>
                        </div>
                        <div className={styles.divlow}>Idk some cool alumni wali line daal dete hai yaha pe. that drawing took me so long omg</div>
                    </div> */}
                </div>
                <div className={cn("row", styles.gg)}>
                    <div data-aos="fade-right" className={cn("col-xl-5 col-lg-5 col-md-5", styles.img)}>
                        <Image className="img-fluid" src="/itemcard.png" srcDark="/addtocart1.png" />
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-7 col-lg-7 col-md-7", styles.creator)}>
                        <div className={styles.sty1}>Some text, matlab kuchh to cool line daaldo. Lorem ipsum dolor sit amet.</div>

                        <div className={styles.sty3}>Get started or something, jesus im so sleepy ye lines nahi daal rhi mai yaha, kal subha if you’d like we can make these edits. XD placeholder text so to badiya ye hai. sleep sleep.</div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className={styles.sse}>
                <Image className="img-fluid" src="/perkhead.png" srcDark="/joinhypr1.png" />
                <div className={styles.bottom}>Not just the NFT, with your claim you unlock <br></br>a variety of <b>free perks.</b></div>
            </div>
            <div className="row">
                <div data-aos="fade-left" className="col-xl-6 col-lg-6 col-md-6">
                    <Image className="img-fluid" src="/alumni.png" srcDark="/joinhypr1.png" />
                </div>
                <div data-aos="fade-right" className="col-xl-6 col-lg-6 col-md-6">
                    <Image className="img-fluid" src="/hatchery.png" srcDark="/joinhypr1.png" />
                </div>
            </div>
            <div className="row">
                <div data-aos="fade-left" className="col-xl-6 col-lg-6 col-md-6">
                    <Image className="img-fluid" src="/incubate.png" srcDark="/joinhypr1.png" />
                </div>
                <div data-aos="fade-right" className="col-xl-6 col-lg-6 col-md-6">
                    <Image className="img-fluid" src="/timesprime.png" srcDark="/joinhypr1.png" />
                </div>
            </div>
            <div className="row">
                <div data-aos="fade-left" className="col-xl-6 col-lg-6 col-md-6">
                    <Image className="img-fluid" src="/incubate.png" srcDark="/joinhypr1.png" />
                </div>
                <div data-aos="fade-right" className="col-xl-6 col-lg-6 col-md-6">
                    <Image className="img-fluid" src="/timesprime.png" srcDark="/joinhypr1.png" />
                </div>
            </div>
            <div className={cn("row",styles.gap1)}>
                <div data-aos="fade-left" className={cn("col-xl-12 col-lg-12 col-md-12", styles.creator1, styles.perks)}>
                    <div className={styles.sty6}>Feeling ready to bring<br></br> something idk im brain ded</div>
                    <div className={styles.sty3}>Continue to access Bennett University special perks <br></br>that keep updating.</div>
                    <div><Link className={cn("button-stroke", styles.button)} to="./passwordless">
                        Get Started
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuAlumni
