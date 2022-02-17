import { connect } from "react-redux"
import Greeting from './Greeting'
import { login, logout, signup } from "../../actions/session_actions"

const mapStateToProps = (state) => {
    debugger
    return {
        errors: state.errors.session,
        currentUser: state.session.id
    }
}

const mapDispatchToProps = (dispatch) => ({
    signup: (user, token) => dispatch(signup(user, token)),
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)