import { Usuario } from "../interfaces/reqRes.interface";
import useUsuarios from "../hooks/useUsuarios";

const renderItem = (usuario: Usuario) => (
  <tr key={usuario.id}>
    <td>
      <img
        className="img-responsive"
        src={usuario.avatar}
        style={{ width: 50, borderRadius: 40 }}
        alt={usuario.first_name}
      />
    </td>
    <td>
      {usuario.first_name} {usuario.last_name}
    </td>
    <td>{usuario.email}</td>
  </tr>
);

const Usuarios = () => {
  const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

  return (
    <>
      <h2>Usuarios</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map((usuario) => renderItem(usuario))}</tbody>
      </table>
      <button className="btn btn-primary" onClick={paginaAnterior}>Anterior</button>
      <button className="btn btn-primary" onClick={paginaSiguiente}>Siguiente</button>
    </>
  );
};

export default Usuarios;
