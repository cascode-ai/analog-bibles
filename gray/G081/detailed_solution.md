# Detailed solution - G081

Turn each constraint into a bound on a design variable. The saturation requirement bounds the overdrive $V_{ov}=V_{GS}-V_t$. The output-sensitivity requirement bounds $\lambda$, and through $\lambda=(dX_d/dV_{DS})/L_{\text{eff}}$ it bounds the channel length. The current then fixes $W/L_{\text{eff}}$. Finally, write the gate area as a function of $V_{ov}$ and $L_{\text{eff}}$ to see at which ends of the allowed ranges it is smallest.

### Step 1 — Constraint (i): maximum overdrive

$M_2$ is saturated while $V_{DS2}\ge V_{GS}-V_t=V_{ov}$. Its source is grounded, so $V_{DS2}=V_{OUT}$. Saturation down to $V_{OUT}=0.2$ V therefore requires

$$
V_{ov}\le0.2\ \mathrm V .
$$

### Step 2 — Constraint (iii): minimum channel length

In saturation, $I_{OUT}\propto1+\lambda V_{OUT}$ at fixed $V_{GS}$, which the diode-connected $M_1$ holds constant. For a 1-V step in $V_{OUT}$,

$$
\frac{\Delta I_{OUT}}{I_{OUT}}=\frac{\lambda\,\Delta V_{OUT}}{1+\lambda V_{OUT}}\le\lambda\,(1\ \mathrm V)\le0.01
\quad\Rightarrow\quad\lambda\le0.01\ \mathrm{V^{-1}}.
$$

Equivalently, $r_o=1/(\lambda I_D)\ge2\ \mathrm{M\Omega}$ at 50 µA. With the given channel-length-modulation model,

$$
\lambda=\frac{dX_d/dV_{DS}}{L_{\text{eff}}}\le0.01\ \mathrm{V^{-1}}
\quad\Rightarrow\quad
L_{\text{eff}}\ge\frac{0.02\ \mu\mathrm{m/V}}{0.01\ \mathrm{V^{-1}}}=2\ \mu\mathrm m .
$$

### Step 3 — Area as a function of the design variables

Constraint (ii) fixes the current. Neglecting the small $1+\lambda V_{DS}$ factor in the sizing,

$$
I_D=\frac{k'}2\frac W{L_{\text{eff}}}V_{ov}^2
\quad\Rightarrow\quad
W=\frac{2I_D}{k'V_{ov}^2}L_{\text{eff}} .
$$

The gate area of one device, $W\times L$ with drawn length $L_{\text{drwn}}=L_{\text{eff}}+2L_d$, is

$$
A=W\,L_{\text{drwn}}=\frac{2I_D}{k'V_{ov}^2}\,L_{\text{eff}}\,(L_{\text{eff}}+2L_d).
$$

$A$ rises with $L_{\text{eff}}$ and falls as $1/V_{ov}^2$. A longer channel needs a proportionally wider device for the same current, so the area grows roughly as $L^2$. The minimum is therefore at the largest allowed overdrive and the shortest allowed length:

$$
V_{ov}=0.2\ \mathrm V,\qquad L_{\text{eff}}=2\ \mu\mathrm m .
$$

### Step 4 — Dimensions and area

$$
\frac W{L_{\text{eff}}}=\frac{2(50\ \mu\mathrm A)}{(194\ \mu\mathrm{A/V^2})(0.2\ \mathrm V)^2}=\frac{100\ \mu\mathrm A}{7.76\ \mu\mathrm A}=12.89,
\qquad W=12.89\,(2\ \mu\mathrm m)=25.8\ \mu\mathrm m,
$$

$$
L_{\text{drwn}}=L_{\text{eff}}+2L_d=2\ \mu\mathrm m+2(0.09\ \mu\mathrm m)=2.18\ \mu\mathrm m .
$$

Both transistors use $W=25.8\ \mu\mathrm m$ and $L=2.18\ \mu\mathrm m$ (drawn), with $V_{GS}=V_t+V_{ov}=0.8$ V.

| Area | Per device | Total ($M_1+M_2$) |
|---|---|---|
| $W\times L_{\text{drwn}}$ | 56.2 µm² | 112 µm² |
| $W\times L_{\text{eff}}$ | 51.5 µm² | 103 µm² |

### Step 5 — Check the constraints

- (i): $V_{DS,\text{sat}}=V_{ov}=0.2$ V, so $M_2$ is saturated for $V_{OUT}\ge0.2$ V.
- (ii): $I_{OUT}=50\ \mu\mathrm A$ by construction. The mirror sets $I_{OUT}/I_{IN}=(1+\lambda V_{OUT})/(1+\lambda V_{GS})$, so $I_{OUT}=I_{IN}$ when $V_{OUT}=V_{GS}=0.8$ V.
- (iii): $\lambda=0.02/2=0.01\ \mathrm{V^{-1}}$, $r_o=1/(0.01\ \mathrm{V^{-1}}\cdot50\ \mu\mathrm A)=2\ \mathrm{M\Omega}$. A 1-V change moves the current by 0.5 µA, and the exact ratio, for example $(1+0.02)/(1+0.01)=1.0099$ for $V_{OUT}$ going from 1 V to 2 V, is just under 1 %.
