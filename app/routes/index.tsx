import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Hello World !!</h1>
      <Link to="/airport">Show airports</Link>
    </div>
  );
}
