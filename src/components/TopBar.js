import Button from "./Button"
export default function TopBar() {
  return (
    <div className="top-bar-grid z-20" >
        <div className="top-bar-logo" >
            <img className="top-bar-logo-image"  src="./logo.png" />
        </div>
        <div className="top-bar-button" >
        <Button text="Join Our Discord" />
        </div>
    </div>
  )
}
