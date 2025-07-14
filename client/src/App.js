import { useState, useEffect, useRef } from "react";
import "./App.css";
import { uploadFile } from "./service/api";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");

  const fileInputRef = useRef();

  // const url =
  //   "https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    };
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className="main-wrapper"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/23547/pexels-photo.jpg')`,
      }}
    >
      <div className="container">
        <div className="wrapper">
          <h1>Low on drive space? worry not!</h1>
          <p>Upload any doc/image/pdf and share the downloadable link🔗.</p>

          <button onClick={() => onUploadClick()}>Upload</button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <p>The shareable link will be generated here</p>

          <a href={result} target="_blank" rel="noreferrer">
  {result}
</a>

        </div>
      </div>
    </div>
  );
}

export default App;
