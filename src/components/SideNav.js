import React from 'react'
import Portfolio from './Portfolio'
import Profile from './Profile'
import "../css/App.css"

function SideNav() {
    return (
        <>
            <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse">
                <div class="position-sticky">
                    <div class="list-group list-group-flush mx-3 mt-4">
                        {/* <a href="#" class="list-group-item list-group-item-action py-2 mb-5" aria-current="true">
                            <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                        </a>
                        <a href="#" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true" class="list-group-item list-group-item-action py-2 ripple ">
                            <i class="fas fa-chart-area fa-fw me-3"></i><span>a a</span>
                        </a>
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                            class="fas fa-lock fa-fw me-3"></i><span>a</span></a>
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                            class="fas fa-chart-line fa-fw me-3"></i><span>assad</span></a>
                        <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                            <i class="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
                        </a> */}

                        <nav>
                            <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                <h3 className='py-3'>Main Dashboard</h3>
                                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><i class="fas fa-chart-area fa-fw me-3"></i> Portfolio</button>
                                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"> <i
                                    class="fas fa-lock fa-fw me-3"></i> Profile</button>
                                <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"><i class="fas fa-chart-pie fa-fw me-3"></i>Share Access</button>
                            </div>
                        </nav>


                        {/* <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">hello hacker</div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                        </div> */}

                    </div>
                </div >
            </nav >
            <br />
            <main>
                {/*  */}
                <div class="tab-content container p-5" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                        <Portfolio />

                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <Profile />
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        Something

                    </div>
                </div>
            </main>
        </>
    )
}

export default SideNav