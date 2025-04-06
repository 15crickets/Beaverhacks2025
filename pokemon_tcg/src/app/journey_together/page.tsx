import SortingComponent from '@/components/sorting_component';
export default function Home() {
  return (
    <div>
        <SortingComponent url="/api/data/journey_together"/>
    </div>
  );
}