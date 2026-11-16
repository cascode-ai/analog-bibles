# Detailed solution - R567

**Approach.** With an ideal op amp, X is a virtual ground, so the input current $C_1sV_{in}$ flows into $R_F \parallel (1/C_2s)$. The circuit is a high-pass whose gain approaches $-C_1/C_2$ only well above $1/(R_FC_2)$. Require the gain magnitude at 1 MHz to be within 1 % of $C_1/C_2$ and solve for $R_F$.

### Step 1 — Transfer function

$R_F$ gives X a dc path to the output (fixing its bias), but at low frequencies it, not $C_2$, dominates the feedback impedance. With $V_X = 0$ (virtual ground), the input current is $I_{in} = C_1sV_{in}$ and the feedback impedance is

$$Z_F = R_F \parallel \frac{1}{C_2s} = \frac{R_F\cdot\dfrac{1}{C_2s}}{R_F + \dfrac{1}{C_2s}} = \frac{R_F}{1 + R_FC_2s}.$$

All of $I_{in}$ flows through $Z_F$ from X to the output:

$$
\begin{aligned}
V_{out} &= -I_{in}Z_F = -C_1sV_{in}\cdot\frac{R_F}{1 + R_FC_2s},\\
\frac{V_{out}}{V_{in}}(s) &= -\frac{R_FC_1s}{1 + R_FC_2s},
\end{aligned}
$$

a first-order high-pass with a zero at the origin and a pole at $\omega_p = 1/(R_FC_2)$. Far below $\omega_p$, $V_{out}/V_{in} \approx -R_FC_1s$ (a differentiator); far above it, $V_{out}/V_{in} \to -C_1/C_2 = -2/0.5 = -4$, the intended gain.

### Step 2 — Gain relative to the nominal value

Dividing by $-C_1/C_2$ and setting $x = \omega R_FC_2$:

$$\frac{H(s)}{-C_1/C_2} = \frac{R_FC_2s}{1 + R_FC_2s}, \qquad \frac{H(j\omega)}{-C_1/C_2} = \frac{jx}{1 + jx}, \qquad \left|\frac{H(j\omega)}{-C_1/C_2}\right| = \frac{x}{\sqrt{1 + x^2}}.$$

This is always below 1, so the **gain error** is $1 - x/\sqrt{1 + x^2}$.

### Step 3 — Apply the 1 % requirement

The magnitude must be at least 99 % of nominal:

$$\frac{x}{\sqrt{1 + x^2}} \ge 0.99 .$$

Squaring:

$$
\begin{aligned}
\frac{x^2}{1 + x^2} &\ge 0.9801\\
x^2 &\ge 0.9801 + 0.9801\,x^2\\
x^2(1 - 0.9801) &\ge 0.9801\\
x^2 &\ge \frac{0.9801}{0.0199} = 49.25\\
x &\ge 7.02 .
\end{aligned}
$$

With $\omega = 2\pi\times1$ MHz and $C_2 = 0.5$ pF:

$$
\begin{aligned}
\omega C_2 &= (2\pi\times10^{6}\ \mathrm{rad/s})(0.5\times10^{-12}\ \mathrm{F}) = 3.14\times10^{-6}\ \mathrm{S},\\
R_F &\ge \frac{x}{\omega C_2} = \frac{7.02}{3.14\times10^{-6}\ \mathrm{S}} = 2.23\times10^{6}\ \Omega .
\end{aligned}
$$

So $R_F \ge 2.23$ MΩ, i.e. about 2.2 MΩ.

### Step 4 — Checks and interpretation

- **Approximation.** For large $x$, $x/\sqrt{1 + x^2} = (1 + 1/x^2)^{-1/2} \approx 1 - 1/(2x^2)$. Setting $1/(2x^2) = 0.01$ gives $x = \sqrt{50} = 7.07$ and $R_F \approx 2.25$ MΩ, close to the exact value.
- **Corner frequency.** With $R_F = 2.23$ MΩ, $f_p = 1/(2\pi R_FC_2) = 1/(2\pi\times2.23\ \mathrm{M}\Omega\times0.5\ \mathrm{pF}) = 143$ kHz, so 1 MHz is about 7 times above the corner.
- **Phase.** The phase still deviates from that of the nominal gain by $\arctan(1/x) = \arctan(1/7.02) = 8.1^\circ$: the magnitude converges much faster than the phase.
- **A stricter definition.** If "gain error" means the magnitude of the *complex* error, $|1 - H/(-C_1/C_2)| = |1/(1 + jx)| = 1/\sqrt{1 + x^2} \le 0.01$, then $x \ge 100$ and $R_F \ge 100/(3.14\times10^{-6}\ \mathrm{S}) = 31.8$ MΩ. The usual meaning, the magnitude error, gives 2.23 MΩ.

### Result

With an ideal op amp,

$$\frac{V_{out}}{V_{in}}(s) = -\frac{R_FC_1s}{1 + R_FC_2s},$$

a high-pass that approaches $-C_1/C_2 = -4$ only for $\omega \gg 1/(R_FC_2)$. The magnitude relative to the nominal gain is $x/\sqrt{1 + x^2}$ with $x = \omega R_FC_2$. Requiring $x/\sqrt{1 + x^2} \ge 0.99$ gives $x \ge 7.02$, so

$$R_F \ge \frac{7.02}{2\pi(1\ \mathrm{MHz})(0.5\ \mathrm{pF})} = 2.23\ \mathrm{M\Omega}\ (\approx 2.2\ \mathrm{M\Omega}).$$

(The phase shift at this point is still about 8°. If the gain error is defined as the complex error $1/\sqrt{1 + x^2} \le 1\%$, the requirement becomes $R_F \ge 31.8$ MΩ.)

**Common mistake.** Using $C_1$ instead of $C_2$ in the pole, i.e. $x = \omega R_FC_1$, which gives $R_F \ge 0.56$ MΩ. $R_F$ is in parallel with $C_2$, so the corner is set by $R_FC_2$; $C_1$ only sets the input current.

**Common mistake.** Taking the magnitude error to be $1/(\omega R_FC_2) = 1/x$ and setting it to 1 %, which gives 31.8 MΩ while calling it a magnitude criterion. Because $R_F$'s current is in *quadrature* with $C_2$'s (90° out of phase), the magnitude error is second order, about $1/(2x^2)$.

**Common mistake.** Thinking that the gain is $-R_FC_1s$ at all frequencies, or $-C_1/C_2$ regardless of $R_F$. Both are limits of the same high-pass response, far below and far above $1/(R_FC_2)$.
