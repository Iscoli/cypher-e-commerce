




function IconLink({text,icon}){



return (
  <div>
    <img src={icon} alt={icon} />
    <span>{text}</span>
  </div>
);


}


export default IconLink;