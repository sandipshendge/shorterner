import axios from "axios";
import { useEffect, useState } from "react";

const UrlList = () => {
  const [urls, setUrls] = useState([]);

  const getUrls = async () => {
    const res = await axios.get(
      "http://localhost:8080/urls"
    );

    setUrls(res.data);
  };

  useEffect(() => {
    getUrls();
  }, []);

  return (
    <div style={{ padding: "50px" }}>
      <h1>All URLs</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {urls.map((item) => (
            <tr key={item._id}>
              <td>{item.originalUrl}</td>

              <td>
                <a
                  href={`http://localhost:8080/${item.shortCode}`}
                >
                  {item.shortCode}
                </a>
              </td>

              <td>{item.clicks}</td>

              <td>
                {new Date(
                  item.createdAt
                ).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UrlList;