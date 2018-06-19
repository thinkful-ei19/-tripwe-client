import React from 'react';
import { connect } from 'react-redux'
import { SHOW_DETAILS, showDetails } from '../actions/accommodations'

export class Accommodations extends React.Component {
   
    render() {
    const accommodations = this.props.accommodations.map((obj, index) => {
        const {address, reference, arrival, departure, phone, id }=obj
        console.log(obj, 'accommodation')
        
        var users = '';
        obj.users.forEach(function (user) {
            users += user.fullname + ',';
        });
        users = users && users.substring(0, users.length - 1);
        return (
            <tr className="accommodations__row"key={index}>
                <td className="accommodations__row--acc">{obj.name}
                <i onClick={() => this.props.dispatch(showDetails(id))}
                    className="fas fa-info-circle g-member__info--icon"></i>
                </td>
                <td className="accommodations__row--users">{users}</td>
                   {this.props.showAccDetails === id ?
                   <div>
                <td className="accommodations__row--acc">{address}</td>
                <td className="accommodations__row--acc">{reference}</td>
                <td className="accommodations__row--acc">{arrival}</td>
                <td className="accommodations__row--acc">{departure}</td>
                <td className="accommodations__row--acc">{phone}</td>  
                  </div>:''}</tr>
        )
    });
    return (
        <table className="accommodations__table">
            <thead>
                <tr className="accommodations__table--head">
                    <th>Accommodations</th>
                    <th>People</th>
                </tr>
            </thead>
            <tbody>
                {accommodations}
            </tbody>
        </table>
    );

} }

export default (Accommodations);