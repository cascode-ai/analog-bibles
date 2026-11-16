# Detailed solution - R233

**Approach.** $M_1$ has a fixed gate voltage $V_{in}$, so it behaves as a current source once it has enough $V_{DS}$. Its current must flow through the diode-connected PMOS $M_2$, and $M_3$ mirrors that current into $R_L$. As $V_{DD}$ rises from zero we find three regions: no current ($M_2$ off), a rising current ($M_2$ on, $M_1$ in triode), and a constant current ($M_1$ saturated). $V_{out}$ is $R_L$ times the mirrored current.

### Step 1 — The circuit and notation

Reading the figure:

- $M_1$ (NMOS): gate at the constant $V_{in}$ (above 0.7 V), source and bulk at ground, drain at the node we call A.
- $M_2$ (PMOS): source and bulk at $V_{DD}$, gate and drain tied together at node A (diode connection).
- $M_3$ (PMOS): source and bulk at $V_{DD}$, gate tied to the gate of $M_2$, drain at $V_{out}$, which is connected to ground through $R_L$.

Notation: $V_{THN} = 0.7$ V, $|V_{THP}| = 0.8$ V, overdrive $V_{ov} = |V_{GS}| - |V_{TH}|$. Square law with $\lambda = 0$:

$$\text{saturation: } I_D = \tfrac12\mu C_{ox}\tfrac{W}{L}V_{ov}^2, \qquad \text{triode: } I_D = \mu C_{ox}\tfrac{W}{L}\left(V_{ov}V_{DS} - \tfrac12V_{DS}^2\right).$$

The overdrive of $M_1$ is fixed by its gate voltage: $V_{ov1} = V_{in} - 0.7$ V.

### Step 2 — Branch equations

**KVL** from $V_{DD}$ through $M_2$ and $M_1$ to ground ($V_A = V_{DS1}$):

$$V_{DD} = |V_{GS2}| + V_{DS1} .$$

**KCL** at node A (no gate currents): $I_{D1} = I_{D2}$.

**Output.** $M_3$ has the same $V_{SG}$ as $M_2$. If $M_3$ is saturated (checked in Step 7), it copies the current of $M_2$ in the ratio of the sizes:

$$I_{D3} = \frac{(W/L)_3}{(W/L)_2}I_{D2}, \qquad V_{out} = R_LI_{D3} = R_L\frac{(W/L)_3}{(W/L)_2}I_{D1} .$$

### Step 3 — Region I: $0 \le V_{DD} \le 0.8$ V, $V_{out} = 0$

Node A cannot go below ground, so $V_{DS1} \ge 0$ and

$$|V_{GS2}| = V_{DD} - V_{DS1} \le V_{DD} \le 0.8\ \mathrm{V} = |V_{THP}| .$$

$M_2$ is off, so $I_{D2} = I_{D1} = 0$. $M_1$ has a channel ($V_{in} > 0.7$ V) but no current, which forces $V_{DS1} = 0$: node A sits at ground. $M_3$ has the same $V_{SG} = V_{DD} < 0.8$ V and is off too, so no current flows in $R_L$:

$$V_{out} = 0 \quad\text{for } V_{DD} \le 0.8\ \mathrm{V} .$$

### Step 4 — Region II: $M_2$ on, $M_1$ in triode

Just above 0.8 V, $M_2$ starts to conduct. $M_1$ has a fixed overdrive $V_{ov1}$ but only a small $V_{DS1}$, so it is in the **triode** region:

$$
\begin{aligned}
I_{D2} &= \tfrac12\mu_pC_{ox}(W/L)_2\left(V_{DD} - V_{DS1} - 0.8\right)^2 &&(M_2,\ \text{saturated as a diode}),\\
I_{D1} &= \mu_nC_{ox}(W/L)_1\left(V_{ov1}V_{DS1} - \tfrac12V_{DS1}^2\right) &&(M_1,\ \text{triode}),
\end{aligned}
$$

with $I_{D1} = I_{D2}$.

**Near the onset**, $M_1$ in deep triode acts as a resistor,

$$R_{on1} = \frac{1}{\mu_nC_{ox}(W/L)_1V_{ov1}},$$

in series with the diode $M_2$:

<!-- diagram: diagram-01.cir -->

At small currents the drop across $R_{on1}$ is negligible, so the current is set by $M_2$ alone:

$$V_{out} \approx R_L\frac{(W/L)_3}{(W/L)_2}\cdot\tfrac12\mu_pC_{ox}(W/L)_2(V_{DD} - 0.8)^2 = \tfrac12R_L\,\mu_pC_{ox}(W/L)_3(V_{DD} - 0.8)^2 .$$

$V_{out}$ leaves zero quadratically, with zero slope.

**Slope.** Differentiating the KVL, $dV_{DD} = d|V_{GS2}| + dV_{DS1}$, with $dI = g_{m2}\,d|V_{GS2}|$ for the diode and $dI = g_{ds1}\,dV_{DS1}$ for $M_1$ in triode, where $g_{ds1} = \mu_nC_{ox}(W/L)_1(V_{ov1} - V_{DS1})$:

$$\frac{dI_{D1}}{dV_{DD}} = \frac{1}{1/g_{m2} + 1/g_{ds1}} .$$

At the onset $g_{m2} = 0$. As $V_{DS1} \to V_{ov1}$, $g_{ds1} \to 0$. So the slope starts at zero, rises, and falls back to zero: the curve **bends over** as $M_1$ approaches saturation.

### Step 5 — Break point: $M_1$ saturates

$M_1$ saturates when $V_{DS1} = V_{ov1} = V_{in} - 0.7$ V. Its current is then

$$I_{D1,sat} = \tfrac12\mu_nC_{ox}\left(\frac{W}{L}\right)_1(V_{in} - 0.7)^2,$$

and $M_2$ carries it with $|V_{GS2}| = 0.8 + V_{ov2}$, where $V_{ov2} = \sqrt{2I_{D1,sat}/[\mu_pC_{ox}(W/L)_2]}$. From the KVL, this happens at

$$V_{DD,1} = |V_{GS2}| + (V_{in} - 0.7) = 0.8 + \sqrt{\frac{2I_{D1,sat}}{\mu_pC_{ox}(W/L)_2}} + (V_{in} - 0.7) .$$

### Step 6 — Region III: the plateau

For $V_{DD} \ge V_{DD,1}$, $M_1$ is saturated and, with $\lambda = 0$, its current no longer depends on $V_{DD}$: any extra supply voltage only raises $V_{DS1}$. Therefore

$$V_{out,max} = R_L\frac{(W/L)_3}{(W/L)_2}\cdot\tfrac12\mu_nC_{ox}\left(\frac{W}{L}\right)_1(V_{in} - 0.7)^2,$$

constant up to $V_{DD} = 3$ V (with $\lambda > 0$ it would creep up slightly). In effect, $M_1$ converts $V_{in}$ into a current and the mirror delivers a scaled copy to $R_L$.

### Step 7 — Is $M_3$ saturated?

$M_3$ is saturated if $V_{SD3} \ge V_{SG3} - 0.8$ V. With $V_{SD3} = V_{DD} - V_{out}$ and $V_{SG3} = |V_{GS2}| = 0.8 + V_{ov2}$:

$$V_{DD} - V_{out} \ge V_{ov2} \quad\Longleftrightarrow\quad V_{out} \le V_{DD} - V_{ov2} .$$

$V_{out}$ must stay at least one overdrive below $V_{DD}$. For a moderate $R_L$ this holds everywhere and the sketch above is complete. If $R_L$ is so large that $V_{out,max}$ would violate it, $M_3$ enters the triode region and $V_{out}$ follows $V_{DD}$ a little below it, until $V_{DD} \ge V_{out,max} + V_{ov2}$. From there on the plateau is the same (if this happens before 3 V).

### Step 8 — Illustrative example

The sizes are not given. To show the shape, take $\mu_nC_{ox} = 134\ \mu\mathrm{A/V^2}$, $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, $(W/L)_1 = 10$, $(W/L)_2 = (W/L)_3 = 20$, $V_{in} = 1.0$ V and $R_L = 10\ \mathrm{k}\Omega$:

$$
\begin{aligned}
V_{ov1} &= 1.0 - 0.7 = 0.3\ \mathrm{V},\\
I_{D1,sat} &= \tfrac12(134\ \mu\mathrm{A/V^2})(10)(0.3\ \mathrm{V})^2 = 60.3\ \mu\mathrm{A},\\
V_{ov2} &= \sqrt{\frac{2(60.3\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(20)}} = 0.396\ \mathrm{V},\\
V_{DD,1} &= 0.8 + 0.396 + 0.3 = 1.50\ \mathrm{V},\\
V_{out,max} &= (10\ \mathrm{k}\Omega)(1)(60.3\ \mu\mathrm{A}) = 0.603\ \mathrm{V} .
\end{aligned}
$$

$M_3$ check: $V_{out,max} = 0.603$ V $\le V_{DD} - V_{ov2} = 1.50 - 0.40 = 1.10$ V ✓. Solving the Region-II equations numerically:

| $V_{DD}$ (V) | 0.8 | 0.9 | 1.0 | 1.1 | 1.2 | 1.3 | 1.4 | 1.5 | 2.0 | 3.0 |
|---|---|---|---|---|---|---|---|---|---|---|
| $V_{DS1}$ (V) | 0 | 0.008 | 0.029 | 0.061 | 0.102 | 0.154 | 0.219 | 0.304 | 0.804 | 1.804 |
| $V_{out}$ (V) | 0 | 0.032 | 0.112 | 0.220 | 0.341 | 0.460 | 0.559 | 0.603 | 0.603 | 0.603 |

### Result

Sketch of $V_{out}$ versus $V_{DD}$:

| $V_{DD}$ range | Devices | $V_{out}$ |
|---|---|---|
| 0 to $\lvert V_{THP}\rvert = 0.8$ V | $M_2$, $M_3$ off | 0 |
| 0.8 V to $V_{DD,1}$ | $M_2$, $M_3$ on; $M_1$ in triode | rises from 0 (first $\approx\tfrac12R_L\mu_pC_{ox}(W/L)_3(V_{DD} - 0.8)^2$), then bends over |
| $V_{DD,1}$ to 3 V | $M_1$ saturated | flat at $V_{out,max}$ |

$$V_{out,max} = R_L\frac{(W/L)_3}{(W/L)_2}\cdot\frac12\mu_nC_{ox}\left(\frac{W}{L}\right)_1(V_{in} - 0.7)^2, \qquad V_{DD,1} = |V_{GS2}| + (V_{in} - 0.7),$$

with $|V_{GS2}| = 0.8 + \sqrt{2I_{D1,sat}/[\mu_pC_{ox}(W/L)_2]}$. This requires $M_3$ to remain saturated, $V_{out} \le V_{DD} - (|V_{GS2}| - 0.8)$; for a very large $R_L$ the curve instead follows $V_{DD}$ until that condition is met.

**Common mistake.** Drawing $V_{out}$ proportional to $V_{DD}$ over the whole range, or constant from $V_{DD} = 0$. The output is zero until the diode $M_2$ can turn on (0.8 V), and it becomes independent of $V_{DD}$ once $M_1$ saturates, because $V_{in}$, not $V_{DD}$, sets the current.

**Common mistake.** Placing the break point at $|V_{GS2}| + V_{in}$ or at $|V_{GS2}| + V_{THN}$. $M_1$ needs only $V_{DS1} = V_{in} - V_{THN}$ (its overdrive) to saturate.

**Common mistake.** Inverting the mirror ratio. $M_3$ is the output device and $M_2$ the input (diode) device, so the current gain is $(W/L)_3/(W/L)_2$.
