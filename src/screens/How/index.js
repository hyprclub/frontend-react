import React, { useEffect, useState } from 'react'
import styles from './comingsoon.module.sass'
import cn from 'classnames'
import FlipCountdown from '@rumess/react-flip-countdown';
import Image from './Image'
// import image from "./gradient.png"
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Link } from "react-router-dom";
import { style } from 'dom-helpers';
import { Collapse } from 'react-bootstrap';

const BuAlumni = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);
    return (
        <div className={styles.cont}>
            <div className={cn('container-fluid')}>
                <div className="row">
                    <div data-aos="fade-left" className={cn("col-xl-12 col-lg-12 col-md-12", styles.start)}>
                        <div className={styles.text1}>Presenting Unique NFTs for<br></br> Our Unique Alumni.</div>
                        <div className={styles.text2}>Bennett University in collaboration with HyprClub<br></br> presents the world’s first NFT for alumni.</div>
                        <div className="row">
                            {/* <Image className={cn("img-fluid",styles.logo)} src="/logo1.png" srcDark="/hero.png" /> */}

                        </div>
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
                        <Image className="img-fluid" src="/img.png" srcDark="/img.png" />
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-7 col-lg-7 col-md-7", styles.creator)}>
                        {/* <div className={style.flex}> */}
                            <div className={styles.sty1}>Discover over 800 NFTs designed especially for you, capturing the essence of BU.</div>

                            <div className={styles.sty3}>Go ahead and grab your exclusive BU alumni NFTs ASAP! NFTs can be claimed on a first come first serve basis only. So get started!</div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className={styles.sse}>
                <Image className="img-fluid" src="/perkhead.png" srcDark="/img2.png" />
                {/* <div> </div> */}
                <div className={styles.bottom}>Not just the NFT, with your claim you unlock <br></br>a variety of <b>free perks.</b></div>
            </div>
            <div className="container">
                <div className="row">
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-12 col-md-12", styles.border)}>
                        <div className={styles.in}>
                            <h1>Alumni Network</h1>
                            <div className={style.inner}>Be a part of the Bennett University Alumni Network and connect with the top industrialists in your field</div>
                            {/* <Image className="img-fluid" src="/alumni.png" srcDark="/joinhypr1.png" /> */}
                        </div>
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-12 col-md-12", styles.border)}>
                        <div className={styles.in}>
                            <h1>Lifetime Access to Bennett Hatchery</h1>
                            <div className={style.inner}>Get lifetime access to the Hatchery facilities and bring your startup ideas to life!</div>
                            {/* <Image className="img-fluid" src="/alumni.png" srcDark="/joinhypr1.png" /> */}
                        </div>
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-12 col-md-12", styles.border)}>
                        <div className={styles.in}>
                            <h1>Incubation Support</h1>
                            <div className={style.inner}>Got an idea but still need some expert help? Get lifetime access to incubation support provided by the Bennett Hatchery.</div>
                            {/* <Image className="img-fluid" src="/alumni.png" srcDark="/joinhypr1.png" /> */}
                        </div>
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-12 col-md-12", styles.border)}>
                        <div className={styles.in}>
                            <h1>Times Prime Subscription</h1>
                            <div className={style.inner}>Get your Times Prime membership at a BU exclusive discounted price!</div>
                            {/* <Image className="img-fluid" src="/alumni.png" srcDark="/joinhypr1.png" /> */}
                        </div>
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-12 col-md-12", styles.border)}>
                        <div className={styles.in}>
                            <h1>Gift Hamper</h1>
                            <div className={style.inner}>Recieve a gift hamper from Bennett University as a physicial memoir of all the good times shared here!</div>
                            {/* <Image className="img-fluid" src="/alumni.png" srcDark="/joinhypr1.png" /> */}
                        </div>
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-12 col-md-12", styles.border,"mb-5")}>
                        <div className={styles.in}>
                            <h1>Unlimited Perks!</h1>
                            <div className={style.inner}>The list just doesn’t end here, more perks are coming soon!</div>
                            {/* <Image className="img-fluid" src="/alumni.png" srcDark="/joinhypr1.png" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div data-aos="fade-left" className="col-xl-6 col-lg-6 col-md-6">
                    {/* <Image className="img-fluid" src="/incubate.png" srcDark="/joinhypr1.png" /> */}
                </div>
                <div data-aos="fade-right" className="col-xl-6 col-lg-6 col-md-6">
                    {/* <Image className="img-fluid" src="/timesprime.png" srcDark="/joinhypr1.png" /> */}
                </div>
            </div>
            <div className="row">
                <div data-aos="fade-left" className="col-xl-6 col-lg-6 col-md-6">
                    {/* <Image className="img-fluid" src="/incubate.png" srcDark="/joinhypr1.png" /> */}
                </div>
                <div data-aos="fade-right" className="col-xl-6 col-lg-6 col-md-6">
                    {/* <Image className="img-fluid" src="/timesprime.png" srcDark="/joinhypr1.png" /> */}
                </div>
            </div>
            <div className={cn("row", styles.gap1)}>
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
