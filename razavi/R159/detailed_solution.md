# Detailed solution - R159

**Approach.** At equilibrium the two identical input devices share the tail current equally. Setting the square-law current of one device equal to $I_{SS}/2$ gives the overdrive $V_{ov} = \sqrt{I_{SS}/(\mu_nC_{ox}W/L)}$. Evaluating this for both aspect ratios shows how the overdrive scales with $W/L$.

### Step 1 — Current in each device at equilibrium

$M_1$ and $M_2$ are identical NMOS transistors with their sources joined at node $P$, fed by an ideal tail current source $I_{SS} = 1$ mA. KCL at $P$:

$$I_{D1} + I_{D2} = I_{SS}.$$

At equilibrium, $V_{in1} = V_{in2}$. The two transistors then have equal gate voltages, the same source voltage $V_P$ (hence equal $V_{GS}$), the same threshold (same source–bulk voltage) and the same size. With $\lambda = 0$ the drain voltages do not matter. So their currents are equal:

$$I_{D1} = I_{D2} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

### Step 2 — Overdrive from the square law

In saturation,

$$I_D = \frac12\,\mu_nC_{ox}\frac{W}{L}\,V_{ov}^2, \qquad V_{ov} = V_{GS} - V_{TH}\ \text{(the overdrive voltage)}.$$

With $\beta = \mu_nC_{ox}W/L$ and $I_D = I_{SS}/2$:

$$
\begin{aligned}
\frac{I_{SS}}{2} &= \frac12\,\beta\,V_{ov}^2\\
V_{ov} &= \sqrt{\frac{I_{SS}}{\beta}} .
\end{aligned}
$$

### Step 3 — Numbers for $W/L = 25/0.5$

$$
\begin{aligned}
\frac{W}{L} &= \frac{25}{0.5} = 50,\\
\beta &= (134\ \mu\mathrm{A/V^2})(50) = 6.7\ \mathrm{mA/V^2},\\
V_{ov} &= \sqrt{\frac{1\ \mathrm{mA}}{6.7\ \mathrm{mA/V^2}}} = \sqrt{0.1493\ \mathrm{V^2}} = 0.386\ \mathrm{V}.
\end{aligned}
$$

### Step 4 — Comparison with $W/L = 50/0.5$

For $W/L = 100$, $\beta = 13.4\ \mathrm{mA/V^2}$ and

$$V_{ov} = \sqrt{\frac{1\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

The ratio of the two overdrives follows directly from $V_{ov} \propto 1/\sqrt{W/L}$ at fixed current:

$$\frac{V_{ov}(25/0.5)}{V_{ov}(50/0.5)} = \sqrt{\frac{(W/L)_{50/0.5}}{(W/L)_{25/0.5}}} = \sqrt{\frac{100}{50}} = \sqrt2 = 1.414, \qquad \frac{0.386}{0.273} = 1.414\ \checkmark$$

**Physical interpretation.** Halving the width halves the current the device can carry for a given overdrive. To carry the same 0.5 mA, the overdrive squared must double, so the overdrive grows by $\sqrt2$. This has two consequences for the pair:

- the transconductance falls: $g_m = 2I_D/V_{ov}$ drops from $2(0.5\ \mathrm{mA})/0.273\ \mathrm{V} = 3.66$ mS to $2(0.5\ \mathrm{mA})/0.386\ \mathrm{V} = 2.59$ mS, i.e. by $\sqrt2$;
- the linear input range widens: full current steering now needs $\sqrt2\,V_{ov} = 0.546$ V instead of 0.386 V.

### Result

$$V_{GS} - V_{TH} = \sqrt{\frac{I_{SS}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(50)}} \approx 0.386\ \mathrm{V},$$

a factor $\sqrt2$ larger than the 0.273 V of the $W/L = 50/0.5$ pair at the same tail current. Halving $W/L$ at constant current raises the overdrive by $\sqrt2$.

**Common mistake.** Concluding that a smaller $W/L$ gives a *smaller* overdrive. At a fixed current, a narrower device needs a *larger* $V_{GS} - V_{TH}$ to carry it.

**Common mistake.** Scaling the overdrive by a factor of 2 (to 0.546 V) instead of $\sqrt2$. The current depends on the *square* of the overdrive, so halving $W/L$ multiplies $V_{ov}^2$ by 2 and $V_{ov}$ by $\sqrt2$. (Using the full 1 mA in one device, or dropping the $\tfrac12$ of the square law, is a separate error that also gives wrong values.)
