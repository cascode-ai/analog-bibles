# Detailed solution - grsim-09-43

In the unity-gain follower the whole loop passes through the wire from the output to the gate of $M_1$. Breaking it there, the output is the return side and $M_1$'s gate the driven side. Two ac simulations of the closed circuit then give $\mathscr{R}'_i$ (test current into the junction) and $\mathscr{R}'_v$ (test voltage in series). Neither changes the dc operating point. Combined as complex numbers, they give the return ratio $\mathscr{R}(j\omega)$, from which the unity-gain frequency and the stability margins follow. Hand estimates for the op amp (from grsim-09-21) provide the check.

### Step 1 — Expected return ratio

The return ratio of the follower equals the op amp's open-loop gain, because the feedback factor is 1. With the device values of grsim-09-21 ($L_{\text{eff}}=6.4\ \mu$m, $g_{m1}=97\ \mu$A/V, $g_{m6}=194\ \mu$A/V, $R_1=2.13\ \mathrm{M\Omega}$, $R_2=1.07\ \mathrm{M\Omega}$):

$$
\mathscr{R}_0=g_{m1}R_1\,g_{m6}R_2\approx4.3\times10^{4},\qquad f_{p1}\approx\frac{1}{2\pi g_{m6}R_2R_1C_c}\approx72\ \mathrm{Hz},\qquad f_u\approx\frac{g_{m1}}{2\pi C_c}=3.1\ \mathrm{MHz}.
$$

Between $f_{p1}$ and $f_u$ the magnitude falls as $f_u/f$: about 3100 at 1 kHz and 31 at 100 kHz, with a phase near −90°. $M_9$ cancels the right-half-plane zero, so beyond $f_u$ only the non-dominant poles add phase lag. These come from the output node (loaded by $C_c$ and the gate-drain capacitances), the mirror node of $M_3$–$M_4$, and $M_9$'s channel capacitance with its resistance.

### Step 2 — The two injections

The op-amp deck of grsim-09-21 is used unchanged (level-1 models with effective dimensions, $\lambda_n=0.031$, $\lambda_p=0.0156\ \mathrm{V^{-1}}$, body effect, overlap capacitances; no junction areas are specified, so only gate and overlap capacitances are present). $M_9$ is 4/10.3 µm (effective) with its gate at +5 V, giving 5.13 kΩ. The input (gate of $M_2$) is grounded for ac.

```spice
* grsim-09-43 injections at X (return side o, driven side inp = gate of M1)
.include oa.inc
Vin inn 0 dc 0
Vt inp o dc 0 ac 0
It 0 o dc 0 ac 1
.ac dec 100 10 10g
* run 1 (It ac 1, Vt ac 0):  i_d = -i(Vt),  i_m = i_d - 1,  R'_i = -i_m/i_d
* run 2 (It ac 0, Vt ac 1):  R'_v = -v(o)/v(inp)
.end
```

In the current-injection run, the test current $i_t=1$ enters $X$ (node `o`). The current into the driven side flows through the 0-V source `Vt`: $i_d=-i(V_t)$. The current arriving from the return side is $i_m=i_d-i_t$. In the voltage-injection run, `Vt` is in series with its + terminal on the driven side, so $v_d=v(\text{inp})$ and $v_m=v(\text{o})$.

### Step 3 — (a) Values at the four frequencies

At each frequency the two complex ratios are combined as

$$
\mathscr{R}=\left[\frac{1}{1+\mathscr{R}'_i}+\frac{1}{1+\mathscr{R}'_v}\right]^{-1}-1 .
$$

| $f$ | $\mathscr{R}'_i$ | $\mathscr{R}'_v$ | $\mathscr{R}$ | $\lvert\mathscr{R}\rvert$ | $\angle\mathscr{R}$ |
|---|---|---|---|---|---|
| 1 kHz | $-3.2\times10^{6}-j3.4\times10^{7}$ | $192-j3222$ | $192-j3222$ | 3228 (70.2 dB) | −86.6° |
| 100 kHz | $-3.5\times10^{4}-j4712$ | $-0.046-j32.34$ | $-0.075-j32.33$ | 32.3 (30.2 dB) | −90.1° |
| 10 MHz | $-2.82-j10.55$ | $-0.053-j0.216$ | $-0.085-j0.298$ | 0.309 (−10.2 dB) | −105.9° |
| 1 GHz | $0.353-j0.120$ | $2.53+j0.877$ | $-0.00035+j0.00134$ | 0.0014 (−57.2 dB) | −255.5° |

At 1 kHz and 100 kHz, $|\mathscr{R}'_i|\gg|\mathscr{R}'_v|$, so $\mathscr{R}\approx\mathscr{R}'_v$. The driven side (a MOS gate) has a much higher impedance than the return side (the op-amp output), which is the condition for an accurate voltage injection. At 1 GHz neither ratio alone is close to $\mathscr{R}$: the gate capacitance of $M_1$ makes the driven-side impedance comparable to the output impedance, and only the complex combination gives the right answer. Combining magnitudes alone would be wrong.

### Step 4 — (b) Magnitude, phase and margins

![Return-ratio magnitude in dB versus log frequency from 10 Hz to 10 GHz: 94.6 dB at low frequency, a dominant pole near 62 Hz, −20 dB/decade through 0 dB at 3.22 MHz, and −36.5 dB where the phase reaches −180°](/q/grsim-09-43/solution-magnitude.svg)

![Return-ratio phase versus log frequency: near −90° from about 1 kHz to 1 MHz, −95.4° at the 3.22-MHz unity-gain frequency, −180° at 120 MHz, approaching −270° at high frequency](/q/grsim-09-43/solution-phase.svg)

| Quantity | Hand | ngspice |
|---|---|---|
| Low-frequency $\mathscr{R}_0$ | $4.3\times10^{4}$ (92.7 dB) | $5.36\times10^{4}$ (94.6 dB) |
| Dominant pole | 72 Hz | 62 Hz |
| Unity-gain frequency | 3.1 MHz | 3.22 MHz |
| Phase at $f_u$ | — | −95.4° |
| Phase margin | 75–85° | 84.6° |
| Frequency of −180° | tens of MHz | 120 MHz |
| Gain margin | a few tens of dB | 36.5 dB |

The return ratio behaves like a single-pole system up to and well beyond its unity-gain frequency. The phase stays within 6° of −90° from 1 kHz to 3 MHz, which gives a large phase margin. The somewhat higher simulated gain and $f_u$ come from the level-1 currents, which exceed nominal by a few percent (see grsim-09-21). The phase lag at 10 MHz is modest (−106°) for two reasons: without junction areas the non-dominant poles lie well above 10 MHz (the phase reaches −180° only at 120 MHz), and $M_9$'s resistance (5.13 kΩ) slightly exceeds $1/g_{m6}$ (4.65 kΩ in the simulation), which moves the compensation zero into the left half-plane, where it adds a little phase lead. Including drain junction capacitances would lower the non-dominant poles and reduce both margins somewhat.
