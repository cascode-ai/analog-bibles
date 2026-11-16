# Detailed solution - R127

**Approach.** Compute $g_m$, $r_O$ and the body-effect transconductance $g_{mb}$ of $M_2$ (whose source is at $V_X$) at the given bias, derive the cascode gain with $R_D$ as the load, and evaluate it. Because $R_D$ is tiny compared with the cascode's output resistance, the result is close to $-g_{m1}R_D$.

### Step 1 — Small-signal parameters

With $(W/L)_1 = 50/0.5 = 100$, $(W/L)_2 = 10/0.5 = 20$ and $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$:

$$
\begin{aligned}
g_{m1} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{A/V} = 3.66\ \mathrm{mS},\\
g_{m2} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(20)(0.5\ \mathrm{mA})} = \sqrt{2.68\times10^{-6}}\ \mathrm{A/V} = 1.64\ \mathrm{mS},
\end{aligned}
$$

$$r_{O1} = r_{O2} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega}.$$

**Body effect of $M_2$.** Its bulk is at ground and its source at $V_{SB2} = V_X = 0.323$ V, so it has a second source $g_{mb2}v_{bs2}$ with $g_{mb} = \eta g_m$, $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$:

$$
\begin{aligned}
\eta_2 &= \frac{0.45}{2\sqrt{0.9 + 0.323}} = \frac{0.45}{2\times1.106} = 0.203,\\
g_{mb2} &= \eta_2\,g_{m2} = 0.203\times1.64\ \mathrm{mS} = 0.333\ \mathrm{mS},\\
g_{m2} + g_{mb2} &= 1.637 + 0.333 = 1.970\ \mathrm{mS}.
\end{aligned}
$$

$M_1$ has $V_{SB1} = 0$ and $v_{bs1} = 0$, so its body effect plays no role.

### Step 2 — Small-signal model and gain expression

$V_{DD}$ and $V_b$ are ac grounds. For $M_2$, $v_{gs2} = v_{bs2} = -v_X$, so its two controlled sources together carry $-(g_{m2} + g_{mb2})v_X$ from out to $X$, with $r_{O2}$ between out and $X$. $M_1$ is $g_{m1}v_{in}$ from $X$ to ground with $r_{O1}$, and $R_D$ goes from out to ac ground.

<!-- diagram: diagram-01.cir -->

Let $i$ be the signal current flowing from the output down through $M_2$ and $M_1$, and $g_t = g_{m2} + g_{mb2}$:

$$v_{out} = -iR_D, \qquad i = g_{m1}v_{in} + \frac{v_X}{r_{O1}}\ \Longrightarrow\ v_X = r_{O1}(i - g_{m1}v_{in}),$$

$$i = -g_tv_X + \frac{v_{out} - v_X}{r_{O2}}.$$

Substituting $v_X$ and $v_{out}$ and multiplying by $r_{O2}$:

$$ir_{O2} = -g_tr_{O1}r_{O2}\,i + g_tr_{O1}r_{O2}\,g_{m1}v_{in} - iR_D - r_{O1}i + r_{O1}g_{m1}v_{in}.$$

Collecting the $i$ and $v_{in}$ terms:

$$i\,(R_D + r_{O1} + r_{O2} + g_tr_{O1}r_{O2}) = g_{m1}r_{O1}\,(1 + g_tr_{O2})\,v_{in},$$

and with $v_{out} = -iR_D$:

$$A_v = -\frac{g_{m1}r_{O1}\left[1 + (g_{m2} + g_{mb2})r_{O2}\right]R_D}{R_D + r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2}}.$$

### Step 3 — Numerical evaluation

$$
\begin{aligned}
(g_{m2} + g_{mb2})r_{O2} &= (1.970\ \mathrm{mS})(20\ \mathrm{k\Omega}) = 39.40,\\
r_{O1}\left[1 + (g_{m2} + g_{mb2})r_{O2}\right] &= (20\ \mathrm{k\Omega})(40.40) = 808.1\ \mathrm{k\Omega},\\
R_{out,c} \equiv r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2} &= 20 + 20 + 39.40\times20\ \mathrm{k\Omega} = 828.1\ \mathrm{k\Omega},\\
\text{denominator} &= R_D + R_{out,c} = 1 + 828.1 = 829.1\ \mathrm{k\Omega},
\end{aligned}
$$

$$A_v = -(3.66\ \mathrm{mS})(1\ \mathrm{k\Omega})\times\frac{808.1\ \mathrm{k\Omega}}{829.1\ \mathrm{k\Omega}} = -3.66\times0.9747 \approx -3.57 .$$

### Step 4 — Interpretation: $A_v \approx -g_{m1}R_D$

The gain is $A_v = -G_m\,(R_D\parallel R_{out,c})$, where $R_{out,c} = 828$ kΩ is the resistance looking down into the cascode and $G_m = g_{m1}r_{O1}[1 + (g_{m2} + g_{mb2})r_{O2}]/R_{out,c} = 3.66\ \mathrm{mS}\times808.1/828.1 = 3.57$ mS is its short-circuit transconductance (slightly below $g_{m1}$ because a little of $M_1$'s signal current is lost in $r_{O1}$). $R_D = 1$ kΩ is about 800 times smaller than $R_{out,c}$, so

$$A_v \approx -G_mR_D \approx -g_{m1}R_D = -3.66 .$$

With a 1-kΩ resistive load, the cascode's high output resistance (about $g_{m2}r_{O2}r_{O1}$) is wasted: the load sets the gain. Its benefits here are a reduced Miller effect on $M_1$ and better input–output isolation. The body effect of $M_2$ barely matters (without it the gain would be −3.55).

### Result

$$A_v = -\frac{g_{m1}r_{O1}\left[1 + (g_{m2} + g_{mb2})r_{O2}\right]R_D}{R_D + r_{O1} + r_{O2} + (g_{m2} + g_{mb2})r_{O1}r_{O2}} \approx -3.57,$$

with $g_{m1} = 3.66$ mS, $g_{m2} = 1.64$ mS, $g_{mb2} = 0.333$ mS and $r_{O1} = r_{O2} = 20$ kΩ. This is essentially $-g_{m1}R_D = -3.66$, because the cascode output resistance (≈ 828 kΩ) is far larger than $R_D$.

**Common mistake.** Quoting the intrinsic cascode gain, of order $g_{m1}(g_{m2} + g_{mb2})r_{O1}r_{O2}$ (about −2900 here), as if the load were an ideal current source. $R_D = 1$ kΩ in parallel with the 828-kΩ cascode resistance dominates it.

**Common mistake.** Using $g_{m2}$ instead of $g_{m1}$, e.g. $A_v \approx -g_{m2}R_D = -1.64$. The input drives $M_1$; the common-gate $M_2$ only passes $M_1$'s signal current to the output.

**Common mistake.** A positive gain. A rising $v_{in}$ increases the current through $R_D$, so $V_{out}$ falls.
