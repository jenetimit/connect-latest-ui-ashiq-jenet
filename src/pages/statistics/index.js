import React, { useEffect } from 'react'
import '../../style/statistics.scss'
import '../../style/animate.css'
import $ from "jquery";

export default function Index() {

    useEffect(()=>{
        $(window).on("scroll", function(){
            //console.log("scrolltop",$(window).scrollTop());
            //console.log("height",$(window).height());
            //console.log("linechart top:",$(".line-chart").offset().top);
            if($(".statistics-row").offset().top - $(window).scrollTop() < $(window).height()/2 - 200 ){
                //alert("On viewport");
                $(".statistics-row").addClass("anim");
            }
        });
    },[])

  return (
<>
    <section id='statistics1'>
        <div class="statistics-main-div">
            <div class="top-div">
                <h2>Statistics</h2>
                <h4>2021</h4>
            </div>

            <div class="second-div">
                <p>A CDF Capital study found that churches of all sizes experienced an average decline of 29% in tithing at the start of the pandemic</p>
                <p>One of the more positive church statistics for 2021 is how happy church members have been with live streaming services</p>
                <h4>In person meeting and non in meetings</h4>
                <p>2021: Almost half of churches (47%) say they have already decided they will not meet in person for Easter. A small number (3%) 
                say they will have an in-person gathering no matter what.</p>
            </div>
            

            <div class="statistics-row">

                <div class="line-chrt-div">
                    <div class="line-chart">
                        <h4>Line chart</h4>
                        <div class="line-wrap">
                            <div class="line-progess-bar">
                                <div class="div-two">
                                    <div class="div-three">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="line-text">
                            <h5>3%</h5>
                            <h5>47%</h5>
                        </div>
                    </div>
                </div>
                <div class="svg-diagram-div">
                    <svg id="diagram" xmlns="http://www.w3.org/2000/svg" width="110%" height="110%" viewBox="0 0 706 489">
                        <ellipse id="Ellipse_1" data-name="Ellipse 1" cx="218.5" cy="211.5" rx="218.5" ry="211.5"
                            fill="#1389ff" />
                        <path id="Path_1" data-name="Path 1"
                            d="M1279.256,734.716l12,5.822,17.227,4.646,15.485,3.484,14.324,1.742,15.872,1.161H1371.2l14.9-.161,15.872-2.742,16.453-3.484,19.55-5.775,20.13-7.742,25.714-15.272L1366.937,530.389Z"
                            transform="translate(-1145 -329)" fill="#2cfff1" stroke="#707070" stroke-width="0" />
                        <text id="_47_" data-name="47%" transform="translate(176 162)" fill="#fff" font-size="47"
                            font-family="SegoeUI, Segoe UI">
                            <tspan x="0" y="0">47%</tspan>
                        </text>
                        <text id="_3_" data-name="3%" transform="translate(197 351)" fill="#fff" font-size="50"
                            font-family="SegoeUI, Segoe UI">
                            <tspan x="0" y="0">3%</tspan>
                        </text>
                        <path id="Path_2" data-name="Path 2" d="M1453.9,536.138h161.7V695.686"
                            transform="translate(-1145 -329)" fill="none" stroke="#fff" stroke-width="1" />
                        <path id="Path_3" data-name="Path 3" d="M1371.249,709.341v91.992h241.478"
                            transform="translate(-1145 -329)" fill="none" stroke="#fff" stroke-width="1" />
                        <circle id="Ellipse_2" data-name="Ellipse 2" cx="3" cy="3" r="3" transform="translate(306 204)"
                            fill="#fff" />
                        <circle id="Ellipse_3" data-name="Ellipse 3" cx="3" cy="3" r="3" transform="translate(468 364)"
                            fill="#fff" />
                        <circle id="Ellipse_4" data-name="Ellipse 4" cx="3" cy="3" r="3" transform="translate(223 380)"
                            fill="#fff" />
                        <circle id="Ellipse_5" data-name="Ellipse 5" cx="3" cy="3" r="3" transform="translate(465 469)"
                            fill="#fff" />
                        <text id="They_have_already_decided_they_will_not_meet_in_person_for_Easter_" data-name="They have already decided they will not
                      meet in person for Easter " transform="translate(489 359)" fill="#fff" font-size="14"
                            font-family="SegoeUI, Segoe UI">
                            <tspan x="0" y="0">They have already decided they will not</tspan>
                            <tspan x="0" y="16">meet in person for Easter </tspan>
                        </text>
                        <text id="They_have_already_decided_they_will_not_meet_in_person_for_Easter_2" data-name="They have already decided they will not
                      meet in person for Easter " transform="translate(489 359)" fill="#fff" font-size="14"
                            font-family="SegoeUI, Segoe UI">
                            <tspan x="0" y="0">They have already decided they will not</tspan>
                            <tspan x="0" y="16">meet in person for Easter </tspan>
                        </text>
                        <text id="They_will_have_an_in-person_gathering_no_matter_what_" data-name="They will have an in-person gathering no
                      matter what " transform="translate(489 470)" fill="#fff" font-size="14"
                            font-family="SegoeUI, Segoe UI">
                            <tspan x="0" y="0">They will have an in-person gathering no</tspan>
                            <tspan x="0" y="16">matter what </tspan>
                        </text>
                    </svg>
                </div>
            </div>
        </div>
    </section>

</>
  )
}
