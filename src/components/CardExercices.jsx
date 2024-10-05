import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRef, useState } from "react";
import confetti from "canvas-confetti";

export default function CardExercices({ task, answer }) {
    const [isAnserInvalid, setIsAnserInvalid] = useState(false);
    const answerRef = useRef(null); // Crear un ref para el input


    const handleClick = (event) => {
        event.preventDefault();
        event.preventDefault();
        const inputValue = answerRef.current.value; // Accede al valor del input
        if (answer === inputValue.toLowerCase()) {
            setIsAnserInvalid(false);
            confetti()
        } else {
            setIsAnserInvalid(true);
        }
    };

    return (
        <article className="grid gap-3 px-4 py-3 border-2 shadow-sm rounded-xl lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                Exercices
            </h3>
            <p>{task}</p>
            <Input
                ref={answerRef}
                name="answer"
                label="Answer"
                type="text"
                variant="faded"
                color={isAnserInvalid ? "danger" : ""}
            />
            <Button onClick={handleClick} type="submit" className="bg-slate-900 text-white">
                Validate
            </Button>
        </article>
    )
}
