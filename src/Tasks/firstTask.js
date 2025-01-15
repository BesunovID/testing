import { useEffect, useState } from "react";
import style from "../Tasks/index.module.css"

export function First() {
    const [input, setInput] = useState();
    const [result, setResult] = useState();

    useEffect(() => {
        setResult(declination(input));
    }, [input])

    return(
        <div className={style.task}>
            <p className={style.description}>
                Разработайте функцию, которая принимает целое число
                в качестве аргумента и возвращает строку, 
                содержащую это число и слово "компьютер" 
                в нужном склонении по падежам в зависимости от числа. 
                Например, при вводе числа 25 функция должна возвращать
                "25 компьютеров", для числа 41 — "41 компьютер", 
                а для числа 1048 — "1048 компьютеров".
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
                        Результат: {result}
                    </div>
                </div>
            </div>
        </div>
    )

}

function declination(input){
    if (input == undefined) {
        return "Введите число"
    } else if (input.toString().length == 0) {
        return "Введите число"
    }else {
        const lastDigit = Number(input.toString().slice(-1));

        if (((Number(input.toString().slice(-2)[0])) == 1)||(lastDigit >= 5)||(lastDigit == 0)) {
            return(input + ' компьютеров');
        } else if (lastDigit > 1) {
            return(input + ' компьютера');
        } else {
            return(input + ' компьютер');
        }
    }
}

const code = `
function declination(input){\n
    const lastDigit = Number(input.toString().slice(-1));\n
    \n
if (((Number(input.toString().slice(-2)[0])) == 1)||(lastDigit >= 5)||(lastDigit == 0)) {\n
    return(input + ' компьютеров');\n
} else if (lastDigit > 1) {\n
    return(input + ' компьютера');\n
} else {\n
    return(input + ' компьютер');\n
}\n
}`