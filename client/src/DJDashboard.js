import React from "react";

var formData = new FormData();

class DJDashboard extends React.Component {
  state = {
    documents: []
  };

  handleDocumentUpload = files => {
    const chosenCaseData = new FormData();
    let newDocuments = [];
    for (let key in files) {
      if (!isNaN(key)) {
        chosenCaseData.append("document", files[key].name);
      }
    }
    for (let pair of chosenCaseData.entries()) {
      newDocuments.push({
        fileName: pair[1],
      });
    }
    this.setState({ documents: newDocuments });

    for (let j = 0; j < files.length; j++) {
      formData.append("document", files[j], "99?" + files[j].name);
    }
  };

  render() {
    return (
      <div className=" djcontainer">
        <div
          className="row justify-content-center align-items-center upload fullSizeNoImage"
          align="center"
          style={{ backgroundColor: "black" }}
        >
          <div className="col-12">
          <div className="file-input-wrapper">
            <label className="btn btn-warning" htmlFor="outerFileUpload">
              Select File to Stream
            </label>
            <input
              id="outerFileUpload"
              className="fileUploadBtn"
              type="file"
              onChange={e => {
                this.handleDocumentUpload(e.target.files);
              }}
              multiple
            />
          </div>
          </div>
        </div>
        <div
          className="row justify-content-center align-items-center playlist fullSizeBlackImage"
          align="center"
        >
          <div className="col-12">hello</div>
        </div>
      </div>
    );
  }
}

export default DJDashboard;
