import { useState } from "react";

export default function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((t) => !t);
  }

  return (
    <div className="border-2 border-red-500 p-5 bg-white w-3xl">
      <div>
        {title}{" "}
        <button
          className="border p-1 bg-gray-300"
          onClick={handleToggleCollapse}
        >
          Clicca qui!
        </button>
      </div>
      {collapsed && <div>{children}</div>}
    </div>
  );
}
