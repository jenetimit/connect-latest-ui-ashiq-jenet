import React, { useEffect ,useRef} from 'react'
import { Container,Row, Col} from 'react-bootstrap'
import '../../style/campaign.scss'
import Parallax from 'react-rellax'

export default function Campaigns() {


    return (
        <>
        
    <section>
        <div class="compain-main-div">
            <h1 id="campain-heading-tag">Campaigns</h1>
            <div class="main-div">
                <div class="cube">
                    <div class="top">
                        <div class="cub-content-div">
                            <img src={require('../../assets/images/mike.png')} alt="" id="cube-img" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,</p>
                            <button>Start Here</button>
                            <h1>Upcoming Event</h1>
                        </div>
                    </div>
                </div>
                <div class="cube">
                    <div class="top">
                        <div class="cub-content-div-second">
                            <img src={require('../../assets/images/OBJECTS.png')} alt="" id="cube-img_second" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,</p>
                            <button>Start Here</button>
                            <h1>Million Post</h1>
                        </div>
                    </div>
                </div>
                <div class="cube">
                    <div class="top">
                        <div class="cub-content-div-third">
                            <img src={require('../../assets/images/hands.png')} alt="" id="cube-img-third" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,</p>
                            <button>Start Here</button>
                            <h1>StrengtheningMarriage</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- sub section two --> */}

            <div class="main-div">
                <div class="cube">
                    <div class="top">
                        <div class="cub-content-div">
                            <img src={require('../../assets/images/playing.png')} alt="" id="cube-img" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s,</p>
                            <button>Start Here</button>
                            <h1>Youth Section</h1>
                        </div>
                    </div>
                </div>
                <div class="cube">
                    <div class="top">
                        <div class="sb-two-cub-content-div-second">
                            <img src={require('../../assets/images/israel.png')} alt="" id="sb-two-cube-img_second" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply
                                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s,</p>
                            <button>Start Here</button>
                            <h1>Pray For Israel</h1>
                        </div>
                    </div>
                </div>
                <div class="cube">
                    <div class="top">
                        <div class="sb-two-cub-content-div-second">
                            <img src={require('../../assets/images/erth.png')} alt="" id="sb-two-cube-img_third" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply
                                dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s,</p>
                            <button>Start Here</button>
                            <h1>Evangelism</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>

    )
}
