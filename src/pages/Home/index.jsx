import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Messages, ChatInput, Status } from "containers";
import { connect } from "react-redux";

import "./Home.scss";

import { dialogsActions } from "redux/actions";
import { SidebarHome, Navbar, Header } from "components";

const Home = (props) => {
  const { setCurrentDialogId, user } = props;
  useEffect(() => {
    const { pathname } = props.location;
    const dialogId = pathname.split("/").pop();
    setCurrentDialogId(dialogId);
  }, [props.location.pathname]);

  return (
    <section className="home">
      <div className="arch">
        <div className="arch__navbar">
          <Navbar />
        </div>
        
        <div className="arch__right-side">
          <Header />
          <div className="arch__right-side__content">
            {true && (
              <div className="arch__right-side__content-midle">
                {/* <Midle /> */}
                dghfghfgh
              </div>
            )}
            <div className="arch__content__side">
              <SidebarHome />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(
  connect(({ user }) => ({ user: user.data }), dialogsActions)(Home)
);
