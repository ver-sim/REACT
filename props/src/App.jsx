// import { useState } from "react";
// import { Clock } from "./Clock";
// import { LanguageContext } from "./LanguageContext";
// import { GithubUser } from "./GithubUser";
import { GithubUsers } from "./GithubUsers";



export function App(){
    // const [language, setLanguage] = useState('en');

    // const hnadleLanguage = (lang) => {

    //     setLanguage(() => lang.target.value)
    // }

    return (
        <div>
            {/* <select onChange={hnadleLanguage}> change language
                <option value="en">english</option>
                <option value="it">italiano</option>
                <option value="fr">français</option>
            </select>
            <LanguageContext.Provider value={language}>
                <Clock />
            </LanguageContext.Provider> */}
            {/* <GithubUser username={'ver-sim'}/> */}
            <GithubUsers />
        </div>
    );
}