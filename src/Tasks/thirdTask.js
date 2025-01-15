import { useEffect, useState } from "react";
import style from "../Tasks/index.module.css"

export function Third() {
    const [inputOne, setInputOne] = useState();
    const [inputTwo, setInputTwo] = useState();
    const [result, setResult] = useState();

    useEffect(() => {
        setResult(thirdMath(inputOne, inputTwo));
    }, [inputOne, inputTwo])

    return(
        <div className={style.task}>
            <p className={style.description}>
            Написать функцию/метод, которая возвращает массив простых чисел
             в диапазоне (2 числа - минимальное и максимальное) заданных чисел.
            Например, на вход переданы 2 числа: от 11 до 20  
            (диапазон считается включая граничные значения).
            На выходе программа должна выдать [11, 13 , 17, 19]
            </p>
            <div className={style.answer}>
                <div className={style.code}>
                    {code}
                </div>
                <div className={style.demo}>
                    <span>Введите числа:</span>
                    <input 
                        type="number" 
                        value={inputOne}
                        onChange={(e) => setInputOne(e.target.value)}
                    />
                    <input 
                        type="number" 
                        value={inputTwo}
                        onChange={(e) => setInputTwo(e.target.value)}
                    />
                    <div className={style.result}>
                        {result && Array(result).map(el => {
                            return <span>{(el + ' ')}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )

}

function thirdMath(first, second){
    
    if ((first == undefined) || (second == undefined)) {
        return "Введите числа"
    } else if ((first.toString().length == 0)||(second.toString().length == 0)) {
        return "Введите числа"
    }else {
        const output = [];

        for(let i = first; i <= second; i++){
            for(let k = 2; k < i; k++){
                if(i % k == 0){
                    break;
                } else if (k + 1 == i){
                    output.push(i);
                }
            }
        }

        return output;
    }
}

const code = `function thirdMath(first, second){\n
const output = [];\n
\n
        for(let i = first; i <= second; i++){\n
            for(let k = 2; k < i; k++){\n
                if(i % k == 0){\n
                    break;\n
                } else if (k + 1 == i){\n
                    output.push(i);\n
                }\n
            }\n
        }\n
        \n
        return output;\n
    }`