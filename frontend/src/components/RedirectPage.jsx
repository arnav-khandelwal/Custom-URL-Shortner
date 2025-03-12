import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function RedirectPage() {
  const { shortId } = useParams();

  useEffect(() => {
    const fetchRedirectUrl = async () => {
      try {
        const response = await axios.get(`https://custom-url-shortner-gmvf.onrender.com/api/url/${shortId}`);
        window.location.href = response.data.redirectUrl; // Redirect from frontend
      } catch (error) {
        console.error("Error fetching redirect URL:", error);
      }
    };

    fetchRedirectUrl();
  }, [shortId]);

  return <p>Redirecting...</p>;
}

export default RedirectPage;
