export const FAQCard = (props) => {
    const {faq} = props;
    return (
        <li className="bg-main-50 bg-main-50 shadow-md rounded-lg p-8 flex flex-col gap-2">
            <h3 className="text-secondary-700 text-xl font-bold">{faq.question}</h3>
            <p>{faq.answer}</p>

        </li>
    )
}