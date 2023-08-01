import React from "react";
import "./TechnologModal.css";
import { MdClose, MdOutlineCloudUpload } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../Context/Context";
import { useState } from "react";
import axios from "axios";

export default function TechnologModal() {
  const { showTechnoMod, handleTechnoModal } = useContext(Context);

  const [techNameValue, setTechNameValue] = useState("");
  const [techVideoValue, setTechVideoValue] = useState("");
  const [techInfoValue, setTechInfoValue] = useState("");
  const [techPicValue, setTechPicValue] = useState("");
  const [switchD, setSwitchD] = useState(false);

  function switchTogle() {
    setSwitchD(!switchD);
  }

  function postTechData(e) {
    try {
      e.preventDefault();

      let postData = {
        technology_name: techNameValue,
        technology_photo_link: techPicValue,
        technology_video_link: techVideoValue,
        technology_description: techInfoValue,
        technology_status: switchD ? "active" : "inactive",
      };


      axios
        .post("http://206.189.128.106:3214/v1/technologies", postData, {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uX2lkIjoiYmIxNjlhYWMtODFjYy00MGU5LWE1MDYtYWFmZTNkNjAyMDMxIiwiaWF0IjoxNjkwMzcyNzc5fQ.M3-lnTN91yP7tNZB3M9hnwV5JuG3prLKqd8-XKyLtBQ",
            "Content-Type": "application/json",
          },
        })
        .then((res) => console.log("succc", res));
        console.log([techNameValue, techPicValue, techVideoValue, techInfoValue]);
        setTechNameValue("");
        setTechInfoValue("");
        setTechVideoValue("")
        handleTechnoModal();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div
        className={`${showTechnoMod ? "viewTechModal" : null} technologyModal`}
      >
        <div className="technologyModalDiv">
          <button
            className="technoCloseBtn"
            onClick={() => handleTechnoModal()}
          >
            <MdClose className="technoCloseIcon" />
          </button>
          <h3>Qo'shish</h3>
          <form className="techForm" onSubmit={(e) => postTechData(e)}>
            <div className="des">
              <label htmlFor="name">
                Nomi
                <input
                  type="text"
                  name="Nomi"
                  id="name"
                  value={techNameValue}
                  placeholder="masalan:"
                  onChange={(e) => setTechNameValue(e.target.value)}
                />
              </label>
              <label htmlFor="video">
                Video
                <input
                  type="text"
                  name="Video"
                  id="video"
                  value={techVideoValue}
                  placeholder="https://hello.guys.com"
                  onChange={(e) => setTechVideoValue(e.target.value)}
                />
              </label>
              <div className="technostatus">
                <h4>Holati</h4>
                <div className="switch swt" onClick={switchTogle}>
                  <div className={`${switchD ? "switchC" : null} circle`}></div>
                </div>
              </div>
            </div>
            <div className="des">
              <label htmlFor="matn">
                Matn
                <textarea
                  name="Matn"
                  id="matn"
                  cols="30"
                  rows="10"
                  value={techInfoValue}
                  placeholder="Matn"
                  onChange={(e) => setTechInfoValue(e.target.value)}
                ></textarea>
              </label>
              <label className="uploadLabal">
                <MdOutlineCloudUpload className="uploadIcon" />
                <input
                  className="upPic"
                  type="file"
                  onChange={(e) => setTechPicValue(e.target.value)}
                />
              </label>
              <button type="submit" className="addBtnForTechn">
                Qo' shish
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
