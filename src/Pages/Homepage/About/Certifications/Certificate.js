import React from "react";

export default function Certificate(props) {
  return (
    <tr className="border-b hover:text-lightGold">
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className="py-4 inline-block w-full"
      >
        <td className="flex gap-1 items-center">
          {props.icon} {props.name}
        </td>
      </a>
      <td>{props.date}</td>
    </tr>
  );
}
