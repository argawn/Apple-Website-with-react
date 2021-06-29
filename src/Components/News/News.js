// // d31210b80bbf418b8c1148423faf66c2


// // https://newsapi.org/v2/everything?q=tesla&from=2021-04-14&sortBy=publishedAt&apiKey=d31210b80bbf418b8c1148423faf66c2
// import React,{ useState,useEffect} from 'react'
// import './news.css'

//   function News() {
//     const [newsItems, getNewsItems]=useState([])
//     useEffect(()=>{
//      fetch("https://newsapi.org/v2/everything?q=apple&from=2021-05-15&to=2021-05-15&sortBy=popularity&apiKey=d31210b80bbf418b8c1148423faf66c2")
//      .then((Response)=> Response.json())
//      .then((data)=>{
//          let articles = data.articles;
//          articles = articles.slice(0,6);
//          getNewsItems(articles);
//      });
      
//     },[]);
//     // console.log(NewsItems);

   
//     return (
//         <div className="allVideoWrapper">
//           <div className="container">
//             <div className="row justify-content-center text-center">
//               <div className="col-12">
//                 <div className="title-wrapper">
//                   Latest News
//                   <br />
//                   <br />
//                 </div>
//               </div>
//               {newsItems.map((singleNews) => {
//                 let url = singleNews.url;
//                 let NewsWrapper = (
//                   <div key={url} className="col-sm-12 col-md-6 col-lg-4">
//                     <div className="singleNews">
//                       <div className="NewsThumbnail">
//                         <a href={url} target="_blank">
//                           <img src={singleNews.urlToImage} />
//                         </a>
//                       </div>
//                       <div className="newsInfoWrapper">
//                         <div className="newsTitle">
//                           <a href={url} target="_blank">
//                             {singleNews.title}
//                           </a>
//                         </div>
//                         <div className="NewsDesc">
//                           {/* {singleVideo.snippet.description}  */}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//                 return NewsWrapper;
//               })}
//             </div>
//           </div>
//         </div>
//       );
//     }
    
    
  
  
//   export default News;



// //   https://newsapi.org/v2/everything?q=Apple&from=2021-04-14&sortBy=publishedAt&apiKey=d31210b80bbf418b8c1148423faf66c2