import React from 'react';
import '../Portofolio/portofolio.css'
import {Avatar, Quotes, Music, Reading, Resting, Check} from '../../assets/index.jsx';

// import Avatar from "../../assets/img/man.png";
// import Quotes from '../../assets/img/left-quotes-sign.png';
// import Music from '../../assets/img/Music_Isometric.svg';
// import Reading from '../../assets/img/Readingabook_Isometric.svg';
// import Resting from '../../assets/img/Resting_Isometric.svg';
// import Check from '../../assets/img/Checklist_Isometric.svg';

const Portofolio = () => {

    // const image = {
    //     Avatar: Avatar,
    //     Quotes: Quotes,
    //     Music: Music,
    //     Reading: Reading,
    //     Resting: Resting,
    //     Check: Check

    // }

    return (

        <div>
            <header>
                <h1>Welcome to My Page |</h1>
                <h3 className="frnt">Frontend Engineer</h3>
            </header>

            <section>

                {/* <!-- Biodata --> */}
                <div className="bio">
                    <img src={Avatar} alt="avatar" />
                    <div className="ket">
                        <p className="nama">Andi Wicaksono Nugroho</p>
                        <p className="univ">Universitas : Politeknik Negeri Jember
                            Semester : 6 </p>

                    </div>
                </div>

                {/* <!-- About Me --> */}
                <h2 className="txtClr">About Me</h2>

                <div className="abt">
                    <p className="prgf">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut numquam totam, necessitatibus
                        esse fugiat autem accusantium expedita saepe, enim maiores veniam. Sit adipisci sequi possimus
                        temporibus suscipit, inventore ullam distinctio!</p>
                    <img src={Check} alt="about-me" />
                </div>

                {/* <!-- Life Quotes --> */}
                <h2 className="txtClr">Life Quote</h2>

                <div className="lfQ">
                    <img src={Quotes} alt="petik" />
                    <h4 className="quotes">kendalikan apa yang bisa kamu kendalikan.</h4>
                </div>

                {/* <!-- Hobby --> */}
                <h2 className="txtClr">My Hobby</h2>

                <div className="gridHob">
                    <div className="grid1">
                        <img src={Music} alt='music' className="imgSize" />
                        <div className="boxHob">
                            <p className="subGrid">Musik</p>
                            <p className="cont">Hobi saya adalah bermain musik.</p>
                        </div>
                    </div>

                    <div className="grid2">
                        <img src={Reading} alt='reading' className="imgSize" />
                        <div className="boxHob">
                            <p className="subGrid">Membaca</p>
                            <p className="cont">Hobi saya adalah membaca buku.</p>
                        </div>
                    </div>

                    <div className="grid3">
                        <img src={Resting} alt='resting' className="imgSize" />
                        <div className="boxHob">
                            <p className="subGrid">Rehat</p>
                            <p className="cont">Hobi saya adalah beristirahat.</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Education --> */}
                <h2 className="txtClr">Education Background</h2>

                <div className="edu">
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Education</th>
                                <th>Degree</th>
                                <th>Year</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr className="bgGanjil">
                                <td>1.</td>
                                <td>Politeknik Negeri Jember</td>
                                <td>Diploma</td>
                                <td>2020 - present</td>
                            </tr>
                        </tbody>

                        <tr>
                            <td>2.</td>
                            <td>SMA Negeri 2 Bondowoso</td>
                            <td>Senior Highschool</td>
                            <td>2016 - 2019</td>
                        </tr>

                        <tr className="bgGanjil">
                            <td>3.</td>
                            <td>MTs At - Taqwa Bondowoso</td>
                            <td>Junior Highschool</td>
                            <td>2013 - 2016</td>
                        </tr>

                    </table>
                </div>
            </section>

            <footer>
                <h4 className="cpy">Build proudly by : Andi Wicaksono Nugroho | @ 2023</h4>
                <div className="btnGrp">
                    <a href="https://www.linkedin.com/in/andwn12/" target="blank" className="link">
                        <button className="btnStyle">LinkedIn</button>
                    </a>
                    <a href="https://github.com/Andiwn121" target="blank" className="git">
                        <button className="btnStyle" >Github</button>
                    </a>
                </div>
            </footer>

        </div>


    );
}

export default Portofolio;
