function IconLink({ text, icon }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0.8rem 0.5rem",
      }}
    >
      <img 
      style={{
        paddingRight:'0.6rem'
      }} src={icon} alt={icon} />
      <span>{text}</span>
    </div>
  );
}

export default IconLink;
