import React, { useState } from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import styles from './Profile.module.sass'
import Icon from '../../components/Icon'
import User from './User'
import Items from './Items'
import Followers from './Followers'
import { useSelector } from 'react-redux'

// data
// import { bids } from '../../mocks/bids'
import { isStepDivisible } from 'react-range/lib/utils'

const navLinks = ['Collectibles', 'Created']



const following = [
	{
		name: 'Sally Fadel',
		counter: '161 followers',
		avatar: '/images/content/avatar-5.jpg',
		url: 'https://ui8.net',
		buttonClass: 'stroke',
		buttonContent: 'Unfollow',
		gallery: [
			'/images/content/follower-pic-1.jpg',
			'/images/content/follower-pic-2.jpg',
			'/images/content/follower-pic-3.jpg',
			'/images/content/follower-pic-4.jpg',
		],
	},
	{
		name: 'Aniya Harber',
		counter: '161 followers',
		avatar: '/images/content/avatar-6.jpg',
		url: 'https://ui8.net',
		buttonClass: 'stroke',
		buttonContent: 'Unfollow',
		gallery: [
			'/images/content/follower-pic-5.jpg',
			'/images/content/follower-pic-6.jpg',
			'/images/content/follower-pic-1.jpg',
			'/images/content/follower-pic-3.jpg',
		],
	},
	{
		name: 'Edwardo Bea',
		counter: '161 followers',
		avatar: '/images/content/avatar-7.jpg',
		url: 'https://ui8.net',
		buttonClass: 'stroke',
		buttonContent: 'Unfollow',
		gallery: [
			'/images/content/follower-pic-4.jpg',
			'/images/content/follower-pic-1.jpg',
			'/images/content/follower-pic-3.jpg',
			'/images/content/follower-pic-6.jpg',
		],
	},
	{
		name: 'Reymundo',
		counter: '161 followers',
		avatar: '/images/content/avatar-8.jpg',
		url: 'https://ui8.net',
		buttonClass: 'stroke',
		buttonContent: 'Unfollow',
		gallery: [
			'/images/content/follower-pic-5.jpg',
			'/images/content/follower-pic-2.jpg',
			'/images/content/follower-pic-6.jpg',
			'/images/content/follower-pic-1.jpg',
		],
	},
	{
		name: 'Jeanette',
		counter: '161 followers',
		avatar: '/images/content/avatar-9.jpg',
		url: 'https://ui8.net',
		buttonClass: 'stroke',
		buttonContent: 'Unfollow',
		gallery: [
			'/images/content/follower-pic-1.jpg',
			'/images/content/follower-pic-3.jpg',
			'/images/content/follower-pic-5.jpg',
			'/images/content/follower-pic-4.jpg',
		],
	},
]

const followers = [
	{
		name: 'Sally Fadel',
		counter: '161 followers',
		avatar: '/images/content/avatar-5.jpg',
		url: 'https://ui8.net',
		buttonClass: 'blue',
		buttonContent: 'Follow',
		gallery: [
			'/images/content/follower-pic-1.jpg',
			'/images/content/follower-pic-2.jpg',
			'/images/content/follower-pic-3.jpg',
			'/images/content/follower-pic-4.jpg',
		],
	},
	{
		name: 'Aniya Harber',
		counter: '161 followers',
		avatar: '/images/content/avatar-6.jpg',
		url: 'https://ui8.net',
		buttonClass: 'blue',
		buttonContent: 'Follow',
		gallery: [
			'/images/content/follower-pic-5.jpg',
			'/images/content/follower-pic-6.jpg',
			'/images/content/follower-pic-1.jpg',
			'/images/content/follower-pic-3.jpg',
		],
	},
	{
		name: 'Edwardo Bea',
		counter: '161 followers',
		avatar: '/images/content/avatar-7.jpg',
		url: 'https://ui8.net',
		buttonClass: 'blue',
		buttonContent: 'Follow',
		gallery: [
			'/images/content/follower-pic-4.jpg',
			'/images/content/follower-pic-1.jpg',
			'/images/content/follower-pic-3.jpg',
			'/images/content/follower-pic-6.jpg',
		],
	},
	{
		name: 'Reymundo',
		counter: '161 followers',
		avatar: '/images/content/avatar-8.jpg',
		url: 'https://ui8.net',
		buttonClass: 'blue',
		buttonContent: 'Follow',
		gallery: [
			'/images/content/follower-pic-5.jpg',
			'/images/content/follower-pic-2.jpg',
			'/images/content/follower-pic-6.jpg',
			'/images/content/follower-pic-1.jpg',
		],
	},
	{
		name: 'Jeanette',
		counter: '161 followers',
		avatar: '/images/content/avatar-9.jpg',
		url: 'https://ui8.net',
		buttonClass: 'blue',
		buttonContent: 'Follow',
		gallery: [
			'/images/content/follower-pic-1.jpg',
			'/images/content/follower-pic-3.jpg',
			'/images/content/follower-pic-5.jpg',
			'/images/content/follower-pic-4.jpg',
		],
	},
]
const socials = [
	{
		title: 'twitter',
		url: 'https://twitter.com/ui8',
	},
	{
		title: 'instagram',
		url: 'https://www.instagram.com/ui8net/',
	},
	// {
	//   title: "facebook",
	//   url: "https://www.facebook.com/ui8.net/",
	// },
]



const Profile = (props) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [visible, setVisible] = useState(false)
	const UserData = useSelector((state) => state.UserData)

	const [data, setData] = useState({ name : '' , email: '' , username : '', phoneno : '', instagram: '',bio : ''})

	const [socialState,setSocialState] = useState(socials)

	const [username, setUsername] = React.useState()


	const bids =[
		
	{
    title: UserData.json.name,
    price: "2.45 ETH",
    highestBid: "0.001 ETH",
    counter: "3 in stock",
    bid: 'New bid <span role="img" aria-label="fire">🔥</span>',
    // image: UserData.json.image,
    image2x: UserData.json.image,
    category: "green",
    categoryText: "purchasing !",
    url: "/",
    users: [
      {
        avatar: "/images/content/avatar-1.jpg",
      },
      {
        avatar: "/images/content/avatar-4.jpg",
      },
    ],
  }
]

	React.useEffect(()=>{
		if(UserData) {
			setSocialState([
				{
					title: 'twitter',
					url:  UserData.twitter,
				},
				{
					title: 'instagram',
					url: "https://www.instagram.com/" + UserData.instagram,
				},
			])
		}
	},[UserData])

	React.useEffect(()=>{
		if(props && props.match && props.match.params){
			const { match: {params:{ username }} } = props
			setUsername(username)
		}
	},[props])

	return (
		<div className={styles.profile}>
			<div
				className={cn(styles.head, { [styles.active]: visible })}
				style={{
					backgroundImage: 'url(/images/content/bg-profile.jpg)',
				}}
			>
				<div className={cn('container', styles.container)}>
					<div className={styles.btns}>
						{/* <button className={cn('button-stroke button-small', styles.button)} onClick={() => setVisible(true)}>
							<span>Edit cover photo</span>
							<Icon name='edit' size='16' />
						</button> */}
						<Link className={cn('button-stroke button-small', styles.button)} to='profile-edit'>
							<span>Edit profile</span>
							<Icon name='image' size='16' />
						</Link>
					</div>
					<div className={styles.file}>
						{/* <input type='file' />
						<div className={styles.wrap}>
							<Icon name='upload-file' size='48' />
							<div className={styles.info}>Drag and drop your photo here</div>
							<div className={styles.text}>or click to browse</div>
						</div>
						<button className={cn('button-small', styles.button)} onClick={() => setVisible(false)}>
							Save photo
						</button> */}
					</div>
				</div>
			</div>
			<div className={styles.body}>
				<div className={cn('container', styles.container)}>
					<User isOwnProfile={username !== ''} className={styles.user} item={socialState} />
					<div className={styles.wrapper}>
						<div className={styles.nav}>
							{navLinks.map((x, index) => (
								<button
									className={cn(styles.link, {
										[styles.active]: index === activeIndex,
									})}
									key={index}
									onClick={() => setActiveIndex(index)}
								>
									{x}
								</button>
							))}
						</div>
						<div className={styles.group}>
							<div className={styles.item}>
								{activeIndex === 0 && <Items class={styles.items} items={bids.slice(0, 7)} />}
								{/* {activeIndex === 1 && <Items class={styles.items} items={bids.slice(0, 6)} />}
								{activeIndex === 2 && <Items class={styles.items} items={bids.slice(0, 2)} />}
								{activeIndex === 3 && <Items class={styles.items} items={bids.slice(0, 3)} />}
								{activeIndex === 4 && <Followers className={styles.followers} items={following} />}
								{activeIndex === 5 && <Followers className={styles.followers} items={followers} />} */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile
