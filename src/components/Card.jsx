export default function Card({ title, examples, textContent }) {
    return (
        <article className="flex flex-col bg-white border-2 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <h3 className="text-2xl uppercase font-bold text-gray-800 dark:text-white">
                {title}
            </h3>
            {examples &&
                examples.map((example, index) => (
                    <p key={index} className="mt-2 text-xl text-gray-500 dark:text-neutral-400">
                        {example}
                    </p>
                ))
            }
            {
                textContent && <p className="mt-2 text-xl text-gray-500 dark:text-neutral-400">
                    {textContent}
                </p>
            }
        </article>
    )
}
