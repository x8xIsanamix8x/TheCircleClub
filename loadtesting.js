import http from "k6/http";
import { FormData } from "https://jslib.k6.io/formdata/0.0.2/index.js";

import { check, sleep } from "k6";

export const options = {
  iterations: 3000,
};

const binFile = open("1.jpeg", "b");

export default function () {
  // const data = {
  //   birthdate: "2001-09-09",
  //   city: "Caracas",
  //   country: "VE",
  //   email: `loadtesting${crypto.randomUUID()}@k6.com`,
  //   followers: "1000",
  //   instagram: `loadtesting${Math.floor(Math.random() * 10000000)}`,
  //   lastname: "Serrano",
  //   name: "Gustavo",
  //   password: "12345678",
  //   phone: "+584248880099",
  //   tiktok: `loadtesting${Math.floor(Math.random() * 10000000)}`,
  //   // profilePhotoUrl: http.file(binFile),
  // };

  const formData = new FormData();
  formData.append("birthdate", "2001-09-09");
  formData.append("city", "Caracas");
  formData.append("country", "VE");
  formData.append("email", `loadtesting${crypto.randomUUID()}@k6.com`);
  formData.append("followers", "100000");
  formData.append(
    "instagram",
    `loadtesting${Math.floor(Math.random() * 10000000)}`,
  );
  formData.append("lastname", "Serrano");
  formData.append("name", "Gustavo");
  formData.append("password", "12345678");
  formData.append("phone", "+584248880099");
  formData.append(
    "tiktok",

    `loadtesting${Math.floor(Math.random() * 10000000)}`,
  );

  formData.append("profilePhotoUrl", {
    data: new Uint8Array(binFile).buffer,
    filename: "image.jpeg",
    content_type: "image/jpeg",
  });

  const res = http.put(
    "https://circle-hub.gustavoserrano2209.workers.dev/influencer/auth/register",
    formData.body(),
    {
      headers: {
        "Content-Type": "multipart/form-data; boundary=" + formData.boundary,
      },
    },
  );

  sleep(0.2);
}
