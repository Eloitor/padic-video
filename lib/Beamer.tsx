import "./beamer.css";

export function Theorem(props) {
  const {children, blockTitle, ...attrs} = props;

  return (
    <aside className="beamer" {...attrs}>
      <header>{blockTitle}</header>
      <div className="content">
        {children}
      </div>
    </aside>
  );
}
