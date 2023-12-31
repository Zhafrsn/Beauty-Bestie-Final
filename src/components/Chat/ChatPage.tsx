/* eslint-disable @typescript-eslint/no-empty-function */
import { faCircle, faCircleExclamation, faNoteSticky, faPaperPlane, faPaperclip } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Footer } from "components/Footer"
import { Navbar } from "components/Navbar"
import ProfileComp from "components/Profile/ProfileComp"
import { Sidebar } from "components/Sidebar/Sidebar"
import { useState } from "react"

export const ChatPage: React.FC = () => {
    const [message, setMessage] = useState('');
    // const [messages, setMessages] = useState<string[]>([]);
    
    const handleSendMessage = () => {
        // setMessages([...messages, message]);
        setMessage('');
    };

    // useEffect(() => {
    //     setMessages(['Hello girls, Welcome to BeautyBestie !', 
    //     'Here we sell some kind of skincare products']);
    // });
    return (
        <>
            <Sidebar contentId="side-bar" isOpen={false} toggleSidebar={() => {}} />
            <Navbar />
                <div className="chat-page">
                    <ProfileComp />
                    <div className="chatPage__container">
                        <div className="chatPage-header">
                            <p className="chatPage__header-text">Welcome to 
                            <a className="chatPage__web-title"> BeautyBestie</a>,
                            please chat below to ask about the products that we sell.</p>
                            <div className="chatPage__text-container">
                                <div className="chatPage__text"> 
                                    <FontAwesomeIcon icon={faCircle} />
                                    <p>Last online 1 hour ago</p>
                                </div>
                                <div className="chatPage__text">
                                    <FontAwesomeIcon icon={faCircleExclamation} />
                                    <p>Check regularly to get free shipping at this store</p>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="chatPage-content">
                            <p className="chatPage-date">8 Nov 2023</p>
                            <div className="chatPage__msg-container">
                                <div className="chatPage-msg">
                                    <p>Hello girls, Welcome to BeautyBestie !
                                    <br/>Here we sell some kind of skincare products that can help you to care about your skin.</p>
                                    <p>There are a lot of flash sale every day in our store.</p>
                                    <p>{'That will be answered, please wait :)'}</p>
                                </div>
                                <div className="chatPage__msg-info">
                                    <p>This message is generated by the system</p>
                                    <p>21.56</p>
                                </div>
                            </div>
                        </div>
                        <div className="chatPage__sendMsg-comp">
                            <div className="chatPage__sendMsg-btn">
                                <FontAwesomeIcon icon={faNoteSticky} className="chatPage-icon"/>
                                <FontAwesomeIcon icon={faPaperclip} className="chatPage-icon"/>
                                <input
                                    type="text"
                                    value={message}
                                    placeholder="Type a message..."
                                    className="chatPage__input-msg"
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <button onClick={handleSendMessage} className="chatPage__send-btn">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}