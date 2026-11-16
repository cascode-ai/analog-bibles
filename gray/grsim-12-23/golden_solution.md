# Golden Solution - grsim-12-23

## Reference answer

(a) $W_{12} = 19.2\ \mu$m and $W_{51} = 19.2\ \mu$m.
- $M_{11}$ (diode, 100 μA) sets the PMOS gate line shared by $M_{12}$, $M_3$, $M_4$, $M_{26}$, $M_{27}$. All with 96/1.4 carry 100 μA. $M_{12}$ must carry 20 μA (it feeds $M_{13}$): $W_{12} = 96 \times 0.2 = 19.2\ \mu$m at $L = 1.4\ \mu$m.
- Tail current must equal $|I_{D3}| + |I_{D4}| + I_{D13} = 220\ \mu$A. With $V_{oc} = V_{CM}$ each CMFB pair splits 50/50, so $M_{25}$ carries 50 + 50 = 100 μA and $M_{52}$ (1:1) carries 100 μA. $M_{51}$ must carry 120 μA = 1.2 × $I_{D14}$: $W_{51} = 16 \times 1.2 = 19.2\ \mu$m at $L = 0.8\ \mu$m.

(b) Hand estimates (simulation should agree within roughly 30%): $v_{od}/v_{id} \approx -620$, $v_{oc}/v_{ic} \approx -0.024$, $v_{od}/v_{ic} = 0$, $v_{oc}/v_{id} = 0$ (balanced).
- $g_{m1} = \sqrt{2(194\mu)(80)(100\mu)} = 1.76$ mA/V, $r_{o1} = 0.8/(0.02 \times 100\ \mu\text{A}) = 400$ kΩ, $r_{o3} = 1.4/(0.04 \times 100\ \mu\text{A}) = 350$ kΩ.
- Output resistance ≈ $r_{o3}\|(g_{m1C}r_{o1C}r_{o1}) \approx 350$ kΩ, so $a_{dm} \approx -616$.
- CM: tail resistance $r_{o51}\|r_{o52} = 333\|400 = 182$ kΩ, so the open-loop $a_{cm} \approx -350/(2 \times 182) \approx -0.96$.
- CMFB loop gain: $g_{m21} = 0.22$ mA/V, $g_{m52} = g_{m25} = 0.88$ mA/V, sense gain $g_{m21}/g_{m25} \approx 0.25$; CMC gain ≈ $-(g_{m52}/2)(350\ \text{k}) \approx -154$; $T \approx 38.5$.
- $a'_{cm} \approx -0.96/39.5 \approx -0.024$.

(c) $|dV_{od}/dt| \approx 50$ V/μs. In slewing one input device is off and the other carries the tail current minus $M_{13}$'s 20 μA = 200 μA, against a 100-μA load: 100 μA into each 4 pF in opposite directions, 25 V/μs per output.

(d) About 0.74 V peak differential (1.48 V peak-to-peak), with each output between about −1.02 V and −0.28 V around $V_{OC} = -0.65$ V.
- Lower limit: $M_{1C}$ leaves saturation at $V_o = V_{G1C} - V_{tn}$. $V_{tail} = -0.65 - (0.6 + 0.114) = -1.364$ V, $V_{GS13} = 0.6 + 0.343 = 0.943$ V ($M_{13}$ at 20 μA), $V_{G1C} = -0.421$ V, so $V_{o,\min} \approx -1.02$ V. ($M_1$ stays active: $V_{DS1} = V_{GS13} - V_{GS1C} = 0.23$ V > 0.11 V; $M_{51}$: $V_{DS} = 0.29$ V > 0.23 V.)
- Upper limits: $M_3$ at $V_{DD} - |V_{ov3}| = 1.65 - 0.21 = 1.44$ V. The CMFB pairs stay on only for $|V_o - V_{CM}| < \sqrt2|V_{ov21}| = \sqrt2(0.454) = 0.64$ V, i.e. $V_o < -0.01$ V.
- Since $V_{oc}$ is held at −0.65 V, the binding limit is the lower one: 0.37 V below $V_{CM}$. So $|V_{od}| \le 2 \times 0.37 = 0.74$ V.

(e) Expected: input offset ≈ $(V_{ov1}/2)(\Delta W/W) = (0.114/2)(2/64) \approx 1.8$ mV. At the offset-corrected operating point, $v_{od}/v_{id}$ and $v_{oc}/v_{ic}$ are essentially unchanged. The cross gains become nonzero but small: hand estimates $v_{od}/v_{ic} \sim 4 \times 10^{-4}$ and $v_{oc}/v_{id} \sim 1 \times 10^{-4}$, strongly suppressed by the CMFB loop.

(f) Expected: input offset ≈ $\Delta I/g_{m1}$ with $\Delta I \approx (2/96)(100\ \mu\text{A}) = 2.1\ \mu$A → ≈ 1.2 mV. The load current/resistance mismatch converts DM to CM: $v_{oc}/v_{id}$ becomes of order −0.08 (≈ $a_{dm}(\Delta r_o/2r_o)/2$ reduced by $1 + T$), and $v_{od}/v_{ic}$ is of order $10^{-4}$. $v_{od}/v_{id}$ and $v_{oc}/v_{ic}$ are essentially unchanged.

## Grading notes

(a) $W_{12}$ ≈ 19.2 μm and $W_{51}$ ≈ 19.2 μm (from 20 μA in $M_{12}$ and 120 μA in $M_{51}$) — required for credit on (a). (b), (e), (f): a correct simulation gives $v_{od}/v_{id}$ of several hundred (model-dependent, ≈ −400 to −900 with these parameters), $|v_{oc}/v_{ic}| \ll 1$ (order 0.01–0.05), and cross gains ≈ 0 when balanced. With input mismatch it shows an offset of ≈ 1–3 mV and small nonzero cross gains. With load mismatch it shows an offset ≈ 1 mV and a noticeably larger $v_{oc}/v_{id}$ (order 0.1). (c) 50 V/μs (±5%). (d) ≈ 0.7–0.8 V peak differential, limited by the cascode $M_{1C}$ at the low end with $V_{OC} = -0.65$ V. Credit split roughly equally among (a), (b), (c)+(d), (e)+(f). A tail current other than 220 μA in (a) (e.g. 200 μA, ignoring $M_{13}$'s current) is a critical error.
