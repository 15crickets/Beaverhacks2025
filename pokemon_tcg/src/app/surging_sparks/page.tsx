// src/app/surging_sparks/page.tsx (or /home/page.tsx — depending on your structure)
import AccessingStuff from './accessing_stuff';
import SortingComponent from '@/components/sorting_component';
export default function Home() {
  return (
    <div className="w-screen">
      <div className="grid grid-cols-3 justify-items-center">
        <AccessingStuff />
      </div>
    </div>
  );
}
