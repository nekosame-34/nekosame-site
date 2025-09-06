import React, { useEffect, useState } from 'react';
import './Page.css';
import FallingBackgroundImages from '../Components/Background';
import profile from "../img/profile.png";
import logoBlack from "../img/logo/x.png";
import githubLogo from "../img/logo/github.png";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Home() {
  // The flags which changes background's character to sayochi!
  // 1. Enter "3434" on this page
  // 2. Click the profile image 10 times 
  const [keyFlags, setKeyFlags] = useState<boolean[]>([false, false, false, false]);
  const [profileImageClickedCount, setProfileImageClickedCount] = useState<number>(0);
  const [sayoFlag, setSayoFlag] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Keyboard down flags("3434")
      if(e.key === "3") {
        if(keyFlags[0] == false && keyFlags[1] == false && keyFlags[2] == false && keyFlags[3] == false) {
          setKeyFlags([true, false, false, false]);
        } else if (keyFlags[0] == true && keyFlags[1] == true && keyFlags[2] == false && keyFlags[3] == false) {
          setKeyFlags([true, true, true, false]);
        }
      } else if (e.key === "4") {
        if(keyFlags[0] == true && keyFlags[1] == false && keyFlags[2] == false && keyFlags[3] == false) {
          setKeyFlags([true, true, false, false]);
        } else if (keyFlags[0] == true && keyFlags[1] == true && keyFlags[2] == true && keyFlags[3] == false) {
          setKeyFlags([true, true, true, true]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyFlags]); 

  const onProfileImageClicked = () => {
    if(sayoFlag) return;

    // doesn't count when not entered "3434"
    if(keyFlags[0] == true && keyFlags[1] == true && keyFlags[2] == true && keyFlags[3] == true) {
      setProfileImageClickedCount((n) => n + 1);
      if(profileImageClickedCount + 1 == 10) {
        setSayoFlag(true);
      }
    }
  }

  return (
    <div className="home">
      <Header/>
      <div className="container">
        <div className="content-card profile">
          <h1>猫鮫の籠り場にようこそ!</h1>
          <div className="profile-image">
            <h2>猫鮫について</h2>
            <img height={256} width={256} src={profile} onClick={onProfileImageClicked}/>
            <p>主に合成音声キャラクターのイラスト描いてます。<br/>情報系も好き</p>
          </div>
          <ul className='link-ul'>
            <li className='link-li'>
              <a href="https://x.com/tori__same">
                <img height={32} width={"auto"} src={logoBlack}></img>  
              </a>
            </li>
            <li className='link-li link-not-first'>
              <a href="https://github.com/nekosame-34">
                <img height={32} width={"auto"} src={githubLogo}></img>  
              </a>
            </li>
          </ul>
        </div>
        <div className='content-card tools'>
          <h1>ツール</h1>
          <p>色々追加していく予定です</p>
          <a href="https://github.com/nekosame-34/nekosame-site" className='tool-card-link'>
            <div className='tool-card'>
              <h2>このページのソース</h2>
              <p>GitHubのリポジトリに飛びます</p>
            </div> 
          </a>
        </div>
      </div>
      <Footer/>
      <FallingBackgroundImages sayoBgFlag={sayoFlag}/>
    </div>
  );
}

export default Home;
