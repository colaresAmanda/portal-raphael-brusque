// This is a functional component in React called "SidebarOptions"
// It takes in four props: "subtitle", "options", "sidebarStatus", and "selectOption"
function SidebarOptions({
  subtitle,
  options,
  sidebarStatus,
  selectOption,
  setIsSidebarOpen
}) {
  function onClick(subtitle, index){
    
  }
  // The component returns a fragment (<> </>) which contains an h3 element with a class name of "sidebar-subtitle"
  // The h3 displays the "subtitle" prop passed to the component
  // Below that, there is a div with a class name of "menu-options"
  return (
    <>
      <h3 className="sidebar-subtitle">{subtitle}</h3>
      <div className="menu-options">
        {/* Inside the div, there is a map function that iterates over each "option" in the "options" array */}
        {options.map((option, index) => (
          // For each option, a button element is created with the following properties:
          // 1. The button text is set to the current "option" in the iteration
          // 2. The class name of the button is conditionally set to "selected" if the corresponding value in the "sidebarStatus" object is true for the current "subtitle" and "option" combination.
          // 3. A unique "key" prop is assigned to each button using the current index value of the iteration.
          // 4. An onClick event listener is attached to the button that calls the "selectOption" function, passing in the current "subtitle" and "index" value.
          <button
            className={sidebarStatus[`${subtitle}`][`${option}`] ? "selected" : ""}
            key={index}
            onClick={() => {
              selectOption(subtitle, index); setIsSidebarOpen(true)
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  )
}

// Finally, the component is exported as the default export of the module.
export default SidebarOptions
