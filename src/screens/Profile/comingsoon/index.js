import React, { useEffect, useState } from 'react'
import styles from './comingsoon.module.sass'

const ComingSoon = () => {

    return (
        <div>
            <div className="container">
                <div className={styles.ss}>
                    <img className="img-fluid" src="/header.png" />
                </div>
                <div className={styles.sse}>
                    <img className="img-fluid" src="/presenting.png" />
                    <div className={styles.lowcont}>Bigger and better. More features,<br></br> more rewards more Hypr.</div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <div>
                        <div className={styles.dd}><img className="img-fluid" src="/membership.png" /></div>
                        <div >Creators can now offer memberships to their audience.</div>
                        <div className={styles.text2}>With different Tier levels, each member can get perks customized by their favorite creator.</div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <img className="img-fluid" src="/Group5.png" />
                        <div className={styles.imgcom}><img className="img-fluid" src="/Group11.png" /></div>
                        <div className={styles.imgcom}><img className="img-fluid" src="/Group4.png" /></div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <img className="img-fluid" src="/addtocart.png" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <img className="img-fluid" src="/creator.png" />
                        <div>Purchase any merchandise or digital commodity that a creator is offering. </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <img className="img-fluid" src="/saythanks.png" />
                        <div>Yes, just like SuperChat extend support to creators with cool customizations. </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                        <img className="img-fluid" src="/sayhanksbox.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon
