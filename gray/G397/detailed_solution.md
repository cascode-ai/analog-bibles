# Detailed solution - G397

Use half circuits. Both circuits are symmetric, so a purely differential input leaves every node on the symmetry line at ac ground, and a purely common-mode input makes the two halves move together with no current crossing the symmetry line. Small-signal parameters: $g_m=2I_D/|V_{ov}|$, $r_o=|V_A|/|I_D|$.

### Step 1 — Small-signal parameters

Each of $M_1$–$M_4$ carries $I_{D5}/2=100\ \mu\mathrm A$, and $M_5$ carries 200 μA:

$$
\begin{aligned}
g_{m1}&=g_{m3}=\frac{2(100\ \mu\mathrm A)}{0.2\ \mathrm V}=1\ \mathrm{mA/V},\\
r_{o1}&=\frac{10\ \mathrm V}{100\ \mu\mathrm A}=100\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{20\ \mathrm V}{100\ \mu\mathrm A}=200\ \mathrm{k\Omega},\\
r_{o5}&=\frac{10\ \mathrm V}{200\ \mu\mathrm A}=50\ \mathrm{k\Omega},\qquad
r_{o5h}=2r_{o5}=100\ \mathrm{k\Omega}.
\end{aligned}
$$

In the CM half circuit the tail transistor is split into two parallel halves, each with output resistance $2r_{o5}$.

### Step 2 — Differential gain with local CMFB

For a differential input $v_{o2}=-v_{o1}$. The midpoint of two equal 20-kΩ resistors between antisymmetric voltages stays at 0, so it is an ac ground, and so are the gates of $M_3$, $M_4$ and the tail node. In the DM half circuit:
- $M_1$ is a common-source stage with grounded source;
- $M_3$, with gate and source at ac ground, is just $r_{o3}$;
- the output is loaded by one 20-kΩ resistor to ac ground.

$$
a_{dm}=\frac{v_{od}}{v_{id}}=-g_{m1}\left(r_{o1}\parallel r_{o3}\parallel 20\ \mathrm{k\Omega}\right)
=-(1\ \mathrm{mA/V})(15.4\ \mathrm{k\Omega})=-15.4.
$$

### Step 3 — Common-mode gain with local CMFB

For a common-mode input $v_{o1}=v_{o2}=v_{oc}$, so no current flows in the resistors and the gates of $M_3$, $M_4$ follow $v_{oc}$. $M_3$ is then diode-connected and presents $1/g_{m3}\parallel r_{o3}=995\ \Omega$. $M_1$ has $r_{o5h}$ in its source, which reduces its effective transconductance to

$$
G_{m}=\frac{g_{m1}}{1+g_{m1}r_{o5h}+\dots}\approx\frac1{r_{o5h}}=10\ \mu\mathrm{A/V}.
$$

Because the load resistance is far below the output resistance of the degenerated $M_1$, the gain is $-G_m$ times the load:

$$
a_{cm}=\frac{v_{oc}}{v_{ic}}\approx-\frac{1/g_{m3}\parallel r_{o3}}{r_{o5h}}=-\frac{995\ \Omega}{100\ \mathrm{k\Omega}}\approx-0.0099.
$$

Solving the two node equations of the half circuit exactly (source node: $g_{m1}(v_{ic}-v_s)+(v_{oc}-v_s)/r_{o1}=v_s/r_{o5h}$; output node: the same current equals $-(g_{m3}+1/r_{o3})v_{oc}$) gives $a_{cm}=-0.0098$.

### Step 4 — Gains of the amplifier in [Fig. 2]

Without the resistors, the gates of $M_3$, $M_4$ are at fixed bias, so in both half circuits $M_3$ is just $r_{o3}$.

DM: the tail node is an ac ground,

$$
a_{dm}=-g_{m1}(r_{o1}\parallel r_{o3})=-(1\ \mathrm{mA/V})(66.7\ \mathrm{k\Omega})=-66.7.
$$

CM: the load $r_{o3}$ is now comparable to the output resistance looking down, $R_{o(\mathrm{down})}=r_{o1}(1+g_{m1}r_{o5h})+r_{o5h}=10.2\ \mathrm{M\Omega}$, so the exact half-circuit result is needed:

$$
a_{cm}=-\frac{g_{m1}r_{o1}r_{o3}}{r_{o3}+r_{o1}+(1+g_{m1}r_{o1})r_{o5h}}
=-\frac{(100)(200\ \mathrm{k\Omega})}{200\ \mathrm{k\Omega}+100\ \mathrm{k\Omega}+(101)(100\ \mathrm{k\Omega})}=-1.92.
$$

The approximation $G_{m}\approx1/r_{o5h}$ gives $-(R_{o(\mathrm{down})}\parallel r_{o3})/r_{o5h}=-196\ \mathrm{k\Omega}/100\ \mathrm{k\Omega}=-1.96$.

### Step 5 — Comparison

| Circuit | $a_{dm}$ | $a_{cm}$ |
|---|---|---|
| Local CMFB ([Fig. 1]) | −15.4 | −0.0098 |
| Fixed-bias loads ([Fig. 2]) | −66.7 | −1.92 |

The local CMFB turns the loads into diodes for common-mode signals, cutting $|a_{cm}|$ by about 200×, which is roughly what a separate CMFB loop with unity sense gain achieves. The price is that the 20-kΩ sense resistors load each output in the DM half circuit and reduce $|a_{dm}|$ by about 4.3×.
