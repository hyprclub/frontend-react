import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './styles/app.sass'
import Page from './components/Page'
import Home from './screens/Home'
import UploadDetails from './screens/UploadDetails'
import ConnectWallet from './screens/ConnectWallet'
import Faq from './screens/Faq'
import Activity from './screens/Activity'
import Search01 from './screens/Search01'
import Search02 from './screens/Search02'
import Profile from './screens/Profile'
import ProfileEdit from './screens/ProfileEdit'
import Login from './screens/Login'
import Signup from './screens/SignUp'
import Item from './screens/Item'
import PageList from './screens/PageList'
import { useEffect } from 'react'
import { firebaseApp } from './firebaseConfig'
import { getAuth, onAuthStateChanged, sendEmailVerification  } from '@firebase/auth'
import UserData, { UserDataActions } from './redux/slices/UserData'
import { useDispatch, useSelector } from 'react-redux'
import { Logout } from './Logout'
import { getDoc,
	doc,
	getDocs,
	collection,
	getFirestore} from "firebase/firestore"
import {
	getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import axios from 'axios';

function App() {
	const dispatch = useDispatch()

	const {loggedIn,uid} = useSelector((state) => state.UserData)

	useEffect(() => {
		if (dispatch) {
			const auth = getAuth()

			onAuthStateChanged(auth, (user) => {
				if (user) {
					if(user.emailVerified){
						dispatch(UserDataActions.login(user.toJSON()))
					}
					else{
						try {
							console.log("Please Verify Email address. Verification has been sent to you. Please Verify to continue");
							const verfificationmail =  sendEmailVerification(user);

						} catch (error) {
							console.log(error.code);
						}
					}
					
					
				} else {
					dispatch(UserDataActions.logout())
				}
			})
		}
	}, [dispatch])

	useEffect(() => {
		const run = async () => {
			if (loggedIn && uid) {
				const auth = getAuth();
				const db = getFirestore();
				try {
					getDoc(doc(db,"users",uid)).then((docSnap) =>{
						if(docSnap.exists()){
							if(docSnap.data().admin){
								console.log("true");

							}
							else{
								console.log("false");
							}
							dispatch(UserDataActions.updateUserDetails(docSnap.data()))
						}
						else{
							console.log("no data");
						}

					})




				}catch (e) {
					console.error(e);
				}

			}
		}
		run()
	}, [loggedIn,uid,dispatch])

	useEffect(() => {
		const run = async () => {
			if (loggedIn && uid) {
				const auth = getAuth();
				const storage = getStorage();
				
				
				try {
					const storagePFref = ref(
              			storage,
                   		"users/" + uid + "/profile.jpg"
                    );

					const url = await getDownloadURL(ref(storagePFref))
					dispatch(UserDataActions.updateUserDP({profileDP:url}))
				} catch (err) {
					console.error(err)
				}
				
				

				// await
			}
		}
		run()
	}, [loggedIn,uid,dispatch])
	
	useEffect(() =>{
			const run  = async () =>{
			const db = getFirestore();
			 getDocs(collection(db,"NFT's")).then((querySnapshot)=>{
				querySnapshot.forEach((docSnapID) =>{
					getDoc(doc(db,"NFT's",docSnapID.id)).then((docSnapshot)=>{
						// console.log(docSnapshot.data().json)
						const nftjson = docSnapshot.data().json;
						axios.get(nftjson).then(resp => {
							console.log(resp.data)
                        // dispatch(UserDataActions.nftData({json: resp.data}))
						
					})
					
				})
			})

			
});

				
		}
		run()
		
		
	}, [dispatch])	

	useEffect(() =>{
		if(loggedIn && uid){
			const run  = async () =>{
			const db = getFirestore();
			getDocs(collection(db,"users",uid,"NFT","Owned","Jsons")).then((querySnapshot)=>{
				querySnapshot.forEach((docSnap)=>{

					if(docSnap.exists()){
						const nftjson = docSnap.data().json;
					axios.get(nftjson).then(resps =>{
						console.log(resps.data)
						 dispatch(UserDataActions.userNftData({json: resps.data}))
					})

					}
					else{
						console.log("no user nft");
					}
					
				})

			})
				
		}
		run()
		}
		
	}, [loggedIn,uid,dispatch])	

	return (
		<Router>
			<Switch>
				<Route
					exact
					path='/'
					render={() => (
						<Page>
							<Home />
						</Page>
					)}
				/>
				<Route exact path='/logout'>
					<Logout></Logout>
				</Route>
				<Route
					exact
					path='/signup'
					render={() => (
						<Page>
							<Signup/>
						</Page>
					)}
				/>
				<Route
					exact
					path='/login'
					render={() => (
						<Page>
							<Login />
						</Page>
					)}
				/>
				<Route
					exact
					path='/upload-details'
					render={() => (
						<Page>
							<UploadDetails />
						</Page>
					)}
				/>
				<Route
					exact
					path='/connect-wallet'
					render={() => (
						<Page>
							<ConnectWallet />
						</Page>
					)}
				/>
				<Route
					exact
					path='/faq'
					render={() => (
						<Page>
							<Faq />
						</Page>
					)}
				/>
				<Route
					exact
					path='/activity'
					render={() => (
						<Page>
							<Activity />
						</Page>
					)}
				/>
				<Route
					exact
					path='/search01'
					render={() => (
						<Page>
							<Search01 />
						</Page>
					)}
				/>
				<Route
					exact
					path='/search02'
					render={() => (
						<Page>
							<Search02 />
						</Page>
					)}
				/>
				<Route
					exact
					path='/profile'
					render={() => (
						<Page>
							<Profile />
						</Page>
					)}
				/>
				<Route
					path='/profile/:username'
					render={props=>(<Page>
						<Profile {...props}/>
					</Page>)}
				/>
				<Route
					exact
					path='/profile-edit'
					render={() => (
						<Page>
							<ProfileEdit />
						</Page>
					)}
				/>
				<Route
					exact
					path='/item'
					render={() => (
						<Page>
							<Item />
						</Page>
					)}
				/>
				<Route
					exact
					path='/pagelist'
					render={() => (
						<Page>
							<PageList />
						</Page>
					)}
				/>
			</Switch>
		</Router>
	)
}

export default App
