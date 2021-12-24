import Footer from "./footer";
import Meta from "./meta";

export default function Layout({ preview, children }) {
  return (
    <div className="white">
      <div className="bg-white dark:bg-gray-700 flex flex-col justify-center items-center">
        <Meta />
        <div className="min-h-screen ">
          {/*<Alert preview={preview} />*/}
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
