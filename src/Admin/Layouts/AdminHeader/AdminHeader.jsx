import React from 'react';
import "./AdminHeader.css";
import { FiSearch } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
 
export default function AdminHeader() {
  return (
    <>
      <div className="adminHeaderSy">
        <div className="adminHeaderFlex">
            <div className="adminHeaderLeft">
              <input className='adminHeaderSerachInput' type="text" placeholder='User' />
              <FiSearch className="adminHeaderSearchIcon"/>
            </div>
            <div className="adminHeaderRight">
              <div className="adminHRflex">
                <div className="userImgBox">
                  <CiUser className='userIconn' />
                </div>
                <h4 className='userName'>
                  John Doe
                </h4>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
