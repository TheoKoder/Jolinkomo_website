import Articles from "../../components/Articles";
import Contacts from "../../components/Contacts";
import MainLayout from "../../components/MainLayout"; // Adjust the path as needed
import Projects from "../../components/Projects";
import Services from "../../components/Services";
import Hero from "../Container/Hero";


const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      <Projects />
      <Contacts />
      <Services />
    </MainLayout>
  );
};

export default Home;
