export const ExpandableButton = () => {
  return (
    <button>
      <span
        class="material-icon"
        style={{
          transform: `rotate(${isOpen ? 180 : 0}deg)`,
          transition: "all 0.25s"
        }}>expand_more</span>
    </button>
  )
}