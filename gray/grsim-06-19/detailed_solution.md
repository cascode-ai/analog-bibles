# Detailed solution - grsim-06-19

First find which rail each bias voltage follows in [Fig. 2]. Then propagate a small change of each supply through the op amp with the inputs at ac ground, using the symmetry of the folded cascode and the cascode current mirror. The result is that the output follows $V_{DD}$ one-for-one and ignores $-V_{SS}$. A transistor-level ngspice model of both figures confirms it.

### Step 1 — Which rail each bias voltage follows

$I_{BIAS}$ is ideal, so the current in $M_{101}$–$M_{102}$ is independent of both supplies.

- $V_{BIAS1}$ is the gate of the diode-connected $M_{102}$, one fixed $V_{SG}$ below $V_{DD}$: it follows $v_{dd}$ and ignores $v_{ss}$. The tail device $M_5$ therefore keeps $v_{sg5}=0$ and couples to the supply only through $r_{o5}$.
- $M_{103}$–$M_{104}$ and $M_{109}$–$M_{108}$ copy $I_{BIAS}$ with cascoded, very high output resistance, so the currents into $M_{105}$–$M_{106}$ and $M_{107}$ are also fixed. $V_{BIAS2}$ ($V_{GS105}$ plus the triode drop of $M_{106}$) and $V_{BIAS3}$ ($V_{GS107}$) therefore sit at fixed voltages above $-V_{SS}$: they follow $v_{ss}$ and ignore $v_{dd}$.

### Step 2 — Negative-supply gain

When $-V_{SS}$ moves by $v_{ss}$, the sources and gates of $M_{11}$, $M_{12}$ move together, and so do the gates of $M_{1A}$, $M_{2A}$. The currents of $M_{11}$, $M_{12}$ stay constant and the folding nodes (drains of $M_{11}$, $M_{12}$) follow $v_{ss}$.

The only remaining coupling is through $r_{o1}$ and $r_{o2}$, between the folding nodes and the common-source node of the input pair, which is fixed by the grounded inputs. Each input-device current changes by the same amount $-v_{ss}/r_{o1}$, so $M_{1A}$ and $M_{2A}$ each gain $+v_{ss}/r_{o1}$. The cascode mirror copies $M_{1A}$'s change to $M_4$/$M_{4A}$, which supplies exactly what $M_{2A}$ now draws. Nothing is left over at the output:

$$
A^-=\frac{v_o}{v_{ss}}\approx0 .
$$

### Step 3 — Positive-supply gain

When $V_{DD}$ moves by $v_{dd}$:

- **Tail.** $M_5$'s current changes by $v_{dd}/r_{o5}$. It splits equally between $M_1$ and $M_2$, a common-mode change that the mirror cancels at the output.
- **Mirror.** $M_3$–$M_{3A}$ are diode connected from $V_{DD}$ with a fixed current, so their gates and the mirror input node move with $v_{dd}$. $M_4$, $M_{4A}$ then copy that current as long as their terminal voltages also move with $v_{dd}$, i.e. if $v_o=v_{dd}$.

Check $v_o=v_{dd}$ with KCL at the output. Let $R_{up}\approx g_{m4A}r_{o4A}r_{o4}$ be the resistance looking up into the mirror output and $R_{down}\approx g_{m2A}r_{o2A}(r_{o2}\parallel r_{o12})$ the resistance looking down into $M_{2A}$. The node seen by $M_{1A}$'s drain (the mirror input) has moved by $v_{dd}$, which raises $M_{1A}$'s current by $v_{dd}/R_{down}$ (it has the same output resistance as $M_{2A}$), and the mirror copies that to the output. So

$$
\frac{v_{dd}}{R_{down}}+\frac{v_{dd}-v_o}{R_{up}}=\frac{v_o}{R_{down}}
\;\Rightarrow\;v_o=v_{dd},\qquad A^+=\frac{v_o}{v_{dd}}\approx1 .
$$

Thus $PSRR^+=A_{dm}/A^+\approx A_{dm}$, only the open-loop gain, while $PSRR^-$ is very large.

### Step 4 — SPICE model

Supplies are ±2.5 V; $k_n'=194\ \mu\mathrm{A/V^2}$, $k_p'=64.7\ \mu\mathrm{A/V^2}$, $V_{tn}=0.6$ V, $V_{tp}=-0.8$ V, $\lambda_n=0.024$, $\lambda_p=0.049\ \mathrm{V^{-1}}$ at $L=0.82$ µm, and $I_{BIAS}=100\ \mu$A. Widths give $|V_{ov}|=0.2$ V for all devices at $|I_{D5}|=I_{D11}=I_{D12}=200\ \mu$A and 100 µA elsewhere; $M_{106}$ is sized (W/L = 4.9) to drop 0.3 V in the triode region, so the folding nodes sit 0.3 V above $-V_{SS}$ with $M_{11}$, $M_{12}$ just saturated. All op-amp transistors are saturated at the operating point.

```spice
* grsim-06-19 folded cascode op amp and bias circuit
.model nm nmos level=1 kp=194u  vto=0.6  lambda=0.024
.model pm pmos level=1 kp=64.7u vto=-0.8 lambda=0.049
VDD vdd 0 dc 2.5  ac 1
VSS vss 0 dc -2.5 ac 0
IB   n101 vss 100u
M102 b1   b1   vdd  vdd pm w=63.4u  l=0.82u
M101 n101 n101 b1   vdd pm w=63.4u  l=0.82u
M103 n103 b1   vdd  vdd pm w=63.4u  l=0.82u
M104 b2   n101 n103 vdd pm w=63.4u  l=0.82u
M105 b2   b2   n106 vss nm w=21.2u  l=0.82u
M106 n106 b2   vss  vss nm w=4.03u  l=0.82u
M109 n109 b1   vdd  vdd pm w=63.4u  l=0.82u
M108 b3   n101 n109 vdd pm w=63.4u  l=0.82u
M107 b3   b3   vss  vss nm w=21.2u  l=0.82u
M5  cs  b1  vdd vdd pm w=126.8u l=0.82u
M1  f1  inp cs  vdd pm w=63.4u  l=0.82u
M2  f2  inm cs  vdd pm w=63.4u  l=0.82u
M11 f1  b3  vss vss nm w=42.3u  l=0.82u
M12 f2  b3  vss vss nm w=42.3u  l=0.82u
M1A m   b2  f1  vss nm w=21.2u  l=0.82u
M2A out b2  f2  vss nm w=21.2u  l=0.82u
M3  g3  g3  vdd vdd pm w=63.4u  l=0.82u
M3A m   m   g3  vdd pm w=63.4u  l=0.82u
M4  d4  g3  vdd vdd pm w=63.4u  l=0.82u
M4A out m   d4  vdd pm w=63.4u  l=0.82u
Vp  inp 0 dc 0.52
Rf  out inm 1G
Cf  inm cm 1
Vcm cm 0 0.52
.ac lin 1 1 1
.end
```

The 1-GΩ/1-F network closes the loop at dc, so the output settles at the input level, but leaves $M_2$'s gate at ac ground at 1 Hz. Both inputs are therefore at small-signal ground.

### Step 5 — Simulated supply gains

The input dc level is chosen as 0.52 V so that the output sits at the same voltage as the mirror input node ($v_m=0.515$ V). The two halves are then biased identically, as the hand analysis assumes. A second run with the output at 0 V shows the effect of the systematic asymmetry this introduces.

| Quantity | Hand | ngspice, $v_o=v_m$ | ngspice, $v_o=0$ |
|---|---|---|---|
| $A_{dm}$ | $\sim g_{m1}R_o$ | $2.69\times10^4$ | $2.75\times10^4$ |
| $A^+=v_o/v_{dd}$ | 1 | 0.984 | 0.944 |
| $A^-=v_o/v_{ss}$ | 0 | $-1.6\times10^{-4}$ | 0.024 |

With matched bias the simulation confirms the analysis: the output follows $V_{DD}$ almost one-for-one and is essentially independent of $-V_{SS}$. $PSRR^+\approx2.7\times10^4$ (88 dB) is just the open-loop gain, and $PSRR^-$ is more than $10^8$ (160 dB). Replacing the bias circuit by ideal sources that follow the same rails gives the same numbers, confirming that the cascoded bias copies behave as Step 1 assumes.

When the output dc level differs from the mirror node by 0.5 V, the drain voltages of $M_{2A}$, $M_{4A}$ and $M_4$ differ from their partners'. The level-1 $r_o$ and $g_m$ values then no longer match, so the cancellations of Steps 2 and 3 are imperfect, and $A^-$ rises to about 0.02. It still remains far below the $A^+\approx1$ of the positive supply.
