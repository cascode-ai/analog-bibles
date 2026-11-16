# Detailed solution - R700

**Approach.** All transistors share $V_b$, but their sources sit at different points of a resistive ground line, so each sees a slightly different source voltage. Because the line drops are millivolts, we compute the source voltages assuming every device carries the nominal current $I$, then convert each source-voltage rise into a current change with the small-signal transconductances ($g_m$ for the lost gate–source voltage, $g_{mb}$ for the body effect). The worst mismatch is between the transistor nearest ground ($M_1$) and the farthest one ($M_N$); setting it to 1 % gives $r_{max}$.

### Step 1 — Nominal current and transconductances

With an ideal ground ($r = 0$), every source is at 0 V and $V_{SB} = 0$, so $V_{TH} = V_{TH0} = 0.7$ V.

**Overdrive voltage** ($V_{ov} = V_{GS} - V_{TH}$):

$$V_{ov} = V_b - V_{TH0} = 1.2 - 0.7 = 0.5\ \mathrm{V}.$$

**Aspect ratio:** $W/L = 20/0.5 = 40$.

**Nominal drain current** (square law, saturation, $\lambda = 0$):

$$I = \tfrac12\mu_nC_{ox}\frac{W}{L}V_{ov}^2 = \tfrac12(134\ \mu\mathrm{A/V^2})(40)(0.5\ \mathrm{V})^2 = \tfrac12(5.36\ \mathrm{mA/V^2})(0.25\ \mathrm{V^2}) = 0.67\ \mathrm{mA}.$$

**Transconductance:**

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov} = (5.36\ \mathrm{mA/V^2})(0.5\ \mathrm{V}) = 2.68\ \mathrm{mS}.$$

**Body-effect transconductance.** The threshold with body effect is $V_{TH} = V_{TH0} + \gamma(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|})$, so

$$\eta = \frac{\partial V_{TH}}{\partial V_{SB}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} \approx \frac{0.45}{2\sqrt{0.9}} = \frac{0.45}{1.897} = 0.237,$$

(evaluated at $V_{SB} \approx 0$, since the source voltages will be only millivolts), and

$$g_{mb} = \eta g_m = 0.237\times2.68\ \mathrm{mS} = 0.636\ \mathrm{mS}, \qquad g_m + g_{mb} = 3.32\ \mathrm{mS}.$$

### Step 2 — How a source-voltage rise changes the current

Suppose the source of a transistor rises by a small $\Delta V_S$ above ground (its bulk stays at ground):

- its gate–source voltage falls by $\Delta V_S$ (the gate is fixed at $V_b$);
- its source–bulk voltage rises by $\Delta V_S$, which raises $V_{TH}$ by $\eta\,\Delta V_S$.

Both reduce the overdrive, by $(1 + \eta)\Delta V_S$ in total. The current therefore drops by

$$\Delta I = g_m\Delta V_S + g_{mb}\Delta V_S = (g_m + g_{mb})\Delta V_S .$$

### Step 3 — Source voltages along the ground line

Number the nodes along the line: node 0 is ground, node $k$ is the source of $M_k$. Segment $k$ (resistance $r$) joins node $k-1$ to node $k$.

**Current in each segment** (KCL): every transistor's current flows down the line toward ground, so segment $k$ carries the currents of all transistors at or beyond node $k$, i.e. of $M_k, M_{k+1}, \dots, M_N$. With each current $\approx I$:

$$i_{\text{seg }k} = (N - k + 1)\,I .$$

**Node voltages** (Ohm's law, summing the drops from ground outward):

$$V_k = \sum_{j=1}^{k} r\,(N - j + 1)\,I = rI\sum_{j=1}^{k}(N + 1 - j) .$$

Evaluate the sum:

$$\sum_{j=1}^{k}(N + 1 - j) = k(N + 1) - \sum_{j=1}^{k}j = k(N + 1) - \frac{k(k+1)}{2}.$$

So

$$V_k = rI\left[k(N + 1) - \frac{k(k+1)}{2}\right].$$

**The two extremes:**

$$
\begin{aligned}
V_1 &= rI\left[(N + 1) - 1\right] = NrI \quad\text{(smallest: the whole current } NI \text{ flows only through the first segment)},\\
V_N &= rI\left[N(N + 1) - \frac{N(N+1)}{2}\right] = \frac{N(N+1)}{2}\,rI \quad\text{(largest)}.
\end{aligned}
$$

**Their difference:**

$$V_N - V_1 = rI\left[\frac{N(N+1)}{2} - N\right] = rI\,\frac{N(N - 1)}{2}.$$

With $N = 32$: $N(N-1)/2 = 32\times31/2 = 496$. Note that it grows as $N^2$: more transistors mean both more segments and more current per segment.

### Step 4 — Maximum mismatch and $r_{max}$

The source voltage increases monotonically with $k$, so $M_1$ carries the largest current and $M_N$ the smallest. Their difference, normalized to the nominal current:

$$\frac{I_1 - I_N}{I} = \frac{(g_m + g_{mb})(V_N - V_1)}{I} = \frac{(g_m + g_{mb})\,rI\,N(N-1)/2}{I} = (g_m + g_{mb})\,r\,\frac{N(N - 1)}{2}.$$

Set it equal to the allowed 1 %:

$$(g_m + g_{mb})\,r\,(496) \le 0.01$$

$$r_{max} = \frac{0.01}{496\,(g_m + g_{mb})} = \frac{0.01}{496\times3.32\times10^{-3}\ \mathrm{S}} = \frac{0.01}{1.645\ \mathrm{S}} = 6.1\times10^{-3}\ \Omega = 6.1\ \mathrm{m}\Omega .$$

**Without the body effect** ($g_{mb}$ neglected):

$$r_{max} = \frac{0.01}{496\times2.68\times10^{-3}\ \mathrm{S}} = \frac{0.01}{1.329\ \mathrm{S}} = 7.5\ \mathrm{m}\Omega .$$

The body effect makes the requirement about 24 % stricter, because a rising source also raises the threshold.

### Step 5 — Checking the approximations

- **Small-signal validity.** With $r = 6.1$ mΩ, the largest source voltage is
$$V_N = \frac{N(N+1)}{2}rI = 528\times(6.1\times10^{-3}\ \Omega)(0.67\ \mathrm{mA}) = 2.2\ \mathrm{mV},$$
tiny compared with $V_{ov} = 0.5$ V, so the linearization $\Delta I = (g_m + g_{mb})\Delta V_S$ and the use of $\eta$ at $V_{SB} = 0$ are accurate. A full nonlinear solution of the ladder (square law with body effect, actual currents in each segment) gives a mismatch of 0.99 % at this $r$, confirming the result.
- **Equal-current assumption.** The currents differ by at most 1 %, so using $I$ for every transistor when computing the line drops introduces only a ~1 % error in the drops.
- **Saturation.** Stated in the problem; the source rise of a few millivolts does not change it.

**Physical meaning.** 6 mΩ is extremely small: for a metal layer with a sheet resistance of 50 mΩ/□, a segment of 6.1 mΩ is only $6.1/50 = 0.12$ squares, i.e. each segment of the ground line must be about 8 times wider than it is long. This is why wide ground lines (or star connections / separate source returns) are needed for large current-source arrays.

### Result

$$r_{max} = \frac{0.01}{(g_m + g_{mb})\,N(N-1)/2} \approx 6.1\ \mathrm{m}\Omega$$

with $I = 0.67$ mA, $g_m = 2.68$ mS, $g_{mb} = 0.237g_m = 0.64$ mS and $N(N-1)/2 = 496$. Neglecting the body effect gives $r_{max} \approx 7.5$ mΩ. (If "mismatch" is instead read as the deviation of the worst current $I_N$ from the ideal value, $(I - I_N)/I = (g_m + g_{mb})rN(N+1)/2$, the limit becomes 5.7 mΩ.)

**Common mistake.** Assuming every segment carries the same current, or using only the first segment's drop $NrI$ (or $NrI/2$) as the voltage difference. The current in the line accumulates toward ground, so the source voltages grow quadratically and the worst-case difference is $rI\,N(N-1)/2$, which scales as $N^2$.

**Common mistake.** Computing $g_m$ incorrectly, e.g. as $I/(V_b - V_{TH})$ (which is half the true value) or without the factor $W/L$. For the square law, $g_m = 2I/V_{ov} = \mu_nC_{ox}(W/L)V_{ov} = 2.68$ mS.

**Common mistake.** Forgetting the body effect. The bulks are at true ground while the sources rise, so $V_{SB} > 0$ and the threshold increases too; this adds $g_{mb}\Delta V_S$ to the current loss and tightens the limit from 7.5 mΩ to 6.1 mΩ.
