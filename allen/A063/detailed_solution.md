# Detailed solution - A063

Determine the operating region from the terminal voltages (including the body effect), compute the dc current, and then obtain the conductances and capacitances of the saturation small-signal model. Elements that need the diffusion geometry are identified and their bias stated.

### Step 1 — Threshold and region

Relative to the source: $V_{GS}=4-2=2$ V, $V_{DS}=4-2=2$ V, $V_{SB}=2-0=2$ V. The body effect raises the threshold:

$$
V_T=V_{T0}+\gamma\Big(\sqrt{2|\phi_F|+V_{SB}}-\sqrt{2|\phi_F|}\Big)=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{2.7\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=1.023\ \mathrm V .
$$

$V_{GS}-V_T=0.977\ \mathrm V<V_{DS}=2$ V, so the transistor is saturated.

### Step 2 — DC current

With $\beta=K'W/L=(110\ \mu\mathrm{A/V^2})(10)=1.1\ \mathrm{mA/V^2}$:

$$
I_D=\frac\beta2(V_{GS}-V_T)^2(1+\lambda V_{DS})=\frac{1.1\ \mathrm{mA/V^2}}{2}(0.977\ \mathrm V)^2(1+0.04\times2)=567\ \mu\mathrm A
$$

(525 µA without the $\lambda$ factor).

### Step 3 — Small-signal conductances

Differentiating the saturation current:

$$
\begin{aligned}
g_m&=\frac{\partial I_D}{\partial V_{GS}}\approx\sqrt{2\beta I_D}=\sqrt{2(1.1\ \mathrm{mA/V^2})(567\ \mu\mathrm A)}=1.12\ \mathrm{mS},\\
g_{mbs}&=\frac{\partial I_D}{\partial V_{BS}}=g_m\frac{\gamma}{2\sqrt{2|\phi_F|+V_{SB}}}=1.12\ \mathrm{mS}\times\frac{0.4}{2\sqrt{2.7}}=0.122\,g_m=136\ \mu\mathrm S,\\
g_{ds}&=\frac{\partial I_D}{\partial V_{DS}}=\frac{\lambda I_D}{1+\lambda V_{DS}}=\frac{0.04\times567\ \mu\mathrm A}{1.08}=21.0\ \mu\mathrm S\quad(r_{ds}=47.6\ \mathrm{k\Omega}).
\end{aligned}
$$

The common approximation $g_{ds}\approx\lambda I_D=22.7\ \mu$S differs by only $\lambda V_{DS}=8\%$.

### Step 4 — Gate capacitances

With $C_{ox}WL=(24.7\times10^{-4}\ \mathrm{F/m^2})(10\ \mu\mathrm m)(1\ \mu\mathrm m)=24.7$ fF and the saturation allocation (channel attached to the source, $\tfrac23$ of the oxide capacitance):

$$
\begin{aligned}
C_{gs}&=\mathrm{CGSO}\cdot W+\tfrac23C_{ox}WL=2.2\ \mathrm{fF}+16.5\ \mathrm{fF}=18.7\ \mathrm{fF},\\
C_{gd}&=\mathrm{CGDO}\cdot W=2.2\ \mathrm{fF},\\
C_{gb}&=\mathrm{CGBO}\cdot L=0.7\ \mathrm{fF},
\end{aligned}
$$

taking CGBO as the total gate–bulk overlap per unit channel length.

### Step 5 — Bulk junctions and series resistances

The bulk is at 0 V while the drain is at 4 V and the source at 2 V, so $V_{BD}=-4$ V and $V_{BS}=-2$ V: both junctions are reverse biased, and their small-signal conductances are negligible, $g_{bd}\approx g_{bs}\approx0$. They contribute the depletion capacitances

$$
C_{bx}=\frac{\mathrm{CJ}\cdot A_X}{(1+V_R/\mathrm{PB})^{\mathrm{MJ}}}+\frac{\mathrm{CJSW}\cdot P_X}{(1+V_R/\mathrm{PB})^{\mathrm{MJSW}}},
$$

evaluated at $V_R=4$ V for $C_{bd}$ and $V_R=2$ V for $C_{bs}$, with the area $A_X$ and perimeter $P_X$ of each diffusion. The ohmic series resistances $r_D$ and $r_S$ of the drain and source regions (sheet resistance and contacts) also depend on the layout. Since the geometry is not given, these four elements can only be stated in this form.

| Element | Value |
|---|---|
| $g_m$ | 1.12 mS |
| $g_{mbs}$ | 136 µS |
| $g_{ds}$ ($r_{ds}$) | 21.0 µS (47.6 kΩ) |
| $C_{gs}$, $C_{gd}$, $C_{gb}$ | 18.7 fF, 2.2 fF, 0.7 fF |
| $g_{bd}$, $g_{bs}$ | ≈ 0 (reverse biased) |
| $C_{bd}$, $C_{bs}$, $r_D$, $r_S$ | need the diffusion geometry |
