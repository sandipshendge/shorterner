import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const createUrl = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8080/shorten",
        {
          originalUrl: url,
        }
      );

      setShortUrl(
        `http://localhost:8080/${res.data.shortCode}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>URL Shortener</h1>

      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button onClick={createUrl}>
        Shorten
      </button>

      {shortUrl && (
        <h3>
          Short URL:
          <a href={shortUrl}>
            {shortUrl}
          </a>
        </h3>
      )}
    </div>
  );
};

export default Home;