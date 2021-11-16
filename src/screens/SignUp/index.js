import React, { useState, useEffect } from "react";
import cn from 'classnames'
import styles from './Signup.module.sass'
import Control from '../../components/Control'
import TextInput from '../../components/TextInput'
// import { firebaseApp } from '../../firebaseConfig'
import { useHistory } from 'react-router'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useSelector } from 'react-redux'

const breadcrumbs = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Login',
    },
]
const Signup = () => {
    const loggedIn = useSelector((state) => state.UserData.loggedIn)
    const UserData = useSelector((state) => state.UserData)
    const [data, setData] = useState({ email: '', password: '' })
    function updateState(e) {
        // setData((state) => ({ ...state, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async () => {
        // try {
        //     const auth = getAuth()
        //     const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
        //     const user = userCredential.user;
        //     const emailVerified = user.emailVerified;

        //     console.log({ data, userCredential })
        // } catch (err) {
        //     console.error(err)
        // }
    }
    const { push } = useHistory()
    useEffect(() => {
        console.log(UserData)
        if (loggedIn) {
            push('/')

        }
    }, [loggedIn, push])

    return (
        <>
            <div className={styles.page}>
                <Control className={styles.control} item={breadcrumbs} />
                <div className={cn('section-pt80', styles.section)}>
                    <div className={cn('container-fluid', styles.container)}>
                        <div className={styles.top}>
                            <h1 className={cn('h2', styles.title)}>Create an Account</h1>
                            Become a part of the social revolution.
                            {/* <div className={styles.info}> */}
                            {/* sell one collectible multiple times */}
                            {/* </div> */}
                        </div>
                        {/* <div className="row"> */}
                        <div className={styles.item}>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    handleSubmit()
                                }}
                            >
                                <div className={styles.ks}>
                                <div className="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div className="ml-5">
                                            <TextInput
                                                onChange={(e) => {
                                                    updateState(e)
                                                }}
                                                className={styles.field}
                                                value={data.name}
                                                label='Name'
                                                name='Name'
                                                type='text'
                                                placeholder='Enter your email'
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div className="mr-5">
                                            <TextInput
                                                onChange={(e) => {
                                                    updateState(e)
                                                }}
                                                className={styles.field}
                                                value={data.name}
                                                label='User Name'
                                                name='Name'
                                                type='text'
                                                placeholder='Enter your email'
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div className="ml-5">

                                            <TextInput
                                                onChange={(e) => {
                                                    updateState(e)
                                                }}
                                                className={styles.field}
                                                value={data.email}
                                                label='Email Address'
                                                name='email'
                                                type='email'
                                                placeholder='Enter your email'
                                                required />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div className="mr-5">

                                            <TextInput
                                                onChange={(e) => {
                                                    updateState(e)
                                                }}
                                                className={styles.field}
                                                value={data.name}
                                                label='Phone Number'
                                                name='Name'
                                                type='number'
                                                placeholder='Enter your Phone number'
                                                required
                                            /></div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div className="ml-5">

                                            <TextInput
                                                onChange={(e) => {
                                                    updateState(e)
                                                }}
                                                className={styles.field}
                                                label='Password'
                                                name='password'
                                                type='password'
                                                placeholder='Enter your password'
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6">
                                        <div className="mr-5">

                                            <TextInput
                                                onChange={(e) => {
                                                    updateState(e)
                                                }}
                                                className={styles.field}
                                                label='Confirm Password'
                                                name='Confirm Password'
                                                type='password'
                                                placeholder='Re-Enter your password'
                                                required
                                            />
                                        </div>
                                    </div>
                                    {/* <Link
										onClick={(e) => {
                                            e.preventDefault()
										}}
										to={'#'}
                                        >
										Login
									</Link> */}
                                    {/* </input> */}
                                </div>
                                </div>
                                    <div className={styles.signBut}>
                                        <input className={cn('button-stroke', styles.button)} type='submit' value='Sign Up' />
                                    </div>
                            </form>
                            {/* </div> */}
                        </div>
                        <div className={styles.note}>We do not own your private keys and cannot access your funds without your confirmation.</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Signup