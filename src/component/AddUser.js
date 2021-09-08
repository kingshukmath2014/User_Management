import React, { useState } from "react";
import "../css/common.scss";
import { addUser } from "../action";
import { useDispatch } from "react-redux";

const AddUser = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
    state: "",
  });

  const [validMail, setValidmail] = useState(true);
  const [validPhone, setValidphone] = useState(true);

  const setData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createUser = () => {
    if (formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,4})$/i))
      setValidmail(true);
    else setValidmail(false);
    if (formData.phone.length == 10) setValidphone(true);
    else setValidphone(false);
    if (
      formData.username != "" &&
      formData.dob != "" &&
      formData.state != "" &&
      formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,4})$/i) &&
      formData.phone.length == 10
    ) {
      dispatch(addUser(formData));
      alert("Data insert successful");
      setFormData({
        username: "",
        email: "",
        phone: "",
        dob: "",
        state: "",
      });
    } else {
      if (
        formData.username != "" ||
        formData.dob != "" ||
        formData.state != ""
      ) {
        alert("Please fill all the fields with proper data");
      }
    }
  };

  return (
    <div>
      <div className="comp-heading">Add User</div>
      <div className="content-wrap">
        <div className="formField-container">
          <div className="formField">
            <div className="formLabel">Username</div>
            <div>
              <input
                type="text"
                name="username"
                className="inputField"
                value={formData.username}
                onChange={(e) => setData(e)}
              />
            </div>
          </div>
          <div className="formField">
            <div className="formLabel">Email</div>
            <div>
              <input
                type="text"
                name="email"
                className="inputField"
                onChange={(e) => setData(e)}
                value={formData.email}
                style={{
                  borderColor: !validMail ? "#FFA2A2" : "#ededed",
                }}
              />
              {!validMail && (
                <div className="err-msg">Enter valid email id</div>
              )}
            </div>
          </div>
          <div className="formField">
            <div className="formLabel">Phone</div>
            <div>
              <input
                type="text"
                name="phone"
                className="inputField"
                onChange={(e) => setData(e)}
                value={formData.phone}
                style={{
                  borderColor: !validPhone ? "#FFA2A2" : "#ededed",
                }}
              />
              {!validPhone && (
                <div className="err-msg">
                  Enter a valid phone number (10 digits)
                </div>
              )}
            </div>
          </div>
          <div className="formField">
            <div className="formLabel">DOB</div>
            <div>
              <input
                type="date"
                name="dob"
                className="inputField"
                value={formData.dob}
                onChange={(e) => setData(e)}
              />
            </div>
          </div>
          <div className="formField">
            <div className="formLabel">State</div>
            <div>
              <select
                name="state"
                className="inputField"
                style={{ width: "23vw" }}
                onChange={(e) => setData(e)}
                value={formData.state}
              >
                <option value="">Select State</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
          </div>
          <div className="formField">
            <div></div>
            <div>
              <button className="submit-btn" onClick={() => createUser()}>
                Create User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
