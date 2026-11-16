# Detailed solution - R241

**Approach.** With perfect matching the two branches of this five-transistor amplifier are identical, so $V_{out} = V_F$. A threshold mismatch in the PMOS mirror makes $M_4$ deliver slightly less current than $M_3$ for the same $V_{SG}$. Linearize around the matched point and compare the two branches device by device: the difference between the branch currents can only be absorbed by a difference between the drain voltages $V_{out}$ and $V_F$, acting through the output resistances $r_{O2}$ and $r_{O4}$.

### Step 1 — The circuit and the matched operating point

Reading the figure:

- $M_1$, $M_2$ (NMOS): differential pair, gates both at 1.5 V, common source P, tail transistor $M_5$ ($I_{D5} = 0.5$ mA).
- $M_3$ (PMOS): diode-connected, drain at node F, in series with $M_1$.
- $M_4$ (PMOS): gate tied to F, drain at $V_{out}$, in series with $M_2$.

All devices are $50/0.5$, i.e. $W/L = 100$.

**Matched case.** Each branch carries $I_{D5}/2 = 0.25$ mA. $M_3$ and $M_4$ have the same $V_{SG}$ and carry the same current, so (with $\lambda \neq 0$) they must also have the same $V_{SD}$. Hence $V_{out} = V_F$. The same conclusion follows from $M_1$ and $M_2$: same $V_{GS}$, same current, hence the same $V_{DS}$.

### Step 2 — Small-signal parameters

$$g_{m4} = \sqrt{2\mu_pC_{ox}\frac{W}{L}I_D} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = \sqrt{1.92\times10^{-6}}\ \mathrm{A/V} = 1.39\ \mathrm{mS},$$

$$g_{m1} = g_{m2} = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = 2.59\ \mathrm{mS},$$

$$r_{O2} = \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega, \qquad r_{O4} = \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,$$

$$r_{O2}\|r_{O4} = \frac{40\times20}{40 + 20}\ \mathrm{k}\Omega = 13.3\ \mathrm{k}\Omega .$$

### Step 3 — How the mismatch acts

Let $\delta = |V_{TH4}| - |V_{TH3}| = 1$ mV. In saturation

$$I_D = \tfrac12\mu_pC_{ox}\frac{W}{L}\left(V_{SG} - |V_{TH}|\right)^2(1 + \lambda V_{SD}) .$$

$M_4$ has the same $V_{SG}$ as $M_3$ (shared gate, both sources at $V_{DD}$) but a threshold larger by $\delta$, so its overdrive is smaller by $\delta$. To first order its current is reduced by

$$\Delta I_{mis} = g_{m4}\,\delta = (1.39\ \mathrm{mS})(1\ \mathrm{mV}) = 1.39\ \mu\mathrm{A} .$$

Equivalently, the mismatch acts like a 1-mV error source in series with the gate of $M_4$.

### Step 4 — Compare the two branches

Let $\Delta = V_{out} - V_F$, the quantity we want. Linearize every device around the matched point (where $\Delta = 0$).

**$M_2$ versus $M_1$.** They have the same gate voltage (1.5 V) and the same source (P), so their currents can differ only through their drain–source voltages. These differ by $V_{DS2} - V_{DS1} = V_{out} - V_F = \Delta$:

$$I_{D2} - I_{D1} = \frac{\Delta}{r_{O2}} .$$

**$M_4$ versus $M_3$.** They have the same $V_{SG}$, so their currents differ through the threshold mismatch and through their source–drain voltages, which differ by $V_{SD4} - V_{SD3} = (V_{DD} - V_{out}) - (V_{DD} - V_F) = -\Delta$:

$$I_{D4} - I_{D3} = -g_{m4}\delta - \frac{\Delta}{r_{O4}} .$$

**KCL in each branch.** The PMOS current of each branch flows through the NMOS device below it: $I_{D3} = I_{D1}$ and $I_{D4} = I_{D2}$. Therefore the two differences are equal:

$$\frac{\Delta}{r_{O2}} = -g_{m4}\delta - \frac{\Delta}{r_{O4}} .$$

**Solve for $\Delta$.** Collect the $\Delta$ terms:

$$
\begin{aligned}
\Delta\left(\frac{1}{r_{O2}} + \frac{1}{r_{O4}}\right) &= -g_{m4}\delta,\\
\Delta &= -g_{m4}\,(r_{O2}\|r_{O4})\,\delta .
\end{aligned}
$$

This result does not depend on the tail or on how far P moves. Those affect both branches equally and cancel when the two branches are compared. (A full small-signal analysis of the whole amplifier, including $r_{O5}$, $r_{O1}$, $r_{O3}$ and body effect, gives exactly this expression for $V_{out} - V_F$.)

### Step 5 — Numerical value

$$V_{out} - V_F = -(1.39\ \mathrm{mS})(13.3\ \mathrm{k}\Omega)(1\ \mathrm{mV}) = -18.5\times1\ \mathrm{mV} = -18.5\ \mathrm{mV} .$$

$V_{out}$ is about **18.5 mV below $V_F$**. Practically all of the change is in $V_{out}$: node F is held by the low resistance of the diode $M_3$ ($\approx 1/g_{m3} = 0.72\ \mathrm{k}\Omega$) and moves by only about 0.16 mV.

**Physical picture.** $M_4$ supplies 1.39 μA less than $M_2$ wants to sink. The output node is the high-resistance node of the amplifier ($R_{out} \approx r_{O2}\|r_{O4}$), so this small current deficit pulls $V_{out}$ down by $1.39\ \mu\mathrm{A}\times13.3\ \mathrm{k}\Omega = 18.5$ mV, until channel-length modulation in $M_2$ (less current at lower $V_{DS2}$) and $M_4$ (more current at larger $V_{SD4}$) balances the branch again.

**Input-referred view.** The same result follows from referring the mismatch to the input: an error $\delta$ at the gate of the load corresponds to an input offset $\delta\,g_{m4}/g_{m1} = 1\ \mathrm{mV}\times1.39/2.59 = 0.54$ mV. Multiplied by the differential gain $g_{m1}(r_{O2}\|r_{O4}) = 34.5$, this again gives 18.5 mV.

**Refinement.** If the factor $(1 + \lambda V_{DS})$ is kept in the bias calculation (with typical thresholds of 0.7 V and $-0.8$ V), the incremental $r_O = (1 + \lambda V_{DS})/(\lambda I_D)$ and $g_m$ come out larger (about 45 kΩ, 24.5 kΩ and 1.53 mS), and the deviation grows to about $-24$ mV. The order of magnitude is the same.

### Result

$$V_{out} - V_F = -g_{m4}(r_{O2}\|r_{O4})\,\Delta|V_{TH}| = -(1.39\ \mathrm{mS})(40\ \mathrm{k}\Omega\,\|\,20\ \mathrm{k}\Omega)(1\ \mathrm{mV}) \approx -18.5\ \mathrm{mV},$$

i.e. $V_{out}$ is about 18.5 mV **below** $V_F$ (about 24 mV if the $(1 + \lambda V_{DS})$ factors are kept in $g_m$ and $r_O$).

**Common mistake.** Concluding that the deviation is just 1 mV (or zero) because "the mismatch is only 1 mV." The mismatch creates a current error, $g_{m4}\delta$, at the high-impedance output node, where it is multiplied by $r_{O2}\|r_{O4}$. In effect the 1-mV error is amplified by the gain of the amplifier.

**Common mistake.** Getting the sign wrong. A *larger* $|V_{TH4}|$ makes $M_4$ *weaker*, so it cannot supply the current $M_2$ sinks, and the output falls below $V_F$.

**Common mistake.** Using only $r_{O4}$ (or only $r_{O2}$) as the resistance at the output. Both devices respond to the change of $V_{out}$ through channel-length modulation, so the two conductances add, giving $r_{O2}\|r_{O4}$.
