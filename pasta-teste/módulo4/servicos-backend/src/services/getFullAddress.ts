import axios from "axios";

export const getFullAddress = async (cep: string) => {
  try {
    const address = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    return address.data;
  } catch (error: any) {
    console.log(error);
  }
};
