import Image from 'next/image'
import React from 'react'

// import team1 from '../../../Images/team1.jpg'
// import team2 from '../../../Images/team2.jpg'
// import team3 from '../../../Images/team3.jpg'
// import team4 from '../../../Images/team4.jpg'
// import img1 from '../../../Images/str1.jpg'
// import img2 from '../../../Images/str2.jpg'
// import img3 from '../../../Images/str3.jpg'
// import img4 from '../../../Images/img3.jpg'



export default function ImageFlow({images}) {
  return (
    <>
    
     <div className="slider">
        <div className="slide-track render-div">
            {
               images && images.map((image,index)=>{
                    return(

<div key={index} className="slide w-full">
    <Image width={200} height={150} src={image.url} className="img w-full h-72 object-center object-cover" alt={image.title} />
</div>
                    )
                })
            }



        </div>
    </div> 


    </>
  )
}

