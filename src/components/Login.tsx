import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: null | string;
  username: string;
  nombre: string;
}

const enum Action {
  LOGOUT = "logout",
  LOGIN = "login",
}

type authAction = { type: Action; payload?: authPayload };
type authPayload = { username: string; nombre: string };

const initialState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

const reducer = (state: AuthState, action: authAction): AuthState => {
  switch (action.type) {
    case Action.LOGOUT: {
      return { validando: false, token: null, username: "", nombre: "" };
    }
    case Action.LOGIN: {
        const {username, nombre} = action.payload as authPayload;
      return {
        validando: false,
        token: 'j12312j3lk12n3',
        username,
        nombre,
      };
    }
    default: {
      return state;
    }
  }
};



const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onLogin = ()=> {
    dispatch({type: Action.LOGIN, payload:{username: "migue", nombre: "Miguel",}})
}
  const onLogout = ()=> {
    dispatch({type: Action.LOGOUT})
}

  useEffect(() => {
    const timer = setTimeout(() => dispatch({ type: Action.LOGOUT }), 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (state.validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {state.token ? (
        <>
          <div className="alert alert-success">Autenticado</div>
          <h3>{state.nombre}</h3>
          <h4>{state.username}</h4>
          <button className="btn btn-danger" onClick={onLogout}>Logout</button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">No autenticado</div>
          <button className="btn btn-primary" onClick={onLogin}>Login</button>
        </>
      )}
    </>
  );
};

export default Login;
