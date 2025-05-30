import type { Filter } from "@types/todo";

interface Props {
  currentFilter: Filter;
  onChangeFilter: (filter: Filter) => void;
}

export default function FilterButtons({
  currentFilter,
  onChangeFilter,
}: Props) {
  const filters: Filter[] = ["all", "active", "completed"];

  return (
    <div>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChangeFilter(filter)}
          disabled={filter === currentFilter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
