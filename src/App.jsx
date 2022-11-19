import { Statistics } from "./components/Statistics";
import { Table } from "./components/Table";
import { CardsProvider } from "./context/CardsContext";

function App() {
  return (
    <CardsProvider>
      <section className="relative h-screen flex flex-col justify-center items-center">
        <Table />
        <Statistics />
        <footer className="mt-5">
          <p className="text-center text-sky-100 font-bold">
            Desarrollado por{" "}
            <a
              className="transition-all text-sky-900 underline hover:text-sky-800 inline-block hover:scale-110"
              href=""
              target="_blank"
            >
              Silvana Gabriela Gonzalez Lopez
            </a>
          </p>
        </footer>
      </section>
    </CardsProvider>
  );
}

export default App;