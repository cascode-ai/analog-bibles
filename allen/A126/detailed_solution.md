# Detailed solution - A126

M2 mirrors the 100 µA reference from the diode-connected M3 and serves as a current-source load for M1. The output node has a high resistance $1/(g_{ds1}+g_{ds2})$ and carries the 1 pF load, while the mirror node (gates of M2, M3) is held at a low resistance $\approx1/g_{m3}$. The output therefore sets the dominant pole. Find its conductance, assign each capacitance to a node, and check that the mirror-node pole is far away.

### Step 1 — Output conductance and gain

M1 and M2 both carry 100 µA in saturation. With $g_{ds}=\lambda I_D$,

$$
g_{ds1}+g_{ds2}=(0.04+0.05\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=9\ \mu\mathrm S,\qquad R_{out}=111\ \mathrm{k\Omega}.
$$

For reference, $g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=469\ \mu\mathrm S$, so the low-frequency gain is $-469/9=-52$ V/V.

### Step 2 — Capacitances at each node

The input is an ideal source, and $V_{DD}$ and ground are ac ground.

- Output node: $C_{gdn}$ (M1 drain to its gate, the ideally driven input), $C_{gdp}$ (M2 drain to its gate, the low-impedance mirror node, nearly ac ground), $C_{bdn}$, $C_{bdp}$ and $C_L$:

$$
C_{out}=C_{gdn}+C_{gdp}+C_{bdn}+C_{bdp}+C_L=5+5+10+10+1000\ \mathrm{fF}=1030\ \mathrm{fF}.
$$

- Input: $C_{gsn}$ of M1 is directly across the ideal source and does not affect the response.
- Mirror node: the $C_{gsp}$ of M2 and M3 (to $V_{DD}$), driven through $1/g_{m3}$.

### Step 3 — Mirror-node pole

With $g_{m3}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=316\ \mu\mathrm S$ and roughly $2C_{gsp}=20$ fF at the node,

$$
f_{mirror}\approx\frac{g_{m3}}{2\pi(2C_{gsp})}=\frac{316\ \mu\mathrm S}{2\pi(20\ \mathrm{fF})}\approx2.5\ \mathrm{GHz}.
$$

Moreover, the mirror node is not in the signal path: the reference current is constant, and the node picks up signal only weakly through $C_{gdp}$. It does not limit the response; the output pole is dominant by three orders of magnitude.

### Step 4 — −3 dB frequency

KCL at the output, with the current in $C_{gdn}$ entering from the input:

$$
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}-sC_{gdn}}{g_{ds1}+g_{ds2}+sC_{out}},
$$

$$
f_{-3\,\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{2\pi C_{out}}=\frac{9\ \mu\mathrm S}{2\pi(1.03\ \mathrm{pF})}=1.39\ \mathrm{MHz}.
$$

$C_{gdn}$ is not Miller-multiplied because the input is ideally driven. The right-half-plane zero $g_{m1}/(2\pi C_{gdn})=469\ \mu\mathrm S/(2\pi\cdot5\ \mathrm{fF})\approx15$ GHz is negligible.
