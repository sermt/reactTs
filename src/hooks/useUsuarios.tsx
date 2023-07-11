import { reqApi } from "../api/reqRes";
import { ReqResponse, Usuario } from "../interfaces/reqRes.interface";
import { useEffect, useRef, useState } from "react";

export default function useUsuarios() {
  useEffect(() => {
    cargarUsuarios();
  }, []);

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const paginaRef = useRef(1);
  const cargarUsuarios = async () => {
    try {
      const resp = await reqApi.get<ReqResponse>("/users", {
        params: {
          page: paginaRef.current,
        },
      });
      if (resp.data.data.length > 0) {
        setUsuarios(resp.data.data);
      } else {
        alert("No hay mas registros!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  };
  const paginaAnterior = () => {
    if (paginaRef.current - 1 === 0) return;
    paginaRef.current--;
    cargarUsuarios();
  };
  return { usuarios, paginaAnterior, paginaSiguiente };
}
