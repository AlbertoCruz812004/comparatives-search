export default function CardImage({ urlImage, title, subtitle, textContent }) {
    const isSubtitle = subtitle ? true : false;
    return (
        <article className="flex flex-col lg:flex-row bg-white border-2 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 lg:w-full py-2">
            <img className="w-4/6 lg:w-36 mx-auto h-auto rounded-t-xl" src={urlImage} loading="lazy" alt="Card Image" />
            <div className="p-4 md:p-5">
                <h3 className="uppercase text-2xl font-bold text-gray-800 dark:text-white">
                    {title}
                    {isSubtitle && `: ${subtitle}`}
                </h3>
                <p className="mt-1 text-gray-500 dark:text-neutral-400">
                    {textContent}
                </p>
            </div>
        </article>
    )
}