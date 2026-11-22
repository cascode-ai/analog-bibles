# Detailed solution - G177

Break the op amp into three stages and write each gain as (stage transconductance) × (resistance at its output node), where that resistance includes the input resistance of the next stage. The small-signal parameters come from the given currents: $g_m=|I_C|/V_T$, $r_\pi=\beta_0/g_m$, $r_o=V_A/|I_C|$. Two features need care: the input stage drives the second stage's input resistance, and the output-stage bias loop of [Fig. 4] redirects the signal current of node 26 into node 25.

A transistor with its base at ac ground and resistance $R$ in its emitter has output resistance $r_o[1+g_m(R\parallel r_\pi)]$, written below as

$$
R_{out}=r_o\,\frac{1+g_mR\,(\beta_0+1)/\beta_0}{1+g_mR/\beta_0}.
$$

### Step 1 — Input stage: transconductance

With $Q_1$, $Q_2$ off, the pnp pair $Q_3$–$Q_4$ ($|I_C|=3\ \mu$A, $g_{m3}=115.4\ \mu$A/V) drives nodes 3 and 4. At node 3 the signal current divides between $R_9=22$ kΩ and the emitter of the common-base device $Q_9$, whose input resistance is $r_{e9}=\frac{\beta_0}{\beta_0+1}\frac{V_T}{I_{C9}}=\frac{80}{81}(4.33\ \mathrm{k\Omega})=4.28$ kΩ; a fraction $\alpha_9=80/81$ of $Q_9$'s emitter current reaches node 9:

$$
\rho=\alpha_9\frac{R_9}{R_9+r_{e9}}=0.988\times\frac{22\ \mathrm{k\Omega}}{26.3\ \mathrm{k\Omega}}=0.827,\qquad
G_{m1}=\rho\,g_{m3}=95.4\ \mu\mathrm A/\mathrm V .
$$

$G_{m1}$ relates the differential output current to the differential input; with balanced outputs $v_9=-v_{10}=v_{od1}/2$, $v_{od1}=G_{m1}R_{node1}v_{id}$, where $R_{node1}$ is the resistance from each output node to ground.

### Step 2 — Input stage: output resistance, load and gain

| Device at node 9 | $r_o$ | $g_mR$ | $\beta_0$ | $R_{out}$ |
|---|---|---|---|---|
| $Q_{13}$ (up), $R_{13}=33$ kΩ, 6 µA | 3.33 MΩ | 7.62 | 20 | 21.7 MΩ |
| $Q_9$ (down), $R_9=22$ kΩ, 6 µA | 5.00 MΩ | 5.08 | 80 | 28.9 MΩ |

So $R_{o1}=21.7\ \mathrm{M\Omega}\parallel28.9\ \mathrm{M\Omega}=12.4$ MΩ.

Node 9 drives the base of the pnp follower $Q_{21}$ ($|I_C|=4\ \mu$A, $r_{\pi21}=130$ kΩ, $r_{o21}=5$ MΩ), whose emitter drives the bases of $Q_{25}$ and $Q_{26}$ in parallel. In the differential mode the common emitter node of $Q_{25}$–$Q_{28}$ is an ac ground, so the follower's load is $R_{L21}=\tfrac12r_{\pi25}\parallel r_{o21}=104\ \mathrm{k\Omega}\parallel5\ \mathrm{M\Omega}=102$ kΩ, with $r_{\pi25}=80/(384.6\ \mu\mathrm A/\mathrm V)=208$ kΩ. Each node therefore sees

$$
R_{i2}/2=r_{\pi21}+(\beta_0+1)R_{L21}=130\ \mathrm{k\Omega}+21(102\ \mathrm{k\Omega})=2.27\ \mathrm{M\Omega},
$$

and

$$
a_{v1}=G_{m1}\bigl(R_{o1}\parallel R_{i2}/2\bigr)=(95.4\ \mu\mathrm A/\mathrm V)(12.4\ \mathrm{M\Omega}\parallel2.27\ \mathrm{M\Omega})=(95.4\ \mu\mathrm A/\mathrm V)(1.92\ \mathrm{M\Omega})=183 .
$$

### Step 3 — Second stage: transconductance and the effect of the bias loop

The follower gain is $a_{v21}=(\beta_0+1)R_{L21}/[r_{\pi21}+(\beta_0+1)R_{L21}]=0.943$. $Q_{25}$ and $Q_{26}$ share the base drive $a_{v21}v_9=a_{v21}v_{od1}/2$, and their emitters sit at ac ground, so each collector carries

$$
i_{c25}=i_{c26}=g_{m25}\,a_{v21}\frac{v_{od1}}2,\qquad
G_{m2}=\frac{a_{v21}g_{m25}}2=\frac{(0.943)(384.6\ \mu\mathrm A/\mathrm V)}2=181\ \mu\mathrm A/\mathrm V .
$$

$Q_{27}$, $Q_{28}$ return their collector currents to $V_{CC}$ and carry no output signal.

Node 26 drives $Q_{68}$ and Nbase, the base of $Q_{75}$. The bias loop of [Fig. 4] holds $I_{C75}$ constant, so the signal current $i_{c26}$ cannot change $Q_{75}$: it is absorbed by $Q_{40}$, whose collector shares node 26. Because the tail current of $Q_{39}$–$Q_{40}$ is fixed, $Q_{39}$'s collector current changes by the same amount in the same direction at node 25. Node 25 thus receives $i_{c25}+i_{c39}=2i_{c25}$: the effective second-stage transconductance is $2G_{m2}$. $Q_{39}$ hardly loads node 25: its base voltage and emitter current are both fixed, so its collector resistance is about $(\beta_0+1)r_{o39}\approx81(3.3\ \mathrm{M\Omega})\approx0.27$ GΩ.

### Step 4 — Output-stage dc currents with base currents included

| Quantity | Calculation | Value |
|---|---|---|
| $I_{C62}$ | $6\ \mu\mathrm A-(6+33)\ \mu\mathrm A/80$ | 5.51 µA |
| $I_{C63}$ | solve $V_T\ln(I_{C63}/I_{C62})+I_{C63}R_{63}=I_{C62}R_{62}$ | 28.6 µA |
| $\lvert I_{C65}\rvert$ | $\tfrac{20}{21}\bigl(0.75\ \mathrm V/7.5\ \mathrm{k\Omega}+1.2\ \mathrm{mA}/20\bigr)$ | 152 µA |
| $I_{C64}$ | $\tfrac{80}{81}\bigl(28.6\ \mu\mathrm A-152\ \mu\mathrm A/20\bigr)$ | 20.7 µA |
| $I_{C68}$ | $\tfrac{80}{81}\bigl(6\ \mu\mathrm A+210\ \mu\mathrm A/80\bigr)$ | 8.5 µA |

The $I_{C63}$ equation is KVL around the degenerated mirror, $V_{BE62}+I_{C62}R_{62}=V_{BE63}+I_{C63}R_{63}$, with equal emitter areas (the original 6 µA / 33 µA satisfies it).

### Step 5 — Second stage: resistance at node 25 and gain

Up: $Q_{17}$ (21 µA, $R_{17}=9.3$ kΩ, $g_mR=7.51$, $r_o=0.952$ MΩ) gives $R_{up2}=6.15$ MΩ. Down: $Q_{25}$ sees in its emitter the other three emitters in parallel, $R_{E25}=\tfrac13\cdot\tfrac{80}{81}\cdot\tfrac{1}{g_{m25}}=0.856$ kΩ, so $R_{down2}=r_{o25}[1+g_{m25}(R_{E25}\parallel r_{\pi25})]=(3\ \mathrm{M\Omega})(1.33)=3.98$ MΩ. Hence $R_{o2}=6.15\ \mathrm{M\Omega}\parallel3.98\ \mathrm{M\Omega}=2.42$ MΩ.

The load is the input of the follower chain $Q_{64}$ (npn) → $Q_{65}$ (pnp) → Pbase. At Pbase,

$$
R_{E65}=R_{65}\parallel r_{\pi66}\parallel r_{\pi74}=7.5\ \mathrm{k\Omega}\parallel\frac{20(26\ \mathrm{mV})}{37.5\ \mu\mathrm A}\parallel\frac{20(26\ \mathrm{mV})}{1.2\ \mathrm{mA}}=7.5\ \mathrm{k\Omega}\parallel13.9\ \mathrm{k\Omega}\parallel433\ \Omega=398\ \Omega .
$$

$Q_{64}$'s emitter sees the sink $Q_{63}$, $r_{o63}[1+g_{m63}(R_{63}\parallel r_{\pi63})]=2.41$ MΩ, in parallel with $Q_{65}$'s input $r_{\pi65}+21R_{E65}=3.41\ \mathrm{k\Omega}+8.36\ \mathrm{k\Omega}=11.8$ kΩ, so $R_{E64}=11.7$ kΩ. Then

$$
R_{i3}=r_{\pi64}+(\beta_0+1)R_{E64}=100\ \mathrm{k\Omega}+81(11.7\ \mathrm{k\Omega})=1.05\ \mathrm{M\Omega},
$$
$$
a_{v2}=2G_{m2}\bigl(R_{o2}\parallel R_{i3}\bigr)=2(181\ \mu\mathrm A/\mathrm V)(2.42\ \mathrm{M\Omega}\parallel1.05\ \mathrm{M\Omega})=(362\ \mu\mathrm A/\mathrm V)(0.732\ \mathrm{M\Omega})=265 .
$$

### Step 6 — Output stage gain

Because the loop holds $I_{C75}$ fixed, only $Q_{74}$ converts the signal into output current. The two followers transfer the node-25 voltage to Pbase with gains

$$
a_{v64}=\frac{81R_{E64}}{r_{\pi64}+81R_{E64}}=0.904,\qquad
a_{v65}=\frac{21R_{E65}}{r_{\pi65}+21R_{E65}}=0.710,
$$

so $G_{m3}=a_{v64}a_{v65}g_{m74}=(0.904)(0.710)(46.2\ \mathrm{mA/V})=29.6$ mA/V. The output resistance is $r_{o74}\parallel r_{o75}=16.7\ \mathrm{k\Omega}\parallel143\ \mathrm{k\Omega}=14.9$ kΩ, in parallel with the 2-kΩ load:

$$
a_{v3}=G_{m3}(14.9\ \mathrm{k\Omega}\parallel2\ \mathrm{k\Omega})=(29.6\ \mathrm{mA/V})(1.76\ \mathrm{k\Omega})=52 .
$$

### Step 7 — Overall gain

$$
a_v=a_{v1}a_{v2}a_{v3}=183\times265\times52\approx2.5\times10^6 .
$$

The op amp gain is about $2.5\times10^6$ (≈ 128 dB). With the lower betas $\beta_{npn}=40$, $\beta_{pnp}=10$ the same analysis gives about $1.3\times10^5$; the higher betas raise every stage's node resistances and follower gains and increase the overall gain roughly twentyfold.
