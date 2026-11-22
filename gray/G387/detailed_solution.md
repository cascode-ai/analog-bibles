# Detailed solution - G387

Treat the differential and common-mode signals separately. For DM, the resistive feedback network around the op amp sets the closed-loop gain, reduced slightly by the finite open-loop gain $a_{dm}$. For CM, the same resistor network applies, but the op amp's effective CM gain is first reduced by the common-mode feedback loop through $V_{cmc}$. Compute the op-amp gains, close the CMFB loop, then close the resistive loop in each mode.

### Step 1 — Open-loop gains of the op amp

At this bias $g_{m1}=g_{m5h}=1$ mA/V, $r_{o1}=200$ kΩ, $r_{o3}=400$ kΩ and $r_{o5h}=200$ kΩ, and the resistance looking down into the drain of $M_1$ in the CM half-circuit is $R_{o(\mathrm{down})}=r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}=40.4$ MΩ. Hence

$$
a_{dm}=-g_{m1}(r_{o1}\parallel r_{o3})=-133,
$$

$$
a_{cm}\approx-\frac{R_{o(\mathrm{down})}\parallel r_{o3}}{r_{o5h}}=-\frac{396\ \mathrm{k\Omega}}{200\ \mathrm{k\Omega}}=-1.98,\qquad
a_{cmc}=-g_{m5h}\left(R_{o(\mathrm{down})}\parallel r_{o3}\right)=-396 .
$$

### Step 2 — CM gain with the CMFB loop closed

The CMFB circuit senses $v_{oc}$ and drives the gate of $M_5$ with $v_{cmc}=a_{cms}v_{oc}$ (small-signal, with the reference held constant). The op amp's CM output is

$$
v_{oc}=a_{cm}v_{ic}+a_{cmc}v_{cmc}=a_{cm}v_{ic}+a_{cmc}a_{cms}v_{oc},
$$

so the effective CM gain is

$$
a'_{cm}=\frac{a_{cm}}{1-a_{cmc}a_{cms}}=\frac{-1.98}{1+396}=-0.0050 .
$$

The loop gain of the CMFB loop is $-a_{cmc}a_{cms}=396$, which is negative feedback because $a_{cmc}<0$.

### Step 3 — Feedback network relations

The op-amp inputs draw no current, and the 100-MΩ resistors are far larger than the op-amp output resistances (133 kΩ DM, about 396 kΩ CM before CMFB), so they do not load the outputs. Each op-amp input node is the midpoint of an $R_1$–$R_3$ (or $R_2$–$R_4$) divider between a source and an output. With equal resistors, the input node driven from $v_{s1}$ sits at $(v_{s1}+v_{o1})/2$, and that node is the input that drives $v_{o1}$ inverting. Therefore

$$
v_{id}=\frac{v_{sd}+v_{od}}{2},\qquad v_{ic}=\frac{v_{sc}+v_{oc}}{2}.
$$

### Step 4 — Closed-loop DM gain

With $v_{od}=a_{dm}v_{id}$:

$$
v_{od}=a_{dm}\,\frac{v_{sd}+v_{od}}{2}\quad\Longrightarrow\quad
A_{dm}=\frac{v_{od}}{v_{sd}}=\frac{a_{dm}/2}{1-a_{dm}/2}=-\frac{R_3}{R_1}\,\frac{T_{dm}}{1+T_{dm}},
$$

where $T_{dm}=-a_{dm}R_1/(R_1+R_3)=66.7$ is the DM loop gain:

$$
A_{dm}=-\frac{66.7}{67.7}=-0.985 .
$$

### Step 5 — Closed-loop CM gain

With $v_{oc}=a'_{cm}v_{ic}$ and the same divider,

$$
A_{cm}=\frac{v_{oc}}{v_{sc}}=\frac{a'_{cm}/2}{1-a'_{cm}/2}=-\frac{R_3}{R_1}\,\frac{T_{cm}}{1+T_{cm}},\qquad
T_{cm}=-\frac{a'_{cm}}{2}=0.0025,
$$

$$
A_{cm}=-\frac{0.0025}{1.0025}\approx-0.0025 .
$$

The resistive network would give $-R_3/R_1=-1$ in both modes if the op amp had large gain in both, but the op amp has almost no CM gain once the CMFB loop acts, so the source common-mode level is strongly rejected. Using the open-loop $a_{cm}=-1.98$ instead would give $A_{cm}\approx-0.50$.
