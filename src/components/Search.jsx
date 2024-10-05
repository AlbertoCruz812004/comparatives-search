import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { comparatives, rules } from './../comparatives.js';
import { useEffect, useState } from "react";
import CardImage from "./CardImage.jsx";
import Card from "./Card.jsx";
import CardExercices from "./CardExercices.jsx";
import NotFound from "./NotFound.jsx";

export default function Search() {

    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [error, setErrror] = useState(false);

    //const [rule, setRule] = useState('');

    useEffect(() => {
        if (!search) return;

        const result = comparatives[search];
        //setRule(rules[result.rule])
        if (result) {
            setSearchResults(result)
            setErrror(false);
        } else {
            setSearchResults(null);
            setErrror(true);
        }
    }, [search]);


    const handleSubmit = (e) => {
        e.preventDefault();
        const d = e.target.verb.value;
        setSearch(d.toLowerCase());
    }

    return (
        <>
            <form className="grid grid-cols-4 px-3 items-center gap-2 py-5 md:w-2/3 md:mx-auto" onSubmit={handleSubmit}>
                <Input name="verb" label="Search a Comparative" type="text" variant="faded" className="col-span-3" id="search" />
                <Button type="submit" variant="solid" className="bg-zinc-800 text-zinc-200" size="lg">Search</Button>
            </form>
            {error && <NotFound />}
            {
                searchResults && !error &&
                <section className="grid gap-8 px-5 py-10 md:w-2/3 md:mx-auto lg:flex lg:flex-wrap">
                    <CardImage
                        title={search}
                        subtitle={searchResults.traduction}
                        textContent={searchResults.definition}
                        urlImage={searchResults.image}
                    />
                    <Card title='Rule' textContent={rules[searchResults.rule]} />
                    <Card title='examples' examples={searchResults.examples} />
                    <CardExercices task={searchResults.exercise.task} answer={searchResults.exercise.answer} />
                </section>
            }
        </>
    )
}
