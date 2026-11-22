# Detailed solution - A347

The shaded circuit is a small differential amplifier (MC1–MC5) that compares the output common mode, sensed by two resistors, with a reference $V_{CM}$, and drives the gates of p-channel current sources through the diode MC3. In the folded cascode the natural control point is the pair of folding current sources M4/M5, whose gates are biased by $V_{PB1}$. Connect the circuit there, verify that the loop is negative, compute the loop gain as (CMFB amplifier gain) × (transconductance of M4/M5) × (common-mode output resistance), and compensate it at the output.

### Step 1 — Connection

- $R_{CM1}$ and $R_{CM2}$ go from $v_{OUT}^-$ and $v_{OUT}^+$ to the gate of MC2, which therefore sees the output common mode $v_{oc}=(v_{OUT}^++v_{OUT}^-)/2$.
- The gate of MC1 is set to the desired common-mode level $V_{CM}$.
- MB and MC5 bias the CMFB pair from $I_{BIAS}$; MC4 is the load of MC2.
- The gate of the diode-connected MC3 drives the gates of the op amp's folding current sources M4 and M5, replacing $V_{PB1}$.

### Step 2 — Polarity

Let the output common mode rise by $v_c$. MC2's current rises by $g_{mC2}v_c/2$ and MC1's falls by the same amount (MC5 fixes their sum). The current in the diode MC3 falls, so its $V_{SG}$ falls by

$$
\Delta V_{SG3}=\frac{g_{mC2}}{2g_{mC3}}v_c ,
$$

i.e. the gates of M4 and M5 rise by this amount. Their currents fall by $g_{m4}\Delta V_{SG3}$; since the input pair's currents do not change for a common-mode output change, less current is folded into the cascodes M6/M7, and the outputs fall. The loop opposes the change: negative feedback.

### Step 3 — Common-mode output resistance

For common-mode changes at the two folding nodes, the input pair cannot change its total current (fixed by M3), so each folding node sees only $r_{ds4}$ ($r_{ds5}$), not $r_{ds4}\parallel r_{ds1}$ as in the differential case. With the cascode formula $R\approx g_mr_{ds}R_S$:

$$
R_{up}\approx g_{m6}r_{ds6}r_{ds4},\qquad R_{dn}\approx g_{m8}r_{ds8}r_{ds10},
$$
$$
R_{out,cm}=R_{up}\parallel R_{dn}\approx\Bigl[\frac{g_{ds4}g_{ds6}}{g_{m6}}+\frac{g_{ds8}g_{ds10}}{g_{m8}}\Bigr]^{-1} .
$$

### Step 4 — Loop gain

The current change $g_{m4}\Delta V_{SG3}$ develops a voltage across $R_{out,cm}$, so

$$
|LG|\approx\frac{g_{mC2}}{2g_{mC3}}\,g_{m4}\,R_{out,cm}.
$$

For equal $g_m$ and $r_{ds}$ and $g_{mC2}=g_{mC3}$, $R_{out,cm}=g_mr_{ds}^2/2$ and

$$
|LG|\approx\frac12\,g_m\,\frac{g_mr_{ds}^2}2=\frac{(g_mr_{ds})^2}4 .
$$

### Step 5 — Compensation

The dominant pole of the common-mode loop is at the outputs, where the high resistance $R_{out,cm}$ meets the single-ended load capacitors $C_L$ to ground, the same capacitors that compensate the differential loop. The common-mode loop is therefore compensated by the load capacitance, with unity-gain frequency

$$
\omega_{u,cm}\approx\frac{g_{m4}g_{mC2}}{2g_{mC3}C_L}.
$$

This frequency must stay below the non-dominant poles inside the loop:

- the MC3/M4–M5 gate node, $g_{mC3}$ over the large gate capacitance of M4 and M5;
- the folding nodes, about $g_{m6}/C_A$, where $C_A$ is the folding-node capacitance;
- the sensing node, $R_{CM}/2$ with the gate capacitance of MC2; small capacitors across $R_{CM1}$ and $R_{CM2}$ bypass this pole.

If the margin is insufficient, lower $g_{mC2}/g_{mC3}$ or increase $C_L$. Placing a dominant pole elsewhere (a large capacitor at the MC2 sensing node or at the MC3 control node) is stable only if it puts the common-mode crossover below the already very low output pole $1/(R_{out,cm}C_L)$, because the high-impedance outputs always contribute a low-frequency pole; this works but gives a very slow loop.

$R_{CM1}$ and $R_{CM2}$ load the outputs differentially: they must be much larger than the very high output resistance, or be replaced by buffered or capacitive sensing, otherwise they reduce the differential gain.
