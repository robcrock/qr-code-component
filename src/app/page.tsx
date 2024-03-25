import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
      </Head>
      <p className=" text-2xl">
        Improve your front-end skills by building projects
      </p>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </main>
  );
}
