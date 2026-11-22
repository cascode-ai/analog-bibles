# Detailed solution - grsim-11-25

Express the output noise current of the mirror in terms of one device's drain noise, write each noise mechanism as a function of $W$ and $L$ at fixed current, and then pick the geometry that minimizes it under the area and minimum-dimension constraints. A SPICE noise analysis of three geometries with the same area checks the predicted scaling.

### Step 1 — Output noise of the mirror

Let $\overline{i_d^2}$ be the drain noise current of one device. In $M_1$ it flows into the diode-connected device, whose small-signal resistance is $1/g_{m1}$ (the input current source is ideal and noiseless), so it produces $v_{gs}=i_{d1}/g_{m1}$. $M_2$ converts this back to $g_{m2}v_{gs}=i_{d1}$ for identical devices. $M_2$ adds its own uncorrelated drain noise directly, so

$$
\overline{i_o^2}=\overline{i_{d1}^2}+\overline{i_{d2}^2}=2\,\overline{i_d^2}.
$$

Minimizing the output noise therefore means minimizing $\overline{i_d^2}$ of each device at the fixed current $I=I_{IN}$. The area limit gives $WL\le5\ \mu\mathrm m^2$ per device, with $W,L\ge0.6\ \mu$m.

### Step 2 — (a) Flicker noise dominates

The gate-referred generator reaches the drain multiplied by $g_m^2$. With the square law, $g_m^2=2k'(W/L)I$, so

$$
\frac{\overline{i_d^2}}{\Delta f}=g_m^2\frac{K_f}{WLC_{ox}f}=\frac{2k'(W/L)I}{WL}\cdot\frac{K_f}{C_{ox}f}=\frac{2k'IK_f}{C_{ox}L^2f}.
$$

At fixed current the width cancels: a wider device has a smaller gate-referred generator but a proportionally larger $g_m^2$. The output noise falls as $1/L^2$, so $L$ should be as large as possible. With $WL\le5\ \mu\mathrm m^2$, the largest $L$ is obtained at the minimum width:

$$
W=0.6\ \mu\mathrm m,\qquad L=\frac{5\ \mu\mathrm m^2}{0.6\ \mu\mathrm m}=8.33\ \mu\mathrm m.
$$

### Step 3 — (b) Thermal noise dominates

$$
\frac{\overline{i_d^2}}{\Delta f}=4kT\tfrac23g_m=4kT\tfrac23\sqrt{2k'(W/L)I}\ \propto\ \sqrt{W/L},
$$

so $W/L$ should be as small as possible. At a given area, $W/L=W^2/(WL)$, so the smallest ratio uses the smallest width and the full area: again $W=0.6\ \mu$m and $L=8.33\ \mu$m, giving $W/L=0.072$.

Both mechanisms lead to the same long, narrow device, each using its full 5-µm² share. Compared with a square $1.58\times1.58\ \mu$m device of the same area, the flicker noise drops by $(8.33/1.58)^2=27.8$ and the thermal noise by $\sqrt{1/0.072}=3.73$ (both in power).

### Step 4 — Cost of the design

The overdrive grows as $W/L$ falls:

$$
V_{ov}=\sqrt{\frac{2I}{k'(W/L)}}=\sqrt{\frac{2(10\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(0.072)}}=1.20\ \mathrm V
$$

at $I_{IN}=10\ \mu$A, 3.7 times the 0.32 V of the square device. Both the input voltage $V_{GS}=1.8$ V and the minimum output voltage $V_{ov}$ of the mirror rise accordingly.

### Step 5 — SPICE verification

A level-1 NMOS with $K_P=194\ \mu$A/V², $V_{TO}=0.6$ V, $t_{ox}=80$ Å ($C_{ox}=4.32$ fF/µm²), $\lambda=0$ and AF $=1$ is used, at a temperature giving $4kT=1.66\times10^{-20}$ V·C. The ngspice-46 level-1 flicker term equals $\mathrm{KF}\,g_m^2/(C_{ox}WLf)$ (checked by sweeping $W$, $L$, $t_{ox}$ and $K_P$), so KF $=K_f=3\times10^{-24}$ reproduces the given model; KF $=0$ isolates the thermal noise. $I_{IN}=10\ \mu$A is an ideal source, and the output is held at 3 V, so $M_2$ is saturated for all geometries. The output current noise is sensed with a zero-volt source and a noiseless CCVS, and read at 10 Hz (the flicker runs are flicker-dominated there by more than four orders of magnitude).

```spice
* grsim-11-25 mirror noise (long, narrow design)
IIN 0 d1 dc 10u ac 1
M1 d1 d1 0 0 nm W=0.6u L=8.3333u
M2 d2 d1 0 0 nm W=0.6u L=8.3333u
VS d2 vo 0
VO vo 0 3
H1 out 0 VS 1
.model nm nmos level=1 vto=0.6 kp=194u tox=80e-10 lambda=0 kf=3e-24 af=1
.temp 27.4
.noise v(out) IIN dec 1 10 100
.end
```

All three geometries have $WL=5\ \mu\mathrm m^2$:

| $W/L$ (µm/µm) | $V_{GS}$ (V) | $g_m$ (µS) | Flicker $\overline{i_o^2}/\Delta f$ at 10 Hz, SPICE (A²/Hz) | Hand $2\cdot\dfrac{2k'IK_f}{C_{ox}L^2f}$ | Thermal $\overline{i_o^2}/\Delta f$, SPICE (A²/Hz) | Hand $2\cdot4kT\tfrac23g_m$ |
|---|---|---|---|---|---|---|
| 0.6/8.33 | 1.80 | 16.7 | $7.75\times10^{-21}$ | $7.78\times10^{-21}$ | $3.70\times10^{-25}$ | $3.70\times10^{-25}$ |
| 1.58/1.58 | 0.92 | 62.2 | $2.15\times10^{-19}$ | $2.16\times10^{-19}$ | $1.38\times10^{-24}$ | $1.38\times10^{-24}$ |
| 8.33/0.6 | 0.69 | 232 | $1.50\times10^{-18}$ | $1.50\times10^{-18}$ | $5.13\times10^{-24}$ | $5.13\times10^{-24}$ |

The ratios follow the predictions: the flicker noise of the square device is 27.8 times that of the long device, $(8.33/1.58)^2$, and its thermal noise is 3.73 times larger, $\sqrt{1/0.072}$. The short, wide device is the worst in both cases. The chosen design, $W=0.6\ \mu$m and $L=8.33\ \mu$m for both transistors, gives the lowest output noise in both regimes.
