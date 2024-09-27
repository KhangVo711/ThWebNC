import Information from "./Information";
import Item from "./Item";

export default function Menu(props) {

    const list = [
        { link: "/login", content: "Login" },
        { link: "/hello", content: "Hello" },
        { link: "/car", content: "Car" },
    ]

    const nameUser = props.name

    const renderItem = list.map((ls) => <Item link={ls.link} content={ls.content} />)

    return (
        <div className="flex justify-around bg-slate-700 text-white w-full h-12 items-center">
            <div>
                <Information nameUsers={nameUser} />
            </div>
            <div className="w-36">
                <ul className="flex w-full justify-between">
                    {renderItem}
                </ul>
            </div>
        </div>
    )
}