import React, { useEffect, useState } from 'react'
import "./OwnerInfo.css"
import "./owner.css"
import AddFriendModal from '../../../../Modals/addfriend/addfriend'

function OwnerOption (roleSelected : any) 
{

  if (roleSelected === 'default') {   
    return (
      <div className="owner-member">
        <div className="optowner kick" >
          kick
        </div>
        <div className="optowner mute" >
          mute
        </div>
        <div className="optowner ban">
          ban
        </div>
        <div className="optowner setadmin">
          admin
        </div>
      </div>
    )
  }

  if (roleSelected === 'admin') {
    return (
      <div className="owner-member">
        <div className="optowner kick" >
          kick
        </div>
        <div className="optowner mute" >
          mute
        </div>
        <div className="optowner ban">
          ban
        </div>
        <div className="optowner setadmin">
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

function renderOptions(roleSelected : any, roomRole : any) {
  if (!roleSelected) {
    return (
      <div className="friend-options">
        <div className='no-opt'><p>No options</p></div>
      </div>
    )
  }

  if (roomRole === 'admin') 
    return (adminOption(roleSelected));
  else if (roomRole === 'owner') 
      return (OwnerOption(roleSelected)) 
  else if (roomRole === 'default') 
      return (memberOption(roleSelected))
}




const Owner = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [friendName, setFriendName] = useState("");

  const handleAddClick = () => {
    setShowAdd(true);
  };

  const handleFormSubmit = async () => {
    // Assuming you'll use axios here to send the request
    console.log("Submitting", friendName);
    // Close the modal and reset the form
    setShowAdd(false);
    setFriendName("");
  };

  const handleCancel = () => {
    setShowAdd(false);
    setFriendName(""); // Optionally reset the friendName on cancel
  };

  return (
    <>
      <div className='addowner own' onClick={handleAddClick}>add</div>
      <div className='leaveowner own'>leave</div>

      <AddFriendModal
        show={showAdd}
        friendName={friendName}
        setFriendName={setFriendName}
        onSubmit={handleFormSubmit}
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
 

  const [memberSelected, SetMember] = useState(null);
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
                  room && renderOptions(RoleSelected, room.me)
                }
                </>
                
                <div className="groupMembers">
                    {room.members && room.members.map( (member) => (
                      
                      <div className={`member ${member.id === memberSelected ? 'member-active' : ''}`}
                        onClick={()  => handleSelectMember(member) }
                      >
                        <div className="amis-image">
                          <img  src={member.avatar}/>
                        </div>
                        <div className="amis-infos">
                          <p className="amis-name"> <p>{member.login}</p> </p>
                        </div> 
                        <p className="amis-status"> <p>{member.role}</p> </p>
                      </div> 
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