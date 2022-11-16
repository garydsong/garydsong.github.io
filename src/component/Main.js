import React, { useRef, useEffect } from "react";
import { useState } from "react";
import mainpic from "../assets/midpic.png"
import lateicon from "../assets/la-te-cup.png"
import gareicon from "../assets/gare.png"
import nopeicon from "../assets/nope.png"
import giticon from "../assets/git-icon.svg"
import linkicon from "../assets/link-icon.svg"
import wwwicon from "../assets/www-icon.svg"
import thankyou from "../assets/thankyou.png"
import music from "../assets/aboutdreams.mp3"
import play from "../assets/play.svg"
import pause from "../assets/pause.svg"
import arrow from "../assets/arrow.svg"
import resume from "../assets/resume-icon.svg"
import refresh from "../assets/refresh-icon.svg"
import Floated from "./Floated/Floated";
import './Main.css'



function Main() {
    const [heartOpacity, setHeartOpacity] = useState(.4)
    const [arrowOpacity, setArrowOpacity] = useState(0)
    const [firstOpacityChange, setFirstOpacityChange] = useState(0);
    const [opacityChange, setOpacityChange] = useState(0);
    const [nextSetOpacityChange, setNextSetOpacityChange] = useState(0);
    const [nextNextSetOpacityChange, setNextNextSetOpacityChange] = useState(0);
    const [opacityChange2, setOpacityChange2] = useState(0);
    const [opacityChange3, setOpacityChange3] = useState(0);
    const [opacityChange4, setOpacityChange4] = useState(0);
    const [opacityChange5, setOpacityChange5] = useState(0);
    const [opacityChange6, setOpacityChange6] = useState(0);
    const [opacityChange7, setOpacityChange7] = useState(0);
    const [opacityChange8, setOpacityChange8] = useState(0);
    const [opacityChange9, setOpacityChange9] = useState(0);

    const [zindexSetter, setZIndexSetter] = useState(0);
    const [zindexSetter2, setZIndexSetter2] = useState(0);
    const [zindexSetter3, setZIndexSetter3] = useState(0);
    const [zindexSetter4, setZIndexSetter4] = useState(0);
    const [zindexSetter5, setZIndexSetter5] = useState(0);
    const [zindexSetter6, setZIndexSetter6] = useState(0);
    const [zindexSetter7, setZIndexSetter7] = useState(0);
    const [zindexSetter8, setZIndexSetter8] = useState(0);
    const [zindexSetter9, setZIndexSetter9] = useState(0);
    const [zindexSetter10, setZIndexSetter10] = useState(0);
    const [zindexSetter11, setZIndexSetter11] = useState(0);

    const [audioStatus, changeAudioStatus] = useState(false);
    const myRef = useRef();

    const changeTitle = (title) => {
        document.title = title;
        document.getElementById("title-change").innerHTML = document.title;
    }


    const startAudio = () => {
        myRef.current.play();
        // for play/pause buttons if i want to implement them
        changeAudioStatus(true);
    };

    const pauseAudio = () => {
        myRef.current.pause();
        // for play/pause buttons if i want to implement them
        changeAudioStatus(false);
    };



    useEffect(() => {

    }, [audioStatus])

    return (
        <>
            <audio
                ref={myRef}
                src={music}
            />
            {audioStatus ? (
                <div className="play-pause-pos">
                    gary song - about dreams
                    <img
                        id="pause-button"
                        src={pause}
                        onClick={pauseAudio}
                    />
                </div>
            ) : (
                <div className="play-pause-pos">
                    gary song - about dreams
                    <img
                        id="play-button"
                        src={play}
                        onClick={startAudio}
                    />
                </div>
            )}
            <div className="main-div-about-me-wrapper">
                <img
                    id="prev-bt"
                    src={refresh}
                    style={{
                        opacity: `${arrowOpacity}`
                    }}
                    onClick={() => {
                        setFirstOpacityChange(0);
                        setHeartOpacity(.4);
                        setArrowOpacity(0);
                        setOpacityChange(0);
                        setNextSetOpacityChange(0);
                        setNextNextSetOpacityChange(0);
                        setOpacityChange2(0);
                        setOpacityChange3(0);
                        setOpacityChange4(0);
                        setOpacityChange5(0);
                        setOpacityChange6(0);
                        setOpacityChange7(0);
                        setOpacityChange8(0);
                        setOpacityChange9(0);

                        changeTitle("No going back, only fresh starts.")
                    }}
                />


                {firstOpacityChange ?
                    (
                        <img
                            id="next-bt"
                            src={arrow}
                            style={{
                                opacity: `${arrowOpacity}`
                            }}
                            onClick={() => {
                                setFirstOpacityChange(0);
                                setOpacityChange(1);
                                setZIndexSetter(1);
                                changeTitle("Gary Song. Ch 2: Puzzle");
                            }}
                        />
                    ) : opacityChange ? (
                        <img
                            id="next-bt"
                            src={arrow}
                            style={{
                                opacity: `${arrowOpacity}`
                            }}
                            onClick={() => {
                                setOpacityChange(0);
                                setNextSetOpacityChange(1);
                                setZIndexSetter2(2);
                                changeTitle("Gary Song. Ch 3: Abandon");
                            }}
                        />
                    ) : nextSetOpacityChange ? (
                        <img
                            id="next-bt"
                            src={arrow}
                            style={{
                                opacity: `${arrowOpacity}`
                            }}
                            onClick={() => {
                                setNextSetOpacityChange(0); setNextNextSetOpacityChange(1); setZIndexSetter3(3);
                                changeTitle("Gary Song. Ch 4: Inversion");
                            }}
                        />
                    ) : nextNextSetOpacityChange ? (
                        <img
                            id="next-bt"
                            src={arrow}
                            style={{
                                opacity: `${arrowOpacity}`
                            }}
                            onClick={() => {
                                setNextNextSetOpacityChange(0);
                                setOpacityChange2(1);
                                setZIndexSetter4(4);
                                changeTitle("Gary Song. Ch 5: Love What You Do");
                            }}
                        />
                    ) : opacityChange2 ? (
                        <img
                            id="next-bt"
                            src={arrow}
                            style={{
                                opacity: `${arrowOpacity}`
                            }}
                            onClick={() => {
                                setOpacityChange2(0);
                                setOpacityChange3(1);
                                setZIndexSetter5(5);
                                changeTitle("Gary Song. Ch 6: Seize the Day");
                            }}
                        />
                    ) : opacityChange3 ? (
                        <img
                            id="next-bt"
                            src={arrow}
                            style={{
                                opacity: `${arrowOpacity}`
                            }}
                            onClick={() => {
                                setOpacityChange3(0);
                                setOpacityChange4(1);
                                setZIndexSetter6(6);
                                changeTitle("Gary Song. Ch 7: Loops");
                            }}
                        />
                    ) : opacityChange4 ? (
                        <img
                            id="next-bt"
                            src={arrow}
                            style={{
                                opacity: `${arrowOpacity}`
                            }}
                            onClick={() => {
                                setOpacityChange4(0);
                                setOpacityChange5(1);
                                setZIndexSetter7(7);
                                changeTitle("Gary Song. Ch 8: Love");
                            }}
                        />
                    ) : opacityChange5 ? (
                        <img
                            id="next-bt"
                            src={arrow}
                            style={{
                                opacity: `${arrowOpacity}`
                            }}
                            onClick={() => {
                                setOpacityChange5(0);
                                setOpacityChange6(1);
                                setZIndexSetter8(8);
                                changeTitle("Gary Song. Ch 9: Open Mind");
                            }}
                        />
                    ) : opacityChange6 ? (
                        <img
                            id="next-bt"
                            src={arrow}
                            style={{
                                opacity: `${arrowOpacity}`
                            }}
                            onClick={() => {
                                setOpacityChange6(0);
                                setOpacityChange7(1);
                                setZIndexSetter9(9);
                                changeTitle("Gary Song. Ch 10: Open Heart");
                            }}
                        />
                    ) : opacityChange7 ? (
                        <img
                            id="next-bt"
                            src={arrow}
                            style={{
                                opacity: `${arrowOpacity}`
                            }}
                            onClick={() => {
                                setOpacityChange7(0);
                                setOpacityChange8(1);
                                setZIndexSetter10(10);
                                changeTitle("Thank you -Gary Song");
                            }}
                        />
                    ) : opacityChange8 ? (
                        <img
                            id="next-bt"
                            src={arrow}
                            style={{
                                opacity: `${arrowOpacity}`
                            }}
                            onClick={() => {
                                setOpacityChange8(0);
                                setOpacityChange9(1);
                                setZIndexSetter11(8);
                                setHeartOpacity(.4);
                            }}
                        />
                    ) : (
                        <img
                            id="next-bt"
                            src={arrow}
                            style={{
                                opacity: `${arrowOpacity}`
                            }}
                            onClick={() => {
                                setOpacityChange8(0);
                                setOpacityChange9(1);
                                setZIndexSetter11(8)
                            }}
                        />
                    )
                }
                <div className="line-up-img">
                    <div id="ab-me-img-div">
                        <img
                            id="about-me-img"
                            src={mainpic}

                        />
                        <div class="blob red"
                            onClick={() => {
                                setFirstOpacityChange(1);
                                setHeartOpacity(0);
                                setArrowOpacity(1);
                                startAudio();
                                changeTitle("Gary Song. Ch 1: Identity")
                            }}
                            style={{
                                opacity: `${heartOpacity}`
                            }}
                        ></div>
                    </div>
                    <div className="gradient-left">
                        {/* <div className="light-about-me">
                            I'm still learning about me
                        </div> */}
                        <div
                            className="light-about-me"
                            style={{
                                opacity: `${opacityChange}`,
                                zIndex: `${zindexSetter}`
                            }}
                        // onClick={() => { setOpacityChange(0); setNextSetOpacityChange(1); setZIndexSetter2(2) }}
                        >
                            Moving to the States in my teens was a massive culture shock. Spending my formative years in Korea really shaped me and now more than ever I felt more like a puzzle piece of a different set.

                            <div class="Iam">

                                <p>dis
                                    <b>
                                        <div class="innerIam">
                                            connected<br />
                                            pleased<br />
                                            approved<br />
                                            jointed<br />
                                            asscoiated
                                        </div>
                                    </b>
                                </p>
                            </div>
                        </div>

                        <div
                            className="light-about-me-continue"
                            style={{
                                opacity: `${nextNextSetOpacityChange}`,
                                zIndex: `${zindexSetter3}`
                            }}
                        // onClick={() => {
                        //     setNextNextSetOpacityChange(0);
                        //     setOpacityChange2(1);
                        //     setZIndexSetter4(4);
                        // }}
                        >
                            Needless to say, I didn't come from much and looking back I'm glad that I didn't. Going through everything I had been through has taught me some valuable lessons. Some happy, some sad, all growing. I have my father to thank for indirectly putting a work ethic in me to do whatever I put my mind to and to do it well. Most importantly now I can live my life by some simple rules.

                        </div>


                        <div
                            className="light-about-me-continue2"
                            // onClick={() => {
                            //     setOpacityChange3(0);
                            //     setOpacityChange4(1);
                            //     setZIndexSetter6(6);
                            // }}
                            style={{
                                opacity: `${opacityChange3}`,
                                zIndex: `${zindexSetter5}`
                            }}>
                            <div id="wrapper">
                                <div id="container">

                                    <div className="dream">savor every moment</div>

                                </div>
                            </div>
                        </div>

                        <div className="light-about-me-continue3"
                            // onClick={() => {
                            //     setOpacityChange5(0);
                            //     setOpacityChange6(1);
                            //     setZIndexSetter8(8)
                            // }}
                            style={{
                                opacity: `${opacityChange5}`,
                                zIndex: `${zindexSetter7}`
                            }}>
                            <h1 class="jt --debug">
                                <span class="jt__row">
                                    <span class="jt__text">&LOVE DEEPLY</span>
                                </span>
                                <span class="jt__row jt__row--sibling" aria-hidden="true">
                                    <span class="jt__text">&LOVE DEEPLY</span>
                                </span>
                                <span class="jt__row jt__row--sibling" aria-hidden="true">
                                    <span class="jt__text">&LOVE DEEPLY</span>
                                </span>
                                <span class="jt__row jt__row--sibling" aria-hidden="true">
                                    <span class="jt__text">&LOVE DEEPLY</span>
                                </span>
                            </h1>
                        </div>

                        <div className="light-about-me-continue"
                            // onClick={() => {
                            //     setOpacityChange7(0);
                            //     setOpacityChange8(1);
                            //     setZIndexSetter10(10)
                            // }}
                            style={{
                                opacity: `${opacityChange7}`,
                                zIndex: `${zindexSetter9}`
                            }}>
                            I've also worked on a few projects...
                            <a href="https://la-te.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img id="projects-icons" className="late-float" src={lateicon} />
                            </a>

                            <a href="https://nope-yelp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img id="projects-icons" className="nope-float" src={nopeicon} />
                            </a>

                            <a href="https://garebnb.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <img id="projects-icons" className="gare-float" src={gareicon} />
                            </a>
                        </div>



                        <div
                            className="light-about-me-continue4"
                            style={{
                                opacity: `${opacityChange8}`,
                                zIndex: `${zindexSetter10}`
                            }}
                        >
                            <img id="ty" src={thankyou} />
                        </div>
                    </div>








                    <div className="white-right">
                        <div className="dark-about-me"
                            // onClick={() => {
                            //     setFirstOpacityChange(0);
                            //     setOpacityChange(1);
                            //     setZIndexSetter(1);
                            // }}
                            style={{
                                opacity: `${firstOpacityChange}`
                            }}
                        >
                            As a German born, Korean raised, American–I've lived in a perpetual state of disconnect. My identity was always in question. Am I Korean? Am I Caucasian?

                            <div class="sign">
                                <span class="fast-flicker">cauc</span>as<span class="flicker">i</span>an
                            </div>


                            Fitting into social groups growing up always had a sort of stigma attached.
                        </div>


                        <div className="dark-about-me-continue"
                            // onClick={() => {
                            //     setNextSetOpacityChange(0); setNextNextSetOpacityChange(1); setZIndexSetter3(3)
                            // }}
                            style={{
                                opacity: `${nextSetOpacityChange}`,
                                zIndex: `${zindexSetter2}`
                            }}>
                            Life took some hard turns as it so often does. Without divulging too deeply, my father abandoned us, and left my mom, a now single mother that could barely speak English with no money to her name and two teenaged boys in a completely foreign country.
                        </div>


                        <div className="dark-about-me-continue2"
                            // onClick={() => {
                            //     setOpacityChange2(0);
                            //     setOpacityChange3(1);
                            //     setZIndexSetter5(5)
                            // }}
                            style={{
                                opacity: `${opacityChange2}`,
                                zIndex: `${zindexSetter4}`
                            }}>
                            <div className="center">
                                <div className="hm">DO</div>
                                <div className="hm">WHAT</div>
                                <div className="hm">YOU</div>
                                <div className="hm">LOVE</div>
                            </div>
                        </div>


                        <div className="dark-about-me-continue2"
                            // onClick={() => {
                            //     setOpacityChange4(0);
                            //     setOpacityChange5(1);
                            //     setZIndexSetter7(7)
                            // }}
                            style={{
                                opacity: `${opacityChange4}`,
                                zIndex: `${zindexSetter6}`
                            }}>

                            <div class="typing-wrapper">
                                <div class="typing-demo">
                                    {`while (happy) return healthy;`}
                                </div>
                            </div>
                        </div>


                        <div className="dark-about-me-continue3"
                            // onClick={() => {
                            //     setOpacityChange6(0);
                            //     setOpacityChange7(1);
                            //     setZIndexSetter10(9)
                            // }}
                            style={{
                                opacity: `${opacityChange6}`,
                                zIndex: `${zindexSetter8}`
                            }}>
                            Over the course of my life I've picked up some pretty useful skills...
                            <Floated />
                        </div>

                        <div className="dark-about-me-continue4"
                            // onClick={() => {
                            //     setOpacityChange4(0);
                            //     setOpacityChange5(1);
                            //     setZIndexSetter7(7)
                            // }}
                            style={{
                                opacity: `${opacityChange8}`,
                                zIndex: `${zindexSetter10}`
                            }}>
                            <a href="https://github.com/garydsong" target="_blank" rel="noopener noreferrer">
                                <img id="aboutme-icons-a" src={giticon} />
                            </a>

                            <a href="https://www.linkedin.com/in/gary-song-96b071246/" target="_blank" rel="noopener noreferrer">
                                <img id="aboutme-icons-b" src={linkicon} />
                            </a>

                            <a href="https://gary-song.com" target="_blank" rel="noopener noreferrer">
                                <img id="aboutme-icons-c" src={wwwicon} />
                            </a>

                            <a href="https://docs.google.com/document/d/1ai4rCXv3xeyyjqCA2n4uJOPHMM2xq8IF0hwU3mjVQas/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                <img
                                    id="aboutme-icons2"
                                    src={resume}
                                    onClick={() => {
                                        pauseAudio();
                                    }}
                                />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main
