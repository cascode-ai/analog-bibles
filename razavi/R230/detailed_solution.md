# Detailed solution - R230

**Approach.** Because $I_{REF}$ is ideal, $M_1$ always carries $I_{REF}$ and gives $M_2$ a fixed gate–source voltage. The only $V_{DD}$-dependent part is the branch $M_2$–$M_3$, which must fit $|V_{GS3}| + V_{DS2}$ under $V_{DD}$. This gives three regions: $M_3$ off; $M_3$ on with $M_2$ in triode; $M_2$ saturated. $M_4$ simply copies the current of $M_3$.

### Step 1 — $M_1$ fixes the gate voltage of $M_2$ for every $V_{DD}$

Take $V_{THN} = 0.7$ V and $|V_{THP}| = 0.8$ V. The diode-connected $M_1$ is always saturated, and the ideal source forces $I_{D1} = I_{REF}$ (even at very low $V_{DD}$), so

$$V_{GS1} = V_{THN} + V_{ov1}, \qquad V_{ov1} = \sqrt{\frac{2I_{REF}}{\mu_nC_{ox}(W/L)_1}},$$

**independent of $V_{DD}$**. $M_2$ has $V_{GS2} = V_{GS1}$, so its channel is always formed with overdrive $V_{ov1}$; whether it conducts depends only on the voltage across it, $V_{DS2}$.

### Step 2 — The $M_2$–$M_3$ branch and the output mirror

Call the drain node of $M_2$ and $M_3$ A, so $V_A = V_{DS2}$. KVL from $V_{DD}$ through $M_3$ and $M_2$ to ground and KCL at A give

$$V_{DD} = |V_{GS3}| + V_{DS2}, \qquad I_{D2} = I_{D3} .$$

$M_4$ has $V_{SG4} = V_{SG3}$ and $V_{SD4} = V_{DD} - 0 = V_{DD}$; it is saturated if $V_{SD4} \ge V_{SG4} - |V_{THP}|$, i.e.

$$V_{DD} \ge V_{DD} - V_{DS2} - 0.8\ \mathrm{V},$$

which always holds. So with $\lambda = 0$, for every $V_{DD}$,

$$I_{out} = \frac{(W/L)_4}{(W/L)_3}\,I_{D3} = \frac{(W/L)_4}{(W/L)_3}\,I_{D2} ,$$

and the $I_{out}(V_{DD})$ curve is a scaled copy of $I_{D2}(V_{DD})$.

### Step 3 — Region I: $0 \le V_{DD} \le 0.8$ V, $I_{out} = 0$

Node A cannot be below ground, so $V_{DS2} \ge 0$ and

$$|V_{GS3}| = V_{DD} - V_{DS2} \le V_{DD} \le 0.8\ \mathrm{V} = |V_{THP}| .$$

$M_3$ is off, so $I_{D3} = I_{D2} = 0$; $M_2$ has a channel but no current, so $V_{DS2} = 0$ and $|V_{GS3}| = V_{DD}$. $M_4$, with the same $|V_{GS}|$, is off too:

$$I_{out} = 0 \quad\text{for } V_{DD} \le |V_{THP}| = 0.8\ \mathrm{V} .$$

The onset is set by the **PMOS** threshold; the NMOS threshold plays no role, because the ideal source biases $M_1$ at any $V_{DD}$.

### Step 4 — Region II: $M_3$ on, $M_2$ in triode

Just above 0.8 V, $M_3$ turns on, and $M_2$ has a large overdrive $V_{ov1}$ but a small $V_{DS2}$, so it is in the **triode** region:

$$
\begin{aligned}
I_{D3} &= \tfrac12\mu_pC_{ox}(W/L)_3\left(V_{DD} - V_{DS2} - 0.8\right)^2 &&\text{($M_3$, saturated)},\\
I_{D2} &= \mu_nC_{ox}(W/L)_2\left(V_{ov1}V_{DS2} - \tfrac12V_{DS2}^2\right) &&\text{($M_2$, triode)},
\end{aligned}
$$

solved together with $I_{D2} = I_{D3}$ for $V_{DS2}$ and the current.

**Just above onset.** For small $V_{DS2}$, $M_2$ is a resistor

$$R_{on2} = \frac{1}{\mu_nC_{ox}(W/L)_2V_{ov1}}$$

in series with the diode-connected $M_3$.

<!-- diagram: diagram-01.cir -->

At small currents the drop $I_{D2}R_{on2}$ is negligible compared with $V_{DD} - 0.8$ V, so $M_3$ alone sets the current:

$$I_{D2} \approx \tfrac12\mu_pC_{ox}(W/L)_3\left(V_{DD} - 0.8\ \mathrm{V}\right)^2 ,$$

which leaves zero **quadratically**, with zero slope at 0.8 V.

**Slope.** Differentiating the KVL, $dV_{DD} = d|V_{GS3}| + dV_{DS2}$, with $dI = g_{m3}\,d|V_{GS3}|$, $g_{m3} = \mu_pC_{ox}(W/L)_3(|V_{GS3}| - 0.8)$, and $dI = g_{ds2}\,dV_{DS2}$, $g_{ds2} = \partial I_{D2}/\partial V_{DS2} = \mu_nC_{ox}(W/L)_2(V_{ov1} - V_{DS2})$:

$$dV_{DD} = \frac{dI}{g_{m3}} + \frac{dI}{g_{ds2}} \quad\Longrightarrow\quad \frac{dI_{D2}}{dV_{DD}} = \frac{1}{1/g_{m3} + 1/g_{ds2}} ,$$

two conductances in series. At onset $g_{m3} = 0$, so the slope is zero; as the current grows, $g_{m3}$ grows and the curve steepens; as $V_{DS2}$ approaches $V_{ov1}$, $g_{ds2} \to 0$ and the curve **bends over** into the plateau.

### Step 5 — Second break point: $M_2$ enters saturation

$M_2$ saturates when $V_{DS2} = V_{GS2} - V_{THN} = V_{ov1}$, where its current is the ideal mirror current

$$I_{D2} = \tfrac12\mu_nC_{ox}(W/L)_2V_{ov1}^2 = \tfrac12\mu_nC_{ox}(W/L)_2\cdot\frac{2I_{REF}}{\mu_nC_{ox}(W/L)_1} = \frac{(W/L)_2}{(W/L)_1}I_{REF} .$$

$M_3$ carries it with

$$|V_{GS3}| = 0.8\ \mathrm{V} + \sqrt{\frac{2I_{D2}}{\mu_pC_{ox}(W/L)_3}} ,$$

so, from the KVL, the break point is at

$$V_{DD,1} = |V_{GS3}| + V_{ov1} = |V_{THP}| + \sqrt{\frac{2I_{D2}}{\mu_pC_{ox}(W/L)_3}} + \sqrt{\frac{2I_{REF}}{\mu_nC_{ox}(W/L)_1}} .$$

The slope here is zero ($g_{ds2} = 0$), so the rising curve joins the plateau smoothly.

### Step 6 — Region III: $V_{DD} \ge V_{DD,1}$, the plateau

$M_2$ is saturated and, with $\lambda = 0$, its current no longer depends on $V_{DS2}$; a higher $V_{DD}$ only raises $V_{DS2} = V_{DD} - |V_{GS3}|$. The output is constant up to 3 V:

$$I_{out} = \frac{(W/L)_4}{(W/L)_3}\cdot\frac{(W/L)_2}{(W/L)_1}\,I_{REF}$$

(rising slowly with $V_{DD}$ if $\lambda > 0$). This assumes $V_{DD,1} < 3$ V, which holds for reasonable sizes; with very small devices or a very large $I_{REF}$ the plateau might not be reached within 3 V.

### Step 7 — Illustrative example

To show the shape, take $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, $(W/L)_{1,2} = 20$, $(W/L)_{3,4} = 50$ and $I_{REF} = 100\ \mu$A:

$$
\begin{aligned}
V_{ov1} &= \sqrt{\frac{2(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(20)}} = 0.273\ \mathrm{V},\\
I_{D2,sat} &= \frac{20}{20}(100\ \mu\mathrm{A}) = 100\ \mu\mathrm{A},\\
V_{ov3} &= \sqrt{\frac{2(100\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(50)}} = 0.323\ \mathrm{V},\\
V_{DD,1} &= 0.8 + 0.323 + 0.273 = 1.40\ \mathrm{V} .
\end{aligned}
$$

Solving the two Region-II equations numerically:

| $V_{DD}$ (V) | 0.8 | 0.9 | 1.0 | 1.1 | 1.2 | 1.3 | 1.4 | 2.0 | 3.0 |
|---|---|---|---|---|---|---|---|---|---|
| $V_{DS2}$ (V) | 0 | 0.011 | 0.037 | 0.076 | 0.127 | 0.192 | 0.277 | 0.877 | 1.877 |
| $I_{out}$ (µA) | 0 | 7.7 | 25.4 | 48.1 | 71.4 | 91.1 | 100 | 100 | 100 |

The curve starts flat at 0.8 V, is steepest around 1.1–1.2 V, and levels off smoothly at 1.40 V (beyond which $V_{DS2} = V_{DD} - |V_{GS3}| = V_{DD} - 1.123$ V).

### Result

Sketch of $I_{out}$ versus $V_{DD}$ (0 to 3 V):

| $V_{DD}$ range | State of the devices | $I_{out}$ |
|---|---|---|
| $0$ to $\lvert V_{THP}\rvert = 0.8$ V | $M_3$, $M_4$ off; $M_2$ has no $V_{DS}$ | $0$ |
| $0.8$ V to $V_{DD,1}$ | $M_3$, $M_4$ on (saturated); $M_2$ in triode | rises from 0, first $\approx\tfrac{(W/L)_4}{(W/L)_3}\tfrac12\mu_pC_{ox}(W/L)_3(V_{DD} - 0.8)^2$, then bends over |
| $V_{DD,1}$ to 3 V | $M_2$ saturated | flat at $\dfrac{(W/L)_2}{(W/L)_1}\cdot\dfrac{(W/L)_4}{(W/L)_3}I_{REF}$ |

with

$$V_{DD,1} = |V_{THP}| + \sqrt{\frac{2I_{D2}}{\mu_pC_{ox}(W/L)_3}} + \sqrt{\frac{2I_{REF}}{\mu_nC_{ox}(W/L)_1}}, \qquad I_{D2} = \frac{(W/L)_2}{(W/L)_1}I_{REF} .$$

The slope is zero at both break points ($dI/dV_{DD} = 1/(1/g_{m3} + 1/g_{ds2})$), so the transition is a smooth S-shaped rise. Above $V_{DD,1}$ the output is constant (with $\lambda = 0$).

**Common mistake.** Placing the onset at the NMOS threshold (0.7 V) because of $M_1$. The ideal $I_{REF}$ keeps $M_1$ biased at any supply; nothing flows until $V_{DD} > |V_{THP}| = 0.8$ V turns on $M_3$.

**Common mistake.** Drawing a constant $I_{out}$ for all $V_{DD}$, or putting the second break point at $|V_{GS3}| + V_{GS1}$. $M_2$ needs only $V_{DS2} = V_{ov1}$ to saturate, not a full $V_{GS1}$.

**Common mistake.** Inverting the mirror ratios. Each mirror scales by (output device)/(input device): $(W/L)_2/(W/L)_1$ and $(W/L)_4/(W/L)_3$.
