# Detailed solution - R283

**Approach.** $C_{in}$ couples the ideal input source to node X, so it forms a high-pass filter with the small-signal resistance $R_X$ seen at X, with corner $1/(R_XC_{in})$. X is the input of an inverting amplifier with the feedback resistor $R_F$, so $R_F$ appears reduced by the loop gain (the Miller effect on a resistor). We also check that the rest of the circuit adds no other frequency dependence.

### Step 1 — Small-signal model (with $C_1$ shorted)

With $C_1$ a short circuit, $M_2$'s source is at ac ground, so **both transistors respond to $v_X$** and their drain currents add at the output: a complementary common-source stage. $M_1$ and $M_2$ each draw $g_mv_X$ from the output to ac ground, with $r_{O1}$ and $r_{O2}$ there too; the ideal $I_1$ carries no small-signal current, and the gates draw none. With $G = g_{m1} + g_{m2}$ and $R_o = r_{O1}\|r_{O2}$, the output node is a current $Gv_X$ drawn to ground in parallel with $R_o$, and $R_F$ connects it back to X.

<!-- diagram: diagram-01.cir -->

### Step 2 — Resistance seen at X

Apply a test voltage $v_X$ at X (with $C_{in}$ removed); the current $i_X$ it supplies flows through $R_F$ to the output:

$$i_X = \frac{v_X - v_{out}}{R_F}. \tag{1}$$

KCL at the output:

$$i_X = Gv_X + \frac{v_{out}}{R_o} \quad\Longrightarrow\quad v_{out} = R_o\,(i_X - Gv_X). \tag{2}$$

Substituting (2) into (1):

$$
\begin{aligned}
i_XR_F &= v_X - R_oi_X + GR_ov_X\\
i_X(R_F + R_o) &= v_X(1 + GR_o)\\
R_X = \frac{v_X}{i_X} &= \frac{R_F + r_{O1}\|r_{O2}}{1 + (g_{m1} + g_{m2})(r_{O1}\|r_{O2})} .
\end{aligned}
$$

With $A_0 = (g_{m1} + g_{m2})(r_{O1}\|r_{O2})$ the open-loop gain magnitude, a rise $v_X$ moves the output down by about $A_0v_X$, so $R_F$ carries $(1 + A_0)$ times more current than with its far end grounded: from X it looks like $R_F/(1 + A_0)$.

### Step 3 — The high-pass corner

$C_{in}$, driven by an ideal source, sees $R_X$ to ac ground:

$$\frac{V_X}{V_{in}}(s) = \frac{R_X}{R_X + \dfrac{1}{sC_{in}}} = \frac{sR_XC_{in}}{1 + sR_XC_{in}},$$

a first-order high-pass with corner $\omega = 1/(R_XC_{in})$.

**$V_{out}/V_X$ is frequency independent.** Eliminating $i_X$ from (1) and (2):

$$v_{out}\left(1 + \frac{R_o}{R_F}\right) = v_XR_o\left(\frac{1}{R_F} - G\right) \quad\Longrightarrow\quad \frac{v_{out}}{v_X} = \frac{(1 - GR_F)R_o}{R_F + R_o},$$

a constant, so $V_{out}/V_{in}$ has the same corner:

$$\omega_{corner} = \frac{1}{R_XC_{in}} = \frac{1 + (g_{m1} + g_{m2})(r_{O1}\|r_{O2})}{(R_F + r_{O1}\|r_{O2})\,C_{in}}, \qquad f_{corner} = \frac{\omega_{corner}}{2\pi}.$$

For $R_F \gg r_{O1}\|r_{O2}$:

$$f_{corner} \approx \frac{1 + A_0}{2\pi R_FC_{in}} .$$

### Step 4 — Numerical example

Let $g_{m1} = g_{m2} = 1$ mS, $r_{O1} = r_{O2} = 50\ \mathrm{k}\Omega$, $R_F = 1\ \mathrm{M}\Omega$, $C_{in} = 10$ pF:

$$
\begin{aligned}
R_o &= 50\ \|\ 50 = 25\ \mathrm{k}\Omega, \qquad A_0 = (2\ \mathrm{mS})(25\ \mathrm{k}\Omega) = 50,\\
R_X &= \frac{1000 + 25}{1 + 50}\ \mathrm{k}\Omega = 20.1\ \mathrm{k}\Omega,\\
f_{corner} &= \frac{1}{2\pi(20.1\ \mathrm{k}\Omega)(10\ \mathrm{pF})} = 792\ \mathrm{kHz}.
\end{aligned}
$$

The naive estimate $1/(2\pi R_FC_{in}) = 15.9$ kHz is about 50 times too low.

### Result

$$\omega_{corner} = \frac{1 + (g_{m1} + g_{m2})(r_{O1}\|r_{O2})}{(R_F + r_{O1}\|r_{O2})\,C_{in}}, \qquad f_{corner} = \frac{1 + A_0}{2\pi(R_F + r_{O1}\|r_{O2})C_{in}} \approx \frac{1 + A_0}{2\pi R_FC_{in}}\ \ (R_F \gg r_{O1}\|r_{O2}),$$

with $A_0 = (g_{m1} + g_{m2})(r_{O1}\|r_{O2})$. $C_{in}$ sees the resistance at X, which is $R_F$ reduced by the Miller effect: $R_X = (R_F + r_{O1}\|r_{O2})/(1 + A_0)$.

**Common mistake.** Using $1/(R_FC_{in})$ as the corner. $R_F$ goes to the output of an inverting amplifier, not to ground, so the resistance it presents at X is smaller by about $1 + A_0$ and the corner is correspondingly higher.

**Common mistake.** Using only $g_{m1}$. With $C_1$ shorting $M_2$'s source to ac ground, $M_2$ is a second common-source device driven by the same gate voltage, and its transconductance adds to $M_1$'s.

**Common mistake.** Miller-multiplying $C_{in}$ itself, or dividing the frequency by the gain. $C_{in}$ is in series with the input, not a feedback element; the amplifier modifies the resistance it sees, which raises the corner.
