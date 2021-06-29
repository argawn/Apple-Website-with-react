import React,{useEffect,useState} from 'react';
import './youtube.css';

function Youtube() {
    const [youTubeVideos,addVideos]= useState([])
    useEffect(()=>{
     fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAPffaIhjCD4io1iBuSZmNzvQ5uIu1-7Fk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6  ")
     .then((Response)=> Response.json())
     .then((data)=>{
         const Argaw = data.items;
         addVideos(Argaw);
     });
      
    },[]);
    console.log(youTubeVideos);

   
    return (
        <div className="allVideoWrapper">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-12">
                <div className="title-wrapper">
                  Latest Videos
                  <br />
                  <br />
                </div>
              </div>
              {youTubeVideos.map((singleVideo) => {
                let vidId = singleVideo.id.videoId;
                let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                let videoWrapper = (
                  <div key={vidId} className="col-sm-12 col-md-6 col-lg-4">
                    <div className="singleNewsWrapper">
                      <div className="videoThumbnail">
                        <a href={vidLink} target="_blank">
                          <img src={singleVideo.snippet.thumbnails.high.url} />
                        </a>
                      </div>
                      <div className="videoInfoWrapper">
                        <div className="videoTitle">
                          <a href={vidLink} target="_blank">
                            {singleVideo.snippet.title}
                          </a>
                        </div>
                        <div className="videoDesc">
                          {/* {singleVideo.snippet.description}  */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
                return videoWrapper;
              })}
            </div>
          </div>
        </div>
      );
    }
    
    
  
  
  export default Youtube;