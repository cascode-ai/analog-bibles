# Golden Solution - R402

## Reference answer

$I_{D1} \approx 0.76$ mA; formally $V_{in} \approx 2.72$ V; small-signal gain ≈ +1.50 (two-port feedback analysis; 1.53 from exact nodal analysis). However, this operating point is not physically consistent: it puts the source of $M_1$ (≈ 1.68 V) above its drain (≈ 1.48 V), so $I_{D2} = 1$ mA cannot actually be established with these resistor values.

- $M_2$: $|V_{GS2}| = 0.8 + \sqrt{2(1\ \mathrm{mA})/(38.4\ \mu \times 100)} = 0.8 + 0.722 = 1.522$ V → $V_X = 1.478$ V → $I_{D1} = (3 - 1.478)/2\ \mathrm{k\Omega} = 0.761$ mA.
- Output network: with $I_F$ flowing from $V_{out}$ through $R_F$ into the source node, $V_{out} = 2\ \mathrm{k\Omega}(1\ \mathrm{mA} - I_F)$, $V_S = 2\ \mathrm{k\Omega}(0.761\ \mathrm{mA} + I_F)$, $I_F = (V_{out} - V_S)/2\ \mathrm{k\Omega}$ → $I_F = 0.080$ mA, $V_{out} = 1.84$ V, $V_S = 1.68$ V.
- $V_{GS1} = 0.7 + \sqrt{2(0.761\ \mathrm{mA})/(134\ \mu \times 100)} = 1.037$ V → $V_{in} = 2.72$ V.
- Consistency: $V_{DS1} = V_X - V_S \approx -0.20$ V; $M_1$ cannot carry 0.76 mA from X to its source, so the formal $V_{in}$ is not a valid bias point (and $M_1$ is certainly not saturated).
- Small signal with the stated currents: $g_{m1} = 4.52$ mS ($1/g_{m1} = 221\ \Omega$), $g_{m2} = 2.77$ mS. $A_{v,open} = \dfrac{R_{D1}}{R_F\|R_S + 1/g_{m1}}\,g_{m2}[R_{D2}\|(R_F+R_S)] = \dfrac{2}{1.221}(2.77\ \mathrm{mS})(1.333\ \mathrm{k\Omega}) = 6.05$; $g_{21} = R_S/(R_F+R_S) = 0.5$; loop gain 3.03; $A_v = 6.05/4.03 = 1.50$ (exact nodal 1.53; ideal $1/g_{21}$ = 2).

## Grading notes

+2: $I_{D1} \approx 0.76$ mA, and either (i) the formal $V_{in} \approx 2.72$ V and gain ≈ 1.45–1.58 together with the observation that the resulting $V_S \approx 1.68$ V exceeds $V_X \approx 1.48$ V, so the bias point is inconsistent, or (ii) a clear demonstration that no $V_{in}$ can establish $I_{D2}$ = 1 mA with these values, plus the formal gain. +1: $I_{D1}$, $V_{in}$ and the gain all correct formally (±5%) without noticing the inconsistency. 0: $I_{D1}$ right and one of the other two wrong. -2 (asserted as fact): $I_{D1}$ assumed equal to $I_{D2}$, a gain of exactly 2 (= $1/g_{21}$) or an inverting gain claimed, or $M_2$ treated as an NMOS.
