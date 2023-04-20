function SidebarOptions({
  subtitle,
  options,
  sidebarOptionsStatus,
  selectOption,
}) {
  return (
    <>
      <h3 className="sidebar-subtitle">{subtitle}</h3>
      <div className="menu-options">
        {options.map((option, index) => (
          <button
            className={sidebarOptionsStatus[`${subtitle}`][`${option}`] ? "selected" : ""}
            key={index}
            onClick={() => selectOption(subtitle, index)}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  )
}

export default SidebarOptions
