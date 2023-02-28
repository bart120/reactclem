import { Button, TextField } from "@mui/material";
import React, { Component } from "react";
import InputEmail from "../../core/components/forms/InputEmail";
import withRouter from "../../core/components/routes/withRouter";

class Login extends Component {
    styleTextField = { width: "300px", margin: "5px" };
    user = {};
    state = {};

    constructor(props) {
        super(props);
        //this.handleSubmit = this.handleSubmit.bind(this);// remplace "=>"
        //this.myMail = React.createRef(); //equiv getelementbyid
        //console.log(this.props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("user:", this.user);
        //appel au serveur
        this.props.navigate("/");
    }

    changeTextField = (e) => {
        this.user[e.target.name] = e.target.value;
        //console.log(this.user);
    }

    render() {
        return (
            <div>
                <h1>Connexion</h1>
                <form noValidate onSubmit={this.handleSubmit}>
                    {/*<TextField type="email" label="Email" variant="outlined"
                        ref={this.myMail} style={this.styleTextField} autoFocus
                        onChange={this.changeTextField} name="login" />*/}
                    <InputEmail label="Login" name="login" validated onTextChange={this.changeTextField} />
                    <br />
                    <TextField type="password" label="Mot de passe" variant="outlined" style={this.styleTextField}
                        onChange={this.changeTextField} name="password" />
                    <br />
                    <Button variant="contained" color="primary" type="submit">Se connecter</Button>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);