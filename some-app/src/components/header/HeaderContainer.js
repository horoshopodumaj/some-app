import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setAuthUserData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
                withCredentials: true,
            })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserData(
                        response.data.data.id,
                        response.data.data.email,
                        response.data.data.login
                    );
                }
                console.log(response);
            });
    }
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

// export default HeaderContainer;
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);