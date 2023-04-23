import { useCallback, useState } from "react";
import { api } from "../../../api/index.jsx";
import { message } from "antd";

export const useGetBiodata = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setdata] = useState();

  const getData = useCallback(async () => {
    try {
      const res = await api.getBiodata();
      setdata(res.data);
    } catch (error) {
      message.open({
        type: "error",
        content: `${error?.message}`,
      });
    } finally {
      setIsLoading(false);
      message.open({
        type: "success",
        content: "Berhasil Fetch Data!",
      });
    }
  }, []);

  return [isLoading, data, getData];
};

export const usePostBiodata = () => {
  const [isLoading, setIsLoading] = useState(false);
  const createData = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true);
      await api.createBiodata(body);
      onSuccess && onSuccess();
      message.open({
        type: "success",
        content: "Berhasil Menambahkan Data!",
      });
    } catch (error) {
      message.open({
        type: "error",
        content: `${error?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, createData];
};

export const useDeleteBiodata = () => {
  const [isLoading, setIsLoading] = useState(false);
  const deleteData = useCallback(async (id, onSuccess) => {
    try {
      setIsLoading(true);
      await api.deleteBiodata(id);
      onSuccess && onSuccess();
      message.open({
        type: "success",
        content: "Berhasil Menghapus Data!",
      });
    } catch (error) {
      message.open({
        type: "error",
        content: `${error?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, deleteData];
};

export const useUpdateBiodata = () => {
    const [isLoading, setIsLoading] = useState(false);
    const updateData = useCallback(async (id, body, onSuccess) => {
      try {
        setIsLoading(true);
        await api.updateBiodata(id, body);
        onSuccess && onSuccess();
        message.open({
          type: "success",
          content: "Berhasil Mengubah Data!",
        });
      } catch (error) {
        message.open({
          type: "error",
          content: `${error?.message}`,
        });
      } finally {
        setIsLoading(false);
      }
    }, []);
  
    return [isLoading, updateData];
  };