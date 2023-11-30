
export default function DropDown(props){
    return(
        props.DropDownList.map(function(element){
            return(
                <li className="option" onClick={ (e) => {
                    let copyInnerText=[...props.sBtnInnerText];
                    let copyDropdownCheck = [...props.dropdownCheck];
                    copyInnerText[props.index] = e.target.innerText;
                    copyDropdownCheck[props.index] = !copyDropdownCheck[props.index];
                    props.setInnerText(copyInnerText);
                    props.setDropdownCheck(copyDropdownCheck);
                    }}>
                    <span className="option-text" >{element}</span>
                </li>
            )
        })
    )
}