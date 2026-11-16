# Detailed solution - R340

**Approach.** Both transistors are driven by the input, so both deliver signal current. $M_2$ (with $\lambda = 0$) is a current source whose value depends on $v_{in}$: it injects $-g_{m2}v_{in} + I_{n2}$ into the output. Everything that enters the output must pass through $M_1$ and $R_F$ to the source node S and then through $R_S$ to ground. This fixes the source voltage. One more KCL equation at the output then gives $v_{out}$ as a sum of signal and noise terms. Dividing each noise term by the (enlarged) signal gain refers it to the input.

### Step 1 — Small-signal model

**Nodes:** the input (both gates), the output (both drains, top of $R_F$), and the source node S of $M_1$.

- **$M_2$** (PMOS, source at $V_{DD}$ = ac ground, gate at $v_{in}$, drain at the output): it delivers into the output the current $g_{m2}v_{sg2} = g_{m2}(0 - v_{in}) = -g_{m2}v_{in}$. With $\lambda = 0$ its output resistance is infinite. Its channel noise $I_{n2}$ ($\overline{I_{n2}^2} = 4kT\gamma g_{m2}$) is taken as flowing into the output.
- **$M_1$** (NMOS, gate at $v_{in}$): a current source $g_{m1}(v_{in} - v_S)$ from the output to S, with its noise $I_{n1}$ ($\overline{I_{n1}^2} = 4kT\gamma g_{m1}$) in parallel.
- **$R_F$**: from the output to S, with its Norton noise $I_{nF}$ ($\overline{I_{nF}^2} = 4kT/R_F$) in parallel.
- **$R_S$**: from S to ground, in series with its Thevenin noise voltage $V_{nS}$ ($\overline{V_{nS}^2} = 4kTR_S$).

Here $k$ is Boltzmann's constant, $T$ the absolute temperature and $\gamma$ the channel-noise coefficient. Define the current injected by $M_2$:

$$i_2 \equiv -g_{m2}v_{in} + I_{n2}.$$

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the output and at S

**KCL at the output.** The current $i_2$ entering from $M_2$ leaves through $M_1$ and $R_F$, both toward S:

$$i_2 = g_{m1}(v_{in} - v_S) + I_{n1} + \frac{v_{out} - v_S}{R_F} + I_{nF}. \tag{1}$$

**KCL at S.** The current arriving at S through $M_1$ and $R_F$ is therefore $i_2$, and it can only leave through $R_S$. KVL from S to ground through $V_{nS}$ and $R_S$:

$$v_S = V_{nS} + R_S\,i_2 = V_{nS} + R_S(I_{n2} - g_{m2}v_{in}). \tag{2}$$

### Step 3 — Output voltage

Solve (1) for $v_{out}$ (multiply by $R_F$ and rearrange):

$$
\begin{aligned}
v_{out} &= v_S + R_F\left[i_2 - I_{n1} - I_{nF} - g_{m1}(v_{in} - v_S)\right]\\
&= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)\,v_S + R_F\,i_2 - R_F(I_{n1} + I_{nF}).
\end{aligned}
$$

Substitute (2) for $v_S$:

$$
\begin{aligned}
v_{out} &= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)V_{nS} + (1 + g_{m1}R_F)R_S\,i_2 + R_F\,i_2 - R_F(I_{n1} + I_{nF})\\
&= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)V_{nS} + K_2\,i_2 - R_F(I_{n1} + I_{nF}),
\end{aligned}
$$

where

$$K_2 \equiv (1 + g_{m1}R_F)R_S + R_F = R_S + R_F + g_{m1}R_FR_S .$$

$K_2$ is the transresistance from a current injected into the output node to $v_{out}$. Finally substitute $i_2 = -g_{m2}v_{in} + I_{n2}$:

$$v_{out} = -\left(g_{m1}R_F + g_{m2}K_2\right)v_{in} + (1 + g_{m1}R_F)V_{nS} + K_2I_{n2} - R_F(I_{n1} + I_{nF}).$$

### Step 4 — Signal gain

$$A_v = \frac{v_{out}}{v_{in}} = -\left(g_{m1}R_F + g_{m2}K_2\right) = -\left[g_{m1}R_F + g_{m2}(R_S + R_F + g_{m1}R_FR_S)\right].$$

There are two contributions:

- $g_{m1}R_F$: $M_1$'s signal current circulates through $R_F$ (as in a stage with an ideal current-source load);
- $g_{m2}K_2$: $M_2$'s signal current must flow through the $M_1$/$R_F$ combination and $R_S$, and it sees the transresistance $K_2$.

Because $M_2$'s signal and noise are injected at the same place, they see the same $K_2$.

### Step 5 — Referring the noise to the input

Collect the noise coefficients from Step 3:

| Source | Coefficient in $v_{out}$ | PSD of source |
|---|---|---|
| $I_{n1}$ | $-R_F$ | $4kT\gamma g_{m1}$ |
| $I_{nF}$ | $-R_F$ | $4kT/R_F$ |
| $V_{nS}$ | $1 + g_{m1}R_F$ | $4kTR_S$ |
| $I_{n2}$ | $K_2$ | $4kT\gamma g_{m2}$ |

The sources are uncorrelated, so the output PSD is the sum of (coefficient)² × (source PSD):

$$
\begin{aligned}
\overline{V_{n,out}^2} &= R_F^2\cdot4kT\gamma g_{m1} + R_F^2\cdot\frac{4kT}{R_F} + (1 + g_{m1}R_F)^2\cdot4kTR_S + K_2^2\cdot4kT\gamma g_{m2}\\
&= 4kT\left[\gamma g_{m1}R_F^2 + R_F + R_S(1 + g_{m1}R_F)^2 + \gamma g_{m2}K_2^2\right].
\end{aligned}
$$

Divide by $A_v^2 = (g_{m1}R_F + g_{m2}K_2)^2$:

$$\overline{V_{n,in}^2} = \frac{4kT\left[\gamma g_{m1}R_F^2 + R_F + R_S(1 + g_{m1}R_F)^2 + \gamma g_{m2}K_2^2\right]}{\left(g_{m1}R_F + g_{m2}K_2\right)^2}, \qquad K_2 = R_S + R_F + g_{m1}R_FR_S .$$

### Step 6 — Checks

- **$g_{m2} \to 0$** ($M_2$ becomes a noiseless ideal current source):
$$\overline{V_{n,in}^2} \to \frac{4kT\left[\gamma g_{m1}R_F^2 + R_F + R_S(1 + g_{m1}R_F)^2\right]}{(g_{m1}R_F)^2} = 4kT\left[\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_F} + R_S\frac{(1 + g_{m1}R_F)^2}{(g_{m1}R_F)^2}\right],$$
the result for the same circuit with an ideal current source on top.
- **$R_S = 0$:** $K_2 = R_F$ and the gain is $(g_{m1} + g_{m2})R_F$. Then
$$\overline{V_{n,in}^2} = \frac{4kT\left[\gamma(g_{m1} + g_{m2})R_F^2 + R_F\right]}{(g_{m1} + g_{m2})^2R_F^2} = \frac{4kT\gamma}{g_{m1} + g_{m2}} + \frac{4kT}{(g_{m1} + g_{m2})^2R_F},$$
which is a CMOS inverter (total transconductance $g_{m1} + g_{m2}$) loaded by $R_F$ to ground, as expected.
- **Dimensions:** each bracketed term is a resistance ($g_{m1}R_F^2$, $R_F$, $R_S(1+g_{m1}R_F)^2$ and $g_{m2}K_2^2$ are all in ohms), so the numerator is $4kT\times$ ohms, in V²/Hz; the denominator $(g_{m1}R_F + g_{m2}K_2)^2$ is dimensionless.

### Result

With $K_2 \equiv R_S + R_F + g_{m1}R_FR_S$:

$$\overline{V_{n,in}^2} = \frac{4kT\left[\gamma g_{m1}R_F^2 + R_F + R_S(1+g_{m1}R_F)^2 + \gamma g_{m2}K_2^2\right]}{\left(g_{m1}R_F + g_{m2}K_2\right)^2}$$

The gain is $A_v = -(g_{m1}R_F + g_{m2}K_2)$, because $M_2$ also amplifies the input. The four numerator terms come from $M_1$, $R_F$, $R_S$ and $M_2$, in that order.

**Common mistake.** Taking the gain as $g_{m1}R_F$, as if $M_2$ were a fixed-bias current source. $M_2$'s gate is driven by $v_{in}$, so it injects the signal current $-g_{m2}v_{in}$ at the output, which adds $g_{m2}K_2$ to the gain. Using $g_{m1}R_F$ alone overestimates the input-referred noise.

**Common mistake.** Treating $M_2$ as a load to ground or misreading $R_F$ as a resistor from the output to ground. $R_F$ connects the output to the source of $M_1$, so with $R_S \ne 0$ the injected currents produce a source voltage that $M_1$ amplifies; this is where the term $g_{m1}R_FR_S$ inside $K_2$ comes from.

**Common mistake.** Referring $M_2$'s noise with a different transresistance than its signal (for example $R_F$ only). Noise and signal of $M_2$ are both currents injected at the output node, so both are multiplied by the same $K_2$; only the ratio $K_2/(g_{m1}R_F + g_{m2}K_2)$ matters.
