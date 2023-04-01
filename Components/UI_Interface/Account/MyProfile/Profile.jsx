import React,{useState,useEffect} from 'react'
import profiles from '../../../Images/profile.png'
import {MdEdit} from 'react-icons/md'
import {BsFacebook,BsYoutube,BsInstagram,BsTwitter} from 'react-icons/bs'
import {SiManageiq,SiWalkman} from 'react-icons/si'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import FollowersModal from '../../Modals/FollowersModal'
import baseUrl from '../../../../mongodb/baseUrl'
import Image from 'next/image'


export default function Profile({profile}) {
 const {token}=parseCookies()
 const [followers, setFollowers] = useState([])
 const [followings, setFollowings] = useState([])
 const [toggle, setToggle] = useState('follwers')
 const [showModal, setShowModal] = useState(false)
  const getFollowers=async()=>{
    const req=await fetch(`${baseUrl}/api/account/allFUNwers`,
    {
      method:"GET",
      headers: {
        "Authorization": token
      }
    })
    const res=await req.json()
    console.log("The folhjcds",res)
    setFollowers(res.followers)
    setFollowings(res.followings)
  }

  useEffect(() => {
   console.log("hello using from profile component")
   getFollowers()
  }, [])
  
  const handleFo=()=>{
    setToggle('followers')
    setShowModal(true)
  }
  const handleFol=()=>{
    setToggle('followings')
    setShowModal(true)
  }

  return (
    <>
   {showModal?toggle==='followers'? <FollowersModal setShowModal={setShowModal} followers={followers}/>:<FollowersModal followers={followings} setShowModal={setShowModal}/>:""}
    <div className="flex justify-center w-full py-4">
<div className="w-4/6 ">
    <div className="flex justify-center w-full">

<Image width={600} height={400} src={profile.profile_image || profiles.src} className="w-48 h-48 rounded-full object-cover object-top " alt="profile" />
    </div>
<h2 className='text-4xl font-semibold space-x-2 flex justify-center w-full'><span>{profile.firstName}</span><span>{profile.lastName}</span></h2>
<div className="flex justify-center w-full py-2">
<p className='text-slate-700 w-3/4 text-center'>{profile.about}</p>
</div>

<div className="button flex justify-center w-full py-2 space-x-3">
<button onClick={handleFo} className='bg-black text-white font-semibold px-4 py-2 border-2 border-black rounded-md flex justify-center items-center space-x-2'>
    <span><SiManageiq/></span> 
    <span>Followers</span></button>
<button onClick={handleFol} className='bg-white text-black border-2 border-black font-semibold px-4 py-2 rounded-md flex justify-center items-center space-x-2'>
    <span><SiWalkman/></span> 
    <span>Following</span></button>
</div>

<div className="button flex justify-center w-full py-4">
<Link href="/account/editProfile"><button className='bg-indigo-600 text-white font-semibold px-4 py-2 rounded-md flex justify-center items-center space-x-2'>
    <span><MdEdit/></span> 
    <span>Edit Profile</span></button></Link>
</div>
<div className="flex justify-center">
  <div className="flex justify-center space-x-4">
  <a href={profile.facebook} target="_blank" ><span className="text-slate-700 hover:text-black cursor-pointer"><BsFacebook/></span></a>
  <a href={profile.instagram} target="_blank" ><span className="text-slate-700 hover:text-black cursor-pointer"><BsInstagram/></span></a>
  <a href={profile.twitter} target="_blank" ><span className="text-slate-700 hover:text-black cursor-pointer"><BsTwitter/></span></a>
  <a href={profile.youtube} target="_blank" ><span className="text-slate-700 hover:text-black cursor-pointer"><BsYoutube/></span></a>
  </div>
</div>
</div>
    </div>
    
    </>
  )
}
