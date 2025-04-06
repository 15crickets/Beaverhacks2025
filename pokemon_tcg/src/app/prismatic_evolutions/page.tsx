import SortingComponent from '@/components/sorting_component';
export default function Home() {
  return (
    <div>
        <SortingComponent url="/api/data/prismatic_evolutions"/>
    </div>
  );
}