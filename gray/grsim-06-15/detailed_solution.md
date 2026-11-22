# Detailed solution - grsim-06-15

Use the square law with $L_{\text{eff}}=0.72$ µm for every device, so the drawn 150/1, 100/1 and 50/1 become effective ratios of 208.3, 138.9 and 69.4. Mirror ratios give the bias currents, $g_m$ and $r_o$ at those currents give the two-stage gain, saturation conditions give the common-mode range, and small-signal paths from each rail give the supply gains. A level-1 ngspice model checks each result.

### Step 1 — Bias currents and overdrives

$M_8$ carries the 200-µA reference. $M_5$ and $M_7$ have the same $V_{SG}$ and $W/L$, so (ignoring channel-length modulation) each also carries 200 µA. The tail current splits equally in the balanced pair, and $M_6$ carries $M_7$'s current:

$$
|I_{D5}|=|I_{D7}|=200\ \mu\mathrm A,\qquad |I_{D1}|=|I_{D2}|=I_{D3}=I_{D4}=100\ \mu\mathrm A,\qquad I_{D6}=200\ \mu\mathrm A .
$$

The second stage is balanced: $(W/L)_6=2(W/L)_4$ carries twice $M_4$'s current, so $M_3$, $M_4$ and $M_6$ have equal current densities and $V_{GS6}=V_{GS4}$ at zero offset. With $V_{ov}=\sqrt{2I_D/(k'W/L_{\text{eff}})}$:

$$
|V_{ov1,2}|=\sqrt{\frac{2(100\ \mu\mathrm A)}{(64.7\ \mu\mathrm{A/V^2})(208.3)}}=0.122\ \mathrm V=V_{ov3,4}=V_{ov6},\qquad |V_{ov5,7,8}|=0.172\ \mathrm V .
$$

### Step 2 — Low-frequency differential gain

With $g_m=2I_D/V_{ov}$ and $r_o=1/(\lambda I_D)$, $\lambda=0.0556\ \mathrm{V^{-1}}$:

$$
g_{m1}=\frac{2(100\ \mu\mathrm A)}{0.122\ \mathrm V}=1.64\ \mathrm{mS},\quad g_{m6}=3.28\ \mathrm{mS},\quad r_{o2}=r_{o4}=180\ \mathrm{k\Omega},\quad r_{o6}=r_{o7}=90\ \mathrm{k\Omega}.
$$

The mirror-loaded first stage has gain $g_{m1}(r_{o2}\parallel r_{o4})$ and the common-source second stage $-g_{m6}(r_{o6}\parallel r_{o7})$:

$$
A_{v1}=(1.64\ \mathrm{mS})(90\ \mathrm{k\Omega})=148,\qquad A_{v2}=-(3.28\ \mathrm{mS})(45\ \mathrm{k\Omega})=-148,\qquad A_v=-2.2\times10^4\ (87\ \mathrm{dB}),
$$

with $v_i$ defined as $v_{g1}-v_{g2}$: the gate of $M_1$ is the inverting input as seen at $v_o$.

### Step 3 — Input common-mode range

The bodies of $M_1$, $M_2$ are tied to their sources, so $|V_{t1}|=0.8$ V throughout.

- **Upper limit**: $M_5$ must stay saturated, so the common source may rise no higher than $V_{DD}-|V_{ov5}|$, and the input sits $|V_{t1}|+|V_{ov1}|$ below it:
$$
V_{IC}<1.5-0.172-0.8-0.122=+0.41\ \mathrm V.
$$
- **Lower limit**: $M_1$'s drain is held at $-V_{SS}+V_{GS3}=-1.5+0.722=-0.778$ V; $M_1$ stays saturated while its gate is above that drain minus $|V_{t1}|$:
$$
V_{IC}>-1.5+V_{t3}+V_{ov3}-|V_{t1}|=-1.58\ \mathrm V .
$$
This is below the negative rail, so the range extends from about −1.5 V to +0.41 V.

### Step 4 — Gain from each supply

**Negative supply.** With the gates of $M_6$ and $M_7$ held (the first-stage output and the $M_8$ gate do not move with $V_{SS}$ to first order), $r_{o6}$ and $r_{o7}$ form a divider from $-V_{SS}$ to $V_{DD}$:

$$
A^-=\frac{v_o}{v_{ss}}=\frac{r_{o7}}{r_{o6}+r_{o7}}=0.5,\qquad PSRR^-=\frac{|A_v|}{A^-}\approx4.4\times10^4\ (93\ \mathrm{dB}).
$$

**Positive supply.** Two paths cancel. The gates of $M_5$, $M_7$, $M_8$ follow $V_{DD}$, so these devices see only a change in $|V_{DS}|$. Through $M_7$ alone the output follows with $+r_{o6}/(r_{o6}+r_{o7})=+0.5$. Through $M_5$, the tail current grows by $v_{dd}/r_{o5}$; half of it flows into each side, both $V_{GS3}$ and $V_{GS4}$ rise by $v_{dd}/(2g_{m3}r_{o5})$, and $M_6$ amplifies that:

$$
A^+\approx\frac{r_{o6}}{r_{o6}+r_{o7}}-\frac{g_{m6}(r_{o6}\parallel r_{o7})}{2g_{m3}r_{o5}}=0.5-\frac{148}{2(1.64\ \mathrm{mS})(90\ \mathrm{k\Omega})}=0.5-0.5\approx0 .
$$

The cancellation is exact to first order because $V_{A5}=V_{A7}$ and $V_{ov3}=V_{ov6}$; $PSRR^+$ is therefore very large.

### Step 5 — SPICE check

Level-1 models with $L=L_{\text{eff}}=0.72$ µm and $\lambda=0.0556\ \mathrm{V^{-1}}$ (the body effect plays no role: every other source is at its body's rail). A 1-GΩ resistor from $v_o$ to the $M_1$ gate with a 1-F capacitor to ground closes the loop at dc only, nulling the offset while leaving the loop open at the 1-Hz AC analysis. The small-signal source is then applied to the $M_2$ gate, to $V_{DD}$ or to $V_{SS}$ in turn. $M_9$ and the 5-pF capacitor are omitted.

```spice
* grsim-06-15 two-stage CMOS op amp
.model nm nmos level=1 kp=194u  vto=0.6  lambda=0.0556
.model pm pmos level=1 kp=64.7u vto=-0.8 lambda=0.0556
VDD vdd 0 dc 1.5  ac 0
VSS vss 0 dc -1.5 ac 0
IB  g8 vss 200u
M8 g8  g8  vdd vdd pm w=150u l=0.72u
M5 s   g8  vdd vdd pm w=150u l=0.72u
M7 out g8  vdd vdd pm w=150u l=0.72u
M1 x   inp s   s   pm w=150u l=0.72u
M2 y   inm s   s   pm w=150u l=0.72u
M3 x   x   vss vss nm w=50u  l=0.72u
M4 y   x   vss vss nm w=50u  l=0.72u
M6 out y   vss vss nm w=100u l=0.72u
Rf out inp 1G
Cf inp 0 1
Vin inm 0 dc 0 ac 1
.ac lin 1 1 1
.end
```

| Quantity | Hand | ngspice |
|---|---|---|
| $\lvert I_{D5}\rvert$, $\lvert I_{D7}\rvert$ | 200 µA, 200 µA | 196 µA, 206 µA |
| $\lvert I_{D1}\rvert=I_{D3}$, $I_{D6}$ | 100 µA, 200 µA | 98.0 µA, 206 µA |
| $\lvert A_v\rvert$ | $2.2\times10^4$ | $2.73\times10^4$ |
| Common-mode range | −1.58 V (below rail) to +0.41 V | −1.5 V to ≈ +0.42 V |
| $A^+$ | ≈ 0 | −0.018 |
| $A^-$ | 0.5 | 0.505 |

All transistors are saturated at the operating point. The currents differ by a few percent through channel-length modulation, since $M_5$ and $M_7$ have different $|V_{DS}|$ from $M_8$. The simulated gain is about 25 % higher because level-1 writes $r_o=(1+\lambda V_{DS})/(\lambda I_D)$ and also raises $g_m$ by the same factor. For the common-mode range, a unity-gain follower sweep tracks to within 5 µV up to +0.45 V, with $M_5$'s $|V_{SD}|$ reaching its 0.17-V overdrive near +0.42 V; at the bottom, $M_1$ still has $|V_{SD}|=0.40$ V at −1.3 V, and the follower is then limited only by its own output swing near the rail. The positive-supply gain is nearly cancelled, leaving only a small residue, and the negative-supply gain is the $r_o$ divider value of 0.5.
