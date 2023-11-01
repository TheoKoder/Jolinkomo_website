import PropTypes from "prop-types";
import Footer from "../components/footer";
import Header from "./Header";

const MainLayout=({children})=>{
    return(
<div>
    <Header />
    {children}
    <Footer />
</div>
)}

//Proptype for mainlayout
MainLayout.propTypes = {
  
    children: PropTypes.node.isRequired,
};
export default MainLayout
