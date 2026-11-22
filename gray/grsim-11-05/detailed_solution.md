# Detailed solution - grsim-11-05

Model every noise source as an independent spectral density, refer each one to the output through its own transfer function, and add the powers. The input-referred value is the output total divided by the squared gain from $v_i$ at the same frequency. The $R_S$–$C_{gs}$ low-pass matters at 1 GHz: it filters the sources that sit at the gate but not the drain thermal noise. An ngspice `.noise` analysis then checks the hand values.

### Step 1 — Bias point, gain and gate capacitance

In saturation the square law $I_D=\tfrac12k'(W/L)V_{ov}^2$ gives

$$
V_{ov}=\sqrt{\frac{2I_D}{k'(W/L)}}=\sqrt{\frac{2(100\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(100)}}=0.1015\ \mathrm V,
\qquad g_m=\sqrt{2k'(W/L)I_D}=1.970\ \mathrm{mS}.
$$

With no gate current, the low-frequency voltage gain is $|A_v|=g_mR_L=19.70$, so $A_v^2=388.0$. The only capacitance kept is

$$
C_{gs}=\tfrac23WLC_{ox}=\tfrac23(100\ \mu\mathrm m^2)(4.31\ \mathrm{fF/\mu m^2})=0.2873\ \mathrm{pF}.
$$

The SPICE deck needs a gate bias of $V_t+V_{ov}=0.7015$ V in series with $v_i$ and a supply for $R_L$; both are ac grounds.

### Step 2 — Individual noise densities

The four sources, with $4kT=1.66\times10^{-20}$ V·C, are:

$$
\begin{aligned}
\overline{v_{RS}^2}/\Delta f&=4kTR_S=1.66\times10^{-15}\ \mathrm{V^2/Hz},\\
\overline{i_d^2}/\Delta f&=4kT\tfrac23g_m=2.180\times10^{-23}\ \mathrm{A^2/Hz}
\;\Rightarrow\;\frac{\overline{i_d^2}}{g_m^2\Delta f}=\frac{4kT\cdot\tfrac23}{g_m}=5.62\times10^{-18}\ \mathrm{V^2/Hz},\\
\overline{v_f^2}/\Delta f&=\frac{K_f}{WLC_{ox}f}=\frac{3\times10^{-24}\ \mathrm{F\,V^2}}{(100\ \mu\mathrm m^2)(4.31\ \mathrm{fF/\mu m^2})f}=\frac{6.96\times10^{-12}\ \mathrm{V^2}}{f},\\
\overline{v_{RL}^2}/\Delta f&=4kTR_L=1.66\times10^{-16}\ \mathrm{V^2/Hz}\ \text{(directly at the output)}.
\end{aligned}
$$

$R_L$ referred to the input is $1.66\times10^{-16}/388=4.28\times10^{-19}$ V²/Hz.

### Step 3 — Transfer functions to the output

$v_i$, $v_{RS}$ and the flicker generator $v_f$ all act in series with the gate, so they reach the gate through the divider formed by $R_S$ and $C_{gs}$:

$$
H(j\omega)=\frac{1}{1+j\omega R_SC_{gs}},\qquad
f_p=\frac{1}{2\pi R_SC_{gs}}=\frac{1}{2\pi(100\ \mathrm{k\Omega})(0.2873\ \mathrm{pF})}=5.54\ \mathrm{MHz}.
$$

The drain thermal current flows straight into $R_L$, and $R_L$'s own noise is already an output voltage, so neither is filtered. With $C_{gd}=0$ the output node has no pole. Hence

$$
\frac{\overline{v_o^2}}{\Delta f}=|H|^2g_m^2R_L^2\left(4kTR_S+\frac{K_f}{WLC_{ox}f}\right)+4kT\tfrac23g_mR_L^2+4kTR_L,
\qquad
\frac{\overline{v_{i,eq}^2}}{\Delta f}=\frac{\overline{v_o^2}/\Delta f}{|H|^2g_m^2R_L^2}.
$$

At 10 Hz and 100 kHz, $|H|^2\approx1$; at 1 GHz, $|H|^2=1/[1+(10^9/5.54\times10^6)^2]=3.07\times10^{-5}$.

### Step 4 — Spot values at 10 Hz and 100 kHz

At 10 Hz the flicker term is $6.96\times10^{-13}$ V²/Hz, about 400 times the $R_S$ term, so flicker noise dominates:

$$
\frac{\overline{v_{i,eq}^2}}{\Delta f}=6.96\times10^{-13}+1.66\times10^{-15}+5.6\times10^{-18}+4.3\times10^{-19}=6.98\times10^{-13}\ \mathrm{V^2/Hz},
$$

and the output is $388\times(6.98\times10^{-13}-4.3\times10^{-19})+1.66\times10^{-16}=2.71\times10^{-10}$ V²/Hz.

At 100 kHz the flicker term has fallen to $6.96\times10^{-17}$ V²/Hz and $R_S$ dominates:

$$
\frac{\overline{v_{i,eq}^2}}{\Delta f}=1.66\times10^{-15}+6.96\times10^{-17}+5.6\times10^{-18}+4.3\times10^{-19}=1.74\times10^{-15}\ \mathrm{V^2/Hz},
$$

and the output is $388\times1.74\times10^{-15}=6.73\times10^{-13}$ V²/Hz.

### Step 5 — Spot values at 1 GHz

Far above $f_p$, $C_{gs}$ shorts the gate for every source in series with it. The output terms are

$$
\begin{aligned}
\text{drain thermal: }&4kT\tfrac23g_mR_L^2=2.18\times10^{-15}\ \mathrm{V^2/Hz},\\
R_L:\ &1.66\times10^{-16}\ \mathrm{V^2/Hz},\\
R_S:\ &|H|^2(388)(1.66\times10^{-15})=1.98\times10^{-17}\ \mathrm{V^2/Hz},
\end{aligned}
$$

and flicker is negligible, so $\overline{v_o^2}/\Delta f=2.37\times10^{-15}$ V²/Hz, dominated by the drain thermal noise. The signal gain has dropped to $|H|g_mR_L=\sqrt{3.07\times10^{-5}\cdot388}=0.109$, so the input-referred value rises to

$$
\frac{\overline{v_{i,eq}^2}}{\Delta f}=\frac{2.37\times10^{-15}}{0.109^2}=1.99\times10^{-13}\ \mathrm{V^2/Hz}.
$$

If $C_{gs}$ were ignored, 1 GHz would equal 100 kHz without the flicker term: $1.67\times10^{-15}$ V²/Hz at the input and $6.46\times10^{-13}$ V²/Hz at the output.

### Step 6 — SPICE verification

The deck uses a level-1 NMOS with $V_{TO}=0.6$ V, $K_P=194\ \mu$A/V², $t_{ox}=80$ Å, no overlap or junction capacitance (so $C_{gs}=\tfrac23WLC_{ox}$ in saturation), $\lambda=0$, and a temperature that makes $4kT=1.66\times10^{-20}$ V·C. The classic SPICE flicker term is $\mathrm{KF}\,I_D^{\mathrm{AF}}/(C_{ox}L^2f)$; matching it to $g_m^2K_f/(WLC_{ox}f)=2k'K_fI_D/(C_{ox}L^2f)$ gives AF $=1$ and KF $=2k'K_f=1.16\times10^{-27}$. The ngspice-46 level-1 model used here scales that term by an extra $2K_P$ (checked by sweeping $W$, $L$, $t_{ox}$ and $K_P$), so in this simulator the same physics is obtained with KF $=K_f=3\times10^{-24}$.

```spice
* grsim-11-05 CS amplifier noise
VDD vdd 0 5
RL vdd out 10k
VI in 0 dc 0 ac 1
VB g1 in dc 0.701534
RS g1 g 100k
M1 out g 0 0 nm W=100u L=1u
.model nm nmos level=1 vto=0.6 kp=194u tox=80e-10 lambda=0 kf=3e-24 af=1
.temp 27.4
.noise v(out) VI dec 1 10 1e9
.end
```

The operating point is $I_D=100.6\ \mu$A, $g_m=1.973$ mS, $C_{gs}=0.288$ pF, $C_{gd}=0$. The noise densities agree with the hand values:

| $f$ | Input, hand (V²/Hz) | Input, SPICE | Output, hand (V²/Hz) | Output, SPICE | Dominant source |
|---|---|---|---|---|---|
| 10 Hz | $6.98\times10^{-13}$ (0.84 µV/√Hz) | $6.97\times10^{-13}$ | $2.71\times10^{-10}$ (16 µV/√Hz) | $2.71\times10^{-10}$ | flicker |
| 100 kHz | $1.74\times10^{-15}$ (42 nV/√Hz) | $1.74\times10^{-15}$ | $6.73\times10^{-13}$ (0.82 µV/√Hz) | $6.76\times10^{-13}$ | $R_S$ |
| 1 GHz | $1.99\times10^{-13}$ (0.45 µV/√Hz) | $1.99\times10^{-13}$ | $2.37\times10^{-15}$ (49 nV/√Hz) | $2.37\times10^{-15}$ | drain thermal |

The 0.4% difference at 100 kHz comes from the simulated $I_D$ being slightly above 100 µA.
