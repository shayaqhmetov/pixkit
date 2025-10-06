import React from "react";
import prSidebarIconSource from "../assets/prsidebar-icon.png";

const prSidebarIcon = new URL(prSidebarIconSource, import.meta.url).href;

type IconSidebarToggleProps = React.ImgHTMLAttributes<HTMLImageElement>;

export const IconSidebarToggle = ({
  alt = "Toggle sidebar",
  style,
  ...props
}: IconSidebarToggleProps = {}) => {
  const mergedStyle = {
    ...(style ?? {})
  };

  return (
    <img
      src={prSidebarIcon}
      alt={alt}
      style={mergedStyle}
      {...props}
    />
  );
};
