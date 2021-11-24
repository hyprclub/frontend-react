import React, { useEffect, useState } from 'react'
import styles from './comingsoon.module.sass'
import cn from 'classnames'
import FlipCountdown from '@rumess/react-flip-countdown';
import Image from './Image'
import image from "./gradient.png"

const ComingSoon = () => {

    return (
        <div className={styles.cont}>


            <div className={cn('container')}>
                <div className={styles.ss}>
                    <Image className="img-fluid" src="/header.png" srcDark="/header1.png" />
                </div>
                <div className={styles.sse}>
                    <Image className="img-fluid" src="/presenting.png" srcDark="/presenting1.png" />
                    <div className={styles.lowcont}>Bigger and better. More features,<br></br> more rewards more Hypr.</div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className={styles.js}>
                            <div className={styles.dd}><Image className="img-fluid" src="/membership.png" srcDark="/membershipbutton.png" /></div>
                            <div className={styles.sty}>
                                <div >Creators can now offer memberships to their audience.</div>
                                <div className={styles.text2}>With different Tier levels, each member can get perks customized by their favorite creator.</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <Image className="img-fluid" src="/Group51.png" srcDark="/Group51.png" />
                        <div className={styles.imgcom}><Image className="img-fluid" src="/Group111.png" srcDark="/Group111.png" /></div>
                        {/* <div className={styles.imgcom}><img className="img-fluid" src="/Group4.png" /></div> */}
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <Image className="img-fluid" src="/addtocart.png" srcDark="/addtocart1.png" />
                    </div>
                    <div className={cn("col-xl-6 col-lg-6 col-md-12", styles.creator)}>
                        <Image className={cn("img-fluid", styles.creator)} src="/creator.png" srcDark="/buttoncreator.png"/>
                        <div className={styles.sty}>
                            <div>Purchase any merchandise or digital commodity that a creator is offering. </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <Image className={cn("img-fluid", styles.creator)} src="/saythanks.png" srcDark="/thanksbutton.png" />
                        <div className={styles.sty}>
                            <div>Yes, just like SuperChat extend support to creators with cool customizations. </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <img className="img-fluid" src="/saythanksbox.png" />
                    </div>
                </div>
                <div className={styles.sse}>
                    <Image className="img-fluid" src="/joinhypr.png" srcDark="/joinhypr1.png" />
                </div>
                <iframe className={styles.video} id="ytplayer" type="text/html" height="600px" width="100%" height="auto" src="https://www.youtube.com/embed/NzzeUjSrDvY?rel=0" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                <div className={styles.FlipCount}>
                    <FlipCountdown
                        hideYear
                        // theme='light'
                        size='large'
                        monthTitle='Months'
                        dayTitle='Days'
                        hourTitle='Hours'
                        minuteTitle='Minutes'
                        secondTitle='Seconds'
                        endAt={'2022-10-12 01:26:58'} />
                </div>
            </div>
        </div>
    )
}

export default ComingSoon
