import {userInteract} from "../../Core/InteractController/UserInteract";
import {nextSentenceProcessor} from "../../Core/WG_core";
import {WG_ViewControl} from "../../Core/ViewController/ViewControl";
import closeB from "../../assets/img/closeBlack.svg"
import closeW from "../../assets/img/closeWhite.svg"
import up from "../../assets/img/up.svg";
import cross from "../../assets/img/cross.svg";
import '@icon-park/react/styles/index.css';
import {
    DoubleRight, FolderDownload, FolderUpload, Home, PlayOne, ReplayMusic, SettingTwo
} from "@icon-park/react";

function Stage() {
    return (<div className="Stage">
        <div id={"WG_startPage"} onClick={() => {
            userInteract.hideStartPage()
        }}>
            {/*点击屏幕以继续*/}
        </div>
        <div id="intro" className="intro_styl"/>
        <div id={"videoContainer"} className={"videoContainer_styl"} onClick={WG_ViewControl.closeVideo}/>
        <div id="MesModel"/>
        <div id="Title">
            <div id="TitleModel">
                <div id="setButtonBottom">
                    <div className="TitleSingleButton" onClick={userInteract.hideTitle}>
                        <div className={'TitleButtonENG'}>START</div>
                        <div className={'TitleButtonCHN'}>从头开始</div>
                    </div>
                    <div className="TitleSingleButton" onClick={userInteract.continueGame}>
                        <div className={'TitleButtonENG'}>CONTINUE</div>
                        <div className={'TitleButtonCHN'}>继续游戏</div>
                    </div>
                    <div className="TitleSingleButton" onClick={userInteract.onLoadGame}>
                        <div className={'TitleButtonENG'}>LOAD</div>
                        <div className={'TitleButtonCHN'}>读取游戏</div>
                    </div>
                    <div className="TitleSingleButton" onClick={userInteract.onSetting}>
                        <div className={'TitleButtonENG'}>CONFIG</div>
                        <div className={'TitleButtonCHN'}>偏好设置</div>
                    </div>
                    <div className="TitleSingleButton" onClick={userInteract.exit}>
                        <div className={'TitleButtonENG'}>EXIT</div>
                        <div className={'TitleButtonCHN'}>结束游戏</div>
                    </div>
                </div>

            </div>
        </div>
        <div id="BackgroundContainer" onClick={userInteract.clickOnBack}>
            <div id={'oldBG'}/>
            <div id={'mainBackground'}/>
        </div>
        <div id="figureImage" className={"figureContainercenter"} onClick={userInteract.clickOnBack}/>
        <div id="figureImage_left" className={"figureContainerleft"} onClick={userInteract.clickOnBack}/>
        <div id="figureImage_right" className={"figureContainerright"} onClick={userInteract.clickOnBack}/>
        <div id="settings">
            <div id="settingsMainBox">
                <div id="close" onClick={userInteract.closeSettings}>
                    <img src={closeB} className="closeSVG" alt="close"/>
                </div>
                <div id="settingsTitle">
                    设置
                </div>
                <div id="settingItems"/>
                <div id="textPreview"/>
            </div>
        </div>
        <div id="backlog">
            <div id="closeBl" onClick={userInteract.closeBacklog}>
                <img src={closeW} className="closeSVG" alt="close"/>
            </div>
            <div id="backlogContent"/>
        </div>
        <div id="Load" className="LS_Main">
            <div id="loadMainBox" className="LS_mainBox">
                <div id="closeLoad" onClick={userInteract.closeLoad}>
                    <img src={closeW} className="closeSVG" id="LoadClose" alt="close"/>
                </div>
                <div id="LoadItems" className="LS_Items">
                </div>
            </div>
        </div>
        <div id="Save" className="LS_Main">
            <div id="saveMainBox" className="LS_mainBox">
                <div id="closeSave" onClick={userInteract.closeSave}>
                    <img src={closeW} className="closeSVG" alt="close"/>
                </div>
                <div id="SaveItems" className="LS_Items">

                </div>
            </div>
        </div>
        <div id="chooseBox"/>
        <div id="bottomBox">
            <div id="top_control">
                    <span className="top_button" onClick={userInteract.hideTextBox}>
                        <img alt={"cross"} src={cross} style={{width: "22px", height: "22px"}}/>
                    </span>
                <span className="top_button" onClick={userInteract.showBacklog}>
                        <img alt={"up"} src={up} style={{width: "25px", height: "25px"}}/>
                    </span>
            </div>
            <div id="mainTextWindow" onClick={nextSentenceProcessor}>
                <div id="pName"/>
                <div id="SceneText"/>
            </div>
            <div id="controlBar">
                <div className="controlButton" onClick={WG_ViewControl.playVocal}>
                    <ReplayMusic theme="outline" size="28" fill="#f5f5f7"/>
                </div>
                <div className="controlButton" onClick={userInteract.autoNext} id="autoButton">
                    <PlayOne theme="outline" size="28" fill="#f5f5f7"/>
                </div>
                <div className="controlButton" onClick={userInteract.fastNext} id="fastButton">
                    <DoubleRight theme="outline" size="28" fill="#f5f5f7"/>
                </div>
                <div className="controlButton" onClick={userInteract.onSaveGame} id="saveButton">
                    <FolderDownload theme="outline" size="28" fill="#f5f5f7"/>
                </div>
                <div className="controlButton" onClick={userInteract.onLoadGame} id="loadButton">
                    <FolderUpload theme="outline" size="28" fill="#f5f5f7"/>
                </div>
                <div className="controlButton" onClick={userInteract.onSetting}>
                    <SettingTwo theme="outline" size="28" fill="#f5f5f7"/>
                </div>
                <div className="controlButton" onClick={userInteract.Title} id="titleButton">
                    <Home theme="outline" size="28" fill="#f5f5f7"/>
                </div>
            </div>
            <div id={"miniAvatar"} onClick={nextSentenceProcessor}/>
        </div>
        <div id="bgm"/>
        <div id="vocal"/>
        <div id="panic-overlay"/>
    </div>);
}

export default Stage;