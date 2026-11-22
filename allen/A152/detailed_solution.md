# Detailed solution - A152

The load is now a cascode current mirror: M7 and M5 form the diode-connected stack on M1's side, and M8 with its cascode M6 is the output side. The input pair is not cascoded. The signal-current argument is the same as for a simple mirror, with the full $g_{m1}v_{in}$ reaching the output. What changes is the output resistance: the resistance looking up into the cascode is multiplied by the intrinsic gain of M6, so the resistance looking down into M2 now dominates.

### Step 1 — Resistance looking up

M8 has a fixed gate voltage (its gate is on the M7 diode node) and acts as a resistance $r_{ds8}$ in the source of M6. M6's gate is also held by the M5 diode node, so looking into M6's drain gives the cascode resistance

$$
R_{up}\approx g_{m6}r_{ds6}r_{ds8}=\frac{g_{m6}}{g_{ds6}g_{ds8}} .
$$

### Step 2 — Resistance looking down and $R_{out}$

Looking down into M2, the resistance is about $r_{ds2}$. (For a test source at the output, M2's source is not an exact ac ground; the current drawn by M2's degenerated drain, about $g_{ds2}/2$, returns through M1 and the mirror and adds another $g_{ds2}/2$, so the effective conductance remains $g_{ds2}$.) In parallel:

$$
R_{out}\approx r_{ds2}\,\|\,(g_{m6}r_{ds6}r_{ds8})=\frac{1}{g_{ds2}+g_{ds6}g_{ds8}/g_{m6}}=\frac{g_{m6}}{g_{m6}g_{ds2}+g_{ds6}g_{ds8}} .
$$

Because $g_{ds6}g_{ds8}/g_{m6}\ll g_{ds2}$, $R_{out}\approx r_{ds2}$.

### Step 3 — Signal current and gain

With M1's gate at $+v_{in}/2$, M2's at $-v_{in}/2$ and the common source node at ac ground, M1's current rises by $g_{m1}v_{in}/2$; the cascode mirror passes it to the output side unchanged. M2's current falls by $g_{m2}v_{in}/2$. Both put current into the output, $(g_{m1}+g_{m2})v_{in}/2=g_{m1}v_{in}$ for a matched pair and a 1:1 mirror:

$$
\frac{v_{out}}{v_{in}}\approx\frac{(g_{m1}+g_{m2})\,g_{m6}}{2(g_{m6}g_{ds2}+g_{ds6}g_{ds8})}=g_{m1}R_{out}\approx\frac{g_{m1}}{g_{ds2}}\quad\text{(noninverting)}.
$$

Cascoding only the load roughly doubles the gain of the simple mirror-loaded stage, $g_{m1}/(g_{ds2}+g_{ds8})$, because it removes $g_{ds8}$; going further would require cascoding the input pair as well, since M2's $r_{ds2}$ now limits $R_{out}$.
