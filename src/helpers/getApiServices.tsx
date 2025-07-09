import axios from "axios";
import circleApi from "../api/circleApi";
import Swal from "sweetalert2";

interface RegisterPayload {
  name: string;
  lastname: string;
  birthdate: string;
  country: string;
  city: string;
  email: string;
  phone: string;
  instagram: string;
  tiktok: string;
  password: string;
  followers: string;
  profilePhotoUrl: File | null;
}

interface DeletePayload {
  email: string;
  password: string
}

const getApiService = () => {

  let errorMessage = 'Algo salió mal con el registro';

  const registerService = async (data: RegisterPayload) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("lastname", data.lastname);
    formData.append("birthdate", data.birthdate);
    formData.append("country", data.country);
    formData.append("city", data.city);
    formData.append("email", data.email.toLowerCase());
    formData.append("phone", `+${data.phone}`);
    formData.append("instagram", data.instagram);
    formData.append("tiktok", data.tiktok);
    formData.append("password", data.password);
    formData.append("followers", String(data.followers));

    if (data.profilePhotoUrl) {
      formData.append("profilePhotoUrl", data.profilePhotoUrl);
    }

    try {

      await circleApi.put(`influencer/auth/register`, formData);
      Swal.fire({ title: "Solicitud Enviada", icon: "success" });

    } catch (error) {

      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;

        if (detail === 'The credentials provided are already in use') {
          errorMessage = 'Las credenciales proporcionadas ya están en uso.';
        } else if (typeof detail === 'string') {
          errorMessage = detail;
        } else if (typeof error.response?.data === 'string') {
          errorMessage = error.response.data;
        } else if (error.message) {
          errorMessage = error.message;
        }
      }

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    }
  };

  const deleteAccount = async (data: DeletePayload) => {
    try {
      await circleApi.delete(`auth/delete`, { data: data })
      Swal.fire({ title: "Tu cuenta ha sido eliminada con éxito.",  html: `
        Gracias por haber sido parte de The Circle Club.<br /><br />
        Si en algún momento decides regresar, estaremos encantados de darte la bienvenida nuevamente.<br /><br />
        Puedes escribirnos a info@thecircleclubapp.com para reactivar tu cuenta.
      `, icon: "success" });
    } catch (error) {

      if (axios.isAxiosError(error)) {
        const detail = error.response?.data?.detail;

        if (detail === 'The credentials provided are already in use') {
          errorMessage = 'Las credenciales proporcionadas ya están en uso.';
        } else if (typeof detail === 'string') {
          errorMessage = detail;
        } else if (typeof error.response?.data === 'string') {
          errorMessage = error.response.data;
        } else if (error.message) {
          errorMessage = error.message;
        }
      }

    }
  }

  return {
    registerService,
    deleteAccount
  };
};

export default getApiService;
