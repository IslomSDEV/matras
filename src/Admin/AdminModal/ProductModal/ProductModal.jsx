import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import { Context } from "../../../Context/Context";
import "./ProductModal.css";

export default function ProductModal() {
  const { showModalPro, handleProductModal, categoryData } = useContext(Context);

  const [toifa, setToifa] = useState("");
  const [proName, setProName] = useState("");
  const [price, setPrice] = useState(0);
  const [yuklama, setYuklama] = useState("");
  const [razmer, setRazmer] = useState("");
  const [kafolat, setKafolat] = useState("");
  const [sigm, setSigm] = useState(0);
  const [skidka, setSkidka] = useState("");
  const [info, setInfo] = useState("");
  const [img, setImg] = useState([]);

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    setSelectedFiles(files);
  };


  
    function handleSelectPicture(e) {
        const files = Array.from(e.target.files);
        setImg(files);
    }
    



  function addProdata(e) {
    e.preventDefault();

    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('photos', selectedFiles[i]);
    }
    formData.append('product_name',proName)
    formData.append('product_price',price)
    formData.append('product_weight',yuklama)
    formData.append('product_size',razmer)
    formData.append('product_guaranty',kafolat)
    formData.append('product_capasity',sigm)
    formData.append('product_sale_price',skidka)
    formData.append('product_description',info)
    formData.append('product_isNew',true)
    formData.append('product_status',true)
    formData.append('category_id',toifa)
    
    // const sendData = {
    //   product_name: proName,
    //   product_price: price,
    //   product_weight: yuklama,
    //   product_size: razmer,
    //   product_guaranty: kafolat,
    //   product_capasity: sigm,
    //   product_sale_price: skidka,
    //   product_description: info,
    //   product_isNew: true,
    //   product_status: true,
    //   photos: formData,
    //   category_id: toifa,
    // };


    axios
      .post("http://206.189.128.106:3214/v1/products", formData, {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uX2lkIjoiMTYxZjRkYjctODRhNC00N2RkLWI5NDQtZmQ3YzAwNzlkMDFhIiwiaWF0IjoxNjkwNDg2MzU2fQ.cd_GmsiWi5JTEqcZ3W-73H3qDgE_rt8W439KvOzlc1A",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log("suucseeeeeee", res))
      .catch((err) => console.log(err));

    handleProductModal();
    console.log(formData)
  }



  return (
    <>
      <div className={`${showModalPro ? "proShow" : null} ProductModalSy`}>
        <div className="ProductModalDiv">
          <button className="closeBtnpro" onClick={handleProductModal}>
            <MdClose className="proClose" />
          </button>
          <h3 className="proModalTitle">Qo'shish</h3>
          <div className="mdoalTechBox">
            <form onSubmit={addProdata} className="formModal">
              <div className="modalimgBox">
                <div className="productImage">
                  <label htmlFor="firstImg" className="uloadImgLabel">
                    <CiImageOn className="uploadImg" />
                    <input
                      className="selectImg"
                      id="firstImg"
                      type="file"
                      accept="image/jpeg, image/png"
                      multiple onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>

              <div className="proModalBox1">
                <label htmlFor="model">Toifalar</label>
                <select onChange={(e) => setToifa(e.target.value)} name="model" id="model">
                  {categoryData.map((data) => {
                    return (
                      <option
                        key={data.category_id}
                        value={data.category_id}
                      >
                        {data.category_name}
                      </option>
                    );
                  })}
                </select>

                <label htmlFor="proname">Tovar nomi</label>
                <input
                  type="text"
                  id="proname"
                  placeholder="masalan: Lux Soft Memory"
                  onChange={(e) => setProName(e.target.value)}
                />

                <label htmlFor="price">Narxi</label>
                <input
                  type="text"
                  id="price"
                  placeholder="masalan: 20 000"
                  onChange={(e) => setPrice(Number(e.target.value))}
                />

                <label htmlFor="yuklama">Yuklama</label>
                <input
                  type="text"
                  id="yuklama"
                  placeholder="masalan: 200 kg"
                  onChange={(e) => setYuklama(e.target.value)}
                />
              </div>
              <div className="proModalBox2">
                <label htmlFor="razmeri">Razmeri</label>
                <input
                  type="text"
                  id="razmeri"
                  placeholder="masalan: 200 x 140 x 40"
                  onChange={(e) => setRazmer(e.target.value)}
                />

                <label htmlFor="kafolat">Kafolat</label>
                <input
                  type="text"
                  id="kafolat"
                  placeholder="masalan: 1 yil"
                  onChange={(e) => setKafolat(e.target.value)}
                />

                <label htmlFor="sigm">Sig'm</label>
                <input
                  type="text"
                  id="sigm"
                  placeholder="masalan: 2"
                  onChange={(e) => setSigm(Number(e.target.value))}
                />

                <label htmlFor="skidka">Aksiya Narxi</label>
                <input
                  type="text"
                  id="skidka"
                  placeholder="masalan: 1 200 000"
                  onChange={(e) => setSkidka(e.target.value)}
                />
              </div>

              <div className="proModalBox3">
                <label htmlFor="info">Ma'lumot</label>
                <textarea
                  name="Information"
                  id="info"
                  cols="20"
                  rows="7"
                  placeholder="info..."
                  onChange={(e) => setInfo(e.target.value)}
                ></textarea>

                <div className="newSwitchFlex">
                  <h4>New</h4>
                  <div className="proswitch">
                    <div className="circle"></div>
                  </div>
                </div>
                <div className="newSwitchFlex">
                  <h4>Active</h4>
                  <div className="proswitch">
                    <div className="circle"></div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="proModalAddBtn"
                  // onClick={addProdata}
                >
                  Qo'shish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
