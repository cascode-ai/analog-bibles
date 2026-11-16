# Golden Solution - R138

## Reference answer

$(W/L)_1 \approx 8.4 \times 10^3$ (an enormous device, e.g. W ≈ 4.2 mm for L = 0.5 μm), $(W/L)_2 \approx 11.7$ (unchanged, $V_b = 1.5$ V); minimum input ≈ 1.69 V.

- $V_{out} = 1.5$ V, so $V_{SB1} = 1.5$ V: $V_{TH1} = 0.7 + 0.45(\sqrt{2.4} - \sqrt{0.9}) = 0.970$ V. With $V_{GS1} = 1$ V the overdrive is only 0.030 V → $(W/L)_1 = 1\ \mathrm{mA}/(134\ \mu\mathrm{A/V^2} \times 0.030^2) \approx 8.4 \times 10^3$ (in practice the device would be near weak inversion; the square law is stretched here).
- $M_2$ (source grounded, no body effect): $V_{GS2} = 1.5$ V, overdrive 0.8 V, $(W/L)_2 = 11.7$.
- $M_2$ saturated requires $V_{out} \ge 0.8$ V. There $V_{TH1} = 0.7 + 0.45(\sqrt{1.7} - \sqrt{0.9}) = 0.860$ V and $V_{GS1} = 0.860 + 0.030 = 0.890$ V, so $V_{in,min} = 0.8 + 0.890 \approx 1.69$ V (lower than the 1.8 V without body effect, because $V_{TH1}$ drops as $V_{out}$ falls).

## Grading notes

+2: $V_{TH1}$ ≈ 0.97 V, $(W/L)_1$ ≈ 8.4×10³ (±10%), $(W/L)_2$ ≈ 11.7, $V_{in,min}$ ≈ 1.69 V (±0.02 V). +1: minimum input computed with $V_{TH1}$ frozen at its 1.5-V value (≈ 1.80 V), or one slip elsewhere. 0: sizes right but the minimum input missing or wrong in method. -2 (asserted as fact): body effect applied to $M_2$, $(W/L)_1$ left at the γ = 0 value (≈ 83), or the minimum input set by $M_1$ instead of $M_2$.
