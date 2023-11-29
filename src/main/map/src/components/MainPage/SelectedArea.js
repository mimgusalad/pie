export default function SelectedArea(props){
    return(
        <div className="keywordTextArea">
            <h4>{props.areaName}</h4>
            <input type="hidden" name="{props.areaName}" />
            <p className="keywordText" name={props.areaName}>{props.selectKeyword[props.index]}</p>
        </div>
    )
}
