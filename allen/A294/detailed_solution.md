# Detailed solution - A294

This is a current-mirror op amp: the input pair is loaded by the diode-connected M3 and M4, whose currents are copied with gain $k$ into M8 and M6; M8's current is turned around by M9–M11 so that both halves add at the output, where cascodes (M7 over M6 and M12 over M11) give a high resistance. The overall gain is the output current times $R_{out}$; the first-stage gain is the voltage at one diode node. All devices are saturated; $g_{mN}r_{dsN}=100$, $g_{mP}=g_{mN}$, $r_{dsP}=r_{dsN}/2$, and M3, M4 have $g_m=g_{mN}/k$ with $k=10$.

### Step 1 — Output resistance

Looking up from the output: the p-channel cascode M7 over M6; looking down: the n-channel cascode M12 over M11:

$$
R_{up}\approx g_{m7}r_{ds7}r_{ds6}=g_{mP}r_{dsP}^2=\frac{g_{mN}r_{dsN}^2}{4},\qquad
R_{down}\approx g_{m12}r_{ds12}r_{ds11}=g_{mN}r_{dsN}^2,
$$
$$
R_{out}=R_{up}\parallel R_{down}=\frac{g_{mN}r_{dsN}^2}{5}=0.2\,(100)\,r_{dsN}=20\,r_{dsN}.
$$

### Step 2 — Output current and differential gain

The input splits as $\pm v_{in}/2$, so M1 and M2 change their currents by $\mp0.5g_{mN}v_{in}$ (+ input at M2). These currents flow into the diodes M3 and M4 and are copied with gain $k$: M6 pushes $+0.5k\,g_{mN}v_{in}$ into the output, while M8's change $-0.5k\,g_{mN}v_{in}$ is mirrored by M9–M11 (gain 1) into a reduced pull-down at the output. Both add:

$$
i_{out}=k\,g_{mN}v_{in},\qquad
A_v=k\,g_{mN}R_{out}=0.2k(g_{mN}r_{dsN})^2=0.2(10)(100)^2=2.0\times10^4\ \mathrm{V/V}.
$$

### Step 3 — First-stage gain

Each first-stage output is a diode node: the signal current $0.5g_{mN}v_{in}$ flows into $1/g_{m3}$ (the drain resistances $r_{ds1}$ and $r_{ds3}=10r_{dsP}$ in parallel are far larger and are neglected). With $g_{m3}=g_{mP}/k=0.1g_{mN}$, at the M3 node

$$
A_{v1}=\frac{v_{d3}}{v_{in}}=-\frac{0.5g_{mN}}{g_{m3}}=-\frac{0.5g_{mN}}{0.1g_{mN}}=-5\ \mathrm{V/V}
$$

(and +5 at the M4 node; the differential voltage between the two diode nodes is 10 times $v_{in}$). The first stage has deliberately low gain, which keeps its poles at high frequency; almost all the gain comes from the factor $k$ and the cascoded output node.
