export const modifySvg = (svgContent: string, newFillValue: string) => {
  const fillRegex = /fill="(#[0-9A-Fa-f]{3,6}|rgba?\([^)]+\)|none)"/g;

  // Replace all fill attributes with the new fill value
  const updatedSvgData = svgContent.replace(
    fillRegex,
    `fill="${newFillValue}"`,
  );

  return updatedSvgData;
};
