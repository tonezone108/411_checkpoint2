import { connect } from "react-redux";
import HandleLogin from "../components/HandleLogin";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(HandleLogin);
