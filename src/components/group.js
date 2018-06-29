import React, { Component } from "react";

import GroupMember from './group-member';
import BuildGroupForm from './build-group-form';
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newInvite: false
    };
  }

  handleInvite() {
    this.setState({ newInvite: !this.state.newInvite });
  }

  render(){
    const groupMemberList = this.props.group.map((member, index) => {
        return (<li className="group__list--item" key={index}>
            <GroupMember
                fullname={member.fullname || member.email}
                incomingdepartureairport={member.incomingdepartureairport}
                incomingarrivalairport={member.incomingarrivalairport}
                incomingarrivaltime={member.incomingarrivaltime}
                incomingdeparturetime={member.incomingdeparturetime}
                incomingflightnum={member.incomingflightnum}
                outgoingdeparturetime={member.outgoingdeparturetime}
                outgoingarrivaltime={member.outgoingarrivaltime}
                outgoingdepartureairport={member.outgoingdepartureairport}
                outgoingarrivalairport={member.outgoingarrivalairport}
                outgoingflightnum={member.outgoingflightnum}
            />
        </li>);
    });

    return (
        <div className="group">
            {/* <p>Group Members</p> */}
            <ul className="group__list">
                {groupMemberList}
            </ul>
            <button className="group__button" onClick={() => this.handleInvite()}>Add traveler</button>
            {this.state.newInvite ? (
              <ReactModal
                  isOpen={true}
                  className="form-modal"
                  overlayClassName="form-modal__overlay"
              >
             <BuildGroupForm id={this.props.id} invite={this.state.newInvite} active={() => this.handleInvite()}/>
             </ReactModal>
           ) : null}
        </div>
    )};
};

export default Group;
