import { useNavigate, useParams } from "react-router";

const withRouter = WrappedComponent => props => {
    const navigate = useNavigate();
    const params = useParams();
    return (<WrappedComponent {...props} navigate={navigate} params={params}></WrappedComponent>);
}

export default withRouter;