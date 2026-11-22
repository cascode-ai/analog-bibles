# Detailed solution - A151

Here M7 is diode-connected and M8 shares its gate: the load is a current mirror. The output is the common drain of M2 and M8. The intuitive approach follows the signal currents of both input transistors: M2's goes directly to the output, and M1's reaches it through the mirror. Both add, so the full transconductance of one device drives the output resistance.

### Step 1 — Output resistance

Looking into the output, M8 has a fixed gate voltage for the output signal (its gate is on the diode node of M7) and presents $r_{ds8}$; M2 presents $r_{ds2}$ to the common source node, an ac ground for the differential signal:

$$
R_{out}\approx r_{ds2}\,\|\,r_{ds8}=\frac{1}{g_{ds2}+g_{ds8}} .
$$

### Step 2 — Signal currents

With M1's gate at $+v_{in}/2$, M2's gate at $-v_{in}/2$ and the common source node at ac ground:

- M1's drain current rises by $g_{m1}v_{in}/2$. It flows through the diode M7, and M8 mirrors it, delivering $g_{m1}v_{in}/2$ more current into the output.
- M2's drain current falls by $g_{m2}v_{in}/2$, so it removes that much less current from the output.

Both effects push current into the output node: the net signal current is $(g_{m1}+g_{m2})v_{in}/2=g_{m1}v_{in}$ for a matched pair.

### Step 3 — Voltage gain

$$
\frac{v_{out}}{v_{in}}\approx\frac{(g_{m1}+g_{m2})}{2(g_{ds2}+g_{ds8})}=\frac{g_{m1}}{g_{ds2}+g_{ds8}}\quad\text{(noninverting from the + input)}.
$$

The mirror recovers M1's half of the signal current that a current-source load (both PMOS gates on a fixed bias) would waste, so the gain is twice that of the current-source-loaded version with the same $R_{out}$.
