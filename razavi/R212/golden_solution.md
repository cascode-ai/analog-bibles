# Golden Solution - R212

## Reference answer

$V_{in,CM} \approx 2.81$ V. During the sweep both outputs stay essentially at $V_{DD}$ except near the two ends, where the output on the side carrying the current drops to ≈ 2.1 V.

Common-mode level:
- Deep triode: $R_{on} = 1/[\mu_pC_{ox}(W/L)(V_{SG} - |V_{THP}|)] = 2$ kΩ, so $V_{SG} - 0.8 = 1/(3.84\ \mathrm{mA/V^2}\times 2\ \mathrm{k\Omega}) = 0.130$ V, $V_{SG} = 0.930$ V and $V_P = 3 - 0.930 = 2.070$ V.
- $M_1$ at 10 µA: overdrive $\sqrt{2(10\ \mu)/(13.4\ \mathrm{m})} = 0.039$ V, $V_{GS1} = 0.739$ V, so $V_{in,CM} = 2.070 + 0.739 = 2.81$ V. (The drop across each load is 20 mV, well within deep triode; $M_1$ and $M_5$ are saturated.)

Sketch (the sweep keeps the input CM at 1.5 V, far below 2.81 V; $V_{out1}(V_{in1})$ and $V_{out2}(V_{in1})$ are mirror images):
- $V_{in1} \lesssim 0.15$ V: $M_2$ (gate near 3 V) carries all 20 µA and lifts $V_P$ to ≈ 2.10 V, so the load gates get only $V_{SG} \approx 0.90$ V; $M_4$ saturates and limits the current, pushing $M_2$ into triode: $V_{out2} \approx 2.1$ V (2.105 V at $V_{in1} = 0$). $V_{out1} = V_{DD}$ ($M_1$ off, $M_3$ carries no current).
- At $V_{in1} \approx 0.15$ V ($V_{in2} \approx 2.85$ V) $M_2$ returns to saturation and $M_4$ enters triode: $V_{out2}$ jumps to ≈ 2.9 V (a vertical step for λ = 0), then creeps toward $V_{DD}$ as $V_P = V_{in2} - V_{GS2}$ falls and the loads turn on harder (2.96 V at 0.2 V, 2.99 V at 0.5 V).
- Around $V_{in1} = 1.5$ V (between about 1.473 V and 1.527 V, i.e. $|V_{in1} - V_{in2}| \le \sqrt{2I_{SS}/k_n} \approx 55$ mV) the current switches from $M_2$ to $M_1$. Here $V_P \approx 0.76$ V, $V_{SG} \approx 2.24$ V and $R_{on} \approx 180$ Ω, so both outputs stay within ≈ 2–4 mV of $V_{DD}$ (differential gain ≈ $g_{m1}R_{on} \approx 0.1$).
- $V_{in1} > 1.53$ V: $V_{out2} = V_{DD}$ ($M_2$ off); $V_{out1}$ decreases slowly (2.994 V at 2.0 V, 2.988 V at 2.5 V, 2.96 V at 2.8 V), drops abruptly at $V_{in1} \approx 2.85$ V to ≈ 2.15 V and reaches ≈ 2.105 V at $V_{in1} = 3$ V.

## Grading notes

Two parts, equal weight. +2: $V_{in,CM}$ ≈ 2.8 V (2.78–2.83 V) and a sketch with both outputs near $V_{DD}$ over the middle of the sweep (the switching near $V_{in1} = V_{in2}$ changes them only by millivolts because the load gates follow the low $V_P$), with the large drops to ≈ 2.1 V only near the ends of the sweep and mirror-image curves. +1: CM level right, sketch right in the middle region but the end behaviour missing or misplaced (or the reverse). 0: CM level right with a generic differential-pair sketch (outputs swinging by ≈ ±20 mV, or by $I_DR_{on}$, around a fixed level as if $R_{on}$ stayed 2 kΩ). -2 (asserted as fact): CM level from a formula error (e.g., $\mu_nC_{ox}$ used for the PMOS, $V_{SG}$ taken as $|V_{THP}|$ + 2 kΩ × 20 µA, or the PMOS gate voltage confused with $V_{in,CM}$), or outputs swinging rail to rail around $V_{in1} = 1.5$ V.
