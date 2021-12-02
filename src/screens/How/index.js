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
                        <div className={styles.text1}>Limited Edition NFTs For<br></br> Our Unique Alumni.</div>
                        <div className={styles.text2}>The Metaverse is expanding and Bennett University (Times of India Group)<br></br> is at the forefront of this revolution.</div>
                        <div className={styles.logos}>
                            <Image className={cn("img-fluid",styles.Bulogo)} src="/BUlogo.png" srcDark="/Bulogo1.png" />
                            <Image className={cn("img-fluid",styles.Delete)} src="Delete.png" srcDark="/Delete1.png"/>
                            <img className={cn("img-fluid",styles.logos1)} src="/logo11.png" />
                        </div>
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
                        <div className={styles.sty1}>Over 750+ unique NFTs designed, created and minted especially for you.</div>

                        <div className={styles.sty3}>Each NFT has been uniquely designed and minted exclusively to capture and immortalize your experience as a student at Bennett University. Every single NFT guarantees you to exclusive perks for being a BU Alumnus. </div>
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
                            <h1>Alumni Network 👩‍🎓</h1>
                            <div className={style.inner}>Use your NFT as an Access Token to get exclusive access to Bennett University's Alumni Network. Meet, connect and reflect with your juniors, seniors and faculties for life.</div>
                            {/* <Image className="img-fluid" src="/alumni.png" srcDark="/joinhypr1.png" /> */}
                        </div>
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-12 col-md-12", styles.border)}>
                        <div className={styles.in}>
                            <h1>The Bennett Hatchery 💼</h1>
                            <div className={style.inner}>Through your NFT, you can access the facilities and services of The Bennett Hatchery for Life. With access to the Hatchery you can communicate, work and collaborate effectively.</div>
                            {/* <Image className="img-fluid" src="/alumni.png" srcDark="/joinhypr1.png" /> */}
                        </div>
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-12 col-md-12", styles.border)}>
                        <div className={styles.in}>
                            <h1>Startup Incubation 🚀</h1>
                            <div className={style.inner}>We at Bennett University believe in embibing the entrepreneurship spirit in the entire fraternity. It's never too late to startup and thus with this NFT you get Lifetime Incubation Support from us. </div>
                            {/* <Image className="img-fluid" src="/alumni.png" srcDark="/joinhypr1.png" /> */}
                        </div>
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-12 col-md-12", styles.border)}>
                        <div className={styles.in}>
                            <h1>Digital Ownership 🏷</h1>
                            <div className={style.inner}>Be one of the first people to enter the Metaverse and explore a new social revolution.This NFT is a collectible that lives on the Polygon blockchain and is verifiable. </div>
                            {/* <Image className="img-fluid" src="/alumni.png" srcDark="/joinhypr1.png" /> */}
                        </div>
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-12 col-md-12", styles.border)}>
                        <div className={styles.in}>
                            <h1>Gifts and Surprises 🎁</h1>
                            <div className={style.inner}>This NFT guarantees you to recieve a Gift Hamper from Bennett University upon attending the First Alumni Meet 2021, scheduled on 4th & 5th of December. A bag full of surprises, an event full of memories! </div>
                            {/* <Image className="img-fluid" src="/alumni.png" srcDark="/joinhypr1.png" /> */}
                        </div>
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-12 col-md-12", styles.border, "mb-5")}>
                        <div className={styles.in}>
                            <h1>Unlimited Perks! 🎉</h1>
                            <div className={style.inner}>The NFTs will recieve updates as we move forward and more collaborations happen in the future. Bennett University appreciates & celebrates you and will continue to do this moving forward.</div>
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
                <div className={cn("col-xl-12 col-lg-12 col-md-12", styles.creator1, styles.perks)}>
                    <div className={styles.sty6}>Are you ready?<br></br> The Metaverse is just a click away!</div>
                    <div className={styles.sty3}>We have made the process very simple for you, No Signups, No Passwords.<br></br>Upon logging in for the first time you will be randomly assigned a uniquely generated NFT.<br></br>Just click the button below and login to your pre-existing account to view your Limited Edition NFT.</div>
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
