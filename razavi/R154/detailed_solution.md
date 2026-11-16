# Detailed solution - R154

**Approach.** First find the range over which each output may move (top: $V_{DD}$; bottom: one threshold below the input common-mode level, including the body effect). The largest symmetric swing requires the output common-mode level to sit in the middle of that range, which fixes $R_D$. The small-signal differential gain of a resistively loaded pair is then $g_mR_D$ (or $g_m(R_D\parallel r_O)$ with channel-length modulation).

### Step 1 — Limits of each output

Reading the figure: $M_1$ and $M_2$ share the tail node $P$, $M_3$ supplies $I_{SS} = 0.5$ mA, and $R_D$ connects each drain ($X$, $Y$) to $V_{DD} = 3$ V. The output at $X$ is $V_X = V_{DD} - R_DI_{D1}$.

- **Top:** $V_X \le V_{DD}$, reached when $I_{D1} = 0$. A resistive load needs no headroom of its own.
- **Bottom:** $M_1$ must remain saturated, $V_{DS1} \ge V_{GS1} - V_{TH1}$. Substituting $V_{DS1} = V_X - V_P$ and $V_{GS1} = V_{in1} - V_P$:
$$V_X - V_P \ge V_{in1} - V_P - V_{TH1} \quad\Longrightarrow\quad V_X \ge V_{in1} - V_{TH1} \approx V_{in,CM} - V_{TH1},$$
because the input swing is small.

### Step 2 — Overdrive, tail-node voltage and threshold (body effect)

Each input device carries $I_{SS}/2 = 0.25$ mA at equilibrium, and $\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2}$. The overdrive $V_{ov} = V_{GS} - V_{TH}$ follows from the square law $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$:

$$V_{ov1} = \sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(0.25\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.193\ \mathrm{V}.$$

The tail node sits at $V_P = V_{in,CM} - V_{TH1} - V_{ov1}$, and the threshold depends on $V_{SB1} = V_P$:

$$V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - \sqrt{0.9}\right)\ \mathrm{V}.$$

Iterating from $V_P = 0.25$ V:

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{1.15} - 0.9487\right) = 0.7557\ \mathrm{V} &&\Rightarrow\; V_P = 1.2 - 0.193 - 0.7557 = 0.2512\ \mathrm{V},\\
V_{TH1} &= 0.7 + 0.45\left(\sqrt{1.1512} - 0.9487\right) = 0.7559\ \mathrm{V} &&\Rightarrow\; V_P = 0.2510\ \mathrm{V}\ \text{(converged)}.
\end{aligned}
$$

So $V_{TH1} \approx 0.756$ V, and the lowest allowed output voltage is

$$V_{out,min} = V_{in,CM} - V_{TH1} = 1.2 - 0.756 = 0.444\ \mathrm{V}.$$

Each output may therefore move between 0.444 V and 3 V, a range of $3 - 0.444 = 2.556$ V.

### Step 3 — Choosing $R_D$ for the maximum swing

A signal swings symmetrically about its quiescent (common-mode) level. To use the whole range from 0.444 V to 3 V, the quiescent output level must sit exactly in the middle:

$$V_{out,CM} = \frac{V_{DD} + V_{out,min}}{2} = \frac{3 + 0.444}{2}\ \mathrm{V} = 1.722\ \mathrm{V}.$$

At equilibrium each resistor carries $I_{SS}/2$, so

$$
\begin{aligned}
V_{DD} - R_D\frac{I_{SS}}{2} &= V_{out,CM}\\
R_D &= \frac{V_{DD} - V_{out,CM}}{I_{SS}/2} = \frac{3 - 1.722\ \mathrm{V}}{0.25\ \mathrm{mA}} = \frac{1.278\ \mathrm{V}}{0.25\ \mathrm{mA}} = 5.11\ \mathrm{k}\Omega .
\end{aligned}
$$

**Consistency check.** When the input fully steers the tail current, one output carries $I_{SS}$ and drops to $V_{DD} - R_DI_{SS} = 3 - (5.11\ \mathrm{k}\Omega)(0.5\ \mathrm{mA}) = 0.444$ V, while the other rises to $V_{DD}$. So the resistor's full drop $R_DI_{SS}$ equals the full single-ended swing, 2.556 V, as it should.

(Without the body effect, $V_{out,min} = 0.5$ V, $V_{out,CM} = 1.75$ V and $R_D = 1.25\ \mathrm{V}/0.25\ \mathrm{mA} = 5.0$ kΩ.)

### Step 4 — Transconductance of the input devices

From the square law, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$, evaluated at the **equilibrium current of one device**, $I_{SS}/2$:

$$g_m = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.25\ \mathrm{mA})} = \sqrt{6.70\times10^{-6}}\ \mathrm{A/V} = 2.59\ \mathrm{mS}.$$

(Check: $g_m = 2I_D/V_{ov} = 2(0.25\ \mathrm{mA})/0.193\ \mathrm{V} = 2.59$ mS.)

### Step 5 — Differential gain

For a small differential input $v_{in} = v_{in1} - v_{in2}$, node $P$ is a virtual ground and each half is a common-source stage with gain $-g_mR_D$ for its input $\pm v_{in}/2$. The differential output is therefore

$$
\begin{aligned}
v_{out1} - v_{out2} &= \left(-g_mR_D\frac{v_{in}}{2}\right) - \left(+g_mR_D\frac{v_{in}}{2}\right) = -g_mR_D\,v_{in},\\
|A_v| &= g_mR_D = (2.59\ \mathrm{mS})(5.11\ \mathrm{k}\Omega) = 13.2 .
\end{aligned}
$$

With $R_D = 5.0$ kΩ (no body effect), $|A_v| = (2.59\ \mathrm{mS})(5.0\ \mathrm{k}\Omega) = 12.9$.

**Including channel-length modulation.** The output resistance of each input device is

$$r_O = \frac{1}{\lambda I_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,$$

and it appears in parallel with $R_D$ in the half circuit:

$$
\begin{aligned}
R_D\parallel r_O &= \frac{(5.11)(40)}{5.11 + 40}\ \mathrm{k}\Omega = 4.53\ \mathrm{k}\Omega,\\
|A_v| &= g_m(R_D\parallel r_O) = (2.59\ \mathrm{mS})(4.53\ \mathrm{k}\Omega) = 11.7 .
\end{aligned}
$$

(With 5.0 kΩ: $5.0\parallel 40 = 4.44$ kΩ and $|A_v| = 11.5$.)

### Result

Maximum swing requires the output common-mode level at $(3 + 0.444)/2 = 1.72$ V, i.e. $R_D \approx 5.1$ kΩ (5.0 kΩ without body effect). With $g_m = 2.59$ mS:

$$|A_v| = g_mR_D \approx 13\quad(13.2\ \text{with body effect},\ 12.9\ \text{without}),$$

or about 11.7 (11.5) if $r_O = 40$ kΩ is included.

**Common mistake.** Setting $R_DI_{SS}/2$ equal to the full swing (2.56 V), which gives $R_D \approx 10$ kΩ and a gain of about 26. At equilibrium the output would then sit at the *bottom* of its range and could not swing down at all. The output CM level must be in the middle of the range, so $R_DI_{SS}$, not $R_DI_{SS}/2$, equals the full single-ended swing.

**Common mistake.** Computing $g_m$ with the full tail current, $\sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 3.66$ mS, which gives a gain of about 18.7. Each input device carries only $I_{SS}/2$ at equilibrium.

**Common mistake.** Quoting $g_mR_D/2$ as the differential gain. Each single-ended output changes by $g_mR_D\,v_{in}/2$, but the two change in opposite directions, so the differential output is $g_mR_D\,v_{in}$.
