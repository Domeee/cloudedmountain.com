import Head from "next/head";

export default function Index() {
  return (
    <>
      <Head>
        <title>Clouded Mountain Games</title>
      </Head>
      <div className="px-6 flex h-screen">
        <div className="m-auto">
          <p className="w-full text-center font-logo text-5xl leading-tight text-white">
            Clouded Mountain
          </p>
          <p className="w-full text-center">
            Clouded Mountain is a game studio based in Worb, Switzerland
          </p>
        </div>
      </div>
    </>
  );
}
