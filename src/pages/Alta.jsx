import MainLayout from "../layout/MainLayout";
import Main from "../layout/Main/Main";
import '../assets/scss/main.scss';

const AltaContent = () => {
    <div>
        <h1>Hola</h1>
    </div>
};

const Alta = () => {
    return (
        <>
            <MainLayout>
                <Main >
                    <AltaContent/>
                    
                </Main>
            </MainLayout>
        </>
    );
};
export default Alta;
/*
<MainLayout>
    <Header />
    <Main>

    <Main />
    <Footer />
</MainLayout>

*/