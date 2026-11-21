# Detailed solution - G381

The circuit is symmetric, so split it into a differential-mode (DM) half-circuit, in which the tail node is an ac ground, and a common-mode (CM) half-circuit, in which each half sees twice the tail resistance. Each half-circuit gives an open-circuit gain and an output resistance; shorting the output gives the corresponding transconductance. Then match the defining equations to the T and π networks to obtain their elements.

### Step 1 — Small-signal parameters

$$
g_{m1}=\frac{2I_D}{V_{ov}}=\frac{2(100\ \mu\mathrm A)}{0.2\ \mathrm V}=1\ \mathrm{mA/V},\qquad
r_{o1}=\frac{10\ \mathrm V}{100\ \mu\mathrm A}=100\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{20\ \mathrm V}{100\ \mu\mathrm A}=200\ \mathrm{k\Omega},
$$

$$
r_{o5}=\frac{10\ \mathrm V}{200\ \mu\mathrm A}=50\ \mathrm{k\Omega},\qquad r_{o5h}=2r_{o5}=100\ \mathrm{k\Omega},
$$

where $r_{o5h}$ is the tail resistance seen by each CM half.

### Step 2 — Differential-mode parameters

In the DM half-circuit the tail node does not move, so $M_1$ is a common-source stage driven by $v_{id}/2$ with load $r_{o3}$. The output resistance seen at $v_{o1}$ is $R_{od}/2$ and the open-circuit output is $a_{dm}v_{id}/2$:

$$
\frac{R_{od}}{2}=r_{o1}\parallel r_{o3}=66.7\ \mathrm{k\Omega}\ \ (R_{od}=133\ \mathrm{k\Omega}),\qquad
a_{dm}=-g_{m1}(r_{o1}\parallel r_{o3})=-66.7 .
$$

With the outputs shorted to ground, the current flowing into terminal 1 equals the signal current drawn by $M_1$, $g_{m1}v_{id}/2$, so $i_{od}=g_{m1}v_{id}/2$ and

$$
G_{md}=\frac{g_{m1}}{2}=0.5\ \mathrm{mA/V},
$$

consistent with $a_{dm}=-G_{md}R_{od}$.

### Step 3 — Common-mode parameters

In the CM half-circuit $M_1$ has $r_{o5h}$ in its source. Looking down into its drain,

$$
R_{o(\mathrm{down})}=r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}=10.2\ \mathrm{M\Omega},\qquad
R_{oc}=R_{o(\mathrm{down})}\parallel r_{o3}=196\ \mathrm{k\Omega}.
$$

With the output shorted, the degenerated transconductance is

$$
G_{mc}=\frac{g_{m1}}{1+g_{m1}r_{o5h}+r_{o5h}/r_{o1}}=\frac{1\ \mathrm{mA/V}}{102}=9.80\ \mu\mathrm A/\mathrm V\approx\frac{1}{r_{o5h}},
$$

with the current flowing into each output terminal. The open-circuit CM gain follows as

$$
a_{cm}=-G_{mc}R_{oc}=-(9.80\ \mu\mathrm A/\mathrm V)(196\ \mathrm{k\Omega})=-1.92 .
$$

Solving the CM half-circuit by KCL at the source and drain nodes gives the same $v_{oc}/v_{ic}=-1.92$. (With the cruder $G_{mc}\approx1/r_{o5h}$, $a_{cm}\approx-1.96$.)

### Step 4 — T-network elements

In the T network each output connects through $R_{od}/2$ and a source $a_{dm}v_{id}/2$ to a centre node, which returns to ground through a shunt resistor $R_x$ in series with the source $a_{cm}v_{ic}$. Writing $i_{o1}=i_{oc}+i_{od}$, the centre node carries $2i_{oc}$, so

$$
v_{o1}=\frac{a_{dm}v_{id}}{2}+a_{cm}v_{ic}+\frac{R_{od}}{2}i_{od}+\left(2R_x+\frac{R_{od}}{2}\right)i_{oc}.
$$

Matching the coefficient of $i_{oc}$ to $R_{oc}$:

$$
R_x=\frac{R_{oc}}{2}-\frac{R_{od}}{4}=98.1\ \mathrm{k\Omega}-33.3\ \mathrm{k\Omega}=64.7\ \mathrm{k\Omega}.
$$

| T element | Value |
|---|---|
| Series resistors $R_{od}/2$ | 66.7 kΩ each |
| Series sources $a_{dm}v_{id}/2$ | $a_{dm}=-66.7$ |
| Shunt resistor $R_{oc}/2-R_{od}/4$ | 64.7 kΩ |
| Shunt source $a_{cm}v_{ic}$ | $a_{cm}=-1.92$ |

### Step 5 — π-network elements

In the π network each output has $R_{oc}$ and a source $G_{mc}v_{ic}$ to ground, and a bridging resistor $R_b$ with the source $G_{md}v_{id}$ joins the outputs. The current into terminal 1 contains $v_{o1}/R_{oc}+(v_{o1}-v_{o2})/R_b$; with $v_{o1}=v_{oc}+v_{od}/2$ the coefficient of $v_{od}$ is $1/(2R_{oc})+1/R_b$, which must equal $1/R_{od}$:

$$
R_b=\left(\frac{1}{R_{od}}-\frac{1}{2R_{oc}}\right)^{-1}=R_{od}\parallel(-2R_{oc})=133\ \mathrm{k\Omega}\parallel(-392\ \mathrm{k\Omega})=202\ \mathrm{k\Omega}.
$$

| π element | Value |
|---|---|
| Shunt resistors $R_{oc}$ | 196 kΩ each |
| Shunt sources $G_{mc}v_{ic}$ | $G_{mc}=9.8\ \mu$A/V |
| Bridging resistor $R_{od}\parallel(-2R_{oc})$ | 202 kΩ |
| Bridging source $G_{md}v_{id}$ | $G_{md}=0.5$ mA/V |

Without common-mode feedback the CM gain is small ($-1.92$) only because of the tail transistor's output resistance, while the DM gain is set by $r_{o1}\parallel r_{o3}$.
