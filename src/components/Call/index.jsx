import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";
import { useWebInteraction } from "../../context/WebInteractionContext";

const apiUrl =
  "https://us-central1-nipon-test-350808.cloudfunctions.net/public_updateProfile_MongoDB_FSI_Preview";

// let data = JSON.stringify({
//   operation: "updateProfile",
//   profileName: "alexsmithfsipreviewvoice",
//   webInteractions: {
//     menu1: "Car Loan",
//     menu2: "Personal Loan",
//   },
// });

// let config = {
//   method: "post",
//   url: "https://us-central1-nipon-test-350808.cloudfunctions.net/public_updateProfile_MongoDB_FSI_Preview",
//   data: data,
//   // maxBodyLength: Infinity,
//   // headers: {
//   //   "Content-Type": "application/json",
//   // },
// };

const Call = ({ user }) => {
  const { WebInteraction } = useWebInteraction();

  let data = JSON.stringify({
    operation: "updateProfile",
    profileName: user.profileName,
    webInteractions: WebInteraction,
  });

  let config = {
    method: "post",
    url: apiUrl,
    data: data,
  };

  const callBtnHandler = async () => {
    // console.log("useWebInteraction =-=->", WebInteraction);
    try {
      let resp = await axios.request(config);
      console.log("Call resp===> ", resp.data);
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
