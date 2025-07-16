import { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import Headers from './components/Header';
import Footers from './components/Footer';
import './App.css';

function App() {
  const [userUrl, setUserUrl] = useState(() => {
    return localStorage.getItem("userUrl") || "";
  });

  useEffect(() => {
    localStorage.setItem("userUrl", userUrl);
  }, [userUrl]);

  return (
    <div className="app-container">
      <Headers />

      <main className="qr-generator-container">
        <div className="qr-card">
          <h2 className="qr-title">Enter Here!</h2>

          <input
            type="text"
            value={userUrl}
            onChange={(e) => setUserUrl(e.target.value)}
            placeholder="Enter the URL"
            className="qr-input"
          />

          {userUrl && (
            <div className="qr-code-wrapper">
              <QRCode value={userUrl} size={180} />
              <p className="qr-subtext">You can scan it</p>
            </div>
          )}
        </div>
      </main>

      <Footers />
    </div>
  );
}

export default App;
