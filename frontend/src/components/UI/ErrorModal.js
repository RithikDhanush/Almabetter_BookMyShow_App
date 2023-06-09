import React, { useContext } from "react";
import BsContext from "../../context/Context";
import "../styles/errorModal.css";


function Modal(props) {
/*This code is for a Modal component that displays an error message when triggered. The component is using 
React hooks and context to access the error state and functions to control the display of the modal.  */
  const context = useContext(BsContext);
  const { errorPopup, errorMessage, setErrorPopup, setErrorMessage } = context;

/*The Modal component is rendered conditionally, based on the value of the errorPopup state variable. 
If it is true, then the modal is displayed. If it is false, then the modal is hidden. */
// Function to close the error modal
  const handleClosePopup = () => {
    setErrorMessage("");
    setErrorPopup(false);
  };


/*When the Close button is clicked, it calls the handleClosePopup function, which sets the errorMessage state 
variable to an empty string and sets the errorPopup state variable to false, thus hiding the modal. */
  return (
    <>
      {errorPopup && (
        <div
          className={`modal-container ${errorPopup ? "active" : "inactive"}`}
        >
          <div className="modal">
            <div className="modal-header">
              <strong>Message</strong>
            </div>
            <div className="modal-body">
              {/* Display the error message  */}
              <span>{errorMessage}</span>
            </div>
            <div className="modal-footer">
              <button onClick={handleClosePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
