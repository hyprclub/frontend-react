import React, { useEffect, useState } from 'react'
import styles from './comingsoon.module.sass'
import cn from 'classnames'
import FlipCountdown from '@rumess/react-flip-countdown';
import Image from './Image'
import image from "./gradient.png"
import 'aos/dist/aos.css';
import Aos from 'aos';

const ComingSoon = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[]);
    return (
        <div className={styles.cont}>


            <div className={cn('container')}>
                {/* <section> */}
                    <Image data-aos="fade-right" className={cn("img-fluid",styles.bottom)} src="/head2.png" srcDark="/img5.png" />
                {/* </section> */}
                <div className={styles.sse}>
                    <Image className={cn("img-fluid",styles.size1)} data-aos="fade-left" src="/presenting.png" srcDark="/presenting1.png" />
                    <div className={styles.lowcont}>Bigger and better. More features,<br></br> more rewards more Hypr.</div>
                </div>
                <div className="row">
                    <div data-aos="fade-right" className="col-xl-6 col-lg-6 col-md-6">
                        <div className={styles.js}>
                            <div className={styles.dd}><Image className={cn("img-fluid",styles.edit,styles.creator)} src="/membership.png" srcDark="/membershipbutton.png" /></div>
                            <div className={styles.sty}>
                                <div >Creators can now offer memberships to their audience.</div>
                                <div className={styles.text2}>With different Tier levels, each member can get perks customized by their favorite creator.</div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-6 col-md-6",styles.left)}>
                        <Image  className={cn("img-fluid",styles.imgcom)} src="/Group51.png" srcDark="/Group51.png" />
                        <div className={styles.imgcom}><Image className="img-fluid" src="/Group111.png" srcDark="/Group111.png" /></div>
                        {/* <div className={styles.imgcom}><img className="img-fluid" src="/Group4.png" /></div> */}
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-6 col-md-6", styles.creator1)}>
                        <Image className={cn("img-fluid", styles.creator,styles.edit)} src="/creator.png" srcDark="/buttoncreator.png"/>
                        <div className={styles.sty}>
                            <div>Purchase any merchandise or digital commodity that a creator is offering. </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className={cn("col-xl-6 col-lg-6 col-md-6",styles.margin)}>
                        <Image className="img-fluid" src="/addtocart.png" srcDark="/addtocart1.png" />
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-6 col-md-6", styles.creator2)}>
                        <Image className={cn("img-fluid", styles.creator,styles.edit)} src="/creator.png" srcDark="/buttoncreator.png"/>
                        <div className={styles.sty}>
                            <div className={styles.space}>Purchase any merchandise or digital <br></br>commodity that a creator is offering. </div>
                        </div>
                    </div>
                    <div data-aos="fade-right" className={cn("col-xl-6 col-lg-6 col-md-6",styles.aline)}>
                        <Image className={cn("img-fluid", styles.creator,styles.edit)} srcDark="/thanksbutton.png" src="/saythanksbutton.png" />
                        <div className={styles.sty}>
                            <div>Yes, just like SuperChat extend support to creators with cool customizations. </div>
                        </div>
                    </div>
                    <div data-aos="fade-left" className={cn("col-xl-6 col-lg-6 col-md-6",styles.creator)}>
                        <img className="img-fluid" src="/saythanks.png" />
                    </div>
                </div>
                <div data-aos="fade-left" className={styles.sse}>
                    <Image className="img-fluid" src="/joinhypr.png" srcDark="/joinhypr1.png" />
                </div>
                <iframe data-aos="fade-right" className={styles.video} id="ytplayer" type="text/html" height="600px" width="100%" height="auto" src="https://www.youtube.com/embed/NzzeUjSrDvY?rel=0" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                {/* <div className={styles.FlipCount}>
                    <FlipCountdown
                        hideYear
                        hideMonth
                        // theme='light'
                        size='large'
                        monthTitle='Months'
                        dayTitle='Days'
                        hourTitle='Hours'
                        minuteTitle='Minutes'
                        secondTitle='Seconds'
                        endAt={'2021-12-24 12:0:0'} />
                </div> */}
            </div>
        </div>
    )
}

export default ComingSoon
