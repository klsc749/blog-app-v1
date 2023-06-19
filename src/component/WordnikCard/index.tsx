import {useEffect, useState} from "react";
import WordnikContent, {WordnikWordProps} from "./component/WordContent";
import WordnikApi from "../../service/visitor/WordnikApi";
import Loading from "../Loading/Loading";

function WordnikCard() {
    const[wordnikWord, setWordnikWord] = useState<WordnikWordProps>(
        {
            wordData: {
                word: "",
                definitions: [],
                examples: [],
                note: "",
            }
        }
    );
    const [loading, setLoading] = useState<boolean>(true);

    function getWord(){
        setLoading(true)
        WordnikApi.getWordOfTheDay().then((response) => {
            setWordnikWord({wordData:response});
            console.log(response)
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(()=>{
        getWord();
    }, []);

    if(loading){
        return <Loading/>
    }

    return (
        <WordnikContent wordData={wordnikWord?.wordData}/>
    );
}

export default WordnikCard;