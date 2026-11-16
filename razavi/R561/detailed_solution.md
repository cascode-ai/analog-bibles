# Detailed solution - R561

**Approach.** Five noise sources matter: the drain noise currents of $M_3$, $M_4$, $M_5$ and the thermal noise of $R_1$ and $R_2$. The ideal op amp adjusts the common gate voltage so that $v_X = v_Y$, including for noise. Solve for the gate-driven current this constraint produces, carry it to the output through $M_5$ (scaled by the mirror ratio $K$), add the output branch's own noise, and sum the powers.

### Step 1 — Small-signal noise model

- **PMOS devices.** The common gate moves by $v_g$. $M_3$ and $M_4$ are identical, so each pushes the same gate-driven current $g \equiv -g_{m4}v_g$ into its drain node. $M_5$ has $K = 4.45$ times the width at the same overdrive, so $g_{m5} = Kg_{m4}$ and its gate-driven current is $Kg$. Each PMOS also injects a drain noise current $i_3$, $i_4$, $i_5$ into its drain node, with $\overline{i_n^2} = 4kT\gamma g_m$; with $\lambda = 0$ there is no $r_O$.
- **Bipolar transistors.** $r = 1/g_m$ for $Q_1$ and $Q_2$, $r_3$ for $Q_3$; their own noise is neglected.
- **Resistors.** $R_1$ and $R_2$, each with a series noise voltage $\overline{v_R^2} = 4kTR$.
- **Op amp.** Ideal and noiseless, so it forces $v_X = v_Y$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Small-signal parameters

$$
\begin{aligned}
g_{m3} = g_{m4} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(50\ \mu\mathrm{A})} = \sqrt{3.84\times10^{-7}}\ \mathrm{S} = 0.620\ \mathrm{mS},\\
g_{m5} &= Kg_{m4} = 4.45\times0.620\ \mathrm{mS} = 2.76\ \mathrm{mS}.
\end{aligned}
$$

($M_5$ has $W/L = 445$ and carries 222.5 μA; $\sqrt{2(38.4)(445)(222.5)}\ \mu\mathrm{S}$ gives the same 2.76 mS.) With $V_T = 25.85$ mV at 300 K:

$$
\begin{aligned}
r &= \frac{V_T}{I_{C1,2}} = \frac{25.85\ \mathrm{mV}}{50\ \mu\mathrm{A}} = 517\ \Omega\quad(Q_1, Q_2),\\
r_3 &= \frac{V_T}{I_{C3}} = \frac{25.85\ \mathrm{mV}}{222.5\ \mu\mathrm{A}} = 116\ \Omega\quad(Q_3).
\end{aligned}
$$

With $4kT = 4(1.38\times10^{-23})(300) = 1.657\times10^{-20}$ J and $\gamma = 2/3$:

$$
\begin{aligned}
\overline{i_3^2} = \overline{i_4^2} &= 4kT\gamma g_{m4} = (1.657\times10^{-20})(0.667)(0.620\times10^{-3}) = 6.85\times10^{-24}\ \mathrm{A^2/Hz},\\
\overline{i_5^2} &= 4kT\gamma g_{m5} = (1.657\times10^{-20})(0.667)(2.76\times10^{-3}) = 3.05\times10^{-23}\ \mathrm{A^2/Hz},\\
\overline{v_{R1}^2} &= 4kTR_1 = 1.657\times10^{-17}\ \mathrm{V^2/Hz},\\
\overline{v_{R2}^2} &= 4kTR_2 = 3.31\times10^{-17}\ \mathrm{V^2/Hz}.
\end{aligned}
$$

### Step 3 — The loop: what gate-driven current does the op amp produce?

At X the current $g + i_3$ flows into $r$; at Y the current $g + i_4$ flows through $R_1$ (with $v_{R1}$ in series) and then $r$:

$$v_X = (g + i_3)\,r, \qquad v_Y = (g + i_4)(R_1 + r) + v_{R1}.$$

Setting $v_X = v_Y$:

$$(g + i_3)\,r = (g + i_4)(R_1 + r) + v_{R1},$$

$$
\begin{aligned}
g\,r - g(R_1 + r) &= i_4(R_1 + r) + v_{R1} - i_3r\\
-g\,R_1 &= i_4(R_1 + r) + v_{R1} - i_3r\\
g &= \frac{i_3\,r - i_4(R_1 + r) - v_{R1}}{R_1}.
\end{aligned}
$$

The loop shifts the gate until $R_1$ absorbs any X–Y imbalance, so $g$ is the imbalance voltage divided by $R_1$, just as the dc PTAT current is $V_T\ln n/R_1$.

### Step 4 — The output

$M_5$ delivers $Kg + i_5$ into $R_2$ (with $v_{R2}$) in series with $r_3$:

$$v_{out} = (Kg + i_5)(R_2 + r_3) + v_{R2}.$$

Substituting $g$:

$$v_{out} = (R_2 + r_3)\left[\frac{K r}{R_1}\,i_3 - \frac{K(R_1 + r)}{R_1}\,i_4 - \frac{K}{R_1}\,v_{R1} + i_5\right] + v_{R2}.$$

The five sources are uncorrelated, so their powers add:

$$\overline{v_{out}^2} = (R_2 + r_3)^2\left[K^2\left(\frac{r}{R_1}\right)^2\overline{i_3^2} + K^2\left(\frac{R_1 + r}{R_1}\right)^2\overline{i_4^2} + \frac{K^2}{R_1^2}\overline{v_{R1}^2} + \overline{i_5^2}\right] + \overline{v_{R2}^2}.$$

### Step 5 — Transfer factors

With $R_2 + r_3 = 2116\ \Omega$, $K = 4.45$, $R_1 = 1$ kΩ and $r = 517\ \Omega$:

$$
\begin{aligned}
\frac{K(R_2 + r_3)}{R_1} &= \frac{4.45\times2116}{1000} = 9.42 &&(\text{for } v_{R1}),\\
\frac{K(R_2 + r_3)(R_1 + r)}{R_1} &= 9.42\times1517\ \Omega = 14.29\ \mathrm{k}\Omega &&(\text{for } i_4),\\
\frac{K(R_2 + r_3)\,r}{R_1} &= 9.42\times517\ \Omega = 4.87\ \mathrm{k}\Omega &&(\text{for } i_3),\\
R_2 + r_3 &= 2.12\ \mathrm{k}\Omega &&(\text{for } i_5),\\
1 &&&(\text{for } v_{R2}).
\end{aligned}
$$

### Step 6 — Each contribution (rms density = factor × source rms)

The source rms values are $\sqrt{\overline{i_{3,4}^2}} = 2.62$ pA/√Hz, $\sqrt{\overline{i_5^2}} = 5.52$ pA/√Hz, $\sqrt{\overline{v_{R1}^2}} = 4.07$ nV/√Hz and $\sqrt{\overline{v_{R2}^2}} = 5.76$ nV/√Hz.

$$
\begin{aligned}
R_1:&\quad 9.42\times4.07\ \mathrm{nV/\sqrt{Hz}} = 38.3\ \mathrm{nV/\sqrt{Hz}},\\
M_4:&\quad (14.29\ \mathrm{k}\Omega)(2.62\ \mathrm{pA/\sqrt{Hz}}) = 37.4\ \mathrm{nV/\sqrt{Hz}},\\
M_3:&\quad (4.87\ \mathrm{k}\Omega)(2.62\ \mathrm{pA/\sqrt{Hz}}) = 12.7\ \mathrm{nV/\sqrt{Hz}},\\
M_5:&\quad (2.12\ \mathrm{k}\Omega)(5.52\ \mathrm{pA/\sqrt{Hz}}) = 11.7\ \mathrm{nV/\sqrt{Hz}},\\
R_2:&\quad 5.8\ \mathrm{nV/\sqrt{Hz}}.
\end{aligned}
$$

### Step 7 — Total

$$
\begin{aligned}
\overline{v_{out}^2} &= \left(38.3^2 + 37.4^2 + 12.7^2 + 11.7^2 + 5.8^2\right)\ (\mathrm{nV})^2/\mathrm{Hz}\\
&= (1469 + 1397 + 162 + 136 + 33)\ (\mathrm{nV})^2/\mathrm{Hz}\\
&= 3198\ (\mathrm{nV})^2/\mathrm{Hz} \approx 3.2\times10^{-15}\ \mathrm{V^2/Hz},
\end{aligned}
$$

$$\sqrt{\overline{v_{out}^2}} \approx 56.5\ \mathrm{nV/\sqrt{Hz}}.$$

- $R_1$ and $M_4$ dominate: their noise appears directly as an X–Y imbalance and is amplified by $K(R_2 + r_3)/R_1 \approx 9.4$, the same factor that amplifies the PTAT voltage (and would amplify an op-amp offset).
- $M_3$'s noise is weighted only by the small resistance at X (517 Ω versus 1517 Ω at Y); $M_5$ and $R_2$ add at the output without loop gain. Both are minor.
- With the bipolar resistances (wrongly) set to zero, $M_3$ would drop out and $M_4$'s factor would shrink to $KR_2 = 8.9$ kΩ, giving about 45 nV/√Hz.

### Result

$$\overline{V_{n,out}^2} \approx 3.2\times10^{-15}\ \mathrm{V^2/Hz}, \qquad \sqrt{\overline{V_{n,out}^2}} \approx 56\ \mathrm{nV/\sqrt{Hz}}.$$

It follows from

$$\overline{v_{out}^2} = (R_2 + r_3)^2\left[K^2\left(\frac{r}{R_1}\right)^2\overline{i_3^2} + K^2\left(\frac{R_1 + r}{R_1}\right)^2\overline{i_4^2} + K^2\frac{4kT}{R_1} + \overline{i_5^2}\right] + 4kTR_2,$$

with $\overline{i_{3,4}^2} = 4kT\gamma g_{m4}$, $\overline{i_5^2} = 4kT\gamma g_{m5}$, $g_{m4} = 0.62$ mS, $g_{m5} = 2.76$ mS, $r = 517\ \Omega$, $r_3 = 116\ \Omega$ and $K = 4.45$. The contributions are $R_1$ 38.3, $M_4$ 37.4, $M_3$ 12.7, $M_5$ 11.7 and $R_2$ 5.8 nV/√Hz.

**Common mistake.** Treating the PMOS gates as an ac ground, so that only $M_5$ and $R_2$ contribute (about 13 nV/√Hz). The op amp drives the gate to cancel any X–Y imbalance, so the noise of $M_3$, $M_4$ and $R_1$ reaches the gate and, through $M_5$, the output.

**Common mistake.** Forgetting the mirror ratio $K$. $M_5$ copies the loop-set current multiplied by $K = 4.45$; leaving it out underestimates the three dominant contributions by 4.45 in rms.

**Common mistake.** Dropping the bipolar small-signal resistances. At 517 Ω each they are not negligible next to $R_1 = 1$ kΩ, and without them the result falls to about 45 nV/√Hz.
