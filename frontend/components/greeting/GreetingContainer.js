import { connect } from "react-redux"
import Greeting from './Greeting'
import { login, logout, signup } from "../../actions/session_actions"

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)