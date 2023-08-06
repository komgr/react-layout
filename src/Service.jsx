import MainLayout from "./components/layouts/MainLayout";
import DocumentTitle from "react-document-title";

function Service() {
  return (
    <MainLayout>
      <DocumentTitle title="Service" />
      <div>
        <div className="jumbotron">
          <h1 className="display-6">ทุนการศึกษา</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          facilis ducimus explicabo odio deleniti minus recusandae quaerat.
          Placeat, id commodi explicabo fuga vitae quo aliquid praesentium
          doloremque ipsam dolor.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
          facilis ducimus explicabo odio deleniti minus recusandae quaerat.
          Placeat, id commodi explicabo fuga vitae quo aliquid praesentium
          doloremque ipsam dolor.
        </p>
      </div>
    </MainLayout>
  );
}

export default Service;
