# Golden Solution - R579

## Reference answer

The maximum charge-injection error occurs at $V_{in} = 0$. Worst case (the entire channel charge goes onto $C_H$): ΔV = 88 mV, a negative pedestal; 44 mV if half the charge goes to $C_H$. Clock feedthrough gives ≈ 24 mV, independent of $V_{in}$. Charge injection is ≈ 3.7× larger (≈ 1.9× with the half-split assumption).

- $WLC_{ox} = 20 \times 0.5 \times 3.84$ fF = 38.4 fF. $Q_{ch} = WLC_{ox}(V_{DD} - V_{in} - V_{TH})$ is largest at $V_{in} = 0$ ($V_{SB} = 0$, $V_{TH} = 0.7$ V): 38.4 fF × 2.3 V = 88.3 fC, so ΔV = 88 mV (all) or 44 mV (half).
- Clock feedthrough: $\Delta V = V_{DD}\,WC_{ov}/(WC_{ov} + C_H) = 3\ \mathrm{V} \times 8\ \mathrm{fF}/1008\ \mathrm{fF} = 23.8$ mV.
- Charge injection also depends on $V_{in}$: it shrinks as $V_{in}$ rises, faster with body effect. That produces gain error and nonlinearity, whereas feedthrough is a constant offset.

## Grading notes

+2: injection error ≈ 88 mV (all charge) or ≈ 44 mV (half, stated) at the lowest input level, feedthrough ≈ 24 mV, and the comparison (injection larger, ≈ 3.7× or ≈ 1.9×); ±5%. Noting that the injection depends on $V_{in}$ while the feedthrough is a constant offset is a plus but not required, since the question asks for a magnitude comparison; it may also be shown only through the formulas. +1: values right but the magnitude comparison missing, or the injection evaluated at a stated nonzero input level instead of the maximum. 0: only one of the two errors right. -2 (asserted as fact): a feedthrough error larger than the injection error, a formula error in the channel charge (e.g., $WLC_{ox}V_{DD}$, or a 2/3 saturation factor for a triode switch), or both errors claimed to be independent of the input.
