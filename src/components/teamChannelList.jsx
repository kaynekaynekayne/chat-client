import React from 'react';
import {AddChannel} from '../assets/AddChannel';

const TeamChannelList = ({children, error=false, loading, type}) => {
    
    if(error){
        return type==="team" ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Connection error. try again.
                </p>
            </div>
        ) : null;
    }
    
    if(loading){
        <div className="team-channel-list">
            <p className="team-channel-list__message loading">
                {type==='team' ? 'Channels' : 'Message'} Loadding..
            </p>
        </div>
    }

    return(
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    {type==="team" ? "channels" : "Direct Messages"}
                </p>
                {/* {Button - addChannels} */}
            </div>
            {children}
        </div>
    )
};

export default TeamChannelList;