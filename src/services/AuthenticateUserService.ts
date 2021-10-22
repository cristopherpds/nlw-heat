import axios from "axios";
/**
 * Recibir code(string)
 * Recuperar el acces_token en github
 * Recuperar informacion del usuario en github
 * Verificar si el usuario existe en la DB
 * --si = generar token
 * --no = crear en la DB, y generar token
 * Retornar token con informacion del user
 */
interface IAccessTokenResponse{
  access_token: string;
}

interface IUserResponse{
  avatar_url:string,
  login: string,
  id:number,
  name: string
}
class AuthenticateUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token"

    const {data: accessTokenResponse} = await axios.post<IAccessTokenResponse>(url, null,{
      params:{
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers:{
        "Accept": "application/json"
      }
    });

    const res = await axios.get<IUserResponse>("https://api.github.com/user",{
      headers:{
        authorization: `Bearer ${accessTokenResponse.access_token}`
      }
    });

    return res.data;
  }
}

export { AuthenticateUserService };
