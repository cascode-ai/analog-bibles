# Detailed solution - R099

**Approach.** Here the *PMOS* $M_3$ is the input device (gate at $V_{in}$, source at $V_{DD}$), and the load is the cascoded NMOS current source $M_2$ (gate $V_{b1}$) over $M_1$ (gate $V_{b2}$). All three carry the same current, set by whichever side can carry less: the load (its fixed saturation current $I_1$) or $M_3$ (whose capability *falls* as $V_{in}$ rises). The two cross at $V_{in}^*$, where all three are saturated and the gain is very high. Then follow each device's region and the cutoff of $M_3$ at $V_{in} = V_{DD} - |V_{THP}|$.

### Step 1 — Load current, input device and region boundaries

Call the drain of $M_1$ (source of $M_2$) node $X$; $M_2$ has $V_{SB2} = V_X$. $M_1$ has the fixed $V_{GS1} = V_{b2} > 0.7$ V, so while saturated the load carries (ignoring the small $1 + \lambda V_{DS}$ factor)

$$I_1 = \frac12\beta_1(V_{b2} - 0.7)^2 .$$

$M_3$ has $V_{SG3} = 3 - V_{in}$: it is on only for $V_{in} < V_{DD} - |V_{THP}| = 2.2$ V, with overdrive $|V_{ov3}| = 2.2 - V_{in}$ and saturation current $\frac12\beta_3(2.2 - V_{in})^2$, which falls as $V_{in}$ rises.

| Device | Saturated when | In triode when |
|---|---|---|
| $M_3$ | $V_{SD3} \ge V_{SG3} - 0.8$, i.e. $V_{out} \le V_{in} + 0.8$ V | $V_{out}$ above that |
| $M_2$ | $V_{out} \ge V_{b1} - V_{TH2}(V_X)$ | $V_{out}$ below that |
| $M_1$ | $V_X \ge V_{b2} - 0.7$ V | $V_X$ below that |

### Step 2 — Small $V_{in}$: $M_3$ in triode, $V_{out}$ just below $V_{DD}$

At small $V_{in}$, $M_3$ could supply far more than $I_1$, so the load sets $I = I_1$ (with $M_2$ and $M_1$ saturated) and $M_3$ sits in **triode** with a small $V_{SD3}$, like a small resistor to $V_{DD}$:

$$V_{out} \approx V_{DD} - I_1R_{on3}, \qquad R_{on3} \approx \frac{1}{\beta_3(2.2 - V_{in})},$$

**just below $V_{DD}$, falling slowly** as $R_{on3}$ grows with $V_{in}$.

### Step 3 — $V_{in} \approx V_{in}^*$: all saturated, a steep high-gain drop

$M_3$ enters saturation when $V_{out}$ falls to $V_{in} + 0.8$ V, and its saturation current equals the load current when

$$\frac12\beta_3(2.2 - V_{in}^*)^2 = I_1 \quad\Longrightarrow\quad V_{in}^* = 2.2 - \sqrt{\frac{2I_1}{\beta_3}} = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_1}{\beta_3}} .$$

Around $V_{in}^*$ all three transistors are saturated. In the small-signal model, $M_3$ (source at ac ground, $v_{sg3} = -v_{in}$) injects $-g_{m3}v_{in}$ into $out$ with $r_{O3}$ to ground; $M_2$ (gate at ac ground, source at $X$) carries $-(g_{m2} + g_{mb2})v_X$ from $out$ to $X$ with $r_{O2}$ in parallel; $M_1$ reduces to $r_{O1}$ from $X$ to ground.

<!-- diagram: diagram-01.cir -->

Looking down into the cascode, $R_{down} = r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2} \approx g_{m2}r_{O2}r_{O1}$ (the standard cascode result). KCL at $out$:

$$
\begin{aligned}
-g_{m3}v_{in} &= \frac{v_{out}}{r_{O3}\|R_{down}}\\
A_v &= -g_{m3}\left[r_{O3}\|(g_{m2}r_{O2}r_{O1})\right] .
\end{aligned}
$$

This is very large, limited mainly by $r_{O3}$ since the input device is not cascoded. So $V_{out}$ **drops steeply** from about $V_{in}^* + 0.8$ V (the $M_3$ edge) to about $V_{b1} - V_{TH2}$, where $M_2$ enters triode.

### Step 4 — Below the drop: $M_2$, then $M_1$, leave saturation

Once $V_{out} < V_{b1} - V_{TH2}$, $M_2$ is in triode and no longer holds $X$ up. $X$ falls with $V_{out}$, and **$M_1$ enters triode when $V_X < V_{b2} - 0.7$ V**. The load can then no longer force $I_1$, so the saturated $M_3$ sets the current,

$$I = \frac12\beta_3(2.2 - V_{in})^2 < I_1 ,$$

and $V_{out}$ is the small drop this current produces across $M_2$ and $M_1$ in triode. As $V_{in} \to 2.2$ V the current goes to zero, so **$V_{out}$ falls toward 0**.

### Step 5 — $V_{in} \ge 2.2$ V: $M_3$ off

$M_3$ is off, and $M_2$ and $M_1$ (gates biased on) pull the output down with zero current, hence zero voltage:

$$V_{out} = 0\qquad (V_{in} \ge 2.2\ \mathrm{V}).$$

### Step 6 — A numerical example

For illustration take $V_{b2} = 1.0$ V, $V_{b1} = 1.6$ V, $\beta_1 = \beta_2 = 2\ \mathrm{mA/V^2}$, $\beta_3 = 1\ \mathrm{mA/V^2}$ (with the given $\lambda_n = 0.1\ \mathrm{V^{-1}}$, $\lambda_p = 0.2\ \mathrm{V^{-1}}$):

$$
\begin{aligned}
I_1 &= \tfrac12(2\ \mathrm{mA/V^2})(1.0 - 0.7)^2\ \mathrm{V^2} = 90\ \mu\mathrm{A},\\
V_{in}^* &\approx 2.2 - \sqrt{2(90\ \mu\mathrm{A})/(1\ \mathrm{mA/V^2})} = 2.2 - 0.424 = 1.776\ \mathrm{V},\\
V_X &\approx V_{b1} - V_{TH2} - \sqrt{2I_1/\beta_2} \approx 1.6 - 0.80 - 0.30 \approx 0.50\ \mathrm{V}\ (> V_{b2} - 0.7 = 0.3\ \mathrm{V},\ M_1\ \text{saturated}),\\
V_{b1} - V_{TH2} &\approx 1.6 - 0.80 = 0.80\ \mathrm{V}\quad(M_2\ \text{edge}).
\end{aligned}
$$

The exact solution (with the $1 + \lambda V_{DS}$ factors) gives:

| $V_{in}$ (V) | $V_{out}$ (V) | $V_X$ (V) | $M_3$ | $M_2$ | $M_1$ | Slope |
|---|---|---|---|---|---|---|
| 0 | 2.957 | 0.516 | triode | sat | sat | −0.02 |
| 1.0 | 2.920 | 0.515 | triode | sat | sat | −0.07 |
| 1.5 | 2.853 | 0.515 | triode | sat | sat | −0.26 |
| 1.7 | 2.763 | 0.514 | triode | sat | sat | −0.8 |
| 1.782 | 2.582 | 0.512 | → sat | sat | sat | −25 |
| 1.80 | 2.090 | 0.507 | sat | sat | sat | −29 |
| 1.82 | 1.455 | 0.501 | sat | sat | sat | −34 |
| 1.838 | 0.796 | 0.493 | sat | → triode | sat | −39 |
| 1.851 | 0.394 | 0.300 | sat | triode | → triode | −27 |
| 2.0 | 0.078 | 0.058 | sat | triode | triode | −0.85 |
| 2.1 | 0.018 | 0.014 | sat | triode | triode | −0.37 |
| ≥ 2.2 | 0 | 0 | off | — | — | 0 |

The output falls by about 2.2 V over about 70 mV of input near $V_{in}^*$ (slope 25 to 39), then slides to zero at 2.2 V.

### Result

An **inverting** characteristic, with the PMOS $M_3$ as the input device and the cascoded current source $M_2$–$M_1$ as the load ($I_1 = \tfrac12\beta_1(V_{b2} - 0.7)^2$):

- **Small $V_{in}$:** $M_3$ (large $V_{SG}$) could supply more than $I_1$, so it is in triode and $V_{out}$ is just below $V_{DD}$; $M_2$ and $M_1$ are saturated, carrying $I_1$.
- **$M_3$ saturates** when $V_{out} < V_{in} + 0.8$ V. At $V_{in}^* = 2.2 - \sqrt{2I_1/\beta_3}$ its saturation current equals $I_1$: all devices saturated, gain $\approx g_{m3}[r_{O3}\|(g_{m2}r_{O2}r_{O1})]$, very large, and $V_{out}$ drops steeply from $\approx V_{in}^* + 0.8$ V to $\approx V_{b1} - V_{TH2}$ ($M_2$ enters triode).
- **Further:** node $X$ falls with $V_{out}$, and $M_1$ enters triode when $V_X < V_{b2} - 0.7$ V. The current is then set by $M_3$, $\tfrac12\beta_3(2.2 - V_{in})^2 < I_1$, and $V_{out}$ (the drop across $M_2$ and $M_1$ in triode) falls toward 0.
- **$V_{in} \ge 2.2$ V:** $M_3$ off, $V_{out} = 0$ (pulled down by $M_2$ and $M_1$ with zero current).
- **Transition points:** $V_{out} = V_{in} + 0.8$ V ($M_3$ triode/saturation); $V_{in}^*$; $V_{out} = V_{b1} - V_{TH2}$; $V_X = V_{b2} - 0.7$ V; $V_{in} = 2.2$ V.

**Common mistake.** Treating $M_1$ (at the bottom, as in most CS stages) as the input device, or drawing a non-inverting curve. The input drives the PMOS at the top; raising $V_{in}$ reduces $V_{SG3}$, so $V_{out}$ falls.

**Common mistake.** Leaving a nonzero output above $V_{in} = 2.2$ V. Once $M_3$ is off, the NMOS stack pulls the output to 0 V.

**Common mistake.** Drawing a gradual decline over the whole range. While $M_3$ can supply more than $I_1$ the output is pinned near $V_{DD}$; the fall happens in a narrow window around $V_{in}^*$, where the output sees the very large resistance $r_{O3}\|(g_{m2}r_{O2}r_{O1})$.
