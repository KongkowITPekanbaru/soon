import Head from "next/head";

export default function RoundArt() {
  return (
    <div className=" fixed z-10 " style={{ marginTop: "-20%" }}>
      <div
        className="round-art-border round-art-gradient rounded-full "
        style={{ width: "100vw", height: "100vw" }}
      />
    </div>
  );
}