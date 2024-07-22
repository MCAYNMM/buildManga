// import React, { useEffect, useState, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";

// const LatestCardManga = ({
//   poster,
//   title,
//   rate,
//   update,
//   chapter,
//   path_segment,
//   chapterLink,
//   url_manga,
// }) => {
//   const [showTooltip, setShowTooltip] = useState(false);
//   const [mangaChapters, setMangaChapters] = useState();
//   const titleRef = useRef(null);
//   const sv = useSelector((state) => state.server.sv);
//   const readmode = useSelector((state) => state.ReadMode.readmode);
//   const [pathName, setPathName] = useState("");
//   const chapterNumberReadMode = chapterLink ? chapterLink : "";
//   // console.log("check link", chapterNumberReadMode);
//   const getChapterFromUrl = (url) => {
//     const parts = url.split("/");
//     return parts[parts.length - 1];
//   };
//   const chapterUrl1 = chapterLink.split("/");
//   const chapterUrl2 = chapterUrl1[chapterUrl1.length - 1].split("-");
//   const newChapter = chapterUrl1[chapterUrl1.length - 1];

//   const truncatedTitle = title.length > 20 ? `${title.slice(0, 20)}...` : title;
//   const getChapterFromUrl2 = (url) => {
//     const parts = url.split("/");
//     return parts[parts.length - 2];
//   };
//   console.log("url manga", url_manga);
//   useEffect(() => {
//     if (titleRef.current) {
//       setShowTooltip(
//         titleRef.current.offsetWidth < titleRef.current.scrollWidth
//       );
//     }
//   }, [title]);
//   useEffect(() => {
//     const fetchChapters = async () => {
//       let mangaChapters = [];
//       let response = await axios.get(url_manga);
//       mangaChapters = response.data["chapters"].slice(-5);
//       console.log("5 newest chapters", mangaChapters);
//       console.log("path_segment", url_manga);
//       setMangaChapters(mangaChapters);
//     };
//     if (url_manga) {
//       console.log(11111111111);
//       fetchChapters();
//     }
//     // fetchChapters();
//   }, [url_manga]);

//   return (
//     <>
//       <NavLink
//         to={`/${sv}/${
//           sv === 4 || sv === 11
//             ? `${chapterNumberReadMode === "" ? "chapter" : "novel"}`
//             : "chapter"
//         }/${path_segment}`}
//         className="w-full border-b pb-2 border-white border-opacity-25 flex justify-between"
//       >
//         {/* Hình ảnh manga */}
//         <div className=" flex text-white truncate gap-14 justify-start">
//           <img src={poster} className="h-[auto] w-[109px] object-cover" />
//           <div className=" ">
//             {/* Tên manga */}
//             <h2 className=" text-white font-bold mb-3  w-auto text-xl">
//               {truncatedTitle}
//             </h2>
//             {/* Danh sách 5 chapter mới nhất */}
//             <ul className="mt-2">
//               <li className="my-2 text-lg hover:bg-gray-800 rounded-lg cursor-pointer">
//                 <NavLink
//                   to={`/${sv}/${
//                     sv === 4 || sv === 11
//                       ? `${chapterNumberReadMode === "" ? "chapter" : "novel"}`
//                       : "chapter"
//                   }/${path_segment}/${newChapter}`}
//                 >
//                   Chapter:
//                   {chapterUrl2[chapterUrl2.length - 1]}
//                 </NavLink>
//               </li>
//               {/* {mangaChapters &&
//                 mangaChapters.map((chapter, index) => {
//                   const parts = chapter.split("-");
//                   console.log("chapteree", chapter);
//                   const chapterNumber = parts[parts.length - 1];
//                   return (
//                     <li
//                       key={index}
//                       className="my-2 text-lg hover:bg-gray-800 rounded-lg cursor-pointer"
//                     >
//                       <NavLink
//                         to={`/${sv}/${
//                           sv === 4 || sv === 11
//                             ? `${
//                                 chapterNumberReadMode === ""
//                                   ? "chapter"
//                                   : "novel"
//                               }`
//                             : "chapter"
//                         }/${path_segment}/${path_segment}-chapter-${chapterNumber}`}
//                       >
//                         Chapter:
//                         {chapterNumber}
//                       </NavLink>
//                     </li>
//                   );
//                 })} */}
//             </ul>
//           </div>
//         </div>
//         {/* Thông tin manga */}

//         {/* Ngày phát hành */}
//         <div className="flex-shrink-0 flex flex-col">
//           <div className="mt-auto">
//             <p className="text-sm text-white bg-gray-900 p-2 rounded-lg">
//               Update: {update}
//             </p>
//           </div>
//         </div>
//         {/* <div className=" cursor-pointer">
//         <div className="rounded-xl group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
//           <div className="w-full h-[300px] max-[435px]:h-[160px]">
//             <img
//               className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 rounded-[12px]"
//               src={poster}
//               alt=""
//             />
//           </div>
//         </div>

//         <div className="text-[#FFFFFF]">
//           <div className="mt-5 max-[435px]:mt-1 max-[435px]:w-full ">
//             <p className="text-[#FFFFFF] lg:text-[16px] max-[435px]:w-full  2xl:text-[18px] leading-10  font-semibold overflow-hidden whitespace-normal w-[200px]   max-[435px]:leading-[1.75rem]">
//               {title}
//             </p>
//             <NavLink
//               // to={`
//               // /${
//               //   readmode
//               //     ? getChapterFromUrl2(chapterNumberReadMode)
//               //     : getChapterFromUrl(chapterNumberReadMode)
//               // }`}
//               // to={`/${sv}/${
//               //   sv === 4 || sv === 11 ? "novel" : "chapter"
//               // }/${path_segment}/${getChapterFromUrl(chapterNumberReadMode)}`}
//               to={`/${sv}/${
//                 sv === 4 || sv === 11
//                   ? `${chapterNumberReadMode === "" ? "chapter" : "novel"}`
//                   : "chapter"
//               }/${path_segment}/${
//                 getChapterFromUrl(chapterNumberReadMode) === "None"
//                   ? ""
//                   : chapterNumberReadMode.includes("web")
//                   ? getChapterFromUrl2(chapterNumberReadMode)
//                   : getChapterFromUrl(chapterNumberReadMode)
//               }`}
//             >
//               <p className="lg:text-[16px] 2xl:text-[18px] max-[435px]:text-[13px] leading-8 font-semibold  mt-3 max-[435px]:mt-1">
//                 Chapter: {chapter}
//               </p>
//             </NavLink>
//           </div>
//           {rate && (
//             <div className="flex items-center gap-[12px] max-[435px]:gap-2">
//               <img
//                 className="w-5 h-5 max-[435px]:w-4 max-[435px]:h-4"
//                 src="/images/star.png"
//                 alt=""
//               />
//               <div className="text-[20px] max-[435px]:text-[13px]">
//                 <span className="">{rate}</span>
//                 <span className="">/5</span>
//               </div>
//             </div>
//           )}

//           {update && (
//             <div className="px-[10px] py-[5px] max-[435px]:w-full bg-[#363636] w-max rounded-[33px] mt-3 max-[435px]:mt-2 max-[435px]:py-[0px] max-[435px]:px-[0px]">
//               <p className="max-[435px]:w-full max-[435px]:truncate max-[435px]:text-center lg:text-[16px] 2xl:text-[18px] max-[435px]:text-[12px] leading-8 font-semibold">
//                 Update: {update}
//               </p>
//             </div>
//           )}
//         </div>
//       </div> */}
//       </NavLink>
//     </>
//   );
// };

// export default LatestCardManga;

import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const LatestCardManga = ({
  poster,
  title,
  rate,
  update,
  chapter,
  path_segment,
  chapterLink,
  url_manga,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [mangaChapters, setMangaChapters] = useState();
  const titleRef = useRef(null);
  const sv = useSelector((state) => state.server.sv);
  const readmode = useSelector((state) => state.ReadMode.readmode);
  const [pathName, setPathName] = useState("");
  const chapterNumberReadMode = chapterLink ? chapterLink : "";

  const getChapterFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  };

  const chapterUrl1 = chapterLink.endsWith("/")
    ? chapterLink.slice(0, -1).split("/")
    : chapterLink.split("/");
  const chapterUrl2 = chapterUrl1[chapterUrl1.length - 1].split("-");
  const newChapter = chapterUrl1[chapterUrl1.length - 1];

  const urlToManga = chapterLink.endsWith("/")
    ? chapterLink.slice(0, -1).split("/")
    : chapterLink.split("/");

  const getChapterFromUrl2 = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  useEffect(() => {
    if (titleRef.current) {
      setShowTooltip(
        titleRef.current.offsetWidth < titleRef.current.scrollWidth
      );
    }
  }, [title]);

  useEffect(() => {
    const fetchChapters = async () => {
      let mangaChapters = [];
      let response = await axios.get(url_manga);
      mangaChapters = response.data["chapters"].slice(-5);
      setMangaChapters(mangaChapters);
    };
    if (url_manga) {
      fetchChapters();
    }
  }, [url_manga]);

  return (
    <NavLink
      to={`/${sv}/${
        sv === 4 || sv === 11
          ? `${chapterNumberReadMode === "" ? "chapter" : "novel"}`
          : "chapter"
      }/${path_segment}`}
      className="w-full border-b pb-2 border-white border-opacity-25 flex justify-between"
    >
      <div className="flex text-white w-ful gap-4 justify-start">
        <img src={poster} className="h-[auto] w-[109px] object-cover" />
        <div className="relative h-full max-[486px]:max-w-[290px] max-[360px]:max-w-[250px] max-[333px]:max-w-[200px]">
          <h2
            className="text-white font-bold mb-3 text-xl truncate max-w-full"
            ref={titleRef}
          >
            {/* {truncatedTitle} */}
            {title}
          </h2>
          <ul className="p-0 m-0 mt-2 ">
            <li className="my-2 text-lg hover:bg-gray-800 rounded-lg cursor-pointer">
              <NavLink
                to={`/${sv}/${
                  sv === 4 || sv === 11
                    ? `${chapterNumberReadMode === "" ? "chapter" : "novel"}`
                    : "chapter"
                }/${path_segment}/${newChapter}`}
              >
                Chapter: {chapterUrl2[chapterUrl2.length - 1]}
              </NavLink>
            </li>
          </ul>
          <p className="hidden max-[600px]:block absolute bottom-0 text-sm whitespace-nowrap text-white bg-gray-900  p-2 rounded-lg">
            Update: {update}
          </p>
        </div>
      </div>
      <div className="max-[600px]:hidden flex-shrink-0 flex flex-col">
        <div className="mt-auto">
          <p className="text-sm text-white bg-gray-900 p-2 rounded-lg">
            Update: {update}
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default LatestCardManga;
