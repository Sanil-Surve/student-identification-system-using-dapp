import React from 'react'
import "../css/App.css"
import 'animate.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Portfolio() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>


            <section>
                <div className="row  ">
                    <div className="col-lg-5 col-sm-12 mb-5">
                        <img id='portfolio_img' src="https://picsum.photos/200" data-aos="fade-right" alt="" srcset="" height={400} width={400} style={{ float: "left" }} />
                    </div>
                    <div className="col-lg-7 col-sm-12 mb-5" id='lineL'>
                        <div> <h4>Name</h4> <br />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quod nesciunt perferendis accusantium quibusdam, non, sed fugiat ratione praesentium quos atque, minus esse rem temporibus doloremque inventore magni consequuntur ea dolorum assumenda soluta. Ipsum voluptatem rerum ipsa doloremque eveniet, exercitationem blanditiis aut. Deserunt debitis, sint similique officiis iste odit sequi nulla, labore vero eius alias impedit, libero nesciunt! Totam ipsum et hic rerum cum odio consequuntur laborum libero possimus rem. Quas nemo laboriosam commodi ad optio eaque saepe consectetur eius ratione possimus illo quis ab, dolorem recusandae nesciunt, iure quisquam vel. Nostrum voluptas blanditiis alias sint, odit voluptatum pariatur tenetur?</p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-12 mb-5" id='lineR' >
                        <div > <h4>Name</h4> <br />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quod nesciunt perferendis accusantium quibusdam, non, sed fugiat ratione praesentium quos atque, minus esse rem temporibus doloremque inventore magni consequuntur ea dolorum assumenda soluta. Ipsum voluptatem rerum ipsa doloremque eveniet, exercitationem blanditiis aut. Deserunt debitis, sint similique officiis iste odit sequi nulla, labore vero eius alias impedit, libero nesciunt! Totam ipsum et hic rerum cum odio consequuntur laborum libero possimus rem. Quas nemo laboriosam commodi ad optio eaque saepe consectetur eius ratione possimus illo quis ab, dolorem recusandae nesciunt, iure quisquam vel. Nostrum voluptas blanditiis alias sint, odit voluptatum pariatur tenetur?</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12 mb-5">
                        <img id='portfolio_img' src="https://picsum.photos/200" data-aos="fade-left" alt="" srcset="" height={400} width={400} style={{ float: "right" }} />
                    </div>
                    <div className="col-lg-5 col-sm-12 mb-5">
                        <img id='portfolio_img' src="https://picsum.photos/200" alt="" className='animate__animated animate__bounceInLeft' srcset="" height={400} width={400} style={{ float: "left" }} />
                    </div>
                    <div className="col-lg-7 col-sm-12 mb-5" id='lineL'>
                        <div> <h4>Name</h4> <br />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quod nesciunt perferendis accusantium quibusdam, non, sed fugiat ratione praesentium quos atque, minus esse rem temporibus doloremque inventore magni consequuntur ea dolorum assumenda soluta. Ipsum voluptatem rerum ipsa doloremque eveniet, exercitationem blanditiis aut. Deserunt debitis, sint similique officiis iste odit sequi nulla, labore vero eius alias impedit, libero nesciunt! Totam ipsum et hic rerum cum odio consequuntur laborum libero possimus rem. Quas nemo laboriosam commodi ad optio eaque saepe consectetur eius ratione possimus illo quis ab, dolorem recusandae nesciunt, iure quisquam vel. Nostrum voluptas blanditiis alias sint, odit voluptatum pariatur tenetur?</p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-sm-12 mb-5" id='lineR' >
                        <div > <h4>Name</h4> <br />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In quod nesciunt perferendis accusantium quibusdam, non, sed fugiat ratione praesentium quos atque, minus esse rem temporibus doloremque inventore magni consequuntur ea dolorum assumenda soluta. Ipsum voluptatem rerum ipsa doloremque eveniet, exercitationem blanditiis aut. Deserunt debitis, sint similique officiis iste odit sequi nulla, labore vero eius alias impedit, libero nesciunt! Totam ipsum et hic rerum cum odio consequuntur laborum libero possimus rem. Quas nemo laboriosam commodi ad optio eaque saepe consectetur eius ratione possimus illo quis ab, dolorem recusandae nesciunt, iure quisquam vel. Nostrum voluptas blanditiis alias sint, odit voluptatum pariatur tenetur?</p>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12 mb-5">
                        <img id='portfolio_img' src="https://picsum.photos/200" alt="" className='animate__animated animate__bounceInRight' srcset="" height={400} width={400} style={{ float: "right" }} />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Portfolio