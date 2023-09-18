import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { useWebInteraction } from "../../context/WebInteractionContext";
import config from "../../utils/config";

const apiUrl = config.callApiUrl;

const Call = ({ user }) => {
  const { WebInteraction } = useWebInteraction();

  let data = {
    operation: "updateProfile",
    profileName: user.profileName,
    webInteractions: WebInteraction,
  };

  const initiateCall = () => {
    const phoneNumber = config.callNowNumber;
    console.log("phoneNumber=-=> ", phoneNumber);
    window.open(`tel:${phoneNumber}`);
  };

  const callBtnHandler = async () => {
    // console.log("useWebInteraction =-=->", WebInteraction);
    try {
      data.timeStamp = Date.now();
      let config = {
        method: "post",
        url: apiUrl,
        data: data,
      };
      let resp = await axios.request(config);
      console.log("Call resp===> ", resp.data);
      initiateCall();
    } catch (error) {
      console.log("Call err===> ", error);
    }
  };

  return (
    <button className="call-btn" onClick={callBtnHandler}>
      <div className="call-text">Call</div>
      <i className="fa-solid fa-phone call-icon"></i>
      {/* <img src="/assets/images/call.png" alt="" className="img-responsive" /> */}
    </button>
  );
};

export default Call;
