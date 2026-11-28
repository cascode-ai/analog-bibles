# Detailed solution - R086

**Approach:** The gain is $-g_{m1}/g_{m2}$ for any $I_S$, because the ideal current source is an open circuit for small signals. Express both transconductances through their drain currents: $g_{m1}$ stays fixed because $I_1$ is fixed, while $g_{m2}$ falls because $M_2$ carries only $I_1 - I_S$. Normalizing to the gain at $I_S = 0$ gives the curve.

### Step 1 — Branch currents and the gain for any $I_S$

$I_S$ feeds the output in parallel with the diode-connected PMOS $M_2$, so KCL at the output gives

$$
\begin{aligned}
I_1 &= I_S + |I_{D2}|\\
|I_{D2}| &= I_1 - I_S .
\end{aligned}
$$

As $I_S$ grows from 0 to $0.75I_1$, the current in $M_2$ falls from $I_1$ to $0.25I_1$. $M_1$ is saturated (given), and $M_2$ ($V_{SD2} = V_{SG2}$) is saturated while it conducts.

In the small-signal model, $M_1$ draws $g_{m1}v_{in}$ from $out$, the diode-connected $M_2$ is a resistance $1/g_{m2}$ to ac ground, and $I_S$ is open. KCL at $out$:

$$
\begin{aligned}
-g_{m2}v_{out} &= g_{m1}v_{in}\\
A_v &= -\frac{g_{m1}}{g_{m2}} .
\end{aligned}
$$

This holds throughout the specified sweep. The current source changes the gain only *indirectly*, through the bias current of $M_2$.

### Step 2 — Express the transconductances through the currents

For a fixed device size, the saturation square law gives $|I_D|=\beta |V_{ov}|^2/2$, where $\beta=\mu C_{ox}(W/L)$. Differentiating gives $g_m=\beta|V_{ov}|$. Eliminating overdrive yields $g_m=\sqrt{2\beta|I_D|}$. Applied to the two branch currents, this gives

$$
\begin{aligned}
g_{m1} &= \sqrt{2\mu_nC_{ox}\left(\tfrac{W}{L}\right)_1I_1} &&\text{(constant)},\\
g_{m2} &= \sqrt{2\mu_pC_{ox}\left(\tfrac{W}{L}\right)_2(I_1 - I_S)} &&\text{(falls as } I_S \text{ rises)}.
\end{aligned}
$$

Dividing (the factors $2$ and $C_{ox}$ cancel):

$$
|A_v| = \frac{g_{m1}}{g_{m2}} = \sqrt{\frac{2\mu_nC_{ox}(W/L)_1I_1}{2\mu_pC_{ox}(W/L)_2(I_1 - I_S)}} = \sqrt{\frac{\mu_n(W/L)_1\,I_1}{\mu_p(W/L)_2\,(I_1 - I_S)}} .
$$

### Step 3 — Normalize to the gain at $I_S = 0$

At $I_S = 0$ both devices carry $I_1$:

$$A_0 = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}} .$$

Factoring out $A_0$ and writing $I_1 - I_S = I_1(1 - I_S/I_1)$:

$$
|A_v| = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}}\cdot\sqrt{\frac{I_1}{I_1(1 - I_S/I_1)}} = \frac{A_0}{\sqrt{1 - I_S/I_1}} .
$$

The gain is inverting throughout: $A_v = -A_0/\sqrt{1 - I_S/I_1}$.

Cross-check through the overdrives. With $g_m = 2I_D/|V_{ov}|$,

$$|A_v| = \frac{2I_1/V_{ov1}}{2(I_1 - I_S)/|V_{ov2}|} = \frac{I_1}{I_1 - I_S}\cdot\frac{|V_{ov2}|}{V_{ov1}} .$$

$V_{ov1}$ is fixed, while $|V_{ov2}| = \sqrt{2(I_1 - I_S)/[\mu_pC_{ox}(W/L)_2]}$ shrinks as $\sqrt{1 - I_S/I_1}$, so the product is again $\propto (1 - I_S/I_1)^{-1}\cdot(1 - I_S/I_1)^{+1/2} = (1 - I_S/I_1)^{-1/2}$.

### Step 4 — Points and shape of the curve

![Normalized small-signal gain magnitude versus current ratio](/q/R086/solution-gain.svg)

With $x = I_S/I_1$ and $|A_v|/A_0 = 1/\sqrt{1 - x}$:

$$
\begin{aligned}
x = 0.25:&\quad \frac{1}{\sqrt{0.75}} = \frac{1}{0.866} = 1.155,\\
x = 0.5:&\quad \frac{1}{\sqrt{0.5}} = \frac{1}{0.707} = 1.414,\\
x = 0.75:&\quad \frac{1}{\sqrt{0.25}} = \frac{1}{0.5} = 2 .
\end{aligned}
$$

| $I_S/I_1$ | 0 | 0.1 | 0.25 | 0.4 | 0.5 | 0.6 | 0.7 | 0.75 |
|---|---|---|---|---|---|---|---|---|
| $\lvert A_v\rvert/A_0$ | 1.000 | 1.054 | 1.155 | 1.291 | 1.414 | 1.581 | 1.826 | 2.000 |

The slope is $\dfrac{d(|A_v|/A_0)}{dx} = \dfrac12(1 - x)^{-3/2}$: 0.5 at $x = 0$, 1.41 at $x = 0.5$ and 4 at $x = 0.75$. So the curve (horizontal axis $I_S$ from 0 to $0.75I_1$):

- starts at $A_0$ with a gentle slope ($A_0/2$ per unit of $I_S/I_1$);
- rises monotonically and ever faster (convex);
- reaches $2A_0$ at $I_S = 0.75I_1$, where the current in $M_2$ has dropped to a quarter;
- would have a vertical asymptote at $I_S = I_1$, outside the plotted range.

The square root appears because, at fixed $W/L$, $g_{m2}$ is proportional to the square root of its current. (As $I_S$ rises, $V_{SG2}$ falls and $V_{out}$ moves up, which helps keep $M_1$ saturated; near $I_S = I_1$, $M_2$ would approach weak inversion and the neglected output resistances would limit the gain.)

### Result

$$|A_v| = \frac{g_{m1}}{g_{m2}} = \sqrt{\frac{\mu_n(W/L)_1\,I_1}{\mu_p(W/L)_2\,(I_1 - I_S)}} = \frac{A_0}{\sqrt{1 - I_S/I_1}}, \qquad A_0 = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}},$$

with an inverting (negative) gain. The plot rises monotonically and ever faster (convex): $A_0$, $1.15A_0$, $1.41A_0$ and $2A_0$ at $I_S/I_1 = 0$, 0.25, 0.5 and 0.75. The reason is that $g_{m1}$ is fixed while $g_{m2}$ falls with $M_2$'s current $I_1 - I_S$.

**Common mistake:** Taking $g_{m2} \propto I_D$ (from $g_m = 2I_D/V_{ov}$ with $V_{ov}$ held constant), which gives $|A_v| = A_0/(1 - I_S/I_1)$ and a fourfold gain at $I_S = 0.75I_1$. At fixed $W/L$ the overdrive of $M_2$ shrinks with its current, so $g_{m2} \propto \sqrt{I_1 - I_S}$ and the gain only doubles.

**Common mistake:** Keeping the gain constant at the size-ratio value $\sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$. That holds only when both transistors carry the same current, which $I_S$ prevents.

**Common mistake:** Concluding that the gain decreases because the current source "adds a load". An ideal current source is an open circuit for small signals; its only effect is to reduce the bias current of $M_2$.
