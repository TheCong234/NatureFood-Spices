import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPeopleAction } from "../../../hooks/Redux/User/userAction";

const Index = () => {
    const dispatch = useDispatch();
    const handleGetData = async () => {
        const params = {
            role: "user",
        };
        const response = await dispatch(getPeopleAction(params));
        console.log(response);
    };
    useEffect(() => {
        handleGetData();
    }, []);
    return <div>user</div>;
};

export default Index;
