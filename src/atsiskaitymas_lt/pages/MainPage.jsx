import { Navigation } from "../extraElements/Navigation";
import { Footer } from "../extraElements/Footer";
import { AllBookks } from "../extraElements/AllBooks";

export const MainPage = () => {
  return (
    <>
      <main>
        <header>
          <Navigation />
        </header>
        <h1 style={{ textAlign: "center" }}>TECHIN knygynas</h1>

        <AllBookks />

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
};
