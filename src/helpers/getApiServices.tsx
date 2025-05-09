import circleApi from "../api/circleApi";

interface RegisterPayload {
  name: string;
  lastname: string;
  birthdate: string;
  city: string;
  email: string;
  phone: string;
  instagram: string;
  tiktok: string;
  password: string;
}

const getApiService = () => {
  const registerService = async (data: RegisterPayload) => {

    console.log("Payload que será enviado:", JSON.stringify(data, null, 2));
    try {
      const response = await circleApi.post(
        `influencer/auth/register2`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      console.log(response.data);
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };
  

  return {
    registerService
  };
};

export default getApiService;
