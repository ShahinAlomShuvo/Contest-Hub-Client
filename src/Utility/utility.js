import axios from "axios";

export const imgUpload = async (img) => {
  const imageForm = new FormData();
  imageForm.append("image", img);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
    imageForm
  );
  console.log(data);
  return data;
};
