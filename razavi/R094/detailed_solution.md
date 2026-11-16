# Detailed solution - R094

**Approach.** Here the *PMOS* $M_2$ is the input device (gate at $V_{in}$, source at $V_{DD}$), while the NMOS $M_1$, with its gate at the fixed voltage $V_b$, is a current-source load; $R_D$ is in parallel with $M_2$. Write KCL at the output and follow $M_2$ from triode (small $V_{in}$, strongly on) through saturation to cutoff at $V_{in} = V_{DD} - |V_{THP}|$, checking along the way whether $M_1$ stays saturated.

### Step 1 — The circuit and the fixed current of $M_1$

From the figure: $M_2$ (PMOS) has source and bulk at $V_{DD} = 3$ V, gate at $V_{in}$, drain at $V_{out}$. $R_D$ connects $V_{DD}$ to $V_{out}$. $M_1$ (NMOS) has gate at $V_b$, source and bulk at ground, drain at $V_{out}$.

**$M_1$ is a current source.** Its gate–source voltage is fixed at $V_b > 0.7$ V, so while it is saturated ($V_{out} \ge V_b - 0.7$ V) it sinks the constant current

$$I_1 = \frac12\beta_1(V_b - 0.7)^2 .$$

**$M_2$ is the input device.** Its source–gate voltage is $V_{SG2} = V_{DD} - V_{in} = 3 - V_{in}$, so:

- it is **on** while $3 - V_{in} > 0.8$, i.e. $V_{in} < 2.2$ V, and **off** for $V_{in} \ge V_{DD} - |V_{THP}| = 2.2$ V;
- its overdrive is $|V_{ov2}| = 2.2 - V_{in}$;
- it is **saturated** when $V_{SD2} \ge |V_{ov2}|$: $3 - V_{out} \ge 2.2 - V_{in}$, i.e. $V_{out} \le V_{in} + 0.8$ V; otherwise it is in **triode**.

### Step 2 — KCL at the output

$R_D$ and $M_2$ supply current into the output; $M_1$ removes it:

$$\frac{V_{DD} - V_{out}}{R_D} + I_{D2} = I_{D1} .$$

When $M_1$ is saturated, the right-hand side is the constant $I_1$.

### Step 3 — Small $V_{in}$: $M_2$ in triode, $V_{out}$ just below $V_{DD}$

For small $V_{in}$, $M_2$ has a large gate drive ($V_{SG2}$ close to 3 V). In saturation it could supply far more than $I_1$, so it settles in **triode** with a small $V_{SD2}$: it acts like a small resistor $R_{on2} \approx 1/[\beta_2(2.2 - V_{in})]$ from $V_{DD}$ to the output. Then

$$V_{out} \approx V_{DD} - I_1\,(R_{on2}\|R_D),$$

just below $V_{DD}$. $M_1$ is clearly saturated, since its drain is near 3 V.

**Slope.** With $M_1$ an ideal current source (open circuit for small signals), KCL at the output gives

$$\frac{dV_{out}}{dV_{in}} = -g_{m2}\,(R_D\|r_{ds2}),$$

where in triode $g_{m2} = \beta_2V_{SD2}$ is small and $r_{ds2} = 1/[\beta_2(2.2 - V_{in} - V_{SD2})]$ is small. So $V_{out}$ **decreases only slowly** as $V_{in}$ rises. As $V_{in}$ grows, $R_{on2}$ rises, $V_{SD2}$ grows, and the fall speeds up.

### Step 4 — $M_2$ saturated: the steep falling region

**Transition point.** $M_2$ saturates when $V_{out} = V_{in} + 0.8$ V. In saturation,

$$
\begin{aligned}
\frac{V_{DD} - V_{out}}{R_D} + \frac12\beta_2(2.2 - V_{in})^2 &= I_1\\
V_{out} &= V_{DD} - R_D\left[I_1 - \tfrac12\beta_2(2.2 - V_{in})^2\right].
\end{aligned}
$$

Setting this equal to $V_{in} + 0.8$ and writing $y = 2.2 - V_{in} = |V_{ov2}|$ gives $y = R_D[I_1 - \frac12\beta_2y^2]$, i.e.

$$\tfrac12\beta_2R_Dy^2 + y - R_DI_1 = 0 \quad\Longrightarrow\quad y = \frac{-1 + \sqrt{1 + 2\beta_2R_D^2I_1}}{\beta_2R_D}, \qquad V_{in} = 2.2 - y .$$

**Slope.** Differentiate the saturation expression:

$$\frac{dV_{out}}{dV_{in}} = R_D\cdot\frac{d}{dV_{in}}\left[\tfrac12\beta_2(2.2 - V_{in})^2\right] = -R_D\,\beta_2(2.2 - V_{in}) = -g_{m2}R_D ,$$

with $g_{m2} = \beta_2(2.2 - V_{in})$. The slope is **steepest where this region begins** (largest overdrive) and **flattens to zero as $V_{in} \to 2.2$ V**, because $g_{m2}$ falls to zero at cutoff. With $M_1$ an ideal current source, the load seen by $M_2$ is just $R_D$.

### Step 5 — $V_{in} \ge 2.2$ V: $M_2$ off, a flat floor

$M_2$ carries no current, so $R_D$ alone supplies $M_1$'s current:

$$V_{out} = V_{DD} - I_1R_D\qquad (V_{in} \ge 2.2\ \mathrm{V}),$$

**constant** up to $V_{in} = 3$ V. It is not 0 V: $R_D$ still connects the output to $V_{DD}$.

**Check on $M_1$.** This assumes $M_1$ stays saturated, $V_{DD} - I_1R_D \ge V_b - 0.7$. If $I_1R_D$ is so large that $V_{out}$ would fall below $V_b - 0.7$ V, $M_1$ enters triode on the way down: the drop is softened, and the floor is instead the solution of

$$\frac{V_{DD} - V_{out}}{R_D} = \beta_1\left[(V_b - 0.7)V_{out} - \tfrac12V_{out}^2\right],$$

which is lower than $V_b - 0.7$ V but still above 0.

### Step 6 — A numerical example

For illustration take $V_b = 1.0$ V, $\beta_1 = 2\ \mathrm{mA/V^2}$, $\beta_2 = 1\ \mathrm{mA/V^2}$, $R_D = 20\ \mathrm{k}\Omega$.

$$
\begin{aligned}
I_1 &= \tfrac12(2\ \mathrm{mA/V^2})(1.0 - 0.7)^2\ \mathrm{V^2} = 90\ \mu\mathrm{A},\\
V_{out,floor} &= 3 - (90\ \mu\mathrm{A})(20\ \mathrm{k}\Omega) = 3 - 1.8 = 1.2\ \mathrm{V}.
\end{aligned}
$$

This is above $V_b - 0.7 = 0.3$ V, so $M_1$ stays saturated throughout.

**$M_2$ saturates** where $\beta_2R_D = 20\ \mathrm{V^{-1}}$ and $2\beta_2R_D^2I_1 = 2(1\ \mathrm{mA/V^2})(20\ \mathrm{k}\Omega)^2(90\ \mu\mathrm{A}) = 72$:

$$y = \frac{-1 + \sqrt{73}}{20} = \frac{-1 + 8.544}{20} = 0.377\ \mathrm{V}, \qquad V_{in} = 2.2 - 0.377 = 1.823\ \mathrm{V}, \qquad V_{out} = 2.623\ \mathrm{V}.$$

The slope there is $-g_{m2}R_D = -(1\ \mathrm{mA/V^2})(0.377\ \mathrm{V})(20\ \mathrm{k}\Omega) = -7.5$.

| $V_{in}$ (V) | $V_{out}$ (V) | $M_2$ | Slope |
|---|---|---|---|
| 0 | 2.960 | triode | −0.02 |
| 1.0 | 2.926 | triode | −0.06 |
| 1.5 | 2.869 | triode | −0.21 |
| 1.7 | 2.800 | triode | −0.57 |
| 1.823 | 2.623 | → saturation | −7.5 |
| 1.9 | 2.100 | saturation | −6.0 |
| 2.0 | 1.600 | saturation | −4.0 |
| 2.1 | 1.300 | saturation | −2.0 |
| 2.2 | 1.200 | cutoff | 0 |
| 3.0 | 1.200 | off | 0 |

### Result

An **inverting** characteristic driven by the PMOS $M_2$, with $I_1 = \tfrac12\beta_1(V_b - 0.7)^2$:

- **Small $V_{in}$:** $M_2$ has a large $V_{SG} = 3 - V_{in}$ and could supply more than $I_1$, so it sits in triode with a small $V_{SD}$. $V_{out}$ is just below $V_{DD}$ and decreases slowly as $V_{in}$ rises. $M_1$ (current source) is saturated.
- **$M_2$ saturated** once $V_{out} < V_{in} + 0.8$ V: $V_{out} = V_{DD} - R_D[I_1 - \tfrac12\beta_2(2.2 - V_{in})^2]$, slope $-g_{m2}R_D$ with $g_{m2} = \beta_2(2.2 - V_{in})$, steepest where the region begins and flattening as $V_{in} \to 2.2$ V.
- If $V_{out}$ falls below $V_b - 0.7$ V, $M_1$ enters triode and the drop is softened.
- **$V_{in} \ge 2.2$ V:** $M_2$ off, $V_{out} = V_{DD} - I_1R_D$ (if this is above $V_b - 0.7$ V; otherwise the lower value set by $R_D$ and $M_1$ in triode), constant up to $V_{in} = 3$ V.
- **Transition points:** $M_2$ triode/saturation at $V_{out} = V_{in} + 0.8$ V; possible $M_1$ triode entry at $V_{out} = V_b - 0.7$ V; $M_2$ cutoff at $V_{in} = V_{DD} - |V_{THP}| = 2.2$ V.

**Common mistake.** Treating $M_1$ as the input device, or drawing a non-inverting curve. $M_1$'s gate is fixed at $V_b$; the input drives the PMOS $M_2$, and raising $V_{in}$ *reduces* $V_{SG2}$, so $M_2$ supplies less current and $V_{out}$ falls.

**Common mistake.** Letting $V_{out}$ fall to 0 V once $M_2$ is off. $R_D$ still connects the output to $V_{DD}$; with $M_1$ sinking $I_1$, the output settles at $V_{DD} - I_1R_D$ (or at the triode-limited value if that would be below $V_b - 0.7$ V).

**Common mistake.** Placing the cutoff of $M_2$ at $V_{in} = 0.8$ V or at $V_{in} = 3$ V. A PMOS with its source at $V_{DD}$ turns off when its gate rises to within $|V_{THP}|$ of $V_{DD}$, i.e. at $V_{in} = 3 - 0.8 = 2.2$ V.
