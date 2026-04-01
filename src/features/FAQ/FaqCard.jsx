export const FAQCard = (props) => {
    const {faq} = props;
    return (
        <li className="bg-main-50 border-main-200 border-2 rounded-xl p-4 flex flex-col gap-2">
            <h3 className="text-secondary-700 text-xl font-bold">{faq.question}</h3>
            <p>{faq.answer}</p>

        </li>
    )
}