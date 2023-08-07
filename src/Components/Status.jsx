import React from 'react'
import  { useState} from 'react';
import { FaTimes } from 'react-icons/fa';



const Status = () => {
   

    const jsonData = {
        "title": "REST Connector to support OAUTH and OKTA ",
        "ticketNumber": "ORM-101815",
        "assignee": "Rahul Gupta",
        "gaDate": "Tue Sep 26 00:00:00 IST 2023",
        "overallORMStatus": "RED",
        "uiTasksDetails": {
            "overallSecurityStatus": "YELLOW",
            "uiTicketDetails": {
                
                "UXRB2": {
                    "title": "OFFLINE UXRB2: UDX-21413 - REST Connector to support OAUTH and OKTA",
                    "assignee": "Benjamin Poland",
                    "activityStatus": "GREEN",
                    "ticketLink": "https://jira.oci.oraclecorp.com/browse/UXRB-2767",
                    "jiraStatus": "Complete No Feedback",
                    "creationDate": "Thu Jul 06 00:19:03 IST 2023",
                    "lastUpdateDate": "Fri Jul 14 04:02:09 IST 2023"
                },
                "UXRB1": {
                    "title": "OFFLINE UXRB1: UDX-21413 - REST Connector to support OAUTH and OKTA header",
                    "assignee": "Benjamin Poland",
                    "activityStatus": "GREEN",
                    "ticketLink": "https://jira.oci.oraclecorp.com/browse/UXRB-1975",
                    "jiraStatus": "Complete Feedback Addressed",
                    "creationDate": "Tue Mar 28 00:36:45 IST 2023",
                    "lastUpdateDate": "Thu Jul 06 00:22:57 IST 2023"
                }
            }
        },
        "udxTasksDetails": {
            "overallSecurityStatus": "GREEN",
            "udxTicketDetails": {
                "Terraform": {
                    "title": "[UDX-21413] [Terraform] REST Connector to support OAUTH and OKTA ",
                    "assignee": "Venkataraman Sridharan",
                    "activityStatus": "GREEN",
                    "ticketLink": "https://jira.oci.oraclecorp.com/browse/TERSI-2575",
                    "jiraStatus": "Need Exception",
                    "creationDate": "Sat Feb 25 05:31:45 IST 2023",
                    "lastUpdateDate": "Thu Jul 20 09:45:32 IST 2023"
                },
                "UDX-21413": {
                    "title": "REST Connector to support OAUTH and OKTA ",
                    "assignee": "Venkataraman Sridharan",
                    "activityStatus": "GREEN",
                    "ticketLink": "https://jira.oci.oraclecorp.com/browse/UDX-21413",
                    "jiraStatus": "Staging for GA",
                    "creationDate": "Sat Feb 25 03:05:45 IST 2023",
                    "lastUpdateDate": "Fri Jul 28 14:35:28 IST 2023"
                },
                "API_Review": {
                    "title": "UDX-21413- API Review REST Connector to support OAUTH",
                    "assignee": "Naveen Pilli",
                    "activityStatus": "GREEN",
                    "ticketLink": "https://jira.oci.oraclecorp.com/browse/APIRB-1110",
                    "jiraStatus": "Done",
                    "creationDate": "Tue Jun 20 12:55:50 IST 2023",
                    "lastUpdateDate": "Tue Aug 01 14:09:53 IST 2023"
                }
            }
        },
        "securityTasksDetails": {
            "overallSecurityStatus": "GREEN",
            "securityTicketDetails": {
                "SECARCH_Ticket": { 
                    "title": "SecArch - REST Connector to support OAUTH and OKTA  - ORM Security Review",
                    "assignee": "Unassigned",
                    "activityStatus": "GREEN",
                    "ticketLink": "https://jira.oci.oraclecorp.com/browse/SECARCH-9704",
                    "jiraStatus": "Ready for Review",
                    "creationDate": "Tue Apr 25 22:03:19 IST 2023",
                    "lastUpdateDate": "Sat Aug 05 13:37:56 IST 2023"
                },
                "SECASSURE_Ticket": {
                    "title": "CSSAP - REST Connector to support OAUTH and OKTA  - ORM Security Review",
                    "assignee": "Venkataraman Sridharan",
                    "activityStatus": "GREEN",
                    "ticketLink": "https://jira.oci.oraclecorp.com/browse/SECASSURE-8184",
                    "jiraStatus": "Waiting on Requestor",
                    "creationDate": "Tue Apr 25 22:03:21 IST 2023",
                    "lastUpdateDate": "Wed Jun 28 13:20:49 IST 2023"
                },
                "SECAPPROVE-2914": {
                    "title": "REST Connector to support OAUTH and OKTA  - ORM Security Review",
                    "assignee": "Venkataraman Sridharan",
                    "activityStatus": "GREEN",
                    "ticketLink": "https://jira.oci.oraclecorp.com/browse/SECAPPROVE-2914",
                    "jiraStatus": "In Progress",
                    "creationDate": "Sat Feb 25 03:05:43 IST 2023",
                    "lastUpdateDate": "Wed Jun 28 02:22:15 IST 2023"
                }
            }
        },
        "technicalContentTasksDetails": {
            "overallSecurityStatus": "GREEN",
            "tcTicketDetails": {
                "TC-23964": {
                    "title": "ORM: REST Connector to support OAUTH and OKTA ",
                    "assignee": "Redonna Ray",
                    "activityStatus": "GREEN",
                    "ticketLink": "https://jira.oci.oraclecorp.com/browse/TC-23964",
                    "jiraStatus": "Ready for Work",
                    "creationDate": "Sat Feb 25 03:05:49 IST 2023",
                    "lastUpdateDate": "Thu Jun 29 23:15:40 IST 2023"
                }
            }
        }
    }

    const udxTickets = jsonData.udxTasksDetails.udxTicketDetails;
    const uiTickets = jsonData.uiTasksDetails.uiTicketDetails;
    const securityTickets = jsonData.securityTasksDetails.securityTicketDetails ;
    const tcTickets = jsonData.technicalContentTasksDetails.tcTicketDetails;


  const getActivityColorClass = (activityStatus) => {
    if (activityStatus === 'GREEN') {
      return 'rectangleGreen'; 
    } else if (activityStatus === 'RED') {
      return 'rectangleRed'; 
    } else if (activityStatus === 'YELLOW') {
      return 'rectangleYellow'; 
    } else {
      return ''; 
    }
  };

    const overallORMStatus = jsonData.overallORMStatus;
    const overallSecurityStatus = jsonData.securityTasksDetails.overallSecurityStatus;
    const overallUITasksStatus = jsonData.uiTasksDetails.overallSecurityStatus;
    const overallUDXTasksStatus = jsonData.udxTasksDetails.overallSecurityStatus;
    const overallTCTasksStatus = jsonData.technicalContentTasksDetails.overallSecurityStatus;


    
    const containerClassName1 = `level-1 ${getActivityColorClass(overallORMStatus)}`;
    const containerClassName2 = `level-2 ${getActivityColorClass(overallUDXTasksStatus)}`;
    const containerClassName3 = `level-2 ${getActivityColorClass(overallUITasksStatus)}`;
    const containerClassName4 = `level-2 ${getActivityColorClass(overallSecurityStatus)}`;
    const containerClassName5 = `level-2 ${getActivityColorClass(overallTCTasksStatus)}`;

    const [selectedSubticket, setSelectedSubticket] = useState(null);

    // Function to handle the click event on the subticket container
    const handleSubticketClick = (subticketName, subticketData) => {
        setSelectedSubticket(subticketData[subticketName]);
      };
      
  
    const closePopup = () => {
      setSelectedSubticket(null);
    }
  

  return (

    <div className='bg-slate-900 min-h-screen overflow-y-auto'>
        
        <h1 className={containerClassName1} >ORM</h1>


             <ol class="level-2-wrapper">
                
                <li>
                    <h2 className={containerClassName2}>UDX</h2>
                            <ol class="level-3-wrapper">
                                 <li>
                                    {Object.keys(udxTickets).map((subticketName, index) => {
                                    const activityStatus = udxTickets[subticketName].activityStatus;
                                    const containerClassName = `level-3 ${getActivityColorClass(activityStatus)}`;

                                    return (
                                        <li key={index}>
                                          <h4 className={containerClassName} onClick={() => handleSubticketClick(subticketName, udxTickets)}>{subticketName}</h4>
                                        </li>
                                    );
                                    })}
                                </li>
                                        {selectedSubticket && (
                                            <div className="backdrop" onClick={closePopup}>
                                                <div className="popup" onClick={(e) => e.stopPropagation()}>
                                                    <div className="popup-header">
                                                        <h3>{selectedSubticket.title}</h3>
                                                        <button className="close-icon" onClick={closePopup}>
                                                        <FaTimes />
                                                        </button>
                                                    </div>
                                                {Object.entries(selectedSubticket).map(([key, value]) => (
                                                    <p key={key}>
                                                    <strong style={{ fontWeight: 'bold' }}>{key}:</strong> {value}
                                                    </p>
                                                ))}
                                                </div>
                                            </div>
                                            )}
                                             
                             </ol>
                </li>



                <li>
                    <h2 className={containerClassName3}>UI</h2>
                            <ol class="level-3-wrapper">
                                 <li>
                                    {Object.keys(uiTickets).map((subticketName, index) => {
                                    const activityStatus = uiTickets[subticketName].activityStatus;
                                    const containerClassName = `level-3 ${getActivityColorClass(activityStatus)}`;

                                            return (
                                            <li key={index}>
                                                    <h4 className={containerClassName} onClick={() => handleSubticketClick(subticketName, uiTickets)}>{subticketName}</h4>
                                            </li>
                                            );
                                    })}
                                </li>
                                {selectedSubticket && (
                                    <div className="backdrop" onClick={closePopup}>
                                        <div className="popup" onClick={(e) => e.stopPropagation()}>
                                        <div className="popup-header">
                                            <h3>{selectedSubticket.title}</h3>
                                            <button className="close-icon" onClick={closePopup}>
                                            <FaTimes />
                                            </button>
                                        </div>
                                        {/* Display the subticket details */}
                                        {Object.entries(selectedSubticket).map(([key, value]) => (
                                            <p key={key}>
                                            <strong style={{ fontWeight: 'bold' }}>{key}:</strong> {value}
                                            </p>
                                        ))}
                                        </div>
                                    </div>
                                    )}

                                   
                            </ol>
                </li>



                <li>
                    <h2 className={containerClassName4}>SECURITY</h2>
                    <ol class="level-3-wrapper">
                                 <li>
                                    {Object.keys(securityTickets).map((subticketName, index) => {
                                    const activityStatus = securityTickets[subticketName].activityStatus;
                                    const containerClassName = `level-3 ${getActivityColorClass(activityStatus)}`;

                                    return (
                                        <li key={index}>
                                          <h4 className={containerClassName} onClick={() => handleSubticketClick(subticketName, securityTickets)}>{subticketName}</h4>
                                        </li>
                                    );
                                    })}
                                </li>
                                {selectedSubticket && (
                                    <div className="backdrop" onClick={closePopup}>
                                        <div className="popup" onClick={(e) => e.stopPropagation()}>
                                        <div className="popup-header">
                                            <h3>{selectedSubticket.title}</h3>
                                            <button className="close-icon" onClick={closePopup}>
                                            <FaTimes />
                                            </button>
                                        </div>
                                        {/* Display the subticket details */}
                                        {Object.entries(selectedSubticket).map(([key, value]) => (
                                            <p key={key}>
                                            <strong style={{ fontWeight: 'bold' }}>{key}:</strong> {value}
                                            </p>
                                        ))}
                                        </div>
                                    </div>
                                    )}
                                   
                            </ol>
                </li>



                <li>
                    <h2 className={containerClassName5}>TC</h2>
                    <ol class="level-3-wrapper">
                                 <li>
                                    {Object.keys(tcTickets).map((subticketName, index) => {
                                    const activityStatus = tcTickets[subticketName].activityStatus;
                                    const containerClassName = `level-3 ${getActivityColorClass(activityStatus)}`;

                                    return (
                                        <li key={index}>
                                          <h4 className={containerClassName} onClick={() => handleSubticketClick(subticketName, tcTickets)}>{subticketName}</h4>
                                        </li>
                                    );
                                    })}
                                </li>
                                {selectedSubticket && (
                                    <div className="backdrop" onClick={closePopup}>
                                        <div className="popup" onClick={(e) => e.stopPropagation()}>
                                        <div className="popup-header">
                                            <h3>{selectedSubticket.title}</h3>
                                            <button className="close-icon" onClick={closePopup}>
                                            <FaTimes />
                                            </button>
                                        </div>
                                        {/* Display the subticket details */}
                                        {Object.entries(selectedSubticket).map(([key, value]) => (
                                            <p key={key}>
                                            <strong style={{ fontWeight: 'bold' }}>{key}:</strong> {value}
                                            </p>
                                        ))}
                                        </div>
                                    </div>
                                    )}
                                   
                            </ol>
                </li>
             </ol>
    </div>
     
  )
}

export default Status;