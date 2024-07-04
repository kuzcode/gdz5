import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="first">
                <h1>EL/15</h1>
                <p>Кроссовки на любой вкус, <span className="nowrap">цвет и размер ноги</span></p>

                <div className="btns">
                    <button className="btn1" onClick={() => {
                        navigate("https://t.me/El4lup");
                    }}>
                        <p>Telegram</p>
                    </button>
                    <button className="btn2" onClick={() => {
                        navigate("/create-post");
                    }}>
                        <p>Заказать</p>
                    </button>
                </div>
            </div>

            <div className="second">
                <h2>Почему именно EL/15?</h2>

                <ul>
                    <li className="li1">
                        <div>
                            <h3>1</h3>
                            <h4>Скорость</h4>
                        </div>
                    </li>
                    <li className="li2">
                        <div>
                            <h4>Доступность</h4>
                            <h3>2</h3>
                        </div>
                    </li>
                    <li className="li1">
                        <div>
                            <h3>3</h3>
                            <h4>Гарантия</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Home;
