import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Clouded Mountain - 404</title>
      </Head>
      <div className="px-6 flex h-screen">
        <div className="m-auto">
          <p className="w-full text-center font-logo text-5xl leading-tight text-white">
            Clouded Mountain
          </p>
          <p className="w-full text-center">Not found 🧐</p>
        </div>
      </div>
    </>
  );
}
