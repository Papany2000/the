import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "./contextAuth";



const RequireAuth = (props) => {

    const { auth } = React.useContext(UserContext);
    // получаем текущий маршрут с помощью хука useLocation()
    const location = useLocation();
    // используем хук useNavigate для навигации по маршрутам
    //const navigate = useNavigate();

   // const success = () => navigate("/goods");
    if (auth) {
        // если пользователь авторизован, то рендерим дочерние элементы текущего маршрута
       // success();
        return props.children;
    }
    // если пользователь не авторизован, то перенаправляем его на маршрут /login с помощью компонента Navigate
    // свойство replace указывает, что текущий маршрут будет заменен на новый, чтобы пользователь не мог вернуться
    // обратно, используя кнопку "назад" в браузере.
    <Navigate to="*" state={{ from: location }} replace />
};

export default RequireAuth;