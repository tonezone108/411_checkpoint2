import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";

const mapStateToProps = state => {
  return {
    biz: state.biz
  };
};

export default connect(mapStateToProps)(Dashboard);
