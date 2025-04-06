import SortingComponent from '@/components/sorting_component';
export default function Home() {
  return (
    <div>
        <SortingComponent url="/api/data/paldean_fates"/>
    </div>
  );
}