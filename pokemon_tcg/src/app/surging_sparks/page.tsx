// src/app/surging_sparks/page.tsx (or /home/page.tsx — depending on your structure)
import SortingComponent from '@/components/sorting_component';
export default function Home() {
  return (
    <div>
        <SortingComponent url="/api/surging_sparks/"></SortingComponent>
    </div>
  );
}
