import Image from "next/image";
import qrCode from "../../public/image/qr-code.png";

export default function Home() {
  return (
    <main className="bg-femGrey-100 flex h-screen w-screen flex-col items-center justify-center">
      <div className="flex h-[497px] w-[320px] flex-col rounded-sm bg-white p-4 shadow-[0px_25px_25px_0px_#00000005]">
        <div className="rounded-xs overflow-hidden">
          <Image src={qrCode} alt={"QR Code Image"} priority />
        </div>
        <div className="flex flex-col gap-4 p-4 text-center">
          <h1 className="text-femNavy text-lg font-bold ">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-femGrey-200 text-base">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io/profile/robcrock"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Robert Crocker</a>.
      </div>
    </main>
  );
}
