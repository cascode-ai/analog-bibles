# Golden Solution - A061

## Reference answer

One design: keep M1 = 2 µm/0.8 µm ($R_{on}$ ≈ 1.84 kΩ) and make M2 a square gate with W = L ≈ 592 µm (C ≈ 865 pF).

- The circuit is an RC low-pass: M1 (no dc current, $V_{DS}$ = 0) is a nonsaturated resistor and M2 (inverted, $V_{GS}$ = 2 V) a gate capacitor, so $f_{-3dB} = 1/(2\pi R_{on}C)$ = 100 kHz requires $R_{on}C$ = 1.59 µs.
- M1: $V_{T1} = 0.7 + 0.4(\sqrt{2.7} - \sqrt{0.7})$ = 1.023 V (body effect, $V_{SB}$ = 2 V); $R_{on} = 1/[K'(W/L)_1(3 - 1.023)]$ = 1.84 kΩ for W/L = 2.5.
- M2: $C \approx C_{ox}W_2L_2$ = 1.59 µs/1.84 kΩ = 865 pF → $W_2L_2$ = 865 pF/(24.7×10⁻⁴ F/m²) = 3.50×10⁵ µm² → W₂ = L₂ ≈ 592 µm (the overlap terms change this by < 0.1%).
- Check: $1/(2\pi\times1.84\ \mathrm{k\Omega}\times865\ \mathrm{pF})$ = 100 kHz.
- Other valid designs trade R against C, e.g. M1 = 2 µm/80 µm ($R_{on}$ = 184 kΩ) with M2 ≈ 59 µm × 59 µm (8.65 pF); M2's area can only be reduced by making M1 long and narrow.

## Grading notes

Design problem: accept any sizing with $R_{on}C$ = 1.59 µs (±10%), where $R_{on} = 1/[K'(W/L)_1(V_{GS1} - V_{T1})]$ and $C \approx C_{ox}W_2L_2$ for the inverted M2. +2: both devices sized, with the supporting calculation (body effect included, $V_{T1}$ ≈ 1.02 V) and a check of the resulting −3 dB frequency. +1: correct design with the body effect neglected (14% error in $R_{on}$) or another minor slip. 0: correct method but final sizes off by more than 10% from an arithmetic error, or only the required RC product without device sizes. −2 (asserted as fact): a design that changes the topology (adding resistors or capacitors), M1 sized with a saturation-region model, or a −3 dB frequency off by more than a factor of 2.
