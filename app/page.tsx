import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { Toaster} from "sonner";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#EDE8F5] flex flex-col">
      <Toaster theme='light'/>
      <Navbar />
      <Main />
    </div>
  );
}

