import { useAtom, useAtomValue } from "jotai";
import React from "react";
import { showPatternAtom } from "../store";
import { themeAtom } from "../store/themes";
import ControlContainer from "./ControlContainer";
import { Switch } from "@/components/switch";

/**
 * BackgroundPatternControl - Toggle for Second themes' brand pattern background
 *
 * Only enabled for Second and Second (Old) themes. When disabled, shows the solid
 * background colors instead of the brand pattern.
 */
const BackgroundPatternControl: React.FC = () => {
  const [showPattern, setShowPattern] = useAtom(showPatternAtom);
  const theme = useAtomValue(themeAtom);

  // Only enabled for Second themes (new wired style and old drop-shadow style)
  const isSecondTheme = theme.id === "second" || theme.id === "second-old";

  return (
    <ControlContainer title="Pattern">
      <Switch checked={showPattern} onCheckedChange={setShowPattern} disabled={!isSecondTheme} />
    </ControlContainer>
  );
};

export default BackgroundPatternControl;
