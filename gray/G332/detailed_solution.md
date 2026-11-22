# Detailed solution - G332

Find the return ratio with $C_{\text{in}}$ in place. The input capacitance loads the feedback divider and adds a pole to the feedback path at $2/(RC_{\text{in}})$. Locate the crossover of $|\mathscr{R}|$, which barely moves, and add up the phase lags of the three poles there.

### Step 1 — Return ratio with $C_{\text{in}}$

With $V_i=0$ and the controlled source replaced by $a_v(s)v_t$, the inverting node sees the feedback resistor $R=100$ kΩ from the source, and the input resistor $R$ in parallel with $C_{\text{in}}$ to ground. The divider ratio is
$$
\frac{R\,\|\,(1/sC_{\text{in}})}{R+R\,\|\,(1/sC_{\text{in}})}
=\frac{R/(1+sRC_{\text{in}})}{R+R/(1+sRC_{\text{in}})}
=\frac{1/2}{1+sRC_{\text{in}}/2} .
$$
$v_x$ is the negative of the node voltage, so
$$
\mathscr{R}(s)=\frac{a_v(s)}{2}\cdot\frac{1}{1+s/\omega_3}=\frac{500}{(1+s/100)(1+s/10^6)(1+s/\omega_3)},\qquad \omega_3=\frac{2}{RC_{\text{in}}} .
$$

| $C_{\text{in}}$ | $\omega_3$ (rad/s) |
|---|---|
| 0 | $\infty$ |
| 4 pF | $2/(100\ \mathrm{k\Omega}\times4\ \mathrm{pF})=5\times10^6$ |
| 20 pF | $10^6$ |

### Step 2 — Crossover frequency

Below $\omega_3$ and $10^6$ rad/s, $|\mathscr{R}|\approx500\times100/\omega$, which is 1 at $\omega_c\approx5\times10^4$ rad/s. The extra pole hardly changes the magnitude there. Solving $|\mathscr{R}(j\omega_c)|=1$ exactly gives $4.99\times10^4$ rad/s for 0 and 4 pF, and $4.99\times10^4$ rad/s (within 0.2%) for 20 pF.

### Step 3 — Phase margin

At $\omega_c$, the phase of $\mathscr{R}$ is
$$
\angle\mathscr{R}(j\omega_c)=-\tan^{-1}\frac{\omega_c}{100}-\tan^{-1}\frac{\omega_c}{10^6}-\tan^{-1}\frac{\omega_c}{\omega_3},
$$
and $\mathrm{PM}=180^\circ+\angle\mathscr{R}(j\omega_c)$. For $C_{\text{in}}=0$:
$$
\mathrm{PM}=180^\circ-89.9^\circ-2.9^\circ=87.3^\circ .
$$

| $C_{\text{in}}$ | Lag from $\omega_3$ | Phase margin |
|---|---|---|
| 0 | 0 | 87.3° |
| 4 pF | $\tan^{-1}(0.01)=0.6^\circ$ | 86.7° |
| 20 pF | $\tan^{-1}(0.05)=2.9^\circ$ | 84.4° |

The input capacitance puts a pole in the feedback path and always reduces the margin. Here the reduction is small, because even with 20 pF the extra pole at $10^6$ rad/s is 20 times above the crossover.
