import MainLayout from "../layouts/MainLayout";
import MainContent from "../components/MainContent";

function Home() {
  return (
    <MainLayout>
      <div className="wrapper">
        <MainContent />
      </div>
    </MainLayout>
  );
}

export default Home;
