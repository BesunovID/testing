import { useEffect, useState } from "react";
import style from "../Tasks/index.module.css"

export function Second() {
    const [input, setInput] = useState();
    const [result, setResult] = useState();

    useEffect(() => {
        setResult(secondMath(input));
    }, [input])

    return(
        <div className={style.task}>
            <p className={style.description}>
            Написать функцию/метод, которая на вход получает массив 
            положительных целых чисел произвольной длины. 
            Например [42, 12, 18]. На выходе возвращает массив чисел, 
            которые являются общими делителями для всех указанных числе. 
            В примере это будет [2, 3, 6].
            </p>
            <div className={style.answer}>
                <div className={style.code}>
                    {code}
                </div>
                <div className={style.demo}>
                    <span>Укажите числа через пробел:</span>
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
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

function secondMath(input2) {

    if (input2 == undefined) {
        return "Введите числа"
    } else if (input2.toString().length == 0) {
        return "Введите числа"
    }else {
        const input = input2.split(' ');
        const output = [];    
        let minNumber = input[0];

        input.forEach(number => {
            if (number < minNumber){
                minNumber = number;
            }
        });

        for(let i = 2; i <= minNumber; i++){
            let isFit = true;
            for(let number of input){
                if (number % i !== 0){
                    isFit = false;
                    break;
                };
            };
            isFit && output.push(i);
        }
        return output;
    }

}

const code = `function secondMath(input2) {\n
    \n
const input = input2.split(' ');\n
const output = [];    \n
let minNumber = input[0];\n
\n
input.forEach(number => {\n
    if (number < minNumber){\n
        minNumber = number;\n
    }\n
});\n
\n
for(let i = 2; i <= minNumber; i++){\n
    let isFit = true;\n
    for(let number of input){\n
        if (number % i !== 0){\n
            isFit = false;\n
            break;\n
        };\n
    };\n
    isFit && output.push(i);\n
}\n
return output;\n
}`