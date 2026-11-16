# Detailed solution - R283

**Approach.** $C_{in}$ couples the input to node X. Since the input is an ideal voltage source (an ac ground for this purpose), $C_{in}$ together with the small-signal resistance $R_X$ seen at X forms a high-pass filter with corner $1/(R_XC_{in})$. The work is to find $R_X$: X is the input of an inverting amplifier with the feedback resistor $R_F$, so $R_F$ appears reduced by the loop gain (the Miller effect on a resistor). We also check that the rest of the circuit adds no other frequency dependence.

### Step 1 — Reading the circuit (with $C_1$ shorted)

From the figure:

- $M_1$ (NMOS): gate at X, source grounded, drain at $V_{out}$.
- $M_2$ (PMOS): gate at X, drain at $V_{out}$, source at the node fed by the ideal current source $I_1$ and bypassed to ground by $C_1$.
- $R_F$: from X to $V_{out}$. It sets the dc bias, $V_X = V_{out}$ (no dc current flows in $R_F$ because $C_{in}$ blocks dc and the gates draw none), and provides feedback.
- $C_{in}$: from $V_{in}$ to X.

With $C_1$ a short circuit, $M_2$'s source is at ac ground, so $M_2$ is a common-source PMOS stage. **Both transistors respond to $v_X$**, and their small-signal drain currents add at the output: a "complementary" common-source amplifier.

### Step 2 — Small-signal model

- **$M_1$**: current $g_{m1}v_X$ from the output to ground, plus $r_{O1}$ from the output to ground.
- **$M_2$**: with $v_{gs2} = v_X$ (source at ac ground), current $g_{m2}v_X$ from the output to ac ground (same form as for an NMOS), plus $r_{O2}$ from the output to ac ground. The ideal $I_1$ carries no small-signal current.
- **$R_F$** between X and the output; **$C_{in}$** between the input and X. The gates draw no current.

Define $G = g_{m1} + g_{m2}$ and $R_o = r_{O1}\|r_{O2}$. The output node is then a current $Gv_X$ drawn to ground in parallel with $R_o$.

<!-- diagram: diagram-01.cir -->

### Step 3 — Resistance seen at X

Apply a test voltage $v_X$ at X (with $C_{in}$ removed) and find the current $i_X$ it supplies. The gates draw nothing, so $i_X$ flows through $R_F$ to the output:

$$i_X = \frac{v_X - v_{out}}{R_F}. \tag{1}$$

KCL at the output: the current arriving through $R_F$ leaves through the transistors and $R_o$:

$$i_X = Gv_X + \frac{v_{out}}{R_o} \quad\Longrightarrow\quad v_{out} = R_o\,(i_X - Gv_X). \tag{2}$$

Substitute (2) into (1):

$$
\begin{aligned}
i_XR_F &= v_X - R_oi_X + GR_ov_X\\
i_X(R_F + R_o) &= v_X(1 + GR_o)\\
R_X = \frac{v_X}{i_X} &= \frac{R_F + r_{O1}\|r_{O2}}{1 + (g_{m1} + g_{m2})(r_{O1}\|r_{O2})} .
\end{aligned}
$$

**Interpretation.** $A_0 = (g_{m1} + g_{m2})(r_{O1}\|r_{O2})$ is the open-loop gain magnitude of the stage. When X rises by $v_X$, the output falls by about $A_0v_X$, so $R_F$ has about $(1 + A_0)v_X$ across it and draws $(1 + A_0)$ times more current than it would if its far end were grounded. This is the Miller effect applied to a resistor: $R_F$ looks like $R_F/(1 + A_0)$ from X.

### Step 4 — The high-pass corner

At X, the series capacitor $C_{in}$ (driven by an ideal source) sees the resistance $R_X$ to ac ground, so

$$\frac{V_X}{V_{in}}(s) = \frac{R_X}{R_X + \dfrac{1}{sC_{in}}} = \frac{sR_XC_{in}}{1 + sR_XC_{in}},$$

a first-order high-pass with corner $\omega = 1/(R_XC_{in})$.

**$V_{out}/V_X$ is frequency independent.** Eliminating $i_X$ from (1) and (2):

$$v_{out}\left(1 + \frac{R_o}{R_F}\right) = v_XR_o\left(\frac{1}{R_F} - G\right) \quad\Longrightarrow\quad \frac{v_{out}}{v_X} = \frac{(1 - GR_F)R_o}{R_F + R_o},$$

a constant (no capacitor appears in it). So $V_{out}/V_{in}$ has the same corner:

$$\omega_{corner} = \frac{1}{R_XC_{in}} = \frac{1 + (g_{m1} + g_{m2})(r_{O1}\|r_{O2})}{(R_F + r_{O1}\|r_{O2})\,C_{in}}, \qquad f_{corner} = \frac{\omega_{corner}}{2\pi}.$$

For $R_F \gg r_{O1}\|r_{O2}$:

$$f_{corner} \approx \frac{1 + A_0}{2\pi R_FC_{in}} .$$

### Step 5 — Numerical example

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

**Common mistake.** Using $1/(R_FC_{in})$ as the corner. $R_F$ is connected to the output of an inverting amplifier, not to ground, so the resistance it presents at X is smaller by about $1 + A_0$, and the corner is correspondingly higher.

**Common mistake.** Using only $g_{m1}$. With $C_1$ shorting $M_2$'s source to ac ground, $M_2$ is a second common-source device driven by the same gate voltage, and its transconductance adds to $M_1$'s.

**Common mistake.** Miller-multiplying $C_{in}$ itself, or dividing the frequency by the gain. $C_{in}$ is not a feedback element; it is in series with the input. What the amplifier modifies is the resistance it sees, which raises the corner frequency.
