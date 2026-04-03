export const AboutCard = (props) => {
    const {title, text, imgUrl, imgAlt} = props;

    return (
        <div className="flex flex-col align-center justify-start gap-2 bg-main-50 shadow-md rounded-lg p-12 w-400px">
            <img src={imgUrl} alt={imgAlt} className="h-50px"></img>

            <div className="flex flex-col align-start gap-1">
                <h2>{title}</h2>
                <div>
                    {text.map((sentence, index) => {
                        <p key = {index}>{sentence}</p>
                    })
                    }
                </div>
            </div>
        </div>
    )
}