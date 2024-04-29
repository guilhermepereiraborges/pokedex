export default function Tag(props) {
    return (
        <div className="tags">
            <div className="tag">{props.type.type.name}</div>
        </div>
    )
}