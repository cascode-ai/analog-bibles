# Golden Solution - alsim-04-1-01

## Reference answer

Hand analysis (LEVEL-1 equations, $\beta = 1.1$ mA/V²): every curve passes through $I = 0$ at $V_1 = 0$. The curves are strongly asymmetric because the source terminal changes with the sign of $V_1$.

- $V_1 > 0$: A (2.5 V) is the source, $V_{SB}$ = 2.5 V, $V_T = 0.7 + 0.4(\sqrt{3.2} - \sqrt{0.7}) = 1.08$ V, $V_{GS} = V_G - 2.5$ V. For $V_G$ ≤ 3 V the device is off ($I$ ≈ 0). $V_G$ = 4 V: $I$ saturates at ≈ −0.10 mA (beyond $V_1$ ≈ 0.42 V). $V_G$ = 5 V: $I$ saturates at ≈ −1.1 to −1.2 mA (beyond $V_1$ ≈ 1.42 V). The slight slope comes from λ.
- $V_1 < 0$: B is the source, $V_{SB} = 2.5 + V_1$ and $V_{GS} = V_G - 2.5 - V_1$ both improve as $V_1$ decreases, so $I$ grows rapidly (first saturation, then triode).
- Hand values of $I$ (mA, with λ) at $V_1$ = −2.5, −1.5, −0.5, 0, +0.5, +1.5, +2.5 V:
  - $V_G$ = 5 V: 9.2, 4.1, 0.97, 0, −0.66, −1.17, −1.22
  - $V_G$ = 4 V: 6.2, 2.4, 0.41, 0, −0.10, −0.10, −0.11
  - $V_G$ = 3 V: 3.2, 0.72, 0, 0, 0, 0, 0
  - $V_G$ = 2 V: 1.0, ≈ 0.01, 0, 0, 0, 0, 0
  - $V_G$ = 1 V: 0.05, 0, …
  (Without λ the values at $V_1 = -2.5$ V are 8.4, 5.6, 2.9, 0.93 and 0.05 mA.)
- A suitable deck: `M1 A G B 0 NCH W=10U L=1U`, `VA A 0 DC 2.5`, `V1 B A DC 0`, `VG G 0 DC 5`, `.MODEL NCH NMOS LEVEL=1 VTO=0.7 KP=110U GAMMA=0.4 PHI=0.7 LAMBDA=0.04`, `.DC V1 -2.5 2.5 0.05 VG 1 5 1`, plotting $I(\mathrm{V1})$ (the current entering V1 at B, which equals the channel current from A to B).

## Grading notes

A correct result shows five curves through the origin. For $V_1 < 0$ the currents are large and positive, rising to about 8–9.5 mA at $V_1 = -2.5$ V for $V_G$ = 5 V and decreasing with $V_G$ (≈ 6, 3, 1, 0.05 mA). For $V_1 > 0$ the currents are small, negative and nearly flat: about −0.1 mA for $V_G$ = 4 V and about −1.1 to −1.2 mA for $V_G$ = 5 V, essentially zero for $V_G$ ≤ 3 V. Simulated values within ±15% of the hand values are correct. Symmetric curves, a body effect left out (the $V_G$ = 4 V curve would saturate at ≈ −0.35 mA), or currents scaled for $W/L$ = 5 instead of 10 are wrong.
