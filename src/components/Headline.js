import Button from "./Button";
export default function HeadLine() {
  return (
    <div className="head-line center-child mt-24 ">
      <div className="text-7xl head-line-section ">
        Komunitas IT kota Pekanbaru dan sekitarnya.
      </div>

      <div className="social-section mt-2">
        <Button text="Contact us" />
        <Button text="Follow us on Twitter" outline={true} />
      </div>
    </div>
  );
}
