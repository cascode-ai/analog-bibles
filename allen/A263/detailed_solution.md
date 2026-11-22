# Detailed solution - A263

Analyze the first stage with a differential input, keeping the capacitance $C_3$ at the mirror node. The mirror's signal path then has a pole $-g_{m3}/C_3$ and, because only half of the output current passes through the mirror, a zero at twice that frequency. Identifying $C_3$ with the two gate capacitances of the mirror and requiring the pole to lie well above GB gives the design rule.

### Step 1 — Mirror-node equation

Take $v_{in}$ as the voltage of M2's gate relative to M1's. The drain currents (flowing from the loads into the drains) then change by $-g_{m1}v_{in}/2$ in M1 and $+g_{m1}v_{in}/2$ in M2. The mirror node has conductance $g_{m3}$ (diode-connected M3) plus $g_{ds1}+g_{ds3}$ to ac ground and total capacitance $C_3$, so the drop in M1's current raises it by

$$
v_3=\frac{g_{m1}v_{in}/2}{g_{m3}+g_{ds1}+g_{ds3}+sC_3}.
$$

### Step 2 — Output of the first stage

A rise of M4's gate reduces its current, so M4 delivers $-g_{m4}v_3$ ($g_{m4}=g_{m3}$) into the output node, while M2 removes $g_{m1}v_{in}/2$ from it. The output node sees $g_{ds2}+g_{ds4}$ to ac ground, so

$$
\frac{V_{o1}(s)}{V_{in}(s)}=\frac{-g_{m1}}{2(g_{ds2}+g_{ds4})}\left[\frac{g_{m3}}{g_{m3}+g_{ds1}+g_{ds3}+sC_3}+1\right].
$$

With $g_{m3}\gg g_{ds1}+g_{ds3}$,

$$
\frac{V_{o1}(s)}{V_{in}(s)}\approx\frac{-g_{m1}}{2(g_{ds2}+g_{ds4})}\cdot\frac{sC_3+2g_{m3}}{sC_3+g_{m3}} .
$$

The mirror path contributes a pole and a zero:

$$
p_3=-\frac{g_{m3}}{C_3},\qquad z_3=-\frac{2g_{m3}}{C_3}=2p_3 .
$$

The zero exists because the M2 half of the signal bypasses the mirror; above $|p_3|$ the gain only halves rather than falling indefinitely, so the doublet produces at most a modest phase lag.

### Step 3 — Capacitance at the mirror node

The mirror node connects the gates of M3 and M4 (and the drains of M1 and M3). In saturation each gate–source capacitance is about two-thirds of the gate-oxide capacitance, and these dominate the smaller overlap and junction capacitances:

$$
C_3\approx C_{gs3}+C_{gs4}=2C_{gs3},\qquad C_{gs3}=C_{gs4}\approx\tfrac23W_3L_3C_{ox}=0.67W_3L_3C_{ox}
$$

for matched M3 = M4. Therefore

$$
|p_3|=\frac{g_{m3}}{2C_{gs3}} .
$$

### Step 4 — Design condition

For the pole–zero doublet not to affect the phase margin, it is placed at least a decade above the unity-gain frequency $GB=g_{m1}/C_c$:

$$
\frac{g_{m3}}{2C_{gs3}}>10\,GB,\qquad\text{i.e.}\qquad
\frac{\sqrt{2K'_P(W_3/L_3)I_3}}{1.33\,W_3L_3C_{ox}}>10\,\frac{g_{m1}}{C_c}.
$$

At $\omega=GB$ the pole then adds less than $\arctan0.1=5.7°$ of lag, partly offset by the zero at $2|p_3|$.
