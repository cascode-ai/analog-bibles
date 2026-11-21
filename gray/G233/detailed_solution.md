# Detailed solution - G233

Apply the zero-value time-constant method to both circuits: each capacitor's resistance is found with all other capacitors open and $v_i$ zeroed, the products are summed into $T_0$, and $f_{-3\mathrm{dB}}\approx1/(2\pi T_0)$. The two circuits differ mainly in the resistance seen by $C_{\mu1}$.

### Step 1 — Hybrid-π parameters

At $I_C=1$ mA, $g_m=I_C/V_T=38.46$ mA/V and $r_\pi=\beta/g_m=2.6\ \mathrm{k\Omega}$. The transition frequency is defined by $\omega_T=g_m/(C_\pi+C_\mu)$, so

$$
C_\pi=\frac{g_m}{2\pi f_T}-C_\mu=\frac{38.46\ \mathrm{mA/V}}{2\pi(500\ \mathrm{MHz})}-0.4\ \mathrm{pF}=12.24\ \mathrm{pF}-0.4\ \mathrm{pF}=11.84\ \mathrm{pF}.
$$

With $v_i$ zeroed, the base of $Q_1$ sees $R_S$ in parallel with $r_\pi$:

$$
R_{\pi0}=R_S\parallel r_\pi=5\ \mathrm{k\Omega}\parallel2.6\ \mathrm{k\Omega}=1.71\ \mathrm{k\Omega}.
$$

Both circuits have nearly the same low-frequency gain, −39.5 (common emitter) and −39.1 (cascode).

### Step 2 — Common-emitter stage

- $C_\pi$ (base to ground): $R_{\pi0}=1.71\ \mathrm{k\Omega}$.
- $C_\mu$ (base to collector): a test current $i_x$ raises the base by $i_xR_{\pi0}$ and lowers the collector by $i_xR_L$ plus $g_m(i_xR_{\pi0})R_L$ from the controlled source, so

$$
R_{\mu0}=R_{\pi0}+R_L+g_mR_LR_{\pi0}=1.71\ \mathrm{k\Omega}+3\ \mathrm{k\Omega}+(38.46\ \mathrm{mA/V})(3\ \mathrm{k\Omega})(1.71\ \mathrm{k\Omega})=202\ \mathrm{k\Omega}.
$$

- $C_{cs}$ (collector to substrate, ac ground): $R_L=3\ \mathrm{k\Omega}$.

$$
T_0=(1.71\ \mathrm{k\Omega})(11.84\ \mathrm{pF})+(202\ \mathrm{k\Omega})(0.4\ \mathrm{pF})+(3\ \mathrm{k\Omega})(1\ \mathrm{pF})=20.3+80.8+3.0=104.1\ \mathrm{ns},
$$

$$
f_{-3\mathrm{dB}}\approx\frac1{2\pi(104.1\ \mathrm{ns})}=1.53\ \mathrm{MHz}.
$$

The Miller-multiplied $C_\mu$ contributes almost 80% of $T_0$.

### Step 3 — Cascode stage

The collector of $Q_1$ (node $x$) now drives the emitter of the common-base $Q_2$. With the base of $Q_2$ grounded, a test voltage $v$ at the emitter draws $v/r_\pi+g_mv$, so the resistance at $x$ is

$$
R_x=\frac{r_\pi}{\beta+1}=\frac{2.6\ \mathrm{k\Omega}}{101}=25.7\ \Omega .
$$

This resistance also applies to $C_{\pi2}$, which sits directly between emitter and grounded base. Then

$$
R_{\mu1,0}=R_{\pi0}+R_x+g_mR_xR_{\pi0}=1.71\ \mathrm{k\Omega}+25.7\ \Omega+(38.46\ \mathrm{mA/V})(25.7\ \Omega)(1.71\ \mathrm{k\Omega})=3.43\ \mathrm{k\Omega}.
$$

$C_{\mu2}$ and $C_{cs2}$ connect the output to ac ground and see $R_L$ (the collector of $Q_2$ looks like an infinite resistance with $r_o=\infty$).

| Capacitor | $C$ (pF) | $R_{j0}$ | $R_{j0}C_j$ (ns) |
|---|---|---|---|
| $C_{\pi1}$ | 11.84 | 1.71 kΩ | 20.3 |
| $C_{\mu1}$ | 0.4 | 3.43 kΩ | 1.37 |
| $C_{cs1}$ | 1 | 25.7 Ω | 0.03 |
| $C_{\pi2}$ | 11.84 | 25.7 Ω | 0.30 |
| $C_{\mu2}$ | 0.4 | 3 kΩ | 1.2 |
| $C_{cs2}$ | 1 | 3 kΩ | 3.0 |
| Sum $T_0$ | | | 26.2 |

$$
f_{-3\mathrm{dB}}\approx\frac1{2\pi(26.2\ \mathrm{ns})}=6.08\ \mathrm{MHz}.
$$

### Step 4 — Comparison

The cascode widens the bandwidth by about $104.1/26.2\approx4$ at almost the same gain. The gain from the base to the collector of $Q_1$ falls from $-g_mR_L=-115$ to $-g_mR_x\approx-1$, so the Miller term of $C_{\mu1}$ drops from 80.8 ns to 1.37 ns. What remains is dominated by $C_{\pi1}$ charging through $R_S\parallel r_\pi$ (20.3 ns), which the cascode cannot remove; this is why the improvement is smaller than the factor of about 5 seen for the MOS stages, whose input capacitance is relatively smaller.

Exact solution of the circuits gives 1.54 MHz and 7.1 MHz; the cascode estimate is conservative because its time constants are less dominated by a single term.
