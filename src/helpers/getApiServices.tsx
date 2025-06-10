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

    console.log(data.profilePhotoUrl);

    try {
      // Mostrar detalles antes de enviar
      console.log("📡 Método:", "POST");
      console.log("📤 Datos enviados:");
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }

      if (data.profilePhotoUrl) {
        console.log("🖼 Archivo enviado:", {
          name: data.profilePhotoUrl.name,
          type: data.profilePhotoUrl.type,
          size: `${(data.profilePhotoUrl.size / 1024).toFixed(2)} KB`,
        });

        const previewUrl = URL.createObjectURL(data.profilePhotoUrl);
        console.log("🔗 Vista previa del archivo:", previewUrl);
        console.log("%c ", `font-size:1px; padding: 60px; background: url(${previewUrl}) no-repeat center; background-size: contain;`);
      }

      const response = await circleApi.put(`influencer/auth/register`, formData);
      console.log("✅ Respuesta del backend:", response.data);
      Swal.fire({ title: "Solicitud Enviada", icon: "success" });

    } catch (error) {
      console.log("❌ Error durante el envío. Reenviando datos para depuración:");
      console.log("📡 Método:", "PUT");

      for (const pair of formData.entries()) {
        console.log(`${pair[0]}:`, pair[1]);
      }

      if (data.profilePhotoUrl) {
        console.log("🖼 Archivo enviado:", {
          name: data.profilePhotoUrl.name,
          type: data.profilePhotoUrl.type,
          size: `${(data.profilePhotoUrl.size / 1024).toFixed(2)} KB`,
        });

        const previewUrl = URL.createObjectURL(data.profilePhotoUrl);
        console.log("🔗 Vista previa del archivo:", previewUrl);
        console.log("%c ", `font-size:1px; padding: 60px; background: url(${previewUrl}) no-repeat center; background-size: contain;`);
      }

      if (axios.isAxiosError(error)) {
        console.error("🌐 URL usada:", error.config?.baseURL + error.config?.url);
        console.error("🧾 Respuesta del servidor:", error.response?.data?.detail);

        const detail = error.response?.data?.detail;

        if (typeof detail === 'string') {
          errorMessage = detail;
        } else if (typeof error.response?.data === 'string') {
          errorMessage = error.response.data;
        } else if (error.message) {
          errorMessage = error.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
      });
    }
  };

  return {
    registerService,
  };
};

export default getApiService;
