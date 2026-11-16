# Detailed solution - R150

**Approach.** Each analog line is coupled to the clock line by its own capacitive divider. Both glitches have the same polarity, so they cancel in $V_X - V_Y$ except for the part due to the mismatch between the two coupling capacitances.

### Step 1 — Equivalent circuit of each analog node during a clock edge

The inverter driving $L_1$ is a low-impedance driver, so $L_1$ swings the full $\Delta V_{CK} = 3$ V on every edge. Call the coupling capacitances $C_{c2} = 9$ fF ($L_1$–$L_2$) and $C_{c3} = 10$ fF ($L_1$–$L_3$); each drain also has $C_g = 100$ fF to ground. $L_2$ and $L_3$ lie on opposite sides of $L_1$, so there is no direct $L_2$–$L_3$ capacitance to consider.

During a fast clock edge, the resistance at each node ($R_D\parallel r_O$) cannot move charge, because the edge is much shorter than the node time constant $(R_D\parallel r_O)(C_c + C_g)$. So each node keeps its charge.

### Step 2 — Glitch on each line (charge conservation)

For a node with coupling capacitance $C_c$ to the clock and $C_g$ to ground, conserving the charge $Q = C_c(V_{node} - V_{CK}) + C_gV_{node}$ gives

$$
\begin{aligned}
C_c\,(\Delta V_{node} - \Delta V_{CK}) + C_g\,\Delta V_{node} &= 0\\
\Delta V_{node} &= \Delta V_{CK}\,\frac{C_c}{C_c + C_g}.
\end{aligned}
$$

**Line $L_2$ (node $X$):**

$$\Delta V_X = (3\ \mathrm{V})\frac{9\ \mathrm{fF}}{9\ \mathrm{fF} + 100\ \mathrm{fF}} = (3\ \mathrm{V})(0.08257) = 0.2477\ \mathrm{V}.$$

**Line $L_3$ (node $Y$):**

$$\Delta V_Y = (3\ \mathrm{V})\frac{10\ \mathrm{fF}}{10\ \mathrm{fF} + 100\ \mathrm{fF}} = (3\ \mathrm{V})(0.09091) = 0.2727\ \mathrm{V}.$$

Each single-ended glitch is about a quarter of a volt.

### Step 3 — Differential glitch

Both glitches come from the same clock edge, so they have the **same sign** (both nodes jump up on a rising edge) and subtract in the differential output:

$$
\begin{aligned}
\Delta(V_X - V_Y) &= \Delta V_X - \Delta V_Y\\
&= 0.2477\ \mathrm{V} - 0.2727\ \mathrm{V}\\
&= -0.0250\ \mathrm{V}.
\end{aligned}
$$

The differential glitch has a magnitude of **about 25 mV**: negative on a rising clock edge (the more strongly coupled line $L_3$ jumps more) and positive on a falling edge.

**First-order check.** Write the two coupling capacitances as $C_c \pm \Delta C/2$, with $\Delta C = 1$ fF. Since $\Delta C \ll C_c + C_g$,

$$
\begin{aligned}
|\Delta V_X - \Delta V_Y| &\approx \Delta V_{CK}\,\frac{\partial}{\partial C_c}\!\left(\frac{C_c}{C_c + C_g}\right)\Delta C = \Delta V_{CK}\,\frac{C_g\,\Delta C}{(C_c + C_g)^2}\\
&= (3\ \mathrm{V})\frac{(100\ \mathrm{fF})(1\ \mathrm{fF})}{(109.5\ \mathrm{fF})^2} = 25.0\ \mathrm{mV},
\end{aligned}
$$

which confirms the result. (The cruder estimate $3\ \mathrm{V}\times 1\ \mathrm{fF}/110\ \mathrm{fF} = 27$ mV gives the same order of magnitude.)

### Step 4 — Interpretation

- The **common-mode** part, $(\Delta V_X + \Delta V_Y)/2 \approx 0.26$ V, is not removed by the differential layout; only the common-mode rejection of the following circuit removes it.
- The **differential** part is only what the asymmetry leaves: 25 mV instead of 273 mV for a single-ended line, about 11 times smaller:
$$\frac{0.273\ \mathrm{V}}{0.025\ \mathrm{V}} \approx 11 .$$
- With perfect symmetry ($C_{c2} = C_{c3}$) the differential glitch would vanish. A 10 % coupling mismatch leaves roughly 10 % of the single-ended glitch, minus a small correction because the larger coupling capacitance also loads its own node.
- Both glitches decay with nearly equal time constants, $(R_D\parallel r_O)(109\ \mathrm{fF})$ and $(R_D\parallel r_O)(110\ \mathrm{fF})$, so the differential residue decays in the same way.

### Result

$$|\Delta(V_X - V_Y)| = 3\ \mathrm{V}\left(\frac{10}{110} - \frac{9}{109}\right) = 0.2727\ \mathrm{V} - 0.2477\ \mathrm{V} \approx 25\ \mathrm{mV}$$

per clock edge. Each line individually jumps by about 0.25–0.27 V, but the jumps have the same polarity, so only their 25-mV difference appears in the differential output, roughly 11 times less than in the single-ended case.

**Common mistake.** Adding the two glitches (≈ 0.52 V), as if they had opposite polarities. A rising clock edge pushes *both* lines up, so the disturbance is mostly common-mode.

**Common mistake.** Claiming that the differential glitch is zero because the arrangement "is differential". Here the coupling capacitances differ by 1 fF, which leaves 25 mV.

**Common mistake.** Using $C_g = 100$ fF alone as the divider denominator ($3\ \mathrm{V}\times 1/100 = 30$ mV), or quoting the single-ended 0.27 V as the differential glitch. The denominators are 109 fF and 110 fF.
