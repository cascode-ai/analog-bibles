# Detailed solution - grsim-04-16

As in a simple actively loaded pair, the differential transconductance $g_m$ drives the output node, so $v_o/v_i=g_mR_o$. Here both sides of the output are cascoded: looking down, the npn cascode $Q_4$ sits on $Q_2$; looking up, the pnp cascode mirror $Q_5$–$Q_8$. Find each resistance in terms of $I_{TAIL}$, combine them, and check with ngspice at $I_{TAIL}=100\ \mu$A (and 10 μA).

### Step 1 — Parameters in terms of $I_{TAIL}$

Every transistor carries $I_{TAIL}/2$:

$$
g_m=\frac{I_{TAIL}}{2V_T},\qquad r_{o,npn}=\frac{2V_{An}}{I_{TAIL}}=\frac{260\ \mathrm V}{I_{TAIL}},\qquad r_{o,pnp}=\frac{2V_{Ap}}{I_{TAIL}}=\frac{100\ \mathrm V}{I_{TAIL}}.
$$

### Step 2 — Resistance looking down into $Q_4$

The base of $Q_4$ is held by the 1.3-V battery relative to the emitter node of $Q_1$/$Q_2$, which is an ac ground for differential signals. $Q_4$ is a common-base stage with $r_{o2}$ in its emitter. Because $r_{o2}\gg r_{\pi4}$, the degeneration is limited by $r_{\pi4}$ and the cascode reaches its maximum, about $\beta_nr_{o4}$:

$$
R_{down}\approx\beta_nr_{o4}=\frac{2\beta_nV_{An}}{I_{TAIL}}=\frac{52{,}000\ \mathrm V}{I_{TAIL}}\quad(520\ \mathrm{M\Omega}\text{ at }100\ \mu\mathrm A).
$$

### Step 3 — Resistance looking up into $Q_6$

$Q_5$–$Q_8$ form a pnp cascode mirror: $Q_6$'s base is driven by the diode $Q_5$, whose current feeds the mirror input $Q_7$. A change in $Q_6$'s base current flows through $Q_5$ into $Q_7$ and is mirrored by $Q_8$ into $Q_6$'s emitter, so half of the $\beta$ boost is lost, exactly as in a bipolar cascode current mirror:

$$
R_{up}\approx r_{o6}\left(1+\frac{\beta_p}2\right)=\frac{100\ \mathrm V}{I_{TAIL}}(1+25)=\frac{2600\ \mathrm V}{I_{TAIL}}\approx\frac{\beta_pr_{o6}}2\quad(26\ \mathrm{M\Omega}\text{ at }100\ \mu\mathrm A).
$$

### Step 4 — Output resistance and gain

$$
R_o=R_{down}\parallel R_{up}=\frac{1}{I_{TAIL}}\left(52{,}000\parallel2600\right)\ \mathrm V=\frac{2.48\times10^{3}\ \mathrm V}{I_{TAIL}}\quad(24.8\ \mathrm{M\Omega}\text{ at }100\ \mu\mathrm A),
$$

$$
\frac{v_o}{v_i}=g_mR_o=\frac{I_{TAIL}}{2V_T}\cdot\frac{2476\ \mathrm V}{I_{TAIL}}=\frac{1238\ \mathrm V}{V_T}=+4.8\times10^{4},
$$

independent of $I_{TAIL}$, because both $g_m$ and $1/R_o$ are proportional to the current. The pnp side limits $R_o$: $R_{up}$ is 20 times smaller than $R_{down}$ because of the lower $\beta_p$, the lower $V_{Ap}$ and the factor 1/2 from the mirror feedback. The mirrors' base-current errors reduce the gain to about $4.6\times10^{4}$.

### Step 5 — Large-signal behaviour (expected)

- Systematic offset: the pnp cascode mirror delivers only $1-(4\beta_p+2)/(\beta_p^2+4\beta_p+2)=0.925$ of its input current, so the output is in its active range only when $Q_1$ carries 8% more than $Q_2$: $V_I\approx V_T\ln(1/0.925)=+2.0$ mV.
- Width: with a gain of $4.8\times10^{4}$, a 1.5-V output swing takes only about 30 μV of input.
- Upper limit: $Q_6$ saturates when the output rises above its base, $V_{SUP}-2|V_{BE}|\approx1.26$ V, by a few tenths of a volt (≈ 1.5–1.8 V).
- Lower limit: $Q_4$'s base is 1.3 V above the emitter node (≈ −0.6 V), so its emitter is near 0 V, and it saturates when the output falls to about 0.1–0.2 V.

### Step 6 — SPICE check

```spice
* grsim-04-16 cascode active-load differential stage, ITAIL = 100 uA
VP   vp 0 2.5
VN   vn 0 -2.5
VI   b1 0 2.00049m
Q1   c1 b1 e npn
Q2   c2 0 e npn
VB   bc e 1.3
Q3   d5 bc c1 npn
Q4   out bc c2 npn
Q5   d5 d5 e7 pnp
Q6   out d5 e8 pnp
Q7   e7 e7 vp pnp
Q8   e8 e7 vp pnp
IT   e vn 100u
.model npn npn is=5e-15 bf=200 vaf=130
.model pnp pnp is=2e-15 bf=50 vaf=50
.control
op
tf v(out) VI
print all
dc VI -10m 10m 1u
wrdata tr.txt v(out)
.endc
.end
```

$V_I=2.00049$ mV puts $V_O$ at 0.80 V, inside the active range; it was found with a 10-nV-step sweep. The run was repeated with $I_{TAIL}=10\ \mu$A.

| Quantity | Hand | ngspice, 100 μA | ngspice, 10 μA |
|---|---|---|---|
| $v_o/v_i$ | $4.6\times10^{4}$ to $4.8\times10^{4}$ | $4.88\times10^{4}$ | $4.90\times10^{4}$ |
| $R_o$ | $2.48\times10^{3}\ \mathrm V/I_{TAIL}$ | 26.4 MΩ | 265 MΩ |
| Input for mid-range output | ≈ +2.0 mV | +2.0005 mV | +1.998 mV |

![ngspice VO versus VI of the cascode-loaded pair from −10 to 10 mV: a near-vertical transition at +2.0 mV between saturation limits](/q/grsim-04-16/solution-transfer.svg)

The simulated $R_o$ is 7% above the hand value (SPICE's $r_o=(V_A+V_{CE})/I_C$ is larger than $V_A/I_C$), so the gain is slightly higher. Scaling the tail current by 10 scales $R_o$ by 10 and leaves the gain unchanged, as predicted. In the transfer curve the output moves from 0.5 V to 1.5 V over only 21 μV, at $V_I\approx+2.0$ mV. The output limits are soft: about 0.1–0.25 V at the bottom ($Q_4$ saturating) and about 1.7–1.8 V at the top ($Q_6$ saturating).
