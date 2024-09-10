import { WavyBackgroundDemo } from "./components/wavy-background";

export default function Home() {
  return (
    <div className="flex h-screen w-full">
      <div className="relative rounded-l-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-zinc-900 flex flex-col flex-1 w-full overflow-hidden">
        {/* Kontener z przewijaniem */}
        <div className="h-full overflow-y-auto">
          {/* Wavy Background na pełną wysokość */}
          <div className="h-screen">
            <WavyBackgroundDemo />
          </div>

          {/* Drugi div, widoczny po przewinięciu */}
          <div className="h-screen bg-slate-500">
            {/* Treść drugiego diva */}
          </div>
        </div>
      </div>
    </div>
  );
}
