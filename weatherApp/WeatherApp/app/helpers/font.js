/**
 * Calculates the Relative unit (rem) that will be used throughout the styling
 * of the whole application. It's based on some common heuristics.
 *
 * PhM      -> Phone Magic: Good constant number for phones.
 * TaWidth  -> Tablet Width: Good avg for 3:4 tablets.
 * MSW      -> Multiplier Starting Width: Multiplier starts to affect rem after this width.
 * MSV      -> Multiplier Starting Value: Value in which multiplier affects rem.
 * MTV      -> Multiplier Target Value: Value the multiplier will have when `TaWidth` is reached.
 *
 * @param {number} width - Device width
 * @param {number} height - Device height
 * @returns {number} - REM unit for this device
 */
export const calculateREMforDevice = ({ width }) => {
    const PhM = 380;
    const TaWidth = 768;
    const MSW = 450;
    const MSV = 1;
    const MTV = 0.7;
  
    let remValue = width / PhM;
  
    if (width > MSW) {
      const multiplier = ((width - MSW) / (TaWidth - MSW)) * (MTV - MSV) + MSV; // Linear eq
      remValue = remValue * multiplier;
    }
  
    return remValue;
  };
  