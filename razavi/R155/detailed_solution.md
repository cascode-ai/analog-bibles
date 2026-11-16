# Detailed solution - R155

**Approach.** At equilibrium ($V_{in1} = V_{in2}$) the two identical input transistors have the same gate–source voltage, so by symmetry each carries half of the tail current. Setting the square-law saturation current equal to $I_{SS}/2$ and solving for the overdrive gives the answer.

### Step 1 — What "equilibrium" means and the current in each device

The differential pair consists of two identical NMOS transistors, $M_1$ and $M_2$, whose sources are joined at a common node $P$. An ideal current source $I_{SS} = 1$ mA pulls the total current out of $P$. KCL at node $P$:

$$I_{D1} + I_{D2} = I_{SS}.$$

**Equilibrium** means that the differential input is zero, $V_{in1} = V_{in2}$. Both transistors then have:

- the same gate voltage;
- the same source voltage ($V_P$), hence the same $V_{GS}$;
- the same threshold voltage (identical devices, both sources at $P$, so the same source–bulk voltage);
- the same $W/L$, and $\lambda = 0$, so their drain voltages do not matter.

So the two currents are equal, and with KCL:

$$I_{D1} = I_{D2} = \frac{I_{SS}}{2} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}.$$

### Step 2 — Square-law relation

Each transistor is saturated, so its drain current obeys the square law

$$I_D = \frac12\,\mu_nC_{ox}\frac{W}{L}\,(V_{GS} - V_{TH})^2 ,$$

where $V_{GS} - V_{TH} = V_{ov}$ is the **overdrive voltage**, $\mu_nC_{ox}$ is the process transconductance parameter and $W/L$ the aspect ratio. Define the device constant

$$\beta = \mu_nC_{ox}\frac{W}{L} = \left(134\ \mu\mathrm{A/V^2}\right)\left(\frac{50}{0.5}\right) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}.$$

### Step 3 — Solve for the overdrive

Set $I_D = I_{SS}/2$:

$$
\begin{aligned}
\frac{I_{SS}}{2} &= \frac12\,\beta\,V_{ov}^2\\
V_{ov}^2 &= \frac{I_{SS}}{\beta}\\
V_{ov} &= \sqrt{\frac{I_{SS}}{\beta}} .
\end{aligned}
$$

The two factors of $\tfrac12$ cancel: the equilibrium overdrive equals $\sqrt{I_{SS}/\beta}$. Substituting numbers:

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{1\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}}\\
&= \sqrt{0.07463\ \mathrm{V^2}}\\
&= 0.273\ \mathrm{V}.
\end{aligned}
$$

### Step 4 — Why this number matters

The overdrive sets the scale of the pair's large-signal behaviour:

- the transconductance of each device at equilibrium is $g_m = 2I_D/V_{ov} = 2(0.5\ \mathrm{mA})/(0.273\ \mathrm{V}) = 3.66$ mS;
- the pair steers *all* of the tail current to one side when $|V_{in1} - V_{in2}| = \sqrt{2}\,V_{ov} = 0.386$ V.

A larger overdrive therefore means a wider linear input range but a lower $g_m$ for the same current.

### Result

$$V_{GS} - V_{TH} = \sqrt{\frac{I_{SS}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(100)}} \approx 0.273\ \mathrm{V},$$

with each transistor carrying $I_{SS}/2 = 0.5$ mA.

**Common mistake.** Putting the full tail current in each device: $\sqrt{2(1\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.386$ V. At equilibrium the tail current *splits* equally; 0.386 V is the overdrive a single device would need to carry all of $I_{SS}$, which happens only when the pair is completely steered.

**Common mistake.** Dropping the factor $\tfrac12$ of the square law, i.e. writing $I_D = \beta V_{ov}^2$. With $I_D = 0.5$ mA this gives $\sqrt{0.5\ \mathrm{mA}/13.4\ \mathrm{mA/V^2}} = 0.193$ V, which is too small by a factor of $\sqrt{2}$.
