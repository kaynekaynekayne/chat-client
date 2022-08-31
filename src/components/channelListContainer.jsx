import React from 'react';
import {ChannelList, useChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import {ChannelSearch, TeamChannelList, TeamChannelPreview} from './';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';

const SideBar=()=>(
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src={HospitalIcon} alt="Hospital" width="30"/>
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'>
                <img src={LogoutIcon} alt="Logout" width="30"/>
            </div>
        </div>
    </div>
    //그냥 바로 밑의 코드로 넣을 수 있음 가독성 때문에 뺀거
);

const CompanyHeader=()=>(
    <div className="channel-list__header">
        <p className="channel-list__header__text">Medical Pager</p>
    </div>
)

const ChannelListContainer = (props) => {
    
    return(
        <>
            <SideBar />
            <div className='channel-list__list__wrapper'>
                <CompanyHeader />
                <ChannelSearch />
                <ChannelList
                    filter={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listProps)=>(
                        <TeamChannelList
                            {...listProps}
                            type="team"
                        />
                    )}
                    Preview={(previewProps)=>(
                        <TeamChannelPreview 
                            {...previewProps}
                            type="team"
                        />
                    )}
                />
                <ChannelList
                    filter={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listProps)=>(
                        <TeamChannelList
                            {...listProps}
                            type="messaging"
                        />
                    )}
                    Preview={(previewProps)=>(
                        <TeamChannelPreview 
                            {...previewProps}
                            type="messaging"
                        />
                    )}
                />
            </div>
        </>
    )
};

export default ChannelListContainer;