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
    try {
      const formData = new FormData();
      
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const response = await circleApi.post(`influencer/auth/register2`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

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
