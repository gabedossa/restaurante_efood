interface Props {
  value: number
}

export function StarRating({ value }: Props) {
  return (
    <div className="flex items-center gap-1 text-primary">
      <span className="text-sm font-bold">{value.toFixed(1)}</span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="#E66767">
        <path d="M7 0l1.796 5.528H14L9.102 8.944 10.898 14.472 7 11.056 3.102 14.472l1.796-5.528L0 5.528h5.204z" />
      </svg>
    </div>
  )
}

