# Detailed solution - G230

For a small step the cascode stage is linear, so the output is its step response. Sum the zero-value time constants to get the effective time constant $T_0$, treat the stage as single-pole with $\tau=T_0$, and derive the rise time and waveform; then check the estimate against the exact response, since here no single pole dominates.

### Step 1 — Gain and zero-value time constants

From the square law, $g_m=\sqrt{2k_n'(W/L)I_D}=\sqrt{2(60\ \mu\mathrm{A/V^2})(62.5)(0.5\ \mathrm{mA})}=1.936$ mA/V for both devices, $1/g_m=516\ \Omega$. With $\lambda=0$ the common-gate device $M_2$ passes the drain current of $M_1$ unchanged to $R_L$, so the low-frequency gain is $A_0=-g_{m1}R_L=-38.7$. The capacitances are $C_{gs}=\tfrac23(100)(1.6)(0.7\ \mathrm{fF})=74.7$ fF and $C_{gd}=14$ fF.

With all capacitors open, the drain of $M_1$ (node $x$) sees $1/g_{m2}$ looking into the source of $M_2$, and the output sees $R_L$. The open-circuit resistances are:

| Capacitor | $R_{j0}$ | $R_{j0}C_j$ (ns) |
|---|---|---|
| $C_{gs1}$ | $R_S=10\ \mathrm{k\Omega}$ | 0.747 |
| $C_{gd1}$ | $R_S+\frac1{g_{m2}}+\frac{g_{m1}}{g_{m2}}R_S=20.5\ \mathrm{k\Omega}$ | 0.287 |
| $C_{gs2}$ | $1/g_{m2}=516\ \Omega$ | 0.039 |
| $C_{gd2}$ | $R_L=20\ \mathrm{k\Omega}$ | 0.280 |

$$
T_0=0.747+0.287+0.039+0.280=1.35\ \mathrm{ns}.
$$

The gate-to-drain gain of $M_1$ is only $-g_{m1}/g_{m2}=-1$, so $C_{gd1}$ is no longer Miller-multiplied and $T_0$ is about five times smaller than for the plain common-source stage.

### Step 2 — 10–90% rise time

A single pole with time constant $\tau$ has step response $v_o(t)=A_0V_{\text{step}}(1-e^{-t/\tau})$. It reaches 10% at $t_{10}=\tau\ln(1/0.9)$ and 90% at $t_{90}=\tau\ln10$, so

$$
t_r=\tau\ln9=2.2\,T_0=2.2(1.35\ \mathrm{ns})=3.0\ \mathrm{ns}.
$$

The four time constants are comparable, so the circuit's three poles ($-0.97\times10^{9}$, $-3.57\times10^{9}$ and $-2.61\times10^{10}$ rad/s) are not widely separated, and the zero-value estimate of the bandwidth is conservative. Integrating the exact three-node response gives $t_r=2.41$ ns, so the actual rise time lies between 2.4 and 3.0 ns.

### Step 3 — Output waveform for a 1-mV step

The stage inverts, so in the single-pole approximation

$$
v_o(t)\approx-38.7\ \mathrm{mV}\left(1-e^{-t/1.35\ \mathrm{ns}}\right).
$$

The output passes −34.5 mV at 3 ns and −38.5 mV at 7 ns (exact: −35.7 mV and −38.7 mV). On the requested 0–300 ns axis the waveform is therefore an almost vertical step to −38.7 mV followed by a flat line.

![Output voltage over 0 to 300 ns, an almost immediate step down to −38.7 mV](/q/G230/solution-waveform.svg)

The expanded view of the first 15 ns shows the exponential edge and the exact response, which starts more slowly (the higher poles round the initial edge) but settles slightly faster:

![First 15 ns of the output, single-pole approximation and exact response](/q/G230/solution-waveform-zoom.svg)

Compared with the plain common-source stage ($t_r\approx14.5$ ns), the cascode responds about five times faster with the same gain.
