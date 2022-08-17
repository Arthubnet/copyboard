import React from "react";

import "./news-modal.styles.scss";

function NewsModal() {
  return (
    <div className="modal">
      <div className="modal-background">
        <div className="modal-container">
          <h2>
            Sanjeevani Bhelande to perform a live virtual concert this Sunday
          </h2>
          <div className="journalist">
            <p>07/23/2022</p>
            <p>By Brandon Ridish</p>
          </div>
          <img
            className="news-modal-picture"
            src="https://sl.sbs.com.au/public/image/file/f669fea1-434c-4b0a-9633-df2a71935466/crop/16x9"
            alt="Sanjeevani"
          />
          <div className="modal-paragraph">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida dictum fusce ut placerat orci.
              Libero volutpat sed cras ornare arcu dui vivamus arcu. Ut morbi
              tincidunt augue interdum velit euismod in pellentesque massa.
              Aliquam nulla facilisi cras fermentum odio eu feugiat pretium.
              Iaculis nunc sed augue lacus viverra vitae congue eu. Vestibulum
              mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.
              Maecenas accumsan lacus vel facilisis. Aenean sed adipiscing diam
              donec adipiscing tristique risus nec feugiat.
              <br />
              <br />
              Leo vel fringilla est ullamcorper eget nulla facilisi etiam.
              Feugiat vivamus at augue eget. At volutpat diam ut venenatis
              tellus in metus vulputate. In aliquam sem fringilla ut morbi
              tincidunt. Elementum pulvinar etiam non quam lacus suspendisse
              faucibus. Hendrerit dolor magna eget est lorem ipsum. Quam lacus
              suspendisse faucibus interdum posuere lorem ipsum dolor. Bibendum
              est ultricies integer quis auctor elit sed. Est lorem ipsum dolor
              sit amet. Blandit cursus risus at ultrices mi tempus imperdiet
              nulla.
              <br />
              <br />
              Ut diam quam nulla porttitor massa id neque aliquam vestibulum.
              Non blandit massa enim nec dui nunc. Cursus eget nunc scelerisque
              viverra mauris. Faucibus in ornare quam viverra orci sagittis eu
              volutpat. Odio ut sem nulla pharetra.
            </p>
          </div>
          <img className="modal-close" src="assets/img/close.svg" alt="close" />
        </div>
      </div>
    </div>
  );
}

export default NewsModal;
