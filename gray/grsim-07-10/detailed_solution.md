# Detailed solution - grsim-07-10

Model the follower with $g_m$, $C_{gs}$ (gate to source) and $C_{gd}$ (gate to ac ground). Write nodal equations at the gate and source to get a two-pole, one-zero transfer function. Evaluate it for each load, then compare the magnitude, phase and step responses with an ngspice simulation of the same linear model.

### Step 1 — Small-signal parameters

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm{A/V^2})(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},
$$

$$
C_{gs}=\tfrac23WL_{\text{eff}}C_{ox}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF},\qquad C_{gd}=14\ \mathrm{fF}.
$$

### Step 2 — General transfer function

With a load admittance $Y_L$ at the source, KCL at the gate ($v_g$) and at the source ($v_o$) gives, for a load $R_L$ or $C_L$,

$$
\frac{v_o}{v_i}=A_0\,\frac{1+sC_{gs}/g_m}{1+as+bs^2}.
$$

The zero at $g_m/C_{gs}=2.6\times10^{10}$ rad/s (4.13 GHz) is where the current through $C_{gs}$ cancels $g_mv_{gs}$.

### Step 3 — Resistive load $R_L=1\ \mathrm{k\Omega}$

$$
A_0=\frac{g_mR_L}{1+g_mR_L}=\frac{1.94}{2.94}=0.659\ (-3.6\ \mathrm{dB}),
$$

$$
a=\frac{R_LC_{gs}+R_S(C_{gs}+C_{gd})+R_Sg_mR_LC_{gd}}{1+g_mR_L}=0.42\ \mathrm{ns},\qquad
b=\frac{R_SR_LC_{gs}C_{gd}}{1+g_mR_L}=3.6\times10^{-21}\ \mathrm{s^2}.
$$

The poles are real and far apart: 387 MHz and 18.4 GHz. The magnitude is flat at −3.6 dB to about 30 MHz and has its −3-dB point near 390 MHz. It is about −12 dB at 1 GHz. The 4.13-GHz zero then eases the slope, and the gain is about −27 dB at 20 GHz; it keeps falling because $C_{gd}$ shunts the gate. The phase reaches about −58° at 1 GHz, recovers toward −49° near 10 GHz because of the zero, and turns down again above the 18-GHz pole.

### Step 4 — Capacitive load $C_L=400$ pF

With only $C_L$ (current-source bias), $A_0=1$ (0 dB) and, letting $R_L\to\infty$,

$$
a=\frac{C_{gs}+C_L+R_Sg_mC_{gd}}{g_m}=207\ \mathrm{ns},\qquad
b=\frac{R_S\left[C_L(C_{gs}+C_{gd})+C_{gs}C_{gd}\right]}{g_m}=1.83\times10^{-16}\ \mathrm{s^2}.
$$

The poles are at 0.773 MHz, essentially $g_m/(2\pi C_L)$ (the $1/g_m$ output resistance driving $C_L$), and at 179 MHz. The −3-dB point is 0.77 MHz. The magnitude falls at −20 dB/decade to about 180 MHz (−22 dB at 10 MHz), then at −40 dB/decade (about −77 dB at 1 GHz), and the slope eases above the 4.13-GHz zero. The phase is −53° at 1 MHz, −89° at 10 MHz and about −156° near 1 GHz, returning toward −90° at 20 GHz.

### Step 5 — SPICE frequency response

```spice
* grsim-07-10 source follower, linear model
.subckt sf g s
Cgs g s 74.67f
Cgd g 0 14f
G   0 s g s 1.93649m
.ends
Vs  i 0 dc 0 ac 1 pwl(0 0 1p 1m)
RS1 i g1 10k
X1  g1 s1 sf
RL  s1 0 1k
RS2 i g2 10k
X2  g2 s2 sf
CL  s2 0 400p
.ac dec 100 10k 20G
.pz i 0 s1 0 vol pz
.tran 0.01n 5n
.end
```

![Simulated gain magnitude of the source follower for the 1-kΩ and 400-pF loads](/q/grsim-07-10/solution-magnitude.svg)

![Simulated gain phase of the source follower for the 1-kΩ and 400-pF loads](/q/grsim-07-10/solution-phase.svg)

| $f$ | 1 MHz | 10 MHz | 100 MHz | 390 MHz | 1 GHz | 10 GHz | 20 GHz |
|---|---|---|---|---|---|---|---|
| 1 kΩ: dB / ° | −3.6 / −0.1 | −3.6 / −1.4 | −3.9 / −13 | −6.6 / −41 | −12.2 / −58 | −24.6 / −49 | −27.4 / −58 |
| 400 pF: dB / ° | −4.3 / −53 | −22.3 / −89 | −43.4 / −117 | −61.6 / −150 | −77.1 / −156 | −108.8 / −111 | −115.3 / −101 |

The pole-zero analysis for the 1-kΩ case gives poles at $2.43\times10^9$ and $1.15\times10^{11}$ rad/s and a zero at $2.59\times10^{10}$ rad/s (387 MHz, 18.4 GHz, 4.13 GHz). The −3-dB points are 390 MHz (1 kΩ) and 0.777 MHz (400 pF), matching the hand analysis.

### Step 6 — Step responses (1-mV input step)

| Load | Final value | 10–90 % rise | Overshoot |
|---|---|---|---|
| 1 kΩ | 0.659 mV | 0.90 ns | none |
| 400 pF | 1.000 mV | 0.45 µs (τ = 0.21 µs) | none |

Both responses are monotonic because both pole pairs are real. With 1 kΩ the response is dominated by the 387-MHz pole. With 400 pF it is a single-time-constant exponential with $\tau\approx C_L/g_m=0.21\ \mu$s, settling to 1 mV.

There is no ringing, unlike the bipolar follower driving a capacitor. The source follower's output impedance does rise with frequency (from $1/g_m=516\ \Omega$ toward $R_S$), but only above about $1/(2\pi R_SC_{gs})=213$ MHz, because $R_S$ couples to the output only through the small $C_{gs}$. Long before that, the 400-pF load has already rolled the gain off at 0.77 MHz, so the output impedance looks resistive to the load and no resonance forms.
