# Golden Solution - grsim-12-12

## Reference answer

(a) One valid design:
- Put the Rcs midpoint (≈ $V_{oc} - V_{GS}$) on $M_{22}$ and the shifted reference ($V_{CM} - V_{GS}$) on $M_{21}$, and take $V_{cms}$ from the PMOS diode $M_{24}$ that loads $M_{22}$. Then a rise in $V_{oc}$ increases $I_{D22} = |I_{D24}|$, raises $V_{SG24}$ and lowers $V_{cms}$: negative gain.
- Gain: $a_{cms0} = 0.95 \times (-\tfrac12 g_{m22}/g_{m24}) = -0.71$ → $g_{m22}/g_{m24} = 1.49$.
- Dc condition: when $V_{oc} = V_{CM}$, $V_{cms}$ must equal the gate bias of $M_5$, $V_{DD} - |V_{tp}| - |V_{ov5}| = 1.65 - 1.3 = 0.35$ V. So $M_{23}$, $M_{24}$ must have $M_5$'s current density: $|I_D|/(W/L) = 200/25 = 8\ \mu\text{A}$ per square, $|V_{ov24}| = 0.5$ V.
- With equal branch currents $g_{m22}/g_{m24} = |V_{ov24}|/V_{ov22}$, so $V_{ov22} = 0.5/1.49 = 0.335$ V.
- Example: $I_{D25} = 200\ \mu$A (100 μA per branch), $(W/L)_{23,24} = 12.5$, $(W/L)_{21,22} = 2(100\ \mu)/(194\ \mu \times 0.335^2) \approx 9.2$, $(W/L)_{25} \approx 90$ ($V_{ov25} \approx 0.15$ V) so that $M_{25}$ stays active with the pair's inputs at $V_{CM} - 0.8$ V ≈ −0.55 V (source of $M_{21}$/$M_{22}$ at ≈ −1.49 V, $V_{DS25}$ ≈ 0.17 V).
- Any design with $g_{m22}/g_{m24} \approx 1.49$, the output taken on the correct side, $M_{24}$ at $M_5$'s current density and all devices active is acceptable.

(b) Each output can swing from −0.65 V to +1.15 V.
- Upper: $M_7$ ($M_{10}$) enters triode at $V_{DD} - |V_{ov7}| = 1.15$ V. The follower stays active up to $V_{DD} + V_{GS} - V_{ov}$ = 2.25 V, so it does not limit.
- Lower: the follower's NMOS current source needs $V_{DS} \ge 0.2$ V: $(V_o - 0.8) - (-1.65) \ge 0.2$ → $V_o \ge -0.65$ V. This is above the op-amp limit $-V_{SS} + V_{ov6} = -1.15$ V.

(c) $V_{CM} = (1.15 + (-0.65))/2 = 0.25$ V, giving ±0.9 V per output and a peak differential swing of 1.8 V.

(d) Expected simulation: with $V_{CM} = 0.25$ V the loop settles with $V_{oc} \approx 0.25$ V (within a few tens of mV) and $V_{cmc} \approx 0.35$ V. Stepping $V_{CM}$ by a small amount moves $V_{oc}$ by nearly the same amount, since the CMFB loop gain is large. The CM-sense small-signal gain is ≈ −0.71, and a stability check of the CMFB loop shows adequate phase margin with $C = 1.39$ pF. The differential output can swing to about ±0.9 V per side before the follower current sources leave saturation. (The follower bias current must exceed the DM current through the resistors, $V_{od}/(2R_{cs})$ ≈ 60 μA at 1.8 V.)

## Grading notes

(a) Accept any design that satisfies $0.95 \cdot \tfrac12 g_{m22}/g_{m24} = 0.71$, takes the output from the side that gives a negative gain, and sets the dc output to $M_5$'s gate bias (0.35 V), e.g. by matching current densities. (b) Limits −0.65 V and 1.15 V (±0.02 V). (c) $V_{CM}$ = 0.25 V. (d) A correct simulation shows $V_{oc}$ tracking $V_{CM}$ ≈ 0.25 V, a stable CMFB loop and the expected swing. Credit split about equally among (a), (b) + (c), and (d). An output taken from the wrong diode (positive gain, latch-up of the CMFB) is a critical error.
