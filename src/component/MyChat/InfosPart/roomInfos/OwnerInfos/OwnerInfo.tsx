import React, { useEffect, useState } from 'react'
import "./OwnerInfo.css"



const RoomInfo = ({profile, room, RoomSelceted}) => {
 

  const [memberSelected, SetMember] = useState(null);
  const [RoleSelected, SetRole] = useState(null);
  // const [MyRole, SetRole] = useState(null);

  // useEffect(() => {
  //   const findMyrole = () => {

  //   }
  //   findMyrole()
  // },[])
  console.log("here = ", memberSelected);
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
              </div>

              <div className="Otherimg">
                <img />
              </div>

              <div className="Othername">
                <p> {room.name} </p>
              </div>

              <div className="other-options">
                
                <div className="friend-options">
                {
                  RoleSelected ? (
                      RoleSelected === 'default' ? (
                          <>
                          <div className="opt block-option" >
                          </div>
                          
                          <div className="opt unfriend-option" >
                          </div>
                          
                          <div className="opt play-option">
                          </div>
                        </>
                      ) : RoleSelected === 'admin'  ? (
                        <>
                          <div className="opt block-option" >
                          </div>
                          
                          <div className="opt unfriend-option" >
                          </div>
                          
                          <div className="opt play-option">
                          </div>
                        </>
                      ) : (null)
                    
                    ) : (<div className='no-opt'><p>No options</p></div>)
                }

                </div>
                
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