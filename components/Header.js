import Link from "next/link";

const Header = (props) => (
  <div>
    <Link href="/">
      <div className="Header">{props.appTitle}</div>
    </Link>
    <style jsx>{`
      background-color: SlateGray;
      color: white;
      width: 100%;
      height: 50px;
      font-size: 1.5em;
    `}</style>
  </div>
);

export default Header;
