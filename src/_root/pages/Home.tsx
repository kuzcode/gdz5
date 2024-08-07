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
                        location.assign('https://t.me/El4lup')
                    }}>
                        <p>Telegram</p>
                    </button>
                    <button className="btn2" onClick={() => {
                        navigate("/order");
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
                            <h4>Проверка</h4>
                        </div>
                    </li>
                    <li className="li2">
                        <div>
                            <h4>Оригинал</h4>
                            <h3>4</h3>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="third">
            <h2>Что такое Poizon?</h2>
            <p>
                Пойзон - китайский маркетплейс с гигантским ассортиментом, где представлены мировые бренды. Маркетплейс функционирует Исключительно на китайском рынке. Поскольку Китай является производителем большинства крупных брендов, затраты на логистику Отсутствуют, и нет ввозных пошлин. Благодаря этому все товары стоят значительно дешевле.
            </p>
            </div>


            <div className="fourth">
            <h2>комплект</h2>

            <div className="scroll">
                <li>
                    <h4>Сертификат подлинности</h4>
                </li>
                <li>
                    <h4>Коробка POIZON</h4>
                </li>
                <li>
                    <h4>Сертификат POIZON</h4>
                </li>
                <li>
                    <h4>Пломбы POIZON</h4>
                </li>
            </div>
            </div>
        </>
    );
}

export default Home;
