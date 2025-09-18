import ModuleTitle from "./components/ModuleTitle";

const App = () => {

    return( // React Fragment is the <>
        <> 
            <h1>Hello is it me your looking for? </h1>
            <ModuleTitle title="Front End Dev" />
            <ModuleTitle title="Ai" />
        </>
    );
};

export default App;