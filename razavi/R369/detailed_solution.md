# Detailed solution - R369

**Approach.** With the input open, the input-referred noise current of this common-gate (CG) stage is set by the two current sources, $\overline{I_{n,in}^2} = 4kT\gamma(g_{m2} + g_{m3})$. Since $g_m = 2I_D/|V_{ov}|$, the noise falls as the overdrives of $M_2$ and $M_3$ grow, while the 2-V swing limits the sum of the overdrives in the output path. Minimize $1/V_{ov2} + 1/|V_{ov3}|$ for that fixed sum and convert the optimum into $W/L$.

### Step 1 — Input-referred noise current

Call the input node X. The bypass capacitors make the gates of $M_2$ and $M_3$ clean ac grounds, so each contributes only its own channel noise, $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$ and $\overline{I_{n3}^2} = 4kT\gamma g_{m3}$.

With the input open, $v_{gs1} = -v_X$. Between out and X flow $g_{m1}v_{gs1}$ and $I_{n1}$ (drain to source of $M_1$); from X to ground flows only $I_{n2}$ ($M_2$'s gate and source are at ac ground); $I_{n3}$ flows from $V_{DD}$ (ac ground) into out. Let $R_{out}$ be the (very large) output resistance; it cancels in the end.

<!-- diagram: diagram-01.cir -->

**KCL at X.** The channel current of $M_1$ must leave through $M_2$'s noise source:

$$g_{m1}v_{gs1} + I_{n1} = I_{n2}.$$

So $M_1$ draws exactly $I_{n2}$ from the output: $M_1$'s own noise contributes nothing (the source moves by $I_{n1}/g_{m1}$ and the controlled current cancels $I_{n1}$), and $I_{n2}$ is carried through $M_1$ exactly as an input signal current would be.

**Output node.** It receives $I_{n3}$ and loses $I_{n2}$ through $M_1$, and the two are uncorrelated:

$$v_{out} = R_{out}\,(I_{n3} - I_{n2}), \qquad \overline{V_{n,out}^2} = R_{out}^2\left(\overline{I_{n2}^2} + \overline{I_{n3}^2}\right).$$

An input current passes through $M_1$ with unity current gain, so $|v_{out}/i_{in}| = R_{out}$ and

$$\overline{I_{n,in}^2} = \frac{R_{out}^2\left(\overline{I_{n2}^2} + \overline{I_{n3}^2}\right)}{R_{out}^2} = 4kT\gamma\,(g_{m2} + g_{m3}).$$

$R_{out}$ cancels, and $M_1$ (whose $g_{m1}$ is fixed anyway) does not appear. With $g_m = 2I_D/|V_{ov}|$ for both NMOS and PMOS, independent of mobility,

$$\overline{I_{n,in}^2} = 4kT\gamma\cdot2I_D\left(\frac{1}{V_{ov2}} + \frac{1}{|V_{ov3}|}\right).$$

With $I_D$ fixed, **the noise current is minimized by making the overdrives of the current sources as large as possible** (small $g_m$ for the same current); the swing limits them.

### Step 2 — The output-swing constraint

**Upper limit.** $M_3$ saturated: $V_{out,max} = V_{DD} - |V_{ov3}|$.

**Lower limit.** $M_1$ saturated: $V_{out} \ge V_X + V_{ov1} = V_b - V_{TH1}$. The lowest $V_b$ that keeps $M_2$ saturated puts X at $V_X = V_{ov2}$:

$$V_b = V_{ov2} + V_{TH1} + V_{ov1}, \qquad V_{out,min} = V_{ov2} + V_{ov1}.$$

**Swing:**

$$V_{out,max} - V_{out,min} = V_{DD} - V_{ov1} - V_{ov2} - |V_{ov3}|.$$

$V_{ov1}$ is fixed by the given size and current:

$$V_{ov1} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)_1}} = \sqrt{\frac{2\times0.5\times10^{-3}\ \mathrm{A}}{(134\times10^{-6}\ \mathrm{A/V^2})(100)}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

Requiring a 2-V swing:

$$
\begin{aligned}
V_{DD} - V_{ov1} - V_{ov2} - |V_{ov3}| &= 2\ \mathrm{V}\\
V_{ov2} + |V_{ov3}| &= 3 - 2 - 0.273\ \mathrm{V} = 0.727\ \mathrm{V}.
\end{aligned}
$$

The equality is used, since any smaller sum would only raise $g_{m2} + g_{m3}$.

### Step 3 — Optimal split of the overdrive budget

Let $a = V_{ov2}$ and $b = |V_{ov3}|$ with $a + b = S = 0.727$ V. Minimize

$$h(a) = \frac1a + \frac{1}{S - a}:$$

$$
\begin{aligned}
h'(a) &= -\frac{1}{a^2} + \frac{1}{(S - a)^2} = 0\\
(S - a)^2 &= a^2\\
S - a &= a \quad (\text{both positive})\\
a &= \frac{S}{2}.
\end{aligned}
$$

$h''(a) = 2/a^3 + 2/(S - a)^3 > 0$, so this is a minimum:

$$V_{ov2} = |V_{ov3}| = \frac{0.727\ \mathrm{V}}{2} = 0.363\ \mathrm{V}.$$

The split is equal despite the different mobilities, because $g_m = 2I_D/|V_{ov}|$ does not contain the mobility.

**Iteration check** (with $2I_D = 1$ mA, $g_m$ in mS equals $1/V_{ov}$ in V⁻¹):

| $V_{ov2}$ (V) | $\lvert V_{ov3}\rvert$ (V) | $g_{m2}$ (mS) | $g_{m3}$ (mS) | $g_{m2} + g_{m3}$ (mS) |
|---|---|---|---|---|
| 0.250 | 0.477 | 4.000 | 2.097 | 6.10 |
| 0.300 | 0.427 | 3.333 | 2.343 | 5.68 |
| 0.363 | 0.363 | 2.752 | 2.752 | **5.50** |
| 0.400 | 0.327 | 2.500 | 3.060 | 5.56 |
| 0.450 | 0.277 | 2.222 | 3.612 | 5.83 |

The minimum is at the equal split, and the curve is fairly flat near it.

### Step 4 — Dimensions of $M_2$ and $M_3$

With $W/L = 2I_D/(\mu C_{ox}V_{ov}^2)$ and $V_{ov}^2 = (0.363\ \mathrm{V})^2 = 0.1321\ \mathrm{V^2}$:

$$
\begin{aligned}
\left(\frac{W}{L}\right)_2 &= \frac{2I_D}{\mu_nC_{ox}V_{ov2}^2} = \frac{1\times10^{-3}\ \mathrm{A}}{(134\times10^{-6}\ \mathrm{A/V^2})(0.1321\ \mathrm{V^2})} = \frac{1\times10^{-3}}{1.770\times10^{-5}} = 56.5,\\[4pt]
\left(\frac{W}{L}\right)_3 &= \frac{2I_D}{\mu_pC_{ox}V_{ov3}^2} = \frac{1\times10^{-3}\ \mathrm{A}}{(38.4\times10^{-6}\ \mathrm{A/V^2})(0.1321\ \mathrm{V^2})} = \frac{1\times10^{-3}}{5.071\times10^{-6}} = 197.
\end{aligned}
$$

With $L = 0.5\ \mu$m: $M_2 \approx 28\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$ and $M_3 \approx 99\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$; the PMOS is about 3.5 times wider because $\mu_pC_{ox}$ is 3.5 times smaller. Then

$$
\begin{aligned}
g_{m2} = g_{m3} &= \frac{2I_D}{V_{ov}} = \frac{1\ \mathrm{mA}}{0.363\ \mathrm{V}} = 2.75\ \mathrm{mS},\\
\overline{I_{n,in}^2} &= 4kT\gamma\,(g_{m2} + g_{m3}) = 4kT\gamma\times5.50\ \mathrm{mS}.
\end{aligned}
$$

For $\gamma = 2/3$ and $T = 300$ K, $4kT\gamma = 4(1.38\times10^{-23})(300)(2/3) = 1.104\times10^{-20}$ J, so

$$\overline{I_{n,in}^2} = (1.104\times10^{-20})(5.50\times10^{-3}) = 6.07\times10^{-23}\ \mathrm{A^2/Hz} \;\Rightarrow\; 7.8\ \mathrm{pA/\sqrt{Hz}}.$$

### Step 5 — Bias voltages and region check

- **Gate bias:** $V_b = V_{ov2} + V_{TH1} + V_{ov1} = 0.363 + V_{TH1} + 0.273$ V; with $V_{TH1} = 0.7$ V, $V_b \approx 1.34$ V. (With body effect $V_{TH1}$ and $V_b$ rise together, and $V_{out,min} = V_b - V_{TH1}$ is unchanged.)
- **Output range:** $V_{out,min} = 0.363 + 0.273 = 0.636$ V and $V_{out,max} = 3 - 0.363 = 2.637$ V, a width of exactly 2.0 V ✓. The quiescent output should sit near the middle, about 1.64 V, for a symmetric ±1 V swing.
- **Saturation** at that point: $V_{DS2} = V_{ov2}$ (edge, by design), $V_{DS1} = 1.64 - 0.363 = 1.27\ \mathrm{V} > V_{ov1}$ and $V_{SD3} = 3 - 1.64 = 1.36\ \mathrm{V} > |V_{ov3}|$.

With $\lambda = 0$ the optimum has this closed form and needs no iteration; keeping $1 + \lambda V_{DS}$ would lower the widths by a few percent after a short iteration.

### Result

$$\overline{I_{n,in}^2} = 4kT\gamma\,(g_{m2} + g_{m3}) = 4kT\gamma\cdot2I_D\left(\frac{1}{V_{ov2}} + \frac{1}{|V_{ov3}|}\right),$$

subject to $V_{ov2} + |V_{ov3}| = V_{DD} - 2\ \mathrm{V} - V_{ov1} = 0.727$ V (with $V_{ov1} = 0.273$ V). The minimum is at equal overdrives:

$$V_{ov2} = |V_{ov3}| \approx 0.363\ \mathrm{V}, \qquad \left(\frac{W}{L}\right)_2 \approx 56.5\ (\approx 28\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}), \qquad \left(\frac{W}{L}\right)_3 \approx 197\ (\approx 99\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}),$$

giving $g_{m2} = g_{m3} \approx 2.75$ mS and $\overline{I_{n,in}^2} \approx 4kT\gamma\times5.5$ mS (≈ 7.8 pA/√Hz for $\gamma = 2/3$).

**Common mistake.** Including $M_1$'s noise in the input-referred current. With the input open it cancels (Step 1); adding $4kT\gamma g_{m1}$ ($g_{m1} = 3.66$ mS) wrongly raises the result to about 10 pA/√Hz, though it does not change the sizing because $g_{m1}$ is fixed.

**Common mistake.** Leaving $M_2$ out because it "only biases" the input. Its noise current sits at the input node and flows through $M_1$ like a signal current.

**Common mistake.** Writing the swing constraint without $V_{ov1}$ or without $V_{ov2}$ (for example $V_{DD} - |V_{ov3}| - V_{ov1} = 2$ V): both stack in series with $|V_{ov3}|$. Likewise, *maximizing* $g_{m2}$, $g_{m3}$ is backwards: for current sources, a large $g_m$ means more noise.
