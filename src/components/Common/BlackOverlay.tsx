import React from "react"

export const BlackOverlay: React.FC<any> = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: 1,
        background: "#000",
        opacity: "0.5",
      }}
    />
  )
}
