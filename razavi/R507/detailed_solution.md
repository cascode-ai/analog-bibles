# Detailed solution - R507

**Approach.** Write the closed-loop transfer function, locate its two poles (one near $(1 + A_0)\omega_{p1}$, one very close to the zero $\omega_z$), and expand the step response in partial fractions. The term of the pole near $\omega_z$ is the one in question; getting its amplitude right requires finding how close that closed-loop pole lies to the zero.

### Step 1 — Closed-loop transfer function

With unity feedback, $H_{closed} = H_{open}/(1 + H_{open})$. Multiplying numerator and denominator by $(1 + s/\omega_{p1})(1 + s/\omega_{p2})$:

$$H_{closed}(s) = \frac{A_0\left(1 + s/\omega_z\right)}{D(s)}, \qquad D(s) = \left(1 + \frac{s}{\omega_{p1}}\right)\left(1 + \frac{s}{\omega_{p2}}\right) + A_0\left(1 + \frac{s}{\omega_z}\right).$$

Dividing by $D(0) = 1 + A_0$:

$$H_{closed}(s) = \frac{A\left(1 + s/\omega_z\right)}{\left(1 + s/\omega_{pA}\right)\left(1 + s/\omega_{pB}\right)}, \qquad A = \frac{A_0}{1 + A_0},$$

where $s = -\omega_{pA}$ and $s = -\omega_{pB}$ are the roots of $D(s)$.

### Step 2 — The two closed-loop poles (first approximation)

The product of the roots is $\omega_{pA}\omega_{pB} = (1 + A_0)\omega_{p1}\omega_{p2}$ and the sum of their reciprocals is $(1/\omega_{p1} + 1/\omega_{p2} + A_0/\omega_z)/(1 + A_0)$. With $\omega_z \approx \omega_{p2}$ and $\omega_{p2} \ll (1 + A_0)\omega_{p1}$ (widely spaced roots):

$$\omega_{pB} \approx (1 + A_0)\,\omega_{p1}, \qquad \omega_{pA} \approx \omega_{p2} \approx \omega_z .$$

$\omega_{pB}$ is the main closed-loop pole, and $\omega_{pA}$ forms a **doublet** with the zero. The residue at $\omega_{pA}$ depends on the *small difference* $1 - \omega_{pA}/\omega_z$, so $\omega_{pA}$ is needed more precisely.

### Step 3 — How close is $\omega_{pA}$ to $\omega_z$?

**$D$ at the zero.** At $s = -\omega_z$ the $A_0$ term vanishes, and with $\omega_z \gg \omega_{p1}$:

$$D(-\omega_z) = \left(1 - \frac{\omega_z}{\omega_{p1}}\right)\left(1 - \frac{\omega_z}{\omega_{p2}}\right) \approx -\frac{\omega_z}{\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right),$$

small, proportional to the mismatch, and exactly zero when $\omega_z = \omega_{p2}$.

**Slope of $D$ there.**

$$D'(s) = \frac{1}{\omega_{p1}}\left(1 + \frac{s}{\omega_{p2}}\right) + \frac{1}{\omega_{p2}}\left(1 + \frac{s}{\omega_{p1}}\right) + \frac{A_0}{\omega_z} .$$

At $s = -\omega_z$, with $\omega_z \approx \omega_{p2}$, the first term is about zero, the second about $-1/\omega_{p1}$, and the third is $A_0/\omega_z$; since $A_0\omega_{p1} \gg \omega_z$,

$$D'(-\omega_z) \approx \frac{A_0}{\omega_z} - \frac{1}{\omega_{p1}} \approx \frac{A_0}{\omega_z} .$$

**One Newton step** from $s = -\omega_z$ to the root $s = -\omega_{pA}$:

$$
\begin{aligned}
0 = D(-\omega_{pA}) &\approx D(-\omega_z) + D'(-\omega_z)\,(\omega_z - \omega_{pA})\\
\omega_{pA} &\approx \omega_z + \frac{D(-\omega_z)}{D'(-\omega_z)} = \omega_z - \frac{\omega_z^2}{A_0\,\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right),
\end{aligned}
$$

so

$$1 - \frac{\omega_{pA}}{\omega_z} \approx \frac{\omega_z}{A_0\,\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right) .$$

The closed-loop pole lies much closer to the zero than $\omega_{p2}$ does: the open-loop mismatch is shrunk by $\omega_z/(A_0\omega_{p1}) \approx \omega_{p2}/[(1 + A_0)\omega_{p1}] \ll 1$, roughly the inverse of the loop gain at $\omega_z$.

### Step 4 — Step response and the doublet term

For an input step $V_0u(t)$, partial fractions of $H_{closed}(s)V_0/s$ give

$$V_{out}(t) = AV_0\left[1 - K_Ae^{-\omega_{pA}t} - K_Be^{-\omega_{pB}t}\right]u(t),$$

$$K_A = \frac{1 - \omega_{pA}/\omega_z}{1 - \omega_{pA}/\omega_{pB}}, \qquad K_B = \frac{1 - \omega_{pB}/\omega_z}{1 - \omega_{pB}/\omega_{pA}}, \qquad K_A + K_B = 1 .$$

Since $\omega_{pA} \ll \omega_{pB}$, the denominator of $K_A$ is about 1, and with Step 3:

$$K_A \approx 1 - \frac{\omega_{pA}}{\omega_z} \approx \frac{\omega_z}{A_0\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right).$$

The doublet term in the step response is therefore

$$-AV_0\,\frac{\omega_z}{A_0\,\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right)e^{-\omega_{pA}t}, \qquad \omega_{pA} \approx \omega_z \approx \omega_{p2} ,$$

the claimed form **$\propto (1 - \omega_z/\omega_{p2})\exp(-\omega_{p2}t)$**: its amplitude is proportional to the pole–zero mismatch (zero for exact cancellation), and it decays with a time constant of about $1/\omega_z$ ($\approx 1/\omega_{p2}$), much longer than the main time constant $1/[(1 + A_0)\omega_{p1}]$ of the $K_B$ term. $\blacksquare$

### Step 5 — Interpretation, and the size of the coefficient

- **Sign.** If $\omega_z < \omega_{p2}$, $K_A > 0$ and the output creeps slowly up to its final value; if $\omega_z > \omega_{p2}$, $K_A < 0$ and the output first goes slightly beyond its final value and then settles slowly back. Both poles are real, so there is no ringing, only a **slow-settling tail**.
- **The quick estimate.** Setting $\omega_{pA} = \omega_{p2}$ directly in $K_A$ gives $K_A \approx 1 - \omega_{p2}/\omega_z \approx -(1 - \omega_z/\omega_{p2})$: the same dependence on the mismatch, but with a coefficient of order 1, overestimating the tail by about $A_0\omega_{p1}/\omega_z$ because it ignores that the closed loop pulls the pole toward the zero.
- **Example.** $A_0 = 1000$, $\omega_{p1} = 10^6$ rad/s, $\omega_{p2} = 10^8$ rad/s, $\omega_z = 1.1\times10^8$ rad/s (10 % mismatch): $\omega_z/(A_0\omega_{p1}) = 0.11$, so $K_A \approx 0.11\times(-0.1) = -0.011$, a tail of about +1.1 % of the final value (the exact roots give +1.4 %), decaying with $1/\omega_{pA} \approx 9$ ns. The quick estimate would suggest about 10 %.

### Result

The closed-loop pole near the doublet is

$$\omega_{pA} \approx \omega_z\left[1 - \frac{\omega_z}{A_0\,\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right)\right],$$

and its contribution to the step response is

$$-AV_0\,\frac{1 - \omega_{pA}/\omega_z}{1 - \omega_{pA}/\omega_{pB}}\,e^{-\omega_{pA}t} \approx -AV_0\,\frac{\omega_z}{(1 + A_0)\,\omega_{p1}}\left(1 - \frac{\omega_z}{\omega_{p2}}\right)e^{-\omega_z t},$$

with $A = A_0/(1 + A_0)$ and $\omega_{pB} \approx (1 + A_0)\omega_{p1}$ (for $A_0 \gg 1$, $A_0$ and $1 + A_0$ are interchangeable here). The term is proportional to $1 - \omega_z/\omega_{p2}$, vanishes for exact cancellation, and decays with time constant ≈ $1/\omega_z$ ≈ $1/\omega_{p2}$: a slow-settling component.

**Common mistake.** Concluding that the doublet term has a time constant $1/[(1 + A_0)\omega_{p1}]$. That is the fast main pole; the doublet's pole stays near $\omega_z \approx \omega_{p2}$, which is why the tail is *slow*.

**Common mistake.** Claiming that a doublet causes ringing or oscillatory overshoot. Both closed-loop poles are real; the mismatch only adds a small, slowly decaying exponential.

**Common mistake.** Treating the tail amplitude as independent of the mismatch, or as equal to the full mismatch $|1 - \omega_z/\omega_{p2}|$. It is proportional to the mismatch but reduced by about $\omega_z/[(1 + A_0)\omega_{p1}]$, because feedback pulls the closed-loop pole toward the zero.
