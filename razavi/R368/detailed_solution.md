# Detailed solution - R368

**Approach.** Model each transistor's channel thermal noise as a drain–source current. Find the input-referred noise **voltage** with the input *shorted* and the noise **current** with the input *open*, each time comparing the output produced by every noise source with that produced by an input signal, keeping the $g_mr_O \gg 1$ approximations.

### Step 1 — Which devices contribute noise

The two capacitors hold the gates of $M_3$/$M_4$ and $M_2$/$M_0$ at ac ground, so the noise of $M_4$, $M_0$, $I_1$ and $I_2$ never reaches $M_3$ or $M_2$. **Only the channel noise currents of $M_1$, $M_2$ and $M_3$ matter**, each $\overline{I_n^2} = 4kT\gamma g_m$, with

$$4kT\gamma = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K})\times\tfrac23 = 1.104\times10^{-20}\ \mathrm{J}.$$

### Step 2 — Transconductances and noise currents

All three devices are saturated with $W/L = 50/0.5 = 100$ and $I_D = 0.5$ mA, so $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$, with $\mu_nC_{ox}$ for $M_1$, $M_2$ and $\mu_pC_{ox}$ for $M_3$:

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{A/V} = 3.661\ \mathrm{mS},\\
g_{m3} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{3.84\times10^{-6}}\ \mathrm{A/V} = 1.960\ \mathrm{mS}.
\end{aligned}
$$

The overdrives $V_{ov} = 2I_D/g_m$ are $2(0.5\ \mathrm{mA})/(3.661\ \mathrm{mS}) = 0.27$ V for the NMOS devices and $2(0.5\ \mathrm{mA})/(1.960\ \mathrm{mS}) = 0.51$ V for the PMOS, normal values. The noise currents are

$$
\begin{aligned}
\overline{I_{n1}^2} = \overline{I_{n2}^2} &= 4kT\gamma\,g_{m1} = (1.104\times10^{-20})(3.661\times10^{-3}) = 4.04\times10^{-23}\ \mathrm{A^2/Hz},\\
\overline{I_{n3}^2} &= 4kT\gamma\,g_{m3} = (1.104\times10^{-20})(1.960\times10^{-3}) = 2.16\times10^{-23}\ \mathrm{A^2/Hz}.
\end{aligned}
$$

### Step 3 — Input-referred noise voltage (input shorted)

For a given input termination every source sees the same output impedance, so it suffices to compare **short-circuit output currents** $i_{out,sc}$ (with $V_{out}$ shorted to ac ground). $M_1$ is $g_{m1}v_{gs1}$ from drain to source, with $v_{gs1} = -v_S$ ($v_S$ is the input-node voltage), in parallel with $r_{O1}$; $M_2$ is $r_{O2}$ from the input to ground and $M_3$ is $r_{O3}$ from the output to ac ground, each with its noise current in parallel. Body effect is neglected.

With the input shorted, $v_S = 0$:

- **$M_2$:** $I_{n2}$ flows into the input short and never reaches the output. **It does not contribute.**
- **$M_1$:** $v_{gs1} = 0$ and $v_{ds1} = 0$, so its controlled source and $r_{O1}$ carry nothing and the output short supplies $I_{n1}$: $i_{out,sc} = I_{n1}$.
- **$M_3$:** $I_{n3}$ flows from $V_{DD}$ straight into the output short: $i_{out,sc} = I_{n3}$.
- **Input signal** ($v_S = v_{in}$, $v_{out} = 0$): the drain-to-source current of $M_1$ is
$$g_{m1}(0 - v_{in}) + \frac{0 - v_{in}}{r_{O1}} = -\left(g_{m1} + \frac{1}{r_{O1}}\right)v_{in},$$
so $|i_{out,sc}| = (g_{m1} + 1/r_{O1})\,v_{in} \approx g_{m1}v_{in}$ for $g_{m1}r_{O1} \gg 1$.

Each noise current $I_n$ is therefore equivalent to an input voltage $I_n/g_{m1}$, and the powers add:

$$\overline{V_{n,in}^2} = \frac{\overline{I_{n1}^2} + \overline{I_{n3}^2}}{g_{m1}^2} = \frac{4kT\gamma\,(g_{m1} + g_{m3})}{g_{m1}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right).$$

(Equivalently: gain $A_v = (g_{m1} + 1/r_{O1})(r_{O1}\parallel r_{O3}) \approx g_{m1}(r_{O1}\parallel r_{O3})$ and output noise $(\overline{I_{n1}^2} + \overline{I_{n3}^2})(r_{O1}\parallel r_{O3})^2$.) Numerically:

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{3.661\ \mathrm{mS}} = 273.2\ \Omega,\\
\frac{g_{m3}}{g_{m1}^2} &= \frac{1.960\times10^{-3}}{13.4\times10^{-6}}\ \Omega = 146.2\ \Omega,\\
\overline{V_{n,in}^2} &= (1.104\times10^{-20})(273.2 + 146.2)\ \mathrm{V^2/Hz} = (1.104\times10^{-20})(419.4) = 4.63\times10^{-18}\ \mathrm{V^2/Hz},\\
\sqrt{\overline{V_{n,in}^2}} &= 2.15\ \mathrm{nV/\sqrt{Hz}}.
\end{aligned}
$$

### Step 4 — Input-referred noise current (input open)

With the input open, the input node connects only to the source of $M_1$ and to $M_2$ ($r_{O2}$ in parallel with $I_{n2}$); $I_{n,in}$ sits between this node and ground. The output is again shorted.

**Current gain.** For a test current $i_{in}$ injected into the input node, KCL there gives

$$
\begin{aligned}
i_{in} + \left[-g_{m1}v_S - \frac{v_S}{r_{O1}}\right] &= \frac{v_S}{r_{O2}}\\
v_S &= \frac{i_{in}}{g_{m1} + 1/r_{O1} + 1/r_{O2}},
\end{aligned}
$$

so the current $M_1$ carries to the output short is

$$|i_{out,sc}| = \left(g_{m1} + \frac{1}{r_{O1}}\right)v_S = \frac{g_{m1} + 1/r_{O1}}{g_{m1} + 1/r_{O1} + 1/r_{O2}}\;i_{in} \approx \left(1 - \frac{1}{g_{m1}r_{O2}}\right)i_{in} \approx i_{in}.$$

The CG stage is a **current buffer**: its input impedance ($\approx 1/g_{m1}$) is much smaller than $r_{O2}$, so almost all of $i_{in}$ reaches the output.

- **$M_2$:** $I_{n2}$ sits exactly where $I_{n,in}$ does, so it refers to the input **one-to-one**: $\overline{I_{n,in}^2}\big|_{M_2} = \overline{I_{n2}^2}$.
- **$M_3$:** $I_{n3}$ goes straight into the output short, $i_{out,sc} = I_{n3}$, while an input current gives $i_{out,sc} \approx i_{in}$. Hence $\overline{I_{n,in}^2}\big|_{M_3} \approx \overline{I_{n3}^2}$, accurate to order $1/(g_mr_O)$.
- **$M_1$:** its noise current flows from drain to source. KCL at the input node:
$$
\begin{aligned}
I_{n1} - g_{m1}v_S - \frac{v_S}{r_{O1}} &= \frac{v_S}{r_{O2}},\\
v_S &= \frac{I_{n1}}{g_{m1} + 1/r_{O1} + 1/r_{O2}}.
\end{aligned}
$$
Everything $M_1$'s branch delivers to the input node must leave through $r_{O2}$, and that same current is drawn from the output short:
$$|i_{out,sc}| = \frac{v_S}{r_{O2}} = \frac{I_{n1}}{1 + (g_{m1} + 1/r_{O1})\,r_{O2}} \approx \frac{I_{n1}}{g_{m1}r_{O2}} .$$
$M_1$ is degenerated by the large $r_{O2}$, so its noise mostly circulates inside the device; referred to the input it is $I_{n1}/(g_{m1}r_{O2})$, **negligible**.

Adding the powers:

$$\overline{I_{n,in}^2} \approx \overline{I_{n2}^2} + \overline{I_{n3}^2} = 4kT\gamma\,(g_{m2} + g_{m3}).$$

$$
\begin{aligned}
g_{m2} + g_{m3} &= 3.661 + 1.960 = 5.621\ \mathrm{mS},\\
\overline{I_{n,in}^2} &= (1.104\times10^{-20})(5.621\times10^{-3})\ \mathrm{A^2/Hz} = 6.2\times10^{-23}\ \mathrm{A^2/Hz},\\
\sqrt{\overline{I_{n,in}^2}} &= 7.9\ \mathrm{pA/\sqrt{Hz}}.
\end{aligned}
$$

### Result

$$\overline{V_{n,in}^2} = 4kT\gamma\,\frac{g_{m1} + g_{m3}}{g_{m1}^2} \approx 4.63\times10^{-18}\ \mathrm{V^2/Hz}\quad(\approx 2.15\ \mathrm{nV/\sqrt{Hz}}),$$

$$\overline{I_{n,in}^2} = 4kT\gamma\,(g_{m2} + g_{m3}) \approx 6.2\times10^{-23}\ \mathrm{A^2/Hz}\quad(\approx 7.9\ \mathrm{pA/\sqrt{Hz}}),$$

with $g_{m1} = g_{m2} = 3.66$ mS and $g_{m3} = 1.96$ mS.

- The voltage comes from $M_1$ and $M_3$.
- The current comes from $M_2$ and $M_3$.
- The bypassed mirror devices $M_0$ and $M_4$ do not contribute.
- With the body effect, $g_{m1}$ in the voltage expression would become $g_{m1} + g_{mb1}$, giving a slightly lower value.

**Common mistake.** Including $M_2$'s noise in the input-referred *voltage*. With the input shorted, $I_{n2}$ flows into the short; $M_2$ belongs only in the input-referred *current*.

**Common mistake.** Including $M_1$'s noise in the input-referred *current*. With the input open, $M_1$ is degenerated by $r_{O2}$ and its noise is suppressed by $g_{m1}r_{O2} \gg 1$. $M_3$, by contrast, appears in **both** quantities, so $\overline{V_{n,in}^2}$ and $\overline{I_{n,in}^2}$ are partially correlated.

**Common mistake.** Counting the noise of the mirror diodes $M_0$, $M_4$ (the capacitors short their gate nodes), or using $\mu_pC_{ox}$ for the NMOS devices (or $\mu_nC_{ox}$ for the PMOS). Either error changes both results.
