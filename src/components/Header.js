import React from 'react';
import "../css/App.css"


function Header() {
    return (
        <>

            <header>



                <nav id="main-navbar" class="navbar navbar-expand-lg  fixed-top">

                    <div class="container-fluid">

                        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
                            aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-bars"></i>
                        </button>


                        <a class="navbar-brand" href="#">
                            <h4 id='logo'>Student - DAP</h4>
                        </a>

                        <form class="d-none d-md-flex input-group  my-auto" id='header-input'>
                            <input autocomplete="off" type="search" class="form-control rounded"
                                placeholder='Search.....' />
                            <button className='btn' type='submit' id='btn'><span class="input-group-text border-0 btn"><i class="fas fa-search"></i></span></button>
                        </form>


                        <ul class="navbar-nav ms-auto d-flex flex-row">

                            <li class="nav-item dropdown pe-3">

                                <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" height={40} width={40} alt="" class="rounded-circle" />

                                    <span class="d-none d-md-block dropdown-toggle text-white ps-2">Asmer Chougle</span>
                                </a>

                                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">

                                    <li class="dropdown-header">

                                        <h6>Asmer Chougle</h6>
                                        <span>Web Designer</span>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>


                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>



                                    <li>
                                        <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                            <i class="bi bi-question-circle"></i>
                                            <span>Need Help?</span>
                                        </a>
                                    </li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>

                                    <li>
                                        <a class="dropdown-item d-flex align-items-center" href="#">
                                            <i class="bi bi-box-arrow-right"></i>
                                            <span>Sign Out</span>
                                        </a>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>

                </nav>

            </header>


            <br />


        </>
    )
}

export default Header