import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";
import { updateAccommodation } from "../actions/edit-accommodation";

class EditAccommodation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrivalDate: this.props.arrivalDate || moment().format(),
      departureDate: this.props.departureDate || moment().format()
    };
  }

  handleArrivalDateChange(date) {
    this.setState({ arrivalDate: date.utc().format() });
  }

  handleDepartureDateChange(date) {
    this.setState({ departureDate: date.utc().format() });
  }
  handleSubmitVal = e => {
    console.log(this.state.arrivalDate, "targetting");
    const newAccom = {
      name: e.target.name.value,
      address: e.target.address.value,
      reference: e.target.reference.value,
      arrival: this.state.arrivalDate,
      departure: this.state.departureDate,
      phone: e.target.phone.value
    };
    this.props.dispatch(updateAccommodation(newAccom, this.props.id));
  };

  render() {
    console.log(this.props);

    return (
      <form
        className="accommodations__table"
        onSubmit={e => {
          e.preventDefault();
          this.handleSubmitVal(e);
        }}
      >
        <label className="accommodations__row--acc">Hotel</label>
        <input
          type="text"
          defaultValue={this.props.name}
          name="name"
          ref={input => {
            this.input = input;
          }}
        />
        <label className="accommodations__row--acc">Address</label>
        <input
          type="text"
          defaultValue={this.props.address}
          name="address"
          ref={input => {
            this.input = input;
          }}
        />
        <label className="accommodations__row--acc">Booking Number</label>
        <input
          type="text"
          defaultValue={this.props.reference}
          name="reference"
          ref={input => {
            this.input = input;
          }}
        />
        <label htmlFor="accArrivalDate">Arrival Date</label>
        <DatePicker
          name="accArrivalDate"
          selected={moment(this.state.arrivalDate)}
          onChange={this.handleArrivalDateChange.bind(this)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
          placeholderText="Click to select a date"
        />
        <label htmlFor="accDepartureDate">Departure Date</label>
        <DatePicker
          name="accDepartureDate"
          selected={moment(this.state.departureDate)}
          onChange={this.handleDepartureDateChange.bind(this)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
          placeholderText="Click to select a date"
        />
        <label className="accommodations__row--acc">Phone Number</label>
        <input
          type="text"
          defaultValue={this.props.phone}
          name="phone"
          ref={input => {
            this.input = input;
          }}
          required
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

//     constructor(props) {
//         super(props);
//         this.state = {

//             name: '',
//             address: '',
//             reference: '',
//             arrival: '',
//             departure: '',
//             phone: '',
//         };

//         handleSubmitVal=(e) =>{
//             if (e.target.id === 'name') {
//                 this.setState({
//                     name: e.target.value
//                 });
//             }
//             if (e.target.id === 'address') {
//                 this.setState({
//                     phone: e.target.value
//                 });
//             }
//             if (e.target.id === 'reference') {
//                 this.setState({
//                     email: e.target.value
//                 });
//             }
//             if (e.target.id === 'arrival') {
//                 this.setState({
//                     date: e.target.value
//                 });
//             }
//             if (e.target.id === 'departure') {
//                 this.setState({
//                     time: e.target.value
//                 });
//             }
//             if (e.target.id === 'phone') {
//                 this.setState({
//                     notes: e.target.value
//                 });
//             }
//         }
//     }
//     componentWillMount() {
//         const newAccommodation = this.props.newAccommodation
//         this.setState({
//             name: newAccommodation.name,
//             address: newAccommodation.client.address,
//             reference: newAccommodation.reference,
//             arrival: moment(newAccommodation.arrivalDate).format('MM/DD/YYYY HH:mm:ss'),
//             departure: moment(newAccommodation.departureDate).format('MM/DD/YYYY HH:mm:ss'),
//             phone: newAccommodation.phone,
//         })
//     }

//     render(){
//         return(
//             <form className="ct-acc__form">
//                onSubmit={(e)=>{
//                    e.preDefault();
//                     this.handleSubmitVal(e)}}>
//                 <input
//                     type="text"
//                     defaultValue={this.props.name}
//                     name="hotel"
//                     ref={input => {this.input=input}}
//                     required
//                 />
//                 <input
//                     type="text"
//                     defaultValue={this.props.address}
//                     name="hotel"
//                     ref={input => { this.input = input }}
//                     required
//                 />
//                 <input
//                     type="text"
//                     defaultValue={this.props.reference}
//                     name="hotel"
//                     ref={input => { this.input = input }}
//                     required
//                 />
//                 <input
//                     type="text"
//                     defaultValue={this.props.address}
//                     name="hotel"
//                     ref={input => { this.input = input }}
//                     required
//                 />
//                 <input
//                     type="text"
//                     defaultValue={this.props.arrivalDate}
//                     name="hotel"
//                     ref={input => { this.input = input }}
//                     required
//                 />
//                 <input
//                     type="text"
//                     defaultValue={this.props.departureDate}
//                     name="hotel"
//                     ref={input => { this.input = input }}
//                     required
//                 />
//                 <input
//                     type="text"
//                     defaultValue={this.props.phone}
//                     name="hotel"
//                     ref={input => { this.input = input }}
//                     required
//                 />

//                     <button type="submit">Save</button>
//             </form>
//         )
//         return(

//         )

//     }

const mapStatetoProps = state => {
  //console.log(state);
  return {};
};

export default connect(mapStatetoProps)(EditAccommodation);
