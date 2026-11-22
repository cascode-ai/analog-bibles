# Detailed solution - grsim-08-20

The bias network is a multi-output mirror: $Q_8$ sets the base voltage of $Q_7$, $Q_9$, $Q_{10}$, $Q_{11}$, whose currents follow from their emitter resistors. For signals, the circuit is balanced, so a half circuit applies: the input pair is a degenerated transconductor whose collector current drives a shunt-shunt pair ($Q_4$ common emitter and $Q_5$ follower, closed by the 7-kΩ resistor; $Q_3$ and $Q_6$ on the other side). The overall gain is the input stage's transconductance times the output stage's closed-loop transresistance. ngspice then checks the bias and small-signal values.

### Step 1 — (a) Reference current

The 10-kΩ resistor feeds the diode-connected $Q_8$, whose emitter has 1.4 kΩ to −6 V. Neglecting base currents,

$$
I_{C8}=\frac{6-(-6)-0.7\ \mathrm{V}}{10\ \mathrm{k\Omega}+1.4\ \mathrm{k\Omega}}=0.991\ \mathrm{mA},
$$

and the common base node sits $0.7\ \mathrm{V}+(1.4\ \mathrm{k\Omega})(0.991\ \mathrm{mA})=2.088$ V above −6 V.

### Step 2 — (a) Mirror outputs and signal-path currents

With equal areas and equal $V_{BE}$, each mirror transistor has the same 1.388 V across its emitter resistor, so its current scales inversely with that resistor. A first correction accounts for $V_{BE}$ rising by $V_T\ln(I_C/I_{C8})$ at the higher currents:

| Device | Emitter R | Equal $V_{BE}$ | With $V_T\ln$ correction |
|---|---|---|---|
| $Q_7$, $Q_9$ | 300 Ω | 4.63 mA | 4.49 mA |
| $Q_{10}$, $Q_{11}$ | 400 Ω | 3.47 mA | 3.39 mA |

For example, $Q_7$'s $V_{BE}$ is higher by $(26\ \mathrm{mV})\ln(4.6)=40$ mV, leaving $(1.388-0.040)\ \mathrm{V}/300\ \Omega=4.49$ mA.

- **$Q_1$, $Q_2$** split $Q_7$'s current: $I_{C1}=I_{C2}=2.25$ mA (2.3 mA without the correction). **$Q_3$, $Q_4$** split $Q_9$'s current likewise: 2.25 mA.
- **Output followers.** $Q_3$'s and $Q_4$'s collectors are at $6-(1.1\ \mathrm{k\Omega})(2.25\ \mathrm{mA})=3.53$ V, so the outputs (emitters of $Q_5$, $Q_6$) are at about 2.83 V.
- **Input-stage collectors.** Node $C_1$ (the base of $Q_4$) is fed by the 2.4-kΩ resistor and by the 7-kΩ resistor from the output, and supplies $I_{C1}$:
$$
\frac{6-V_{C1}}{2.4\ \mathrm{k\Omega}}+\frac{2.83-V_{C1}}{7\ \mathrm{k\Omega}}=I_{C1}\ \Rightarrow\ V_{C1}\approx1.1\ \mathrm{V},
$$
so each 7-kΩ resistor carries about 0.25 mA from the output into the input-stage collector.
- **$Q_5$, $Q_6$** supply their current source and this feedback current (no dc current flows in $R_L$ by symmetry): $I_{C5}=I_{C6}=3.39+0.25=3.64$ mA.

All transistors are in the active region: for example $Q_1$'s collector (≈1.1 V) is above its base (0 V), and $Q_3$, $Q_4$'s emitters (≈0.4 V) are above $Q_9$'s emitter (−4.6 V).

### Step 3 — (b) Small-signal parameters and the input stage

From $g_m=I_C/V_T$ and $r_\pi=\beta/g_m$ ($\beta=100$): $g_{m1}=g_{m4}=86.3$ mS, $r_{\pi1}=r_{\pi4}=1.16\ \mathrm{k\Omega}$; $g_{m5}=140$ mS, $r_{\pi5}=714\ \Omega$.

For a differential input, the joined 640-Ω resistors and the emitters of $Q_3$, $Q_4$ are ac grounds. Each input transistor is a common-emitter stage with 640 Ω of emitter degeneration, driven by $v_i/2$:

$$
i_{c1}=\frac{\beta\,(v_i/2)}{r_{\pi1}+(\beta+1)(640\ \Omega)}=\frac{v_i/2}{658\ \Omega},\qquad R_{\text{in}}=2\left[r_{\pi1}+(\beta+1)(640\ \Omega)\right]=132\ \mathrm{k\Omega}.
$$

$R_{\text{in}}$ is the differential input resistance.

### Step 4 — (b) Output stage: shunt-shunt half circuit

The half circuit of the output stage (with $R_L/2=1\ \mathrm{k\Omega}$ to ground at the output) has three nodes: $X$ (collector of $Q_1$, base of $Q_4$) with 2.4 kΩ and $r_{\pi4}$ to ground; $Y$ (collector of $Q_4$, base of $Q_5$) with 1.1 kΩ to ground; and the output $O$ (emitter of $Q_5$) with 1 kΩ to ground. The 7-kΩ resistor $R_F$ connects $O$ back to $X$. The current $-i_{c1}$ is the input to node $X$.

The feedback resistor senses the output voltage and returns a current, so the feedback is shunt-shunt with $f=-1/R_F$. Its loading is $R_F$ to ground at both $X$ and $O$. The basic amplifier is then:

- **Node $X$:** $R_X=2.4\ \mathrm{k\Omega}\parallel7\ \mathrm{k\Omega}\parallel r_{\pi4}=0.703\ \mathrm{k\Omega}$.
- **$Q_4$:** collector current $g_{m4}v_x$ into $R_Y=1.1\ \mathrm{k\Omega}\parallel R_{i5}$, where $R_{i5}=r_{\pi5}+(\beta+1)(1\ \mathrm{k\Omega}\parallel7\ \mathrm{k\Omega})=89.1\ \mathrm{k\Omega}$, so $R_Y=1.087\ \mathrm{k\Omega}$.
- **$Q_5$ follower:** gain $(\beta+1)(875\ \Omega)/R_{i5}=0.992$.

$$
a=\frac{v_o}{i_x}=-R_Xg_{m4}R_Y(0.992)=-65.4\ \mathrm{k\Omega},\qquad T=af=\frac{65.4\ \mathrm{k\Omega}}{7\ \mathrm{k\Omega}}=9.34,\qquad A_t=\frac{a}{1+T}=-6.32\ \mathrm{k\Omega}.
$$

The output-stage loop gain is therefore about 9.3; an exact nodal solution of the half circuit gives the same values ($T=9.35$ as the return ratio of $Q_4$, $A_t=-6.32\ \mathrm{k\Omega}$).

### Step 5 — (b) Overall gain and output impedance

Since $X$ receives $-i_{c1}$, the half output is $v_o/2=(6.32\ \mathrm{k\Omega})\,i_{c1}$, and

$$
\frac{v_o}{v_i}=\frac{6.32\ \mathrm{k\Omega}}{658\ \Omega}=9.61 .
$$

With infinite loop gain the transresistance would be $R_F$ and the gain $7\ \mathrm{k\Omega}/658\ \Omega=10.6$; the loop gain of 9.3 costs about 9 %.

For the output impedance, the basic amplifier's output resistance per side is the follower's $(1.1\ \mathrm{k\Omega}+r_{\pi5})/(\beta+1)=17.9\ \Omega$ in parallel with the 7-kΩ loading, and the feedback divides it by $1+T$. Without $R_L$ (so that $T=9.51$),

$$
R_{\text{out}}=2\cdot\frac{17.9\ \Omega}{1+9.51}=3.41\ \Omega.
$$

This is the differential output resistance.

### Step 6 — (c) SPICE comparison

The deck uses $I_S=2\times10^{-15}$ A (so $V_{BE}\approx0.7$ V near 1 mA), $\beta_F=100$, $r_b=0$, $V_A=\infty$, with the temperature set for $V_T=26$ mV, and a balanced input with zero common mode.

```spice
* grsim-08-20 733 wideband amplifier
.options temp=28.57 tnom=28.57
.model qn npn is=2e-15 bf=100
VCC vcc 0 6
VEE vee 0 -6
RC1 vcc c1 2.4k
RC2 vcc c2 2.4k
Q1 c1 inp e1 qn
Q2 c2 inn e2 qn
RE1 e1 t1 640
RE2 e2 t1 640
Q7 t1 vb ee7 qn
R7 ee7 vee 300
R10k vcc vb 10k
Q8 vb vb ee8 qn
R8 ee8 vee 1.4k
RC3 vcc c3 1.1k
RC4 vcc c4 1.1k
Q3 c3 c2 t2 qn
Q4 c4 c1 t2 qn
Q9 t2 vb ee9 qn
R9 ee9 vee 300
Q5 vcc c4 op qn
Q6 vcc c3 on qn
Q10 op vb ee10 qn
R10 ee10 vee 400
Q11 on vb ee11 qn
R11 ee11 vee 400
RF1 c1 op 7k
RF2 c2 on 7k
RL op on 2k
Vp inp 0 dc 0 ac 0.5
En inn 0 inp 0 -1
.op
.ac lin 1 1k 1k
.end
```

$R_{\text{in}}=1/|i(V_p)|$ for a 1-V differential input; $R_{\text{out}}$ is found with $R_L$ removed, the inputs grounded, and 1 A ac driven into one output and out of the other.

| Quantity | Hand ($\beta\to\infty$ bias) | ngspice, $\beta_F=10^4$ | ngspice, $\beta_F=100$ |
|---|---|---|---|
| $I_{C8}$ | 0.991 mA | 0.990 mA | 0.863 mA |
| $I_{C7}=I_{C9}$ | 4.49 mA | 4.49 mA | 3.90 mA |
| $I_{C10}=I_{C11}$ | 3.39 mA | 3.38 mA | 2.94 mA |
| $I_{C1}$ to $I_{C4}$ | 2.25 mA | 2.24 mA | 1.93 mA |
| $I_{C5}=I_{C6}$ | 3.64 mA | 3.62 mA | 3.10 mA |

The bias matches the hand values when base currents are negligible. With $\beta=100$ every current is about 13–15 % lower, because the mirror's base currents (about 14.5 mA of collector current divided by $\beta$, i.e. 0.15 mA) are drawn from the 0.99-mA reference current. Including them by hand, $I_{10k}=I_{E8}(100/101+17.3/101)$, gives $I_{C8}=0.86$ mA, in agreement with the simulation.

| Small-signal quantity | Hand | ngspice ($\beta_F=100$) |
|---|---|---|
| $v_o/v_i$ ($R_L=2$ kΩ) | 9.61 | 9.52 |
| $R_{\text{in}}$ (differential) | 132 kΩ | 132 kΩ |
| $R_{\text{out}}$ (differential) | 3.41 Ω | 3.85 Ω |

Re-evaluating the hand formulas at the simulated bias currents gives exactly the simulated gain (9.52), output-stage loop gain 8.8 and $R_{\text{out}}=3.85\ \Omega$. The gain and input resistance hardly depend on the bias because they are set mainly by the 640-Ω and 7-kΩ resistors; the output resistance scales with $1/g_m$ of the followers and so rises at the lower simulated bias.
