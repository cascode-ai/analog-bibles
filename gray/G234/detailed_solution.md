# Detailed solution - G234

For a small step the stage is linear, so the output is its step response. Use zero-value time constants to find the dominant time constant, model the stage as single-pole, and derive the rise time and waveform from that exponential.

### Step 1 — Gain and dominant time constant

At $I_C=1$ mA, $g_m=I_C/V_T=38.46$ mA/V, $r_\pi=\beta/g_m=2.6\ \mathrm{k\Omega}$, and from $\omega_T=g_m/(C_\pi+C_\mu)$, $C_\pi=g_m/(2\pi f_T)-C_\mu=11.84$ pF. The base current flows through $r_\pi$, so the input is divided and

$$
A_0=-g_mR_L\,\frac{r_\pi}{R_S+r_\pi}=-115.4\times\frac{2.6}{7.6}=-39.5 .
$$

With $v_i$ zeroed the base sees $R_{\pi0}=R_S\parallel r_\pi=1.71\ \mathrm{k\Omega}$. The open-circuit resistances are $R_{\pi0}$ for $C_\pi$, $R_{\pi0}+R_L+g_mR_LR_{\pi0}=202\ \mathrm{k\Omega}$ for $C_\mu$ (Miller term), and $R_L$ for $C_{cs}$:

$$
T_0=(1.71\ \mathrm{k\Omega})(11.84\ \mathrm{pF})+(202\ \mathrm{k\Omega})(0.4\ \mathrm{pF})+(3\ \mathrm{k\Omega})(1\ \mathrm{pF})=20.3+80.8+3.0=104.1\ \mathrm{ns}.
$$

The exact circuit has poles at $-9.69\times10^{6}$ and $-1.18\times10^{9}$ rad/s, more than a factor of 100 apart, so a single pole with $\tau=T_0$ (1.53 MHz) describes the response well.

### Step 2 — 10–90% rise time

The single-pole step response $v_o(t)=A_0V_{\text{step}}(1-e^{-t/\tau})$ reaches 10% at $\tau\ln(1/0.9)$ and 90% at $\tau\ln10$, so

$$
t_r=\tau\ln9=2.2\,T_0=2.2(104.1\ \mathrm{ns})=229\ \mathrm{ns}.
$$

Equivalently $t_r=0.35/f_{-3\mathrm{dB}}$. The exact two-pole response gives 227 ns.

### Step 3 — Output waveform for a 1-mV step

The stage inverts, so

$$
v_o(t)\approx-39.5\ \mathrm{mV}\left(1-e^{-t/104\ \mathrm{ns}}\right).
$$

| $t$ (ns) | 50 | 100 | 150 | 200 | 240 | 300 |
|---|---|---|---|---|---|---|
| $v_o$ (mV) | −15.1 | −24.4 | −30.1 | −33.7 | −35.5 | −37.3 |

![Output voltage over 0 to 300 ns, an exponential falling toward −39.5 mV and not yet settled at 300 ns](/q/G234/solution-waveform.svg)

The time constant is about a third of the 300-ns window, so the output is still visibly approaching its final value at the end: it crosses 90% at about 240 ns and is at −37.3 mV (94%) at 300 ns. The right-half-plane zero at $g_m/C_\mu$ produces only a negligible initial positive blip (well below 1 µV).
