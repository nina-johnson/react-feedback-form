import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import '../App/App.css';
// Material UI imports
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class Supported extends Component {

    state = {
        supported: 0
    }

    handleChange = (event) => {
        console.log( `in handleChange...`, this.state );
        
        this.setState({
            ...this.state,
            support: event.target.value,
        })
    }

    handleSubmit = () => {
        console.log( `in handleSubmit...` );

        // keeping user from moving forward without input values
        if( this.state.support !== '' ){
            const action = { type: 'ADD_SUPPORT', payload: this.state.support };
            this.props.dispatch( action );

            this.props.history.push( '/comments' );
        } else {
            alert( `Please select a number between 1 and 5.`);
        }
    }

    render() {
        return(
            <div>
                <Card className="card" >
                    <h2>How well are you being supported?</h2>
                    <form onSubmit={this.handleSubmit} >
                        <input type="number" name="support"
                                min="1" max="5"
                                onChange={this.handleChange} />

                        <Button size="small" variant="contained" color="primary" 
                                type="submit">Next</Button>
                    </form>
                </Card>

                <br/>
                <ReviewFeedback />
            </div>
        );
    }
}

export default connect()(Supported);