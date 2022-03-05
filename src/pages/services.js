import React from 'react'

export default function services() {
    return (
        <div style={{paddingBottom:'30rem',backgroundColor:'#1c1d1e',marginLeft:'12rem'}}>
            <div id='service_1'>
                <img src={require('../assets/images/Group 186.png')} width={150} height={140}  alt='youtube icon' id='youtube_icon'/>

                <div className='items_list'>
                    <ul class="dashed">
                        <li>Live-Stream Services: Increase viewership & followers</li>
                        <li>Customized Videos</li>
                        <li>Create Short Videos from Sermons</li>
                        <li>Personalized Shorts</li>
                    </ul>
                </div>

                <p id='vertical_text'>Youtube Management</p>
                

            </div>


            <div id='service_1'>
                <img src={require('../assets/images/Group 192.png')} width={150} height={140}  alt='youtube icon' id='youtube_icon'/>

                <div className='items_list'>
                    <ul class="dashed">
                        <li>Live-Stream Services: Increase viewership & followers</li>
                        <li>Customized Videos</li>
                        <li>Create Short Videos from Sermons</li>
                        <li>Personalized Shorts</li>
                    </ul>
                </div>
                <p id='vertical_text'>Facebook Management</p>

            </div>


            <div id='second_col'>

                <div id='service_1'>
                    <img src={require('../assets/images/Group 191.png')} width={150} height={140}  alt='youtube icon' id='youtube_icon'/>

                    <div className='items_list'>
                        <ul class="dashed">
                            <li>Live-Stream Services: Increase viewership & followers</li>
                            <li>Customized Videos</li>
                            <li>Create Short Videos from Sermons</li>
                            <li>Personalized Shorts</li>
                        </ul>
                    </div>
                    <p id='vertical_text'>Instagram Management</p>

                </div>



                <div id='service_1'>
                    <img src={require('../assets/images/Group 193.png')} width={150} height={140}  alt='youtube icon' id='youtube_icon'/>

                    <div className='items_list'>
                        <ul class="dashed">
                            <li>Live-Stream Services: Increase viewership & followers</li>
                            <li>Customized Videos</li>
                            <li>Create Short Videos from Sermons</li>
                            <li>Personalized Shorts</li>
                        </ul>
                    </div>
                 
                        <p id='vertical_text'>Advertisement Management</p>

                    
                </div>
            </div>
                
        </div>
    )
}
