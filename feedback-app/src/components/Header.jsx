function Header({text}) {
    return (
      <header>
          <div className="container">
              <h3>{text}</h3>
          </div>
      </header>
    )
}
  
Header.defaultProps = {
    text: "Feedback App UI",
}

  export default Header