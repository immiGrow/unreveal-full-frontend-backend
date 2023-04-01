import React,{useState} from "react";
import Photo from "./Photo";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from '../Files/Loader'
import baseUrl from "../../../mongodb/baseUrl";

// Cleanup the code, Notification, Rectify the UPlOAD PAGE

export default function Photos({imageArr,setImageArr,page,setPage,totalDocs,pageCount,deviceWidth,deviceHeight}) {
 
  const fetchMoreImages=async()=>{
    await setPage(page+1)
    console.log("The",page," page")
    
    const req=await fetch(`${baseUrl}/api/photostudio/allphotos?page=${page}`)
    const res=await req.json()
    const addedArr= imageArr.concat(res.response.results)
    let uniqueArr =await addedArr.filter( (ele, ind) => ind === addedArr.findIndex( elem => elem._id === ele._id))
    console.log("the addedArr",addedArr,"the imageArr",imageArr,"uniqueArr",uniqueArr)
    await setImageArr(uniqueArr)


  }

  return (
    <>
    
      <div className="Full ">
        
      
        <InfiniteScroll
        dataLength={totalDocs}
        next={fetchMoreImages}
        hasMore={page>=pageCount?false:true}
        loader={page>=pageCount?"":<Loader/>}
        >
         <div
        //  className="render-div my-3 px-4 space-y-4"
        className="render-div my-3 space-y-4 px-4 py-2"
         >
          {
            imageArr && imageArr.map((image,index)=>{
              // console.log("inside map function",image)
              return(
<div key={index} className="">
            <Photo image={image} index={index} deviceHeight={deviceHeight} deviceWidth={deviceWidth}/>
          </div>
              )
            })
          }
          
        </div> 
        </InfiniteScroll> 

      </div>
    </>
  );
}
