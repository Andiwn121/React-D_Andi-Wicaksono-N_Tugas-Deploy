import { useCallback, useState } from "react";
import { api } from "../../../api/index.jsx";
import { message } from "antd";


export const useGetUsers = ()=>{
    const [isLoading, setIsLoading] = useState(true);
    const [data, setdata] = useState();

    const getData = useCallback(async () => {
        try {
            const res = await api.getUsers();
            setdata(res.data);     
        } catch (error) {
            message.open({
                type: 'error',
                content: `${error?.message}`
            })
        } finally{
            setIsLoading(false);
            message.open({
                type: 'success',
                content: 'Berhasil Fetch Data!'
            })
        }
    }, [])

    return [isLoading, data, getData];
}