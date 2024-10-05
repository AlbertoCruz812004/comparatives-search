import { Button } from "@nextui-org/button";
import Search from "./components/Search";
import Sun from "./icon/Sun";
import Moon from "./icon/Moon";
import useDarkTheme from "./useDarkTheme";

export default function App() {

  const { toogle, changeTheme } = useDarkTheme();

  return (
    <>
      <header className="py-5 px-6 flex justify-between">
        <span className="flex gap-2 w-auto items-center"><img className="w-11 p-1 bg-slate-700 rounded-full" src="./../public/white_on_black-transformed-remove.png" alt="" /> CompariSearch</span>
        <Button onClick={changeTheme} className="p-2" isIconOnly size="sm">
          {
            toogle ? <Moon className="w-10 h-10" /> : <Sun className="w-10 h-10" />
          }
        </Button>
      </header>
      <section className="py-5">
        <h1 className="text-3xl font-bold text-center px-5">
          Discover Comparatives: Your Ultimate Search Engine
        </h1>
        <Search />
      </section>
    </>
  )
}
