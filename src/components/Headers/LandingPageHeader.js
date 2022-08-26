/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";
import { VideoModal } from "views/modals/VideoModal";

// core components

function LandingPageHeader() {
  const [videoModal, setVideoModal] = React.useState(false);

  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/daniel-olahh.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Grace Community Chapel Sydney</h1>
            <h3>2022 Laying The Foundation 1 Corinthians 3:11</h3>
            <br />
            <Button
              className="btn-round mr-1"
              color="neutral"
              outline
              onClick={()=>setVideoModal(true)}
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
          </div>
        </Container>
      </div>
      <VideoModal isOpen={videoModal} toggleOpen={setVideoModal}/>
    </>
  );
}

export default LandingPageHeader;
