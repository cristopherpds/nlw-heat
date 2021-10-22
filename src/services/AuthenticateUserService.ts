import axios from "axios";
/**
 * Recibir code(string)
 * Recuperar el acces_token en github
 * Verificar si el usuario existe en la DB
 * --si = generar token
 * --no = crear en la DB, y generar token
 * Retornar token con informacion del user
 */
class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/acces_token"

    const res = await axios.post(url,null,{
      params:{
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers:{
        "Accept": "application/json"
      }
    });

    return res.data
  }
}

export { AuthenticateUserService };
