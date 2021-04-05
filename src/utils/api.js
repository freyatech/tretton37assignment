import axios from "axios";

export async function getEmployees() {
  try {
      const response = await axios.get("https://api.1337co.de/v3/employees", {
          headers: {
              Authorization: "api-key 14:2021-03-30:lucas.stenberg@tretton37.com ac3faa4c888c02ed7394ed7b8af19ba2831f837af3a1bfdd174e6981efdf6351"
          }
      }
      );
    return response.data;
  } catch (error) {
    console.log(error);
    return "err";
  }
}