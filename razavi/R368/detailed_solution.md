# Detailed solution - R368

**Approach.** Model each transistor's channel thermal noise as a current source between its drain and source. The input-referred noise **voltage** is found with the input *shorted*, and the input-referred noise **current** with the input *open*. In each case we compare the output produced by every noise source with the output produced by an input signal, keeping the $g_mr_O \gg 1$ approximations.

### Step 1 — The circuit and which devices can contribute noise

Reading the figure:

- $M_1$ is a **common-gate** (CG) amplifier. Its gate is at the DC bias $V_b$ (AC ground), its source is the input node, and its drain is $V_{out}$.
- $M_3$ (PMOS) is the load current source from $V_{DD}$ to $V_{out}$. Its gate is tied to the gate of the diode-connected $M_4$, which is fed by $I_2$.
- $M_2$ (NMOS) is the bias current source from the input node to ground. Its gate is tied to the gate of the diode-connected $M_0$, which is fed by $I_1$. $\overline{I_{n2}^2}$ is drawn as $M_2$'s noise current, in parallel with $M_2$.
- The two capacitors hold the gate nodes of $M_3$/$M_4$ and $M_2$/$M_0$ at AC ground.

**Consequence of the capacitors.** The noise of $M_4$, $M_0$, $I_1$ and $I_2$ would normally appear as a voltage on the gates of $M_3$ and $M_2$. The large capacitors short those gate nodes to ground at the frequencies of interest, so this noise never reaches $M_3$ or $M_2$. **The only noise sources that matter are the channel noise currents of $M_1$, $M_2$ and $M_3$.**

Noise model (channel thermal noise): $\overline{I_n^2} = 4kT\gamma g_m$ in A²/Hz. Here $k = 1.38\times10^{-23}$ J/K is Boltzmann's constant, $T = 300$ K, $\gamma = 2/3$, and $g_m$ is the transconductance. The common factor is

$$4kT\gamma = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K})\times\tfrac23 = 1.104\times10^{-20}\ \mathrm{J}.$$

### Step 2 — Transconductances and noise currents

All three devices have $W/L = 50/0.5 = 100$ and $I_D = 0.5$ mA. Use the square law, $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$:

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{A/V} = 3.661\ \mathrm{mS},\\
g_{m3} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{3.84\times10^{-6}}\ \mathrm{A/V} = 1.960\ \mathrm{mS}.
\end{aligned}
$$

$M_1$ and $M_2$ are NMOS and use $\mu_nC_{ox}$; $M_3$ is PMOS and uses $\mu_pC_{ox}$.

The noise current spectral densities are:

$$
\begin{aligned}
\overline{I_{n1}^2} = \overline{I_{n2}^2} &= 4kT\gamma\,g_{m1} = (1.104\times10^{-20})(3.661\times10^{-3}) = 4.04\times10^{-23}\ \mathrm{A^2/Hz},\\
\overline{I_{n3}^2} &= 4kT\gamma\,g_{m3} = (1.104\times10^{-20})(1.960\times10^{-3}) = 2.16\times10^{-23}\ \mathrm{A^2/Hz}.
\end{aligned}
$$

### Step 3 — What "input-referred voltage and current" mean, and how to find them

All the internal noise is represented by two sources at the input of a noiseless copy of the circuit:

- a voltage source $\overline{V_{n,in}^2}$ in **series** with the input;
- a current source $\overline{I_{n,in}^2}$ in **parallel** with the input (between the input node and ground).

Both are needed because the driving source impedance is not known. A CG stage has a low input impedance, so the current source is especially important. The two sources are found separately:

- **$\overline{V_{n,in}^2}$: short the input to ground** (zero source impedance). The parallel current source is then shorted out, so the output noise must be produced by $\overline{V_{n,in}^2}$ alone.
- **$\overline{I_{n,in}^2}$: leave the input open** (infinite source impedance). The series voltage source then drives an open circuit and has no effect, so the output noise must be produced by $\overline{I_{n,in}^2}$ alone.

A convenient tool is the **short-circuit output current** $i_{out,sc}$: short $V_{out}$ to AC ground and find the current each source pushes into that short. The actual output voltage is $i_{out,sc}$ times the output impedance, and the output impedance is the same for every source. So it suffices to compare short-circuit output currents.

Small-signal model of $M_1$: a current $g_{m1}v_{gs1}$ from drain to source, with $v_{gs1} = 0 - v_S = -v_S$ because the gate is at AC ground, in parallel with $r_{O1}$. Here $r_O$ is a transistor's output resistance and $v_S$ is the small-signal voltage of the input (source) node. $M_2$ appears as $r_{O2}$ from the input node to ground, and $M_3$ as $r_{O3}$ from the output to AC ground ($V_{DD}$). Each device's noise current is in parallel with its $r_O$. The body effect is neglected, so there is no $g_{mb}$ term.

### Step 4 — Input-referred noise voltage (input shorted)

With the input shorted, $v_S = 0$.

- **$M_2$:** its noise current $I_{n2}$ flows from the input node into the short to ground and never reaches the output. **It does not contribute.**
- **$M_1$:** with $v_S = 0$ and $v_{out} = 0$ (output shorted for the Norton current), $M_1$ has $v_{gs1} = 0$ and $v_{ds1} = 0$, so its controlled source and $r_{O1}$ carry nothing. Its noise current $I_{n1}$, from drain to source, must be supplied by the output short: $i_{out,sc} = I_{n1}$.
- **$M_3$:** its noise current flows from $V_{DD}$ into the output node and straight into the short: $i_{out,sc} = I_{n3}$.
- **Input signal $v_{in}$** (applied at the source of $M_1$, i.e. $v_S = v_{in}$). With $v_{out} = 0$, the current through $M_1$ from drain to source is
$$g_{m1}(0 - v_{in}) + \frac{0 - v_{in}}{r_{O1}} = -\left(g_{m1} + \frac{1}{r_{O1}}\right)v_{in}.$$
So $|i_{out,sc}| = (g_{m1} + 1/r_{O1})\,v_{in} \approx g_{m1}v_{in}$, using $g_{m1}r_{O1} \gg 1$.

Equating short-circuit output currents, each noise current $I_n$ is equivalent to an input voltage $I_n/g_{m1}$. The powers add:

$$\overline{V_{n,in}^2} = \frac{\overline{I_{n1}^2} + \overline{I_{n3}^2}}{g_{m1}^2} = \frac{4kT\gamma\,(g_{m1} + g_{m3})}{g_{m1}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right).$$

(The same result follows from the familiar voltage gain $A_v = (g_{m1} + 1/r_{O1})(r_{O1}\parallel r_{O3}) \approx g_{m1}(r_{O1}\parallel r_{O3})$ and the output noise $(\overline{I_{n1}^2} + \overline{I_{n3}^2})(r_{O1}\parallel r_{O3})^2$.)

Numerically:

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{3.661\ \mathrm{mS}} = 273.2\ \Omega,\\
\frac{g_{m3}}{g_{m1}^2} &= \frac{1.960\times10^{-3}}{13.4\times10^{-6}}\ \Omega = 146.2\ \Omega,\\
\overline{V_{n,in}^2} &= (1.104\times10^{-20})(273.2 + 146.2)\ \mathrm{V^2/Hz} = (1.104\times10^{-20})(419.4) = 4.63\times10^{-18}\ \mathrm{V^2/Hz},\\
\sqrt{\overline{V_{n,in}^2}} &= 2.15\ \mathrm{nV/\sqrt{Hz}}.
\end{aligned}
$$

### Step 5 — Input-referred noise current (input open)

With the input open, the input node connects only to the source of $M_1$ and to $M_2$ ($r_{O2}$ in parallel with $I_{n2}$). The input-referred current source $I_{n,in}$ sits between this node and ground.

**First, the current gain of the CG stage.** Inject a test current $i_{in}$ into the input node, with the output shorted. KCL at the input node: the injected current $i_{in}$ plus the current arriving from $M_1$'s drain-to-source branch must leave through $r_{O2}$:

$$
\begin{aligned}
i_{in} + \left[-g_{m1}v_S - \frac{v_S}{r_{O1}}\right] &= \frac{v_S}{r_{O2}}\\
v_S &= \frac{i_{in}}{g_{m1} + 1/r_{O1} + 1/r_{O2}}.
\end{aligned}
$$

The current that $M_1$ draws from the output short is therefore

$$|i_{out,sc}| = \left(g_{m1} + \frac{1}{r_{O1}}\right)v_S = \frac{g_{m1} + 1/r_{O1}}{g_{m1} + 1/r_{O1} + 1/r_{O2}}\;i_{in} \approx \left(1 - \frac{1}{g_{m1}r_{O2}}\right)i_{in} \approx i_{in}.$$

This is the key property of a CG stage: it is a **current buffer**. The impedance looking into the source of $M_1$ ($\approx 1/g_{m1}$) is much smaller than $r_{O2}$, so almost all of the input current goes through $M_1$ to the output.

Now take each noise source in turn:

- **$M_2$:** $I_{n2}$ is connected exactly where $I_{n,in}$ is connected, in parallel with the input. It refers to the input **one-to-one**: $\overline{I_{n,in}^2}\big|_{M_2} = \overline{I_{n2}^2}$.
- **$M_3$:** $I_{n3}$ is injected directly into the output node, so $i_{out,sc} = I_{n3}$. An input current produces $i_{out,sc} \approx i_{in}$. Hence $\overline{I_{n,in}^2}\big|_{M_3} \approx \overline{I_{n3}^2}$, accurate to order $1/(g_mr_O)$.
- **$M_1$:** its noise current flows from drain to source. KCL at the input node, with the output shorted:
$$
\begin{aligned}
I_{n1} - g_{m1}v_S - \frac{v_S}{r_{O1}} &= \frac{v_S}{r_{O2}},\\
v_S &= \frac{I_{n1}}{g_{m1} + 1/r_{O1} + 1/r_{O2}},\\
|i_{out,sc}| = \frac{v_S}{r_{O2}} &= \frac{I_{n1}}{1 + (g_{m1} + 1/r_{O1})\,r_{O2}} \approx \frac{I_{n1}}{g_{m1}r_{O2}} .
\end{aligned}
$$
With the source left open, $M_1$ is degenerated by the large $r_{O2}$. Its noise current mostly circulates inside the device and reaches the output reduced by $g_{m1}r_{O2} \gg 1$. Referred to the input it is $I_{n1}/(g_{m1}r_{O2})$, which is **negligible**.

Adding the powers:

$$\overline{I_{n,in}^2} \approx \overline{I_{n2}^2} + \overline{I_{n3}^2} = 4kT\gamma\,(g_{m2} + g_{m3}).$$

Numerically:

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
- If the body effect were included, $g_{m1}$ in the voltage expression would become $g_{m1} + g_{mb1}$, giving a slightly lower value.

**Common mistake.** Including $M_2$'s noise in the input-referred *voltage*. With the input shorted, $I_{n2}$ flows into the short and cannot reach the output. $M_2$ belongs only in the input-referred *current*.

**Common mistake.** Including $M_1$'s noise in the input-referred *current*. With the input open, $M_1$ is degenerated by $r_{O2}$, and its noise is suppressed by $g_{m1}r_{O2} \gg 1$. Note also that $M_3$ appears in **both** quantities, so $\overline{V_{n,in}^2}$ and $\overline{I_{n,in}^2}$ are partially correlated.

**Common mistake.** Counting the noise of the mirror diodes $M_0$, $M_4$ (the capacitors short their gate nodes), or using $\mu_pC_{ox}$ for the NMOS devices (or $\mu_nC_{ox}$ for the PMOS). Either error changes both results.
