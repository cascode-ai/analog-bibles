# Detailed solution - grsim-04-05

In the cascode mirror, $M_1$ sets the current and $M_2$ (gate held by the diode stack $M_4$–$M_3$) shields $M_1$'s drain from the output. With $M_1$'s drain node acting as source degeneration $r_{o1}$ for $M_2$, the output resistance is the degenerated-cascode value $r_{o2}(1+g_{m2}r_{o1})+r_{o1}$. Compute $V_{ov}$, $g_m$ and $r_o$, then check $R_o$ and the $I_{OUT}$–$V_{OUT}$ curve in ngspice.

### Step 1 — Device parameters

With $L_{\mathrm{eff}}=1-2(0.09)=0.82\ \mu$m, $W/L_{\mathrm{eff}}=100/0.82=122$. All four devices carry 100 μA. From the square law,

$$
V_{ov}=\sqrt{\frac{2I}{k'(W/L)}}=\sqrt{\frac{2(100\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(122)}}=0.092\ \mathrm V,\qquad
g_m=\frac{2I}{V_{ov}}=2.18\ \mathrm{mA/V},
$$

$$
r_o=\frac1{\lambda I}=\frac1{(0.0244\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=410\ \mathrm{k\Omega}.
$$

### Step 2 — Output resistance

The gate of $M_2$ is held by the diode stack (an ac ground for this purpose), and $M_1$'s gate by the diode $M_3$, so $M_1$ is just $r_{o1}$ in $M_2$'s source. A test current $i_x$ raises $M_2$'s source by $i_xr_{o1}$, making $v_{gs2}=-i_xr_{o1}$; then $i_x=-g_{m2}i_xr_{o1}+(v_x-i_xr_{o1})/r_{o2}$, so

$$
R_o=r_{o2}(1+g_{m2}r_{o1})+r_{o1}=410\ \mathrm{k\Omega}\,(1+893)+410\ \mathrm{k\Omega}=3.67\times10^{8}\ \Omega\approx g_mr_o^2 .
$$

### Step 3 — Breakpoints of the $I_{OUT}$–$V_{OUT}$ characteristic

The diode stack puts $M_2$'s gate at $2V_{GS}=2(V_t+V_{ov})=1.38$ V, so $M_1$'s drain sits at $V_{GS2}$ below that, $V_{DS1}=V_t+V_{ov}=0.69$ V, whenever $M_2$ is active.
- $M_1$ needs only $V_{DS1}\ge V_{ov}$. It leaves the active region when $V_{OUT}$ is so low that $M_2$ can no longer hold its drain up: approximately $V_{OUT}<V_{ov}=0.09$ V. Below this both transistors are in triode and the current falls steeply to zero.
- $M_2$ is active for $V_{DS2}\ge V_{ov}$:

$$
V_{OUT(\min)}=V_{DS1}+V_{ov}=V_t+2V_{ov}=0.6+2(0.092)=0.78\ \mathrm V .
$$

Between 0.09 V and 0.78 V, $M_2$ is in triode but $M_1$ is active, so $I_{OUT}$ is still nearly 100 μA. Only $M_1$'s smaller $V_{DS}$ lowers it slightly, through channel-length modulation, and the output resistance is low. Above 0.78 V both are active and the curve is flat with slope $1/R_o\approx2.7$ nA/V.

### Step 4 — SPICE check

```spice
* grsim-04-05 MOS cascode current mirror
VDD  vdd 0 3
IIN  vdd g4 100u
M4   g4 g4 g3 0 nch W=100u L=0.82u
M3   g3 g3 0 0 nch W=100u L=0.82u
M2   out g4 d1 0 nch W=100u L=0.82u
M1   d1 g3 0 0 nch W=100u L=0.82u
VOUT out 0 2
.model nch nmos level=1 kp=194u vto=0.6 lambda=0.0244
.control
op
tf v(d1) VOUT
print all
dc VOUT 0 3 1m
let iout = -i(VOUT)
wrdata iv.txt iout
.endc
.end
```

The effective length is entered directly ($L=0.82\ \mu$m, no LD) and the body effect is omitted (GAMMA = 0). The input resistance that `.tf` reports at VOUT = 2 V is $R_o$.

| Quantity | Hand | ngspice |
|---|---|---|
| $V_{G2}=2V_{GS}$ | 1.38 V | 1.382 V |
| $V_{DS1}$ | 0.69 V | 0.692 V |
| $R_o$ | 367 MΩ | 390 MΩ (`.tf`); 390 MΩ (slope 1.5–2.5 V) |
| $I_{OUT}$ at 0.09 / 0.2 / 0.78 / 2 V | — | 97.9 / 98.8 / 100.0 / 100.0 μA |

![ngspice IOUT versus VOUT of the MOS cascode mirror from 0 to 3 V, with breakpoints at 0.09 V and 0.78 V](/q/grsim-04-05/solution-iv.svg)

The simulated $R_o$ is 6% higher than the hand value because level-1 uses $r_o=(1+\lambda V_{DS})/(\lambda I_D)$ and includes $(1+\lambda V_{DS})$ in $g_m$; with $V_{DS2}\approx1.3$ V and $V_{DS1}\approx0.7$ V this raises $g_{m2}r_{o1}r_{o2}$ by about 6%. The curve shows the steep rise below about 0.09 V, a nearly flat but slightly sloped section up to the knee at 0.78 V, and the flat cascode region above it.
