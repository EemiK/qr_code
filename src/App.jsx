import { useState } from "react";
import {QRCodeCanvas} from 'qrcode.react';
import { Input } from "./components/ui/Input";
import { Button } from "./components/ui/Button";
import { Card, CardContent } from "./components/ui/Card";

export default function App() {
  const rickRoll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  const [text, setText] = useState("");

  const downloadQRCode = () => {
    console.log("Download QR Code");
    const canvas = document.querySelector("canvas");
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "qrcode.png";
    a.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="flex flex-col items-center justify-center w-full max-w-md text-center p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-4">QR Code Generator</h1>
        <Input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text or URL"
          className="w-full p-2 mb-4 border rounded-lg"
        />
        <CardContent className="flex flex-col items-center space-y-4 mt-4">
          <QRCodeCanvas value={text ? text : rickRoll} size={200} className="border rounded-lg" />
        </CardContent>
        <Button onClick={downloadQRCode}>Download QR Code</Button>
      </Card>
    </div>
  );
}
