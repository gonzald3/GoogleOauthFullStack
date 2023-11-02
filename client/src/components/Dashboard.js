import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Payments from './Payments';



class Dashboard extends Component {
    renderContent(){
        switch(this.props.auth){
            case null:
                return 'Still deciding';
            case false:
                return <li><a href="/auth/google">Login with Google</a></li>;
            default:
                return [
                    <li><img src={this.props.auth.photo} alt="" class="circle responsive-img"></img></li>,
                    <li key="4" style={{ margin: '0 10px'}}>Hi {this.props.auth.name} </li>,
                    <li key="4" style={{ margin: '0 10px'}}>Email: {this.props.auth.email} </li>,
                    <li key="3" style={{ margin: '0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    
            
            ];


        }
    }


    render() {
        console.log(this.props)
        //const name = this.props.
        return(

                <div >
                    <h1>Dashboard</h1>
                    <p>Feel Free to add credits to your account using the stripe demo.</p>
                    <p>When testing interactively, use a card number, such as 4242 4242 4242 4242. Enter the card number in the Dashboard or in any payment form.
                        <li>Use a valid future date, such as 12/34.</li>
                        <li>Use any three-digit CVC </li>
                        <li>Use any value you like for other form fields.</li>
                    </p>
                    <ul className="right">
                        {this.renderContent()}

                    </ul>
                </div>


        );
    }
}

function mapStateToProps({ auth }){
    return{ auth };
}

export default connect(mapStateToProps)(Dashboard);