# Detailed solution - grsim-11-26

Refer the noise of every transistor to the differential input. The input pair adds its gate-referred noise directly, and the mirror load adds its noise scaled by $(g_{m3}/g_{m1})^2$. The second stage is divided by the first-stage gain, and the tail source is common mode. Each referred contribution is a flicker term $\propto1/f$ plus a white thermal term, so the three spot frequencies need only one expression. A SPICE `.noise` run checks the result.

### Step 1 — Effective length and bias currents

All transistors have $L_{\text{drwn}}=1\ \mu$m, so

$$
L_{\text{eff}}=L_{\text{drwn}}-2L_d-X_d=1-0.18-0.1=0.72\ \mu\mathrm m.
$$

$M_5$ mirrors the 200-µA reference with the same size as $M_8$, so the tail current is 200 µA and each of $M_1$–$M_4$ carries 100 µA. With the square law in saturation, $g_m=\sqrt{2k'(W/L_{\text{eff}})I_D}$:

$$
g_{m1}=\sqrt{2(64.7\ \mu\mathrm{A/V^2})\frac{150}{0.72}(100\ \mu\mathrm A)}=1.64\ \mathrm{mS},\qquad
g_{m3}=\sqrt{2(194\ \mu\mathrm{A/V^2})\frac{50}{0.72}(100\ \mu\mathrm A)}=1.64\ \mathrm{mS}.
$$

The two are equal because the threefold mobility ratio offsets the threefold width ratio.

### Step 2 — Referral of the first-stage noise

Represent each device by a gate-referred generator $\overline{v_j^2}$. The generators of $M_1$ and $M_2$ sit in series with the inputs and appear unchanged. A generator at the gate of a load device produces a drain current $g_{m3}v_3$, which the input needs $g_{m1}v_i$ to cancel, so it refers as $(g_{m3}/g_{m1})v_3$; the same holds for $M_4$. With four uncorrelated devices,

$$
\frac{\overline{v_i^2}}{\Delta f}=2\frac{\overline{v_1^2}}{\Delta f}+2\left(\frac{g_{m3}}{g_{m1}}\right)^2\frac{\overline{v_3^2}}{\Delta f},
\qquad
\frac{\overline{v_j^2}}{\Delta f}=\frac{K_f}{W_jL_{\text{eff}}C_{ox}f}+4kT\frac{2}{3g_{mj}}.
$$

### Step 3 — Flicker and thermal parts

With $g_{m3}=g_{m1}$, the flicker part is

$$
\frac{\overline{v_{i,f}^2}}{\Delta f}=\frac{2K_f}{L_{\text{eff}}C_{ox}f}\left[\frac1{W_1}+\frac1{W_3}\right]
=\frac{2(3\times10^{-24}\ \mathrm{F\,V^2})}{(0.72\ \mu\mathrm m)(4.31\ \mathrm{fF/\mu m^2})f}\left[\frac1{150\ \mu\mathrm m}+\frac1{50\ \mu\mathrm m}\right]
=\frac{1.29\times10^{-11}+3.87\times10^{-11}}{f}=\frac{5.16\times10^{-11}\ \mathrm{V^2}}{f}.
$$

The NMOS loads contribute three times as much as the input pair, because their gate area is three times smaller. The thermal part is

$$
\frac{\overline{v_{i,t}^2}}{\Delta f}=2\cdot4kT\frac{2}{3g_{m1}}\left(1+\frac{g_{m3}}{g_{m1}}\right)=2(1.66\times10^{-20})\frac{2}{3(1.64\ \mathrm{mS})}(2)=2.7\times10^{-17}\ \mathrm{V^2/Hz},
$$

i.e. a white floor of 5.2 nV/√Hz. The flicker part equals it at $f_c=5.16\times10^{-11}/2.7\times10^{-17}\approx1.9$ MHz, so flicker noise dominates at all three spot frequencies.

### Step 4 — The remaining transistors

- $M_6$ and $M_7$: their noise at the gate of $M_6$ is divided by the first-stage gain $g_{m1}(r_{o2}\parallel r_{o4})$. With $\lambda_p=0.04/0.72=0.0556\ \mathrm{V^{-1}}$ and $\lambda_n=0.02/0.72=0.0278\ \mathrm{V^{-1}}$, $r_{o2}=180$ kΩ and $r_{o4}=360$ kΩ, so the gain is $1.64\ \mathrm{mS}\times120\ \mathrm{k\Omega}\approx197$. Their flicker terms, about $1.3\times10^{-11}/f$ V² at the gate of $M_6$, become $3\times10^{-16}/f$ V² at the input, negligible.
- $M_5$ (and the reference through $M_8$): tail-current noise splits equally between the two sides and is common mode; the mirror cancels it to first order.
- $M_9$: a triode resistor in series with 5 pF. At 10 kHz the capacitor's 3.2-MΩ reactance isolates its noise, so it is negligible.

### Step 5 — Spot values

$$
\frac{\overline{v_i^2}}{\Delta f}=\frac{5.16\times10^{-11}\ \mathrm{V^2}}{f}+2.7\times10^{-17}\ \mathrm{V^2/Hz}:
$$

| $f$ | Flicker (V²/Hz) | Total (V²/Hz) | $\sqrt{\overline{v_i^2}/\Delta f}$ |
|---|---|---|---|
| 100 Hz | $5.16\times10^{-13}$ | $5.16\times10^{-13}$ | 0.72 µV/√Hz |
| 1 kHz | $5.16\times10^{-14}$ | $5.16\times10^{-14}$ | 0.23 µV/√Hz |
| 10 kHz | $5.16\times10^{-15}$ | $5.18\times10^{-15}$ | 72 nV/√Hz |

### Step 6 — SPICE verification

Level-1 models with $K_P=194$ and $64.7\ \mu$A/V², $V_{TO}=0.6$ and $-0.8$ V, LD $=0.14\ \mu$m (so that $L-2\mathrm{LD}=L_{\text{eff}}=0.72\ \mu$m, absorbing $X_d$), $\lambda_n=0.0278$ and $\lambda_p=0.0556\ \mathrm{V^{-1}}$, and $t_{ox}=80$ Å are used. The ngspice-46 level-1 flicker term equals $\mathrm{KF}\,g_m^2/(C_{ox}WL_{\text{eff}}f)$ (verified by sweeping the geometry), so KF $=K_f=3\times10^{-24}$ with AF $=1$ for both types reproduces the given model; in the classic form $\mathrm{KF}\,I_D/(C_{ox}L_{\text{eff}}^2f)$ the equivalent value would be $2k'K_f$. $M_9$ is sized $W/L=7.25/1$ so that its on-resistance equals $1/g_{m6}$. The output is returned to the gate of $M_1$ through a 1-TH inductor, and that gate is grounded through a 1-GF capacitor. This sets the dc bias without affecting the loop at the noise frequencies. With a PMOS pair and the mirror diode on the $M_1$ side, the gate of $M_1$ is the inverting input, so the source drives the gate of $M_2$.

```spice
* grsim-11-26 CMOS op amp input noise
VDD vdd 0 1.5
VSS vss 0 -1.5
VIN inp 0 dc 0 ac 1
IREF d8 vss 200u
M8 d8 d8 vdd vdd pm W=150u L=1u
M5 t d8 vdd vdd pm W=150u L=1u
M1 d1 inn t vdd pm W=150u L=1u
M2 x inp t vdd pm W=150u L=1u
M3 d1 d1 vss vss nm W=50u L=1u
M4 x d1 vss vss nm W=50u L=1u
M6 out x vss vss nm W=100u L=1u
M7 out d8 vdd vdd pm W=150u L=1u
M9 x vdd y vss nm W=7.25u L=1u
CC y out 5p
LF out inn 1e12
CG inn 0 1e9
.model nm nmos level=1 vto=0.6 kp=194u ld=0.14u lambda=0.02778 tox=80e-10 kf=3e-24 af=1
.model pm pmos level=1 vto=-0.8 kp=64.7u ld=0.14u lambda=0.05556 tox=80e-10 kf=3e-24 af=1
.temp 27.4
.noise v(out) VIN dec 1 100 1e8
.end
```

The operating point gives $I_{D1}=98\ \mu$A, $g_{m1}=1.70$ mS and $g_{m3}=1.64$ mS; $M_9$'s conductance is 3.27 mS against $g_{m6}=3.39$ mS. The input-referred noise is:

| $f$ | Hand (V²/Hz) | SPICE (V²/Hz) | SPICE |
|---|---|---|---|
| 100 Hz | $5.16\times10^{-13}$ | $4.88\times10^{-13}$ | 0.70 µV/√Hz |
| 1 kHz | $5.16\times10^{-14}$ | $4.89\times10^{-14}$ | 0.22 µV/√Hz |
| 10 kHz | $5.18\times10^{-15}$ | $4.91\times10^{-15}$ | 70 nV/√Hz |

The simulation is 5% lower because channel-length modulation makes $g_{m3}/g_{m1}=0.965$ instead of 1, which scales the dominant load term by 0.93: $1.29\times10^{-11}+0.93(3.87\times10^{-11})=4.89\times10^{-11}$ V², matching the simulated $f\cdot\overline{v_i^2}/\Delta f$. The $1/f$ slope continues to about 1 MHz, consistent with the 1.9-MHz corner.
