import axios from "axios";

export default interface Categoria {
    id: number;
    descricao: string;
  }

  const api = axios.create({
    baseURL: 'https://farmaciamergulhaolinkficticio.onrender.com/'
  })

  export const buscar = async(url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
  }
  
  export const cadastrar = async(url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
  }
  
  export const atualizar = async(url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
  }
  
  export const deletar = async(url: string, header: Object) => {
    await api.delete(url, header)
  }