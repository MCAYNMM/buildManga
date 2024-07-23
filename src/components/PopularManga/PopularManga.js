import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";

import { useSelector } from "react-redux";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const LatestManga = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mangasPerPage] = useState(4);
  const [loading, setLoading] = useState(false);

  const [readMode, setReadMode] = useState(
    useSelector((state) => state.ReadMode.readmode)
  );
  const [newRelease, setNewRelease] = useState([]);
  const sv = useSelector((state) => state.server.sv);
  const id_user = () => {
    if (sessionStorage.getItem("user_id") == null) {
      return 0;
    } else return sessionStorage.getItem("user_id");
  };

  // console.log("check detail", newRelease);
  const getChapterFromUrl2 = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };
  const getChapterFromUrl = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 1];
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://apimanga.mangasocial.online/${sv}/popular_manga/${currentPage}`
      );
      console.log("rrrrrrrrrrrrr", response.data);
      setLoading(false);
      return response.data;
    };
    getData();
  }, [currentPage, sv]);
  return (
    <>
      <div className="text-white text-xl">Poppular manga</div>
      {/* {readMode === false ? (
        loading ? (
          <Loading
            type={"spin"}
            color={"#FF9F66"}
            height={300}
            width={300}
            text="Loading..."
          />
        ) : (
          <div className="grid grid-cols-1 gap-4 mx-10">
            {newRelease &&
              newRelease.map((item, index) => (
                <LatestCardManga
                  key={index}
                  poster={item?.image_poster_link_goc}
                  title={item?.title_manga}
                  rate={item?.rate}
                  update={item.time_release}
                  chapter={item.chapter_new || item.chaper_new}
                  chapterLink={item.url_chapter}
                  path_segment={
                    item?.path_segment_manga
                      ? item?.path_segment_manga
                      : (item?.url_manga && sv === 4) ||
                        sv === 9 ||
                        sv === 11 ||
                        sv === 12
                      ? item?.url_manga.replace(
                          "https://apimanga.mangasocial.online/rnovel/",
                          ""
                        )
                      : item?.url_manga.replace(
                          "https://apimanga.mangasocial.online/rmanga/",
                          ""
                        )
                  }
                />
              ))}
          </div>
        )
      ) : loading ? (
        <Loading
          type={"spin"}
          color={"#FF9F66"}
          height={300}
          width={300}
          text="Loading..."
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 mx-10">
          {newRelease &&
            newRelease.map((item, index) => (
              <LatestCardManga
                key={index}
                poster={item?.image_poster_link_goc || item?.poster_novel}
                title={item?.title_manga || item?.title_novel}
                rate={item?.rate || item?.time_update}
                update={item.time_release || item?.time_update}
                chapter={item.chapter_new || item?.title_chapter}
                chapterLink={item.url_chapter || item?.id_chapter}
                path_segment={
                  item?.url_chapter
                    ? getChapterFromUrl(item?.id_manga || item?.url_manga)
                    : getChapterFromUrl2(item.link_server_novel)
                }
                url_manga={item["url_manga"]}
              />
            ))}
        </div>
      )}
      <div className="flex mt-5 justify-center">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          className="text-white px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-md transition-colors duration-200 ease-in-out"
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          onClick={() => handlePageClick(currentPage)}
          className="text-white px-3 py-1 bg-gray-700 border border-gray-600 rounded-md transition-colors duration-200 ease-in-out"
        >
          {currentPage}
        </button>
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          className="text-white px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-md transition-colors duration-200 ease-in-out"
        >
          {currentPage + 1}
        </button>
        <button
          onClick={() => handlePageClick(currentPage + 2)}
          className="text-white px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-md transition-colors duration-200 ease-in-out"
        >
          {currentPage + 2}
        </button>
        <button
          onClick={() => handlePageClick(currentPage + 3)}
          className="text-white px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-md transition-colors duration-200 ease-in-out"
        >
          {currentPage + 3}
        </button>

        <button
          onClick={() => handlePageClick(currentPage + 1)}
          className="text-white px-3 py-1 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-md transition-colors duration-200 ease-in-out"
        >
          <FaArrowRight size={24} />
        </button>
      </div> */}
    </>
  );
};

export default LatestManga;
