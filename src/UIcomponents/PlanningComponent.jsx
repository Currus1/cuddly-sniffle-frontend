import React from "react";
import "../bootstrap.css";
import "../App.css";

const PlanningComponent = () => {
  function SaveClicked() {
    document.getElementById("ROuser").value =
      document.getElementById("user").value;
    document.getElementById("ROdriver").value =
      document.getElementById("driver").value;
    document.getElementById("ROstartingPoint").value =
      document.getElementById("startingPoint").value;
    document.getElementById("ROdestination").value =
      document.getElementById("destination").value;
    //Calculate the trip time
    document.getElementById("ROestimatedTime").value = "10";
  }

  function PlanClicked() {
    if (
      document.getElementById("ROuser").value != "" &&
      document.getElementById("ROdriver").value != "" &&
      document.getElementById("ROstartingPoint").value != "" &&
      document.getElementById("ROdestination").value != "" &&
      document.getElementById("ROestimatedTime").value != ""
    ) {
      // Register the trip here
      console.log("Registered");
    } else {
      alert("Please make sure to enter all the fields");
    }
  }

  return (
    <>
      <div style={{ textAlign: "center", padding: 10 }}>
        <button onClick={PlanClicked} className="button-planning">
          Plan
        </button>
        <div style={{ padding: 20 }}>
          <table style={{ margin: "auto" }}>
            <tbody>
              <tr>
                <td style={{ width: 450 }}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <label>User</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="user"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Driver</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="driver"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Starting Point</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="startingPoint"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Destination</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="destination"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style={{}}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <label>User</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="ROuser"
                            readOnly
                            placeholder="..."
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Driver</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="ROdriver"
                            readOnly
                            placeholder="..."
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Starting Point</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="ROstartingPoint"
                            readOnly
                            placeholder="..."
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>Destination</label>
                        </td>
                        <td>
                          <input
                            className="form-control"
                            type="text"
                            id="ROdestination"
                            readOnly
                            placeholder="..."
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right" }}>
                  <label>Estimated Time</label>
                </td>
                <td>
                  <input
                    className="form-control"
                    type="text"
                    id="ROestimatedTime"
                    readOnly
                    placeholder="..."
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button onClick={SaveClicked} className="button-save">
          Save
        </button>
      </div>
    </>
  );
};

export default PlanningComponent;
