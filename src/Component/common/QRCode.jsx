import { QRCodeSVG } from "qrcode.react";

function QRCode() {
  const imageUrl =
    "https://i.pinimg.com/1200x/80/7e/81/807e81ecbba06d5bd00069fb74069aec.jpg";

  return (
    <div className="flex flex-col items-center gap-6 p-10">
      <h1 className="text-2xl font-bold">Scan Me!</h1>

      <QRCodeSVG value={imageUrl} size={200} />
    </div>
  );
}

export default QRCode;