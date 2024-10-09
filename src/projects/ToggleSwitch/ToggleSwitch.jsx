import { IoIosSwitch } from "react-icons/io";
import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () => {
  const [isOn, setOn] = useState(false);

  const handleToggleSwitch = () => {
    setOn(!isOn);
  };
  const ToggleBgColor = { backgroundColor: isOn ? "#4caf50" : "" };

  return (
    <div>
      <h1 className="text-2xl text-center">
        Toggle Button Switch{" "}
        <IoIosSwitch style={{ color: "red", textAlign: "center",  }} />
      </h1>
      <div
        onClick={handleToggleSwitch}
        className="toggle-switch"
        style={ToggleBgColor}
      >
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <span className="switch-state"> {isOn ? "on" : "off"}</span>
        </div>
      </div>
    </div>
  );
};

// import { useState } from "react";
// import "./ToggleSwitch.css";
// export const ToggleSwitch = () => {
//   const [isOn, setOn] = useState(false);

//   const handleToggleSwitch = () => {
//     setOn(!isOn);
//   };
//   const CheckIsOn = isOn ? "on" : "off";
//   const ToggleBgColor = { backgroundColor: isOn ? "#4caf50" : "" };
//   return (
//     <div>
//       <h1 className="mt-4 font-bold text-2xl">Toggle Button Switch</h1>
//       <div
//         className="toggle-switch"
//         style={ToggleBgColor}
//         onClick={handleToggleSwitch}
//       >
//         <div className={`switch ${CheckIsOn}`}>
//           <span className="switch-state">{CheckIsOn}</span>
//         </div>
//       </div>
//     </div>
//   );
// };
