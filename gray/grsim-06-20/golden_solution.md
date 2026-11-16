# Golden Solution - grsim-06-20

## Reference answer

One valid hand design ($L_{eff} = 1\ \mu$m, $L_{drwn} = 1.18\ \mu$m; λ ≈ 0.02 V⁻¹ (n) and 0.04 V⁻¹ (p); $W/L$ below are effective ratios, $W = (W/L)\times1\ \mu$m).

Currents:
- $|I_{D5}| = 100\ \mu$A, so $|I_{D1}| = |I_{D2}| = 50\ \mu$A.
- $I_{D11} = I_{D12} = 150\ \mu$A, so the cascode branches ($M_{1A}$, $M_{2A}$, $M_3$, $M_4$, $M_{3A}$, $M_{4A}$) carry 100 μA.
- Output current $= |I_{D2}| - |I_{D1}|$ reaches ±100 μA when the pair is fully steered, while $M_{1A}$/$M_{2A}$ keep at least 50 μA.

Overdrives and sizes:
- $M_1$, $M_2$: $|V_{ov}| = 0.1$ V, $W/L = 155$. $M_5$: 0.1 V, $W/L = 309$.
- $M_3$, $M_4$, $M_{3A}$, $M_{4A}$: 0.1 V, $W/L = 309$.
- $M_{11}$, $M_{12}$: 0.15 V, $W/L = 69$. $M_{1A}$, $M_{2A}$: 0.15 V, $W/L = 46$.

Bias voltages:
- $V_{BIAS1} = V_{DD} - 0.9$ V = +0.6 V.
- $V_{BIAS3} = -V_{SS} + 0.75$ V = −0.75 V.
- $V_{BIAS2} = -V_{SS} + (V_{ov11} + 0.1) + V_{GS1A} = -1.5 + 0.25 + 0.75 = -0.5$ V, so $V_{DS11} = 0.25$ V (overdrive + 100 mV).

Checks:
- Input range: upper limit $V_{DD} - |V_{tp}| - |V_{ov1}| - |V_{ov5}| = 0.5$ V (just meets the spec; refine in simulation). Lower limit $V_{D1} - |V_{tp}| = -1.25 - 0.8 = -2.05$ V, so it includes $-V_{SS}$.
- Output range: from $-V_{SS} + 0.25 + 0.15 = -1.1$ V to $V_{DD} - |V_{tp}| - 2|V_{ov3}| = +0.5$ V, i.e. 1.6 V p-p. The quiescent output is near −0.3 V, matched to the mirror input node.
- Margins at $V_{IC} = 0$: $V_{SD5} = 0.6$ V, $V_{DS11} = 0.25$ V, $V_{DS1A} \approx V_{DS2A} \approx 0.95$ V, $V_{SD3} = V_{SD4} = 0.9$ V, $V_{SD4A} \approx 0.9$ V; all exceed $|V_{ov}| + 0.1$ V.

Bias generator:
- $V_T$-referenced core with $I_{IN} = I_{OUT} = 25\ \mu$A, $n = 8$, $R = V_T\ln8/25\ \mu\mathrm{A} \approx 2.2$ kΩ (substrate pnp transistors).
- n-channel $M_3$/$M_4$ ($W/L \approx 11.5$) with stacked n-channel cascodes (diode-connected on the $M_3$ side); p-channel $M_5$/$M_6$ ($W/L = 77$, $|V_{ov}| = 0.1$ V); copy $M_7$ gives $I_{BIAS} = 25\ \mu$A. A start-up circuit is needed to leave the zero-current state.
- Extension:
  - $V_{BIAS1}$ is the $M_5$/$M_6$ gate line; the op-amp $M_5$ is 4× $M_6$.
  - A p-channel copy (25 μA) into an n-channel diode with $W/L = 11.5$ ($V_{ov} = 0.15$ V) gives $V_{BIAS3}$; $M_{11}$/$M_{12}$ = 6× that diode.
  - Another 25-μA copy into an n-channel diode with $W/L \approx 1.6$ ($V_{ov} = 0.4$ V, $V_{GS} = 1.0$ V) gives $V_{BIAS2}$. (A diode plus triode-device level shift is an alternative.)
- Total supply current ≈ 0.4–0.5 mA.

Gain (hand estimate):
- $G_m = g_{m1} = 1$ mS.
- $R_{down} \approx g_{m2A}r_{o2A}(r_{o2}\parallel r_{o12}) = 1.33\ \mathrm{mS}\times500\ \mathrm{k}\times200\ \mathrm{k} \approx 133$ MΩ.
- $R_{up} \approx g_{m4A}r_{o4A}r_{o4} = 2\ \mathrm{mS}\times250\ \mathrm{k}\times250\ \mathrm{k} = 125$ MΩ.
- $A_v \approx 1\ \mathrm{mS}\times64\ \mathrm{M\Omega} \approx 6\times10^4$ (≈ 96 dB).

## Grading notes

Any design meeting every specification with consistent calculations is acceptable. A correct simulation of a valid design shows:
- all transistors saturated at $V_{IC} = 0$ with $|V_{DS}| - |V_{ov}| \ge 0.1$ V;
- the input stage working from $-1.5$ V to at least +0.5 V common mode;
- linear output swing of at least 1.5 V p-p, and the ability to source and sink 100 μA;
- a correct $I_{BIAS}$ (≈ $V_T\ln n/R$ within ≈ 20 %);
- a dc gain of order $10^4$–$10^5$ (hand estimate within about a factor of 2).
+2: complete design (all currents, all $W/L$, bias generator with extension) that satisfies the specifications by hand calculation, with simulation confirming them. +1: design essentially right with one spec marginally missed and identified (e.g. CMR upper limit 0.45 V), or bias-generator details incomplete. 0: op-amp core designed but bias generator/extension missing, or margins not checked. -2: design that cannot meet a spec (e.g. tail overdrive so large that the CMR stops well below 0.5 V, or output current capability below 100 μA because $I_{D11} < |I_{D5}|$), or a gain off by orders of magnitude.
