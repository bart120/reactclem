import { useNavigate } from "react-router";

const withRouter = WrappedComponent => props => {
    const navigate = useNavigate();
    return (<WrappedComponent {...props} navigate={navigate}></WrappedComponent>);
}

export default withRouter;