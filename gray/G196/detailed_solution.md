# Detailed solution - G196

Model the transistor with $g_m$, $C_{gs}$ and $C_{gd}$ ($\gamma=0$, $\lambda=0$, $C_{sb}=C_{db}=0$). For the input impedance drive the source with the gate and drain at ac ground; for the output impedance drive the drain with the source fed by the ideal (open) current source. In each case KCL at one node gives the impedance directly.

### Step 1 — Device parameters

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},\qquad \frac1{g_m}=516\ \Omega,
$$
$$
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF},\qquad C_{gd}=14\ \mathrm{fF}.
$$

### Step 2 — Input impedance at the source

With the gate grounded, a test voltage $v_x$ at the source gives $v_{gs}=-v_x$. The test current leaves the source through the channel (drawing $-g_mv_{gs}=g_mv_x$) and through $C_{gs}$ to the gate:

$$
i_x=g_mv_x+sC_{gs}v_x
\;\Rightarrow\;
z_i=\frac1{g_m+sC_{gs}} .
$$

The equivalent circuit is $1/g_m=516\ \Omega$ in parallel with $C_{gs}=74.7$ fF. $C_{gd}$ sits between two grounded nodes and plays no part. There is no gate resistance (unlike $r_b$ in a bipolar device), so the input impedance never becomes inductive. The corner is

$$
f_c=\frac{g_m}{2\pi C_{gs}}=4.1\ \mathrm{GHz}.
$$

### Step 3 — Output impedance at the drain

With the source fed only by the open current source, KCL at the source gives $v_{gs}(g_m+sC_{gs})=0$, so $v_{gs}=0$: the channel current and the $C_{gs}$ current both vanish, and the transistor contributes nothing at the drain. A test voltage at the drain sees only $C_{gd}$ to the grounded gate:

$$
z_o=\frac1{sC_{gd}},
$$

a 14-fF capacitor, with infinite resistance at dc because $\lambda=0$ and $C_{db}=0$.

### Step 4 — Magnitude sketches

| $f$ | 100 kHz | 100 MHz | 1 GHz | 4.1 GHz | 10 GHz | 100 GHz |
|---|---|---|---|---|---|---|
| $\lvert z_i\rvert$ | 516 Ω | 516 Ω | 502 Ω | 365 Ω | 197 Ω | 21.3 Ω |
| $\lvert z_o\rvert$ | 114 MΩ | 114 kΩ | 11.4 kΩ | 2.75 kΩ | 1.14 kΩ | 114 Ω |

For example, $|z_o|$ at 100 kHz is $1/[2\pi(100\ \mathrm{kHz})(14\ \mathrm{fF})]=114$ MΩ.

![Common-gate impedance magnitudes: input flat at 516 Ω to 4.1 GHz then falling at −20 dB/decade to 21 Ω; output a −20 dB/decade line from 114 MΩ to 114 Ω](/q/G196/solution-curves.svg)

$|z_i|$ is flat at 516 Ω up to about 1 GHz, is 3 dB down (365 Ω) at 4.1 GHz and then falls at −20 dB/decade to about 21 Ω at 100 GHz. $|z_o|$ is a −20 dB/decade line over the whole range, from 114 MΩ at 100 kHz to 114 Ω at 100 GHz.
