import React from "react";
import  { Axios } from "axios";
import FileDownload from "js-file-download";

const DownloadFile = () => {
  const download = (e) => {
    e.preventDefault();
    Axios({
      url: "http://localhost:4000",
      method: "GET",
      resposeType: "blob",
    }).then((res) => {
      console.log(res, "rgjhgejxgyh");
      FileDownload(res.data, "download.jpg");
    });
  };
  return (
    <div>
      DownloadFile
      <button onClick={(e) => download(e)}>DOWNLOAD</button>
    </div>
  );
};

export default DownloadFile;
