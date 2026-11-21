# Detailed solution - G235

For a small step the cascode is linear, so the output is its step response. Sum the zero-value time constants into $T_0$, treat the stage as single-pole with $\tau=T_0$ to get the rise time and waveform, and compare with the exact response, since the time constants here are less dominated by one term.

### Step 1 — Gain and zero-value time constants

At $I_C=1$ mA, $g_m=I_C/V_T=38.46$ mA/V, $r_\pi=\beta/g_m=2.6\ \mathrm{k\Omega}$, $C_\pi=g_m/(2\pi f_T)-C_\mu=11.84$ pF, and $\alpha=\beta/(\beta+1)=0.990$. The input divider $r_\pi/(R_S+r_\pi)$ sets the base voltage of $Q_1$, and the common-base $Q_2$ passes $\alpha$ times the collector current of $Q_1$ to $R_L$:

$$
A_0=-\alpha g_mR_L\,\frac{r_\pi}{R_S+r_\pi}=-0.990\times115.4\times\frac{2.6}{7.6}=-39.1 .
$$

With $v_i$ zeroed the base of $Q_1$ sees $R_{\pi0}=R_S\parallel r_\pi=1.71\ \mathrm{k\Omega}$, and the collector of $Q_1$ sees the emitter of $Q_2$, $R_x=r_\pi/(\beta+1)=25.7\ \Omega$. The open-circuit time constants are:

| Capacitor | $R_{j0}$ | $R_{j0}C_j$ (ns) |
|---|---|---|
| $C_{\pi1}$ | $R_{\pi0}=1.71\ \mathrm{k\Omega}$ | 20.3 |
| $C_{\mu1}$ | $R_{\pi0}+R_x+g_mR_xR_{\pi0}=3.43\ \mathrm{k\Omega}$ | 1.37 |
| $C_{cs1}$ | $R_x=25.7\ \Omega$ | 0.03 |
| $C_{\pi2}$ | $R_x=25.7\ \Omega$ | 0.30 |
| $C_{\mu2}$ | $R_L=3\ \mathrm{k\Omega}$ | 1.2 |
| $C_{cs2}$ | $R_L=3\ \mathrm{k\Omega}$ | 3.0 |

$$
T_0=26.2\ \mathrm{ns},\qquad f_{-3\mathrm{dB}}\approx\frac1{2\pi T_0}=6.08\ \mathrm{MHz}.
$$

### Step 2 — 10–90% rise time

The single-pole step response $v_o(t)=A_0V_{\text{step}}(1-e^{-t/\tau})$ reaches 10% at $\tau\ln(1/0.9)$ and 90% at $\tau\ln10$, so

$$
t_r=\tau\ln9=2.2\,T_0=2.2(26.2\ \mathrm{ns})=58\ \mathrm{ns}.
$$

The exact poles are at $-4.62\times10^{7}$, $-2.38\times10^{8}$ and $-3.03\times10^{9}$ rad/s; the second pole (from $C_{\mu2}+C_{cs2}$ with $R_L$) is only a factor of 5 above the first. The zero-value sum therefore overestimates the delay, and the exact response gives $t_r=49$ ns. The rise time is about 50–58 ns, four to five times faster than the common-emitter stage alone (229 ns).

### Step 3 — Output waveform for a 1-mV step

The stage inverts, so

$$
v_o(t)\approx-39.1\ \mathrm{mV}\left(1-e^{-t/26.2\ \mathrm{ns}}\right).
$$

| $t$ (ns) | 20 | 50 | 100 | 150 | 300 |
|---|---|---|---|---|---|
| single pole (mV) | −20.9 | −33.3 | −38.2 | −39.0 | −39.1 |
| exact (mV) | −19.6 | −34.2 | −38.6 | −39.0 | −39.1 |

![Output voltage over 0 to 300 ns, falling to −39.1 mV within about 150 ns, single-pole and exact responses](/q/G235/solution-waveform.svg)

The output settles within 1% of −39.1 mV after about 120 ns and stays flat to 300 ns. The exact curve starts slightly more slowly (rounded by the higher poles) and then settles a little faster than the single exponential.
