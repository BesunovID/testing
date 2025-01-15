import { useEffect, useState } from "react";
import style from "../Tasks/index.module.css"

export function Four() {
    const [input, setInput] = useState();
    const [result, setResult] = useState();

    useEffect(() => {
        setResult(fourMath(input));
    }, [input])

    return(
        <div className={style.task}>
            <p className={style.description}>
            Написать метод, который в консоль выводит таблицу умножения. 
            На вход метод получает число, до которого выводит таблицу умножения. 
            В консоли должна появиться таблица.
            </p>
            <div className={style.answer}>
                <div className={style.code}>
                    {code}
                </div>
                <div className={style.demo}>
                    <span>Введите число:</span>
                    <input 
                        type="number" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <div className={style.result}>
                        Результат:<br />
                        <div className={style.matrix}>
                            {result}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


function fourMath(border){
    let resultString = '   ';

    for(let i = 1; i <= border; i++){
        resultString += (i + ' ');
    }
    resultString += '\n';

    for(let i = 1; i <= border; i++){
        resultString += (i + ' ');
        for(let k = 1; k <= border; k++){
            resultString += (i * k) + ' ';
        }
        resultString += '\n';
    }

    console.log(resultString);
    return resultString;
}

const code = `function fourMath(border){
    let resultString = '  ';\n
\n
    for(let i = 1; i <= border; i++){\n
        resultString += (i + ' ');\n
    }\n
    resultString += '\n';\n
\n
    for(let i = 1; i <= border; i++){\n
        resultString += (i + ' ');\n
        for(let k = 1; k <= border; k++){\n
            resultString += (i * k) + ' ';\n
        }\n
        resultString += '\n';\n
    }\n
\n
    console.log(resultString);\n
}`