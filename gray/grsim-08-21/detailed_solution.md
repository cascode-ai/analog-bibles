# Detailed solution - grsim-08-21

The regulator is a series-shunt feedback loop: the divider $R_A$–$R_B$ samples $V_o$, the differential pair $Q_{11}$–$Q_{12}$ compares the sampled voltage with the reference $V_R$, the high-impedance node at $Q_{12}$'s collector drives the Darlington follower $Q_{14}$–$Q_{15}$, and the follower drives the load. First find the bias currents and $V_R$. Then compute the open-loop gain, the feedback factor and the loop gain $T$, and from them the closed-loop output resistance, which gives the load-regulation step. Finally, ngspice gives the loop gain, the output resistance, and the load and line regulation. The external divider values are not given; they are chosen here as $R_A=3.2\ \mathrm{k\Omega}$ and $R_B=6.8\ \mathrm{k\Omega}$ (1 mA of divider current), with $R_C=R_A\parallel R_B=2.18\ \mathrm{k\Omega}$.

### Step 1 — Reference section

$D_1$ carries the 1-mA current $I_1$, so the bottom of $R_2$ sits 6.2 V below $V^+$, and the diode-connected $Q_2$ conducts

$$
I_{C2}=\frac{6.2\ \mathrm{V}-|V_{BE2}|}{R_1+R_2}\approx\frac{6.2-0.69}{16\ \mathrm{k\Omega}}=0.344\ \mathrm{mA}.
$$

$Q_2$'s base line also drives $Q_3$, $Q_7$ and $Q_8$. With 25 kΩ of emitter resistance, $Q_3$ conducts only a small current, set by $I_{C3}R_3=I_{C2}R_1+V_T\ln(I_{C2}/I_{C3})$, which gives $I_{C3}\approx10.4\ \mu$A. This current flows into $Q_6$, whose base-emitter voltage appears across $R_8$ (the current in $R_7$ is negligible). $D_2$ sits on top of it, and $Q_4$–$Q_5$ buffer the node, so

$$
V_{BE6}=V_T\ln\frac{10.4\ \mu\mathrm{A}}{10^{-15}\ \mathrm{A}}=0.60\ \mathrm{V},\qquad V_R=6.2\ \mathrm{V}+V_{BE6}=6.80\ \mathrm{V}.
$$

The divider must therefore satisfy $R_B/(R_A+R_B)=6.80/10=0.68$, which the chosen values do.

### Step 2 — Error amplifier and output bias

- **$Q_7$, $Q_8$** have 1-kΩ emitter resistors, twice $R_1$, so with equal $|V_{BE}|$ each carries $I_{C2}/2=0.172$ mA. (The $V_T\ln$ correction raises this to about 0.187 mA.)
- **$Q_{10}$** takes $Q_7$'s current; $Q_9$ supplies the bases. **$Q_{13}$** has twice the emitter area and half the emitter resistance (150 Ω versus 300 Ω), so it carries $2I_{C10}=0.344$ mA, split equally between $Q_{11}$ and $Q_{12}$: 0.172 mA each, matching $Q_8$'s load current.
- **Output.** $Q_{15}$ supplies the 10-mA load and the 1-mA divider: $I_{C15}\approx11$ mA. $Q_{14}$ supplies $Q_{15}$'s base current (0.11 mA) and about $0.77\ \mathrm{V}/15\ \mathrm{k\Omega}=0.05$ mA in $R_{12}$, so $I_{E14}\approx0.16$ mA.

Small-signal values ($g_m=I_C/V_T$, $r_\pi=\beta/g_m$, $r_o=V_A/I_C$):

| Device | $I_C$ | $g_m$ | $r_\pi$ | $r_o$ |
|---|---|---|---|---|
| $Q_8$, $Q_{11}$, $Q_{12}$ | 0.172 mA | 6.62 mS | 15.1 kΩ | 581 kΩ |
| $Q_{14}$ | 0.16 mA | 6.15 mS | 16.2 kΩ | — |
| $Q_{15}$ | 11 mA | 0.423 S | 236 Ω | — |

### Step 3 — Open-loop gain

Treat $V_R$ as ac ground, and drive $Q_{12}$'s base with $v_{b12}$.

- **Differential pair.** $Q_{11}$'s base sees $R_C$, so its emitter presents $R_{e11}=(R_C+r_{\pi11})/(\beta+1)=171\ \Omega$ to $Q_{12}$'s emitter (the tail current source is ideal). Then
$$
i_{c12}=\frac{\beta\,v_{b12}}{r_{\pi12}+(\beta+1)R_{e11}}=(3.09\ \mathrm{mS})\,v_{b12},\qquad R_{\text{in}12}=r_{\pi12}+(\beta+1)R_{e11}=32.4\ \mathrm{k\Omega}.
$$
- **High-impedance node.** Three resistances load $Q_{12}$'s collector. $Q_{12}$'s own output resistance, with emitter degeneration $R_{e11}$, is $r_{o12}[1+g_{m12}R_{e11}/(1+R_{e11}/r_{\pi12})]=1.23\ \mathrm{M\Omega}$. $Q_8$'s, with $R_5=1\ \mathrm{k\Omega}$ and about 0.6 kΩ of base-line resistance, is $r_{o8}[1+g_{m8}R_5/(1+(R_5+0.6\ \mathrm{k\Omega})/r_{\pi8})]=4.06\ \mathrm{M\Omega}$. The Darlington input resistance with $R_L\parallel(R_A+R_B)=909\ \Omega$ is $r_{\pi14}+(\beta+1)[r_{\pi15}+(\beta+1)(909\ \Omega)]=9.31\ \mathrm{M\Omega}$. Their parallel combination is $R_S=0.858\ \mathrm{M\Omega}$.
- **Follower.** The Darlington gain is 0.997.

$$
a=\frac{v_o}{v_{b12}}=(3.09\ \mathrm{mS})(0.858\ \mathrm{M\Omega})(0.997)=2640 .
$$

### Step 4 — Loop gain

The divider's Thevenin equivalent is $0.68\,v_o$ behind $R_A\parallel R_B=2.18\ \mathrm{k\Omega}$, which is loaded by $R_{\text{in}12}$:

$$
f=0.68\cdot\frac{32.4\ \mathrm{k\Omega}}{32.4\ \mathrm{k\Omega}+2.18\ \mathrm{k\Omega}}=0.637,\qquad T=af=(2640)(0.637)=1680 .
$$

Without $R_C$ and the input loading ($f=0.68$, pair gain $g_{m12}/2$), the same circuit gives about 1900–2000. The loop gain thus depends on the external resistors: with a divider ten times larger ($R_C=21.8$ kΩ) the degeneration and loading would reduce $T$ to about 800.

### Step 5 — Output resistance and the 500-Ω load

Without feedback, the output resistance is that of the Darlington follower whose base is fed from $R_{So}=1.23\ \mathrm{M\Omega}\parallel4.06\ \mathrm{M\Omega}=0.946\ \mathrm{M\Omega}$ ($R_{12}$, which parallels $r_{\pi15}$, has no effect):

$$
r_{oa}=\frac{1}{\beta+1}\left[\frac{R_{So}+r_{\pi14}}{\beta+1}+r_{\pi15}\right]=\frac{1}{101}\left[\frac{946\ \mathrm{k\Omega}+16.2\ \mathrm{k\Omega}}{101}+236\ \Omega\right]=96.6\ \Omega,
$$

$$
R_o=\frac{r_{oa}}{1+T}=\frac{96.6\ \Omega}{1681}=0.057\ \Omega .
$$

Replacing the 1-kΩ load by 500 Ω raises the load current from 10 mA to 20 mA, so

$$
\Delta V_o=-R_o\,\Delta I_L=-(0.057\ \Omega)(10\ \mathrm{mA})=-0.57\ \mathrm{mV},\qquad V_o\approx9.9994\ \mathrm{V}.
$$

### Step 6 — Line regulation estimate

Changing $V^+$ moves the voltages across several transistors, and the Early effect turns this into offsets. The largest term comes from $Q_{11}$, whose collector is at $V^+$. The loop holds $Q_{11}$'s current, so its $V_{BE}$ must fall by $V_T\,\Delta V^+/V_A=0.26$ mV per volt. This raises the tail, and $Q_{12}$'s base must follow, so

$$
\frac{\Delta V_o}{\Delta V^+}\approx\frac{0.26\ \mathrm{mV/V}}{0.68}=0.38\ \mathrm{mV/V}.
$$

The reference adds a little: $Q_3$'s degenerated output resistance (about 97 MΩ) lets its 10.4-µA current change by about 0.1 % per volt, so $V_{BE6}$, and hence $V_R$, moves by 0.026 mV/V, or 0.04 mV/V at the output. The total estimate is about 0.42 mV/V, or 0.004 % of $V_o$ per volt.

### Step 7 — SPICE simulation

The deck uses the given transistor data ($I_S=10^{-15}$ A, $\beta=100$, $V_A=100$ V, $r_b=0$, $V_T=26$ mV), $Q_{13}$ with `area=2`, and Zener diodes modelled with $BV=6.2$ V at their operating currents.

```spice
* grsim-08-21 723 regulator
.options temp=28.57 tnom=28.57
.param RA=3.2k RB=6.8k RC=2.176k
.model qn npn is=1e-15 bf=100 vaf=100
.model qp pnp is=1e-15 bf=100 vaf=100
.model dz1 d is=1e-14 bv=6.2 ibv=1m
.model dz2 d is=1e-14 bv=6.2 ibv=0.12m
VP vp 0 15
D1 n1 vp dz1
I1 n1 0 1m
R1 vp e2 500
Q2 b2 b2 e2 qp
R2 b2 n1 15.5k
R3 vp e3 25k
Q3 a b2 e3 qp
Q4 vp a e4 qn
Q5 vp e4 e5 qn
R6 e5 vr 100
D2 an vr dz2
R8 an 0 5k
R7 an b6 30k
Q6 a b6 0 qn
C1 a b6 5p
R4 vp e7 1k
Q7 p b2 e7 qp
Q9 vp p q qn
R10 q 0 20k
Q10 p q e10 qn
R9 e10 0 300
Q13 tail q e13 qn area=2
R11 e13 0 150
RC vr b11 {RC}
Q11 vp b11 tail qn
Q12 z fb tail qn
R5 vp e8 1k
Q8 z b2 e8 qp
C2 z fb 100p
Q14 vp z e14 qn
R12 e14 vo 15k
Q15 vp e14 vo qn
RA vo fb {RA}
RB fb 0 {RB}
RL vo 0 1k
.op
.dc VP 14 16 0.5
.end
```

The output resistance is found by driving a 1-A ac current into $V_o$ at 1 mHz, below the dominant pole set by $C_2$. The loop gain uses the double-injection method at the break between the divider tap and $Q_{12}$'s base: $T_v=-v_{fb}/v_{b12}$, $T_i=i_{\text{ret}}/i_{\text{fwd}}$, and $T=(T_vT_i-1)/(T_v+T_i+2)$.

The operating point gives $V_R=6.8007$ V, $V_o=10.0005$ V, $I_{C2}=0.337$ mA, $I_{C6}=10.4\ \mu$A, $I_{C7}=0.187$ mA, $I_{C11}=0.192$ mA, $I_{C12}=0.183$ mA, $I_{C14}=0.155$ mA and $I_{C15}=10.8$ mA.

| Quantity | Hand | ngspice |
|---|---|---|
| Loop gain $T$ | 1680 | 1676 ($T_v=1884$, $T_i=15216$) |
| Output resistance $R_o$ | 0.057 Ω | 0.045 Ω |
| $V_o$, 1-kΩ load | 10 V | 10.00047 V |
| $V_o$, 500-Ω load | −0.57 mV | 10.00002 V (−0.45 mV, −0.0045 %) |
| Line regulation | 0.42 mV/V | 0.49 mV/V (0.0049 %/V), from $V_o$ = 9.99997 V at 14 V to 10.00094 V at 16 V |

The loop gain agrees closely. The simulated output resistance is about 20 % lower because $r_{oa}$ is dominated by $R_{So}/\beta^2$, and in the simulation the Early effect raises the effective $\beta$ of $Q_{14}$ and $Q_{15}$ to about 105. The load and line regulation are a few tenths of a millivolt, in line with the estimates: the regulator holds $V_o$ to about 0.005 % for a 10-mA load step and 0.005 % per volt of supply change.
