import ModuleTitle from "./components/ModuleTitle";
import Greeting from "./components/Greeting";
import Clicky from "./components/Clicky";
import Countdown from "./components/Countdown";

const App = () => {

    return( // React Fragment is the <>
        <>  
            {/* can uncomment all of this now */}
            {/* <h1>Hello is it me your looking for? </h1> */} 
            {/* <ModuleTitle title="Front End Dev" students = {20}/>   */}
             {/* //the title is a prop in react */}
            {/* <ModuleTitle title="Ai" students ={100}/> */}
            <ModuleTitle title="Another line."/>


            <Greeting name="Johnny" />
            <Greeting name="Gillian"/>
            <Greeting name="Jordan"/>

            <Clicky/>

            <Countdown />

        </>
    );
};

export default App; 