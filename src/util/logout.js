import axios from "axios";
import Cookies from "js-cookie";

document.getElementById("logout").addEventListener("click", async () => {
  try {
    const response = await axios.delete(
      "http://localhost:3000/api/users/current",
      { headers: { Authorization: Cookies.get("token") } },
    );
    console.log(response);
    Cookies.set("token", "");
    location.reload();
  } catch (error) {
    console.error(error);
  }
});
