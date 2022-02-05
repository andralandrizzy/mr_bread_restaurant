import Link from "next/link";
import {Breadcrumb} from "react-bootstrap"

const HeaderContent = (props) => {
  return (
    <div className="show_content_info">
      <h1>{props.title}</h1>
      <div className="bread">
        <Link href="/">
          <a className="prev">{props.prevpage}</a>
        </Link>
        <span> {`>`} </span>
        <a className="active">{props.activepage}</a>
      </div>
    </div>
  );
};

export default HeaderContent;
