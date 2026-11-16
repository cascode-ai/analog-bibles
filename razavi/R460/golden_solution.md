# Golden Solution - R460

## Reference answer

About 0.25 V ≤ $V_{in}$ ≤ 1.36 V (upper limit ≈ 1.44 V if the body effect of $M_1$/$M_2$ is ignored).

- In unity-gain feedback $V_{out} \approx V_{in}$ and both op-amp inputs sit at $V_{in}$.
- Upper limit, $M_7$: $V_P = V_{in} + |V_{GS1}| \le V_{DD} - 0.4 = 2.6$ V. At $V_P = 2.6$ V, $|V_{SB1}| = 0.4$ V → $|V_{TH1}| = 0.8 + 0.4(\sqrt{1.2} - \sqrt{0.8}) = 0.880$ V, $|V_{GS1}| = 1.236$ V → $V_{in} \le 1.364$ V.
- Lower limit, output stage: $M_5$ saturated needs $V_{out} \ge V_{OD5} = 0.25$ V → $V_{in} \ge 0.25$ V.
- Other conditions do not bind: $M_1$/$M_2$ need $V_{X,Y} = 0.95\ \mathrm{V} \le V_{in} + |V_{TH1}|$ (|V_TH1| ≈ 1.03–1.08 V near the low end), true even below 0 V; $M_6$ allows $V_{out}$ up to $V_{DD} - |V_{OD6}| \ge 2.6$ V.

## Grading notes

+2: range ≈ 0.25 V to ≈ 1.36 V (upper limit 1.33–1.40 V with body effect), lower limit from $M_5$ (output) and upper limit from $M_7$ via $V_{in} + |V_{GS1}| \le V_{DD} - 0.4$ V. +1: body effect ignored (upper ≈ 1.44 V) with the rest right, or one limit slightly off through a slip. 0: one limit right, the other wrong (e.g., lower limit taken as $V_X - |V_{THP}| \approx 0.15$ V while missing the $M_5$ condition). -2 (asserted as fact): range computed as for an open-loop amplifier ignoring $V_{out} = V_{in}$, upper limit from $M_7$ using $V_{GS}$ instead of overdrive, or input range claimed to extend to $V_{DD}$.
