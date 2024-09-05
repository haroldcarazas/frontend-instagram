import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { loginMutation } = useContext(AuthContext);

  const handleLogin = async e => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    await loginMutation.mutate(data);
  };

  return (
    <main>
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleLogin}>
        <label>
          Nombre de usuario: <input type='text' name='username' />
        </label>
        <label>
          Contraseña: <input type='text' name='password' />
        </label>
        <button type='submit'>Ingresar</button>
      </form>
    </main>
  );
}

export default Login;
