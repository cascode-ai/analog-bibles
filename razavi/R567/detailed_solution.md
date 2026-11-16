# Detailed solution - R567

**Approach.** With an ideal op amp, node X is a virtual ground. The input current $C_1sV_{in}$ flows into the feedback impedance $R_F \parallel (1/C_2s)$, so the circuit is a high-pass filter whose gain approaches $-C_1/C_2$ only well above the corner frequency $1/(R_FC_2)$. We require the gain magnitude at 1 MHz to be within 1 % of $C_1/C_2$ and solve for $R_F$.

### Step 1 — Why $R_F$ is there, and the virtual ground

Without $R_F$, node X would connect only to capacitors and the op-amp input, so its dc voltage would be undefined (any leakage would charge it). $R_F$ provides a dc path from the output to X, which fixes the dc bias of the inverting input. The price is that at low frequencies $R_F$, not $C_2$, dominates the feedback impedance.

With an ideal op amp (infinite gain, infinite input impedance) and negative feedback, the inverting input sits at the potential of the grounded noninverting input: $V_X = 0$ (**virtual ground**).

### Step 2 — Transfer function

**Input current.** $C_1$ has $V_{in}$ on one side and 0 V on the other:

$$I_{in} = C_1s\,(V_{in} - 0) = C_1sV_{in}.$$

**Feedback impedance.** $R_F$ in parallel with $C_2$:

$$Z_F = R_F \parallel \frac{1}{C_2s} = \frac{R_F\cdot\dfrac{1}{C_2s}}{R_F + \dfrac{1}{C_2s}} = \frac{R_F}{1 + R_FC_2s}.$$

**KCL at X.** No current enters the op amp, so $I_{in}$ flows through $Z_F$ from X to the output: $V_X - V_{out} = I_{in}Z_F$. With $V_X = 0$:

$$
\begin{aligned}
V_{out} &= -I_{in}Z_F = -C_1sV_{in}\cdot\frac{R_F}{1 + R_FC_2s},\\
\frac{V_{out}}{V_{in}}(s) &= -\frac{R_FC_1s}{1 + R_FC_2s}.
\end{aligned}
$$

This is a first-order high-pass with a zero at the origin and a pole at $\omega_p = 1/(R_FC_2)$.

- Far below $\omega_p$: $V_{out}/V_{in} \approx -R_FC_1s$ (a differentiator, $R_F$ dominates).
- Far above $\omega_p$: $V_{out}/V_{in} \to -R_FC_1s/(R_FC_2s) = -C_1/C_2 = -2/0.5 = -4$, the intended gain.

### Step 3 — Gain relative to the nominal value

Divide by the nominal gain $-C_1/C_2$:

$$\frac{H(s)}{-C_1/C_2} = \frac{R_FC_2s}{1 + R_FC_2s}.$$

On the $j\omega$ axis, define the normalized frequency $x = \omega R_FC_2$:

$$\frac{H(j\omega)}{-C_1/C_2} = \frac{jx}{1 + jx}, \qquad \left|\frac{H(j\omega)}{-C_1/C_2}\right| = \frac{x}{\sqrt{1 + x^2}}.$$

This is always below 1, so the actual gain magnitude falls short of 4. The **gain error** is $1 - x/\sqrt{1 + x^2}$.

### Step 4 — Apply the 1 % requirement

Require the magnitude to be at least 99 % of nominal:

$$\frac{x}{\sqrt{1 + x^2}} \ge 0.99 .$$

Square both sides (both are positive) and solve:

$$
\begin{aligned}
\frac{x^2}{1 + x^2} &\ge 0.9801\\
x^2 &\ge 0.9801 + 0.9801\,x^2\\
x^2(1 - 0.9801) &\ge 0.9801\\
x^2 &\ge \frac{0.9801}{0.0199} = 49.25\\
x &\ge 7.02 .
\end{aligned}
$$

Now convert back to $R_F$ with $\omega = 2\pi\times1$ MHz and $C_2 = 0.5$ pF:

$$
\begin{aligned}
\omega C_2 &= (2\pi\times10^{6}\ \mathrm{rad/s})(0.5\times10^{-12}\ \mathrm{F}) = 3.14\times10^{-6}\ \mathrm{S},\\
R_F &\ge \frac{x}{\omega C_2} = \frac{7.02}{3.14\times10^{-6}\ \mathrm{S}} = 2.23\times10^{6}\ \Omega .
\end{aligned}
$$

So $R_F \ge 2.23$ MΩ, i.e. about 2.2 MΩ.

### Step 5 — Checks and interpretation

- **Approximation.** For large $x$, $x/\sqrt{1 + x^2} = (1 + 1/x^2)^{-1/2} \approx 1 - 1/(2x^2)$. Setting $1/(2x^2) = 0.01$ gives $x = \sqrt{50} = 7.07$ and $R_F \approx 2.25$ MΩ, close to the exact value.
- **Corner frequency.** With $R_F = 2.23$ MΩ, $f_p = 1/(2\pi R_FC_2) = 1/(2\pi\times2.23\ \mathrm{M}\Omega\times0.5\ \mathrm{pF}) = 143$ kHz. A 1-MHz input is about 7 times above the corner.
- **Phase.** Even with only 1 % magnitude error, the phase still deviates from that of the nominal gain by $\arctan(1/x) = \arctan(1/7.02) = 8.1^\circ$. The magnitude converges much faster than the phase.
- **A stricter definition.** If "gain error" means the magnitude of the *complex* error, $|1 - H/(-C_1/C_2)| = |1/(1 + jx)| = 1/\sqrt{1 + x^2} \le 0.01$, then $x \ge 100$ and $R_F \ge 100/(3.14\times10^{-6}\ \mathrm{S}) = 31.8$ MΩ. The usual meaning of gain error, the magnitude error, gives 2.23 MΩ.

### Result

With an ideal op amp,

$$\frac{V_{out}}{V_{in}}(s) = -\frac{R_FC_1s}{1 + R_FC_2s},$$

a high-pass that approaches $-C_1/C_2 = -4$ only for $\omega \gg 1/(R_FC_2)$. The magnitude relative to the nominal gain is $x/\sqrt{1 + x^2}$ with $x = \omega R_FC_2$. Requiring $x/\sqrt{1 + x^2} \ge 0.99$ gives $x \ge 7.02$, so

$$R_F \ge \frac{7.02}{2\pi(1\ \mathrm{MHz})(0.5\ \mathrm{pF})} = 2.23\ \mathrm{M\Omega}\ (\approx 2.2\ \mathrm{M\Omega}).$$

(The phase shift at this point is still about 8°. If the gain error is defined as the complex error $1/\sqrt{1 + x^2} \le 1\%$, the requirement becomes $R_F \ge 31.8$ MΩ.)

**Common mistake.** Using $C_1$ instead of $C_2$ in the pole, i.e. $x = \omega R_FC_1$, which gives $R_F \ge 0.56$ MΩ. $R_F$ is in parallel with $C_2$ in the feedback path, so the corner is set by $R_FC_2$. $C_1$ only sets the input current.

**Common mistake.** Taking the magnitude error to be $1/(\omega R_FC_2) = 1/x$ and setting it to 1 %, which gives $x = 100$ and 31.8 MΩ while calling it a magnitude criterion. The magnitude error is second order in $1/x$, about $1/(2x^2)$, because $R_F$ is in *quadrature* with $C_2$: its current is 90° out of phase and adds to the magnitude only in a root-sum-square way.

**Common mistake.** Thinking that $R_F$ sets the gain together with $C_1$ (for example $-R_FC_1s$ at all frequencies) or that the gain is $-C_1/C_2$ regardless of $R_F$. Both are limits of the same high-pass response, valid far below and far above $1/(R_FC_2)$.
