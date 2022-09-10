import Button from "./Button";
export default function HeadLine() {
  return (
    <div className="head-line center-child mt-48 md:mt-36">
      <div className=" head-line-section text-2xl md:text-6xl ">
        Pekanbaru IT Activist Community
      </div>

      <div className="social-section mt-2 md:mt-4">
        <Button
          onClick={() => window.open("https://discord.gg/RNDHAC5CKV")}
          text="Join our Discord"
        />
        <Button
          onClick={() => window.open("https://github.com/kongkowitpku")}
          text="Follow us on Github"
          outline={true}
        />
      </div>
    </div>
  );
}
