import { TextField } from "@mui/material";
import { Component } from "react";
import './input-email.css';
import PropTypes from 'prop-types';


class InputEmail extends Component {
    static regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    static propTypes = {
        label: PropTypes.string.isRequired,
        validated: PropTypes.bool
    };

    state = { invalid: false };

    componentDidMount() {
        //console.log(this.props);
    }

    handleChange = (e) => {
        const val = e.target.value;
        if (this.props.validated) {
            const test = InputEmail.regEx.test(val);
            this.setState({ invalid: !test });
        }
    }

    render() {
        const { validated, ...otherProps } = this.props;
        /*let message;
        if (this.state.invalid) {
            message = <p style={{ color: 'red' }}>Mail invalide</p>;
        }*/
        return (
            <>
                <TextField type="email" variant="outlined" error={this.state.invalid}
                    className="input-field" {...otherProps} onChange={this.handleChange} />
                {this.state.invalid &&
                    (<p style={{ color: 'red' }}>Mail invalide</p>)}
            </>
        );
    }
}

export default InputEmail;