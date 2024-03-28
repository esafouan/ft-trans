import React, { useEffect, useState } from 'react'
import "./OwnerInfo.css"
import "./owner.css"
import AddFriendModal from '../../../../Modals/addfriend/addfriend'
import SetOwnerModal from '../../../../Modals/Setowner/setowner'
import axios from 'axios'
import { useSocket } from '../../../../Socket'

function OwnerOption (roleSelected : any,SetRole:any, room: any, memberSelectedid :any, RoomSelceted:any) 
{
  const socket = useSocket()

  const handleKick = () => {
    socket?.emit('kickuser', {id : memberSelectedid , name :  room.name});
    SetRole(null)
  }


  const handleMute = () => {
    socket?.emit('muteuser', {id : memberSelectedid , name :  room.name});
    SetRole(null)
  }

  const handleBan = () => {
    socket?.emit('banuser', {id : memberSelectedid , name :  room.name});
    SetRole(null)
  }

  if (roleSelected === 'default') {
    const SetAdmin = () => {
      socket?.emit('setadmin', {id : memberSelectedid , name :  room.name});
      SetRole(null)
      
    }


    return (
      <div className="owner-member">
        <div className="optowner kick" onClick={handleKick}>
          kick
        </div>
        <div className="optowner mute" onClick={handleMute}>
          mute
        </div>
        <div className="optowner ban" onClick={handleBan}>
          ban
        </div>
        <div className="optowner setadmin" onClick={SetAdmin}>
          admin
        </div>
      </div>
    )
  }

  if (roleSelected === 'admin') {

    const UnAdmin = () => {
      socket?.emit('unsetadmin', {id : memberSelectedid , name :  room.name});
      SetRole(null)
    }

    return (
      <div className="owner-member">
          <div className="optowner kick" onClick={handleKick}>
          kick
        </div>
        <div className="optowner mute" onClick={handleMute}>
          mute
        </div>
        <div className="optowner ban" onClick={handleBan}>
          ban
        </div>
        <div className="optowner setadmin" onClick={UnAdmin}>
          Unadmin
        </div> 
      </div>
    )
  }

}

function adminOption (roleSelected : any) 
{

  if (roleSelected === 'default')
  {
    return (
      <div className="friend-options">
        <div className="optowner kick" >
          kick
        </div>
        <div className="optowner mute" >
          mute
        </div>
        <div className="optowner ban">
          ban
        </div>
      </div>
    )
  }

  else 
  {
    return (
      <div className="friend-options">
        <div className='no-opt'><p>No options</p></div>
      </div>
    )
  }
}

function memberOption (roleSelected : any)
{
  
  return (
    <div className="friend-options">
      <div className='no-opt'><p>No options</p></div>
    </div>
  )
}

function renderOptions(roleSelected : any, SetRole:any, room : any, memberSelectedid: any, RoomSelceted:any) {
  if (!roleSelected) {
    return (
      <div className="friend-options">
        <div className='no-opt'><p>No options</p></div>
      </div>
    )
  }

  if (room.me === 'admin') 
    return (adminOption(roleSelected));
  else if (room.me === 'owner') 
      return (OwnerOption(roleSelected, SetRole,room, memberSelectedid, RoomSelceted)) 
  else if (room.me === 'default') 
      return (memberOption(roleSelected))
}




const Owner = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [friendName, setFriendName] = useState("");
  const [showSetOwner, setShowSetOwner] = useState(false);

  const handleAddClick = () => {
    setShowAdd(true);
  };

  const handleLeaveClick = () => {
    setShowSetOwner(true);
  };

  const handleFormSubmit = async () => {
    setShowAdd(false);
    setFriendName("");
  };

  const handleLeaveSubmit = async () => {
    setShowAdd(false);
    setFriendName("");
  };

  const handleCancel = () => {
    setShowAdd(false);
    setFriendName("");
    setShowSetOwner(false);

  };

  return (
    <>
      <div className='addowner own' onClick={handleAddClick}>add</div>
      <div className='leaveowner own' onClick={handleLeaveClick}>leave</div>

      <AddFriendModal
        show={showAdd}
        friendName={friendName}
        setFriendName={setFriendName}
        onSubmit={handleFormSubmit}
        onCancel={handleCancel}
      />

      <SetOwnerModal
          show={showSetOwner}
          friendName={friendName}
          setFriendName={setFriendName}
          onSubmit={handleLeaveSubmit}
          onCancel={handleCancel}
      />

    </>
  );
};





function MyOptions(roomRole : any) {
  
  if (roomRole === 'owner') 
  {
    return(
      <Owner />
    )
  }

}

const RoomInfo = ({profile, room, RoomSelceted}) => {
 

  const [memberSelectedid, SetMember] = useState(null);
  const [RoleSelected, SetRole] = useState(null);


  const handleSelectMember = (member) => {
    SetMember(member.id);
    SetRole(member.role);
  }
  


  return (
    <>
      {
        room
          ? (<>
              <div className="other-title">
                <p>Infos</p>
                {room && MyOptions(room.me)}
              </div>

              <div className="Otherimg">
                <img />
              </div>

              <div className="Othername">
                <p> {room.name} </p>
              </div>

              <div className="other-options">
                <>
                {
                  room && renderOptions(RoleSelected, SetRole, room, memberSelectedid,RoomSelceted)
                }
                </>
                
                <div className="groupMembers">
                    {room.members && room.members.map( (member) => (
                      member.status != 'banned' && (
                        
                        <div className={`member ${member.id === memberSelectedid ? 'member-active' : ''}`}
                        onClick={()  => handleSelectMember(member) }
                        >
                          {console.log(member)}
                          <div className="amis-image">
                            <img  src={member.avatar}/>
                          </div>
                          <div className="amis-infos">
                            <p className="amis-name"> <p>{member.login}</p> </p>
                          </div> 
                          <p className="amis-status"> <p>{member.role}</p> </p>
                        </div> 
                        )
                       
                     
                    ))}
                  </div>
                </div>
           
            </>
            ) 
          : ( <div className='no-info'><p>No informations</p></div>)
      }
    </>
  )
}


  export default RoomInfo