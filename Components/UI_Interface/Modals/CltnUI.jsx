import React from 'react'
import img1 from '../../../Components/Images/Animals.jpg'
export default function CltnUI({ctn}) {
    // console.log("check",ctn.Images[0].ImageId.url)
   const Images= [
        {
          "ImageId": {
            "_id": "63e4ceaf15d892752705f3be",
            "title": "Holi",
            "tags": [
              "sasa",
              "abhisha"
            ],
            "url": "http://res.cloudinary.com/unreveal/image/upload/v1675939432/unrevealImages/dmxelvfthgecoc31b8r0.jpg",
            "user": {
              "_id": "63e227c3a154639366cb3ad9",
              "username": "Abhi",
              "email": "abhi123@gmail.com",
              "password": "$2a$10$F7.5ZK5rUCFMTOi5AAvUAe5qtkEZ4fXtfaTKR3HRCoTGFNGd3S0Lm",
              "__v": 0
            },
            "__v": 0
          },
          "_id": "63e889ac29e2e0ab247f60cc"
        }
      ]
      
  return (
    // <div>{ctn.title}</div>
    <>
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container mx-auto">
   
    <div className="flex flex-wrap w-full cursor-pointer">
      <div className=" w-full">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-10 md:h-12 object-cover object-center rounded-md" src={ctn.cover_images.length>0?ctn.cover_images[0].source:img1.src}/>
          <div className="h-10 md:h-12 flex justify-center relative z-10 w-full bg-black bg-opacity-0 opacity-0 hover:bg-opacity-40 hover:opacity-100">
            <div className="">
            <h2 className=" text-xs md:text-sm title-font px-2 text-center font-semibold text-white mb-1">{ctn.title}</h2>
            <div className=" text-xs md:text-sm text-center title-font font-semibold text-white mb-1">
                {ctn.Images.length} Photos
                </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
