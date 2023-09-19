import {MainLayout} from "../layout/MainLayout";
import CardList from "../components/CardList/CardList";

const Home = () => {
    const homeTitle = "Bienvenido a nuestro site";
    const homeDescription = "Estos son nuestros productos";
    
    return (
        <>
            <MainLayout pageTitle={homeTitle} pageDescription={homeDescription}>
                <CardList />
            </MainLayout>
        </>
    );
};
export default Home; 