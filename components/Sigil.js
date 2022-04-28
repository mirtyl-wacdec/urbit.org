import { sigil, reactRenderer } from "@tlon/sigil-js";

export const Sigil = ({ patp, size, icon }) => {
  if (patp.length > 14) {
    return <div />;
  }
  return (
    <div className={icon ? "p-1 bg-black" : ""}>
      {sigil({
        patp: patp,
        renderer: reactRenderer,
        size: icon ? size / 2 : size,
        colors: ["black", "white"],
        icon: icon || false,
      })}
    </div>
  );
};

export default Sigil;