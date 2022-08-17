import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import "./App.css";

function App() {
  // Criando um hook do useState e uma const chamada link(acessa o value), setLink(troca o valor) que recebe o useState('') com uma string vazia.
  const [link, setLink] = useState('');
  const [qrcodeLink, setQrcodeLink] = useState('');

  function handleGenerate(link_url) {
    QRCodeLink.toDataURL(link_url, {
      width: 600,
      margin: 3,
    }, function (err, url) {
      setQrcodeLink(url);
    })
  }

  function handleQrCode(e) {
    setLink(e.target.value);
    handleGenerate(e.target.value);
  }

  return (
    <div className="container">

      <h1>QRCode Generator</h1>

      <QRCode
        value={link} // Aqui no value, é o que vai ser digitado no input.
      />

      <input
      className="input"
      placeholder="Digite seu link..."
      value={link}
      onChange={ (e) => handleQrCode(e)}
      />

      <a href={qrcodeLink} download={'qrcode.png'}>Baixar QrCode</a>

    </div>
  );
}

export default App;
