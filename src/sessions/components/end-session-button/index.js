import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

import SessionService from '../../services/sessionService';
import StorageService from "../../../core/services/storageService";

const EndSessionButton = () => {

    const handleEndSession = () => {
        SessionService.end().then(r => {
            if (r.Success) {
                alert(r.Message);
                StorageService.remove("session-id");
            } else {
                alert(r.Reason);
            }
        })
    }

    return (
        <div className="end-session-button-container">
            <Button onClick={handleEndSession} className="btn btn-danger text-white ml-4">
                <FontAwesomeIcon icon={faSignOut} />
            </Button> 
        </div>
    )
}

export default EndSessionButton;