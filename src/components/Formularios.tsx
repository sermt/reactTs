import useForm from "../hooks/useForm";

export default function Formularios() {
  const { formulario, onChange } = useForm({email:'', password:''});
  return (
    <div className="container">
      <h3>Formularios</h3>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          value={formulario.email}
          onChange={({ target }) => onChange(target.value, "email")}
        />
        <input
          type="password"
          className="form-control mt-2 mb-2"
          placeholder="Password"
          value={formulario.password}
          onChange={({ target }) => onChange(target.value, "password")}
        />

        <code>
          <pre>{JSON.stringify(formulario, null, 2)}</pre>
        </code>
      </form>
    </div>
  );
}
