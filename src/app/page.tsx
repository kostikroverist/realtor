import Categories from "./components/categoryComponent/Categories";
import CounterSells from "./components/CounterSells";
import Header from "./components/header";
import InfoRealtor from "./components/InfoRealtor";

export default function Home() {
  return (
    <>
      <Header />
      <InfoRealtor />
      <CounterSells />
      <Categories />
    </>
  );
}
