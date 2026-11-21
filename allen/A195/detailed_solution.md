# Detailed solution - A195

Replace each simple mirror of [Fig. 1] by the high-swing cascode mirror of [Fig. 2], then size the devices from the input specifications. The input of a high-swing mirror is the gate–drain node of its bottom device, so its small-signal resistance and dc voltage are set by that device's $g_m$ and $V_{GS}$; both depend on the same overdrive, which turns out to make the three specifications incompatible for the mirror alone.

### Step 1 — Implementation

<!-- diagram: diagram-01.cir -->

- **Mirror A** (replacing M1–M2): its input is node A, where the source $I$ and the input current $i_2$ enter. Following [Fig. 2], A is the drain of the input-side cascode M5A and the gate of both bottom devices M3A and M1A; M5A's source is M3A's drain. The output side, cascode M2A over M1A, draws its current from node B.
- **Mirror B** (replacing M3–M4): its input is node B, where $2I$ and $i_1$ enter (minus what mirror A draws). It is built the same way (M5B, M3B, M1B, M2B), and its output cascode M2B draws from the output node, which the source $I$ feeds.
- **Cascode bias:** the gates of all cascode devices (M5A, M2A, M5B, M2B) are tied to node NB, set to $V_T+2V_{ON}$ by a diode-connected M4B of one quarter the $W/L$, fed by its own reference current $I$. One bias branch serves both mirrors.

The current bookkeeping of [Fig. 1] is unchanged: mirror A copies $I+i_2$ out of node B, mirror B receives $2I+i_1-(I+i_2)=I+i_1-i_2$ and copies it out of the output node, and the source $I$ leaves $i_O=i_1-i_2$ for the output terminal.

### Step 2 — Input resistance and input dc voltage of one mirror

The input current flows through M5A into M3A, whose gate is the input node. For $g_mr_{ds}\gg1$ the cascode passes the current unchanged, so the input behaves like a diode-connected M3A:

$$
R_{in}\approx\frac1{g_{m3}}=\frac{V_{ON}}{2I},\qquad V_{IN}=V_{GS3}=V_T+V_{ON},
$$

using $g_m=2I_D/V_{ON}$ for a square-law device carrying $I_D=I=100\ \mu$A. (The exact value, $(g_{m5}+g_{ds3}+g_{ds5})/[g_{m3}(g_{m5}+g_{ds5})+g_{ds3}g_{ds5}]$, is slightly above $1/g_{m3}$.)

### Step 3 — The specifications conflict

Both quantities depend on $V_{ON}$ alone once $I=100\ \mu$A is fixed:

- $R_{in}=1$ kΩ requires $g_m=1$ mS, i.e. $V_{ON}=2I/g_m=0.2$ V, and then $V_{IN}=0.7+0.2=0.9$ V, not 1.0 V.
- $V_{IN}=1.0$ V requires $V_{ON}=0.3$ V, and then $g_m=2(100\ \mu\mathrm A)/(0.3\ \mathrm V)=0.667$ mS, i.e. $R_{in}=1.5$ kΩ, not 1 kΩ.

A series resistor $R$ at the input does not help: then $R_{in}=R+V_{ON}/(2I)$ and $V_{IN}=V_T+V_{ON}+IR$, which give $V_{ON}=2(V_{IN}-V_T-IR_{in})=2(0.3-0.1)\ \mathrm V=0.4$ V and hence $R=R_{in}-V_{ON}/(2I)=-1$ kΩ. A shunt resistor from each input to a 1.0-V reference ($3\ \mathrm{k\Omega}\parallel1.5\ \mathrm{k\Omega}=1\ \mathrm{k\Omega}$) meets the input numbers but diverts signal: only $\alpha=2/3$ of each input current reaches the mirror, so $i_O=\alpha i_1-\alpha^2i_2$ instead of $i_1-i_2$ unless the mirror ratios are rescaled. The mirror by itself therefore cannot give 1 kΩ, 100 µA and 1.0 V together.

### Step 4 — Design

Meet the resistance and current specifications with the mirror, $V_{ON}=0.2$ V at 100 µA:

$$
\frac WL=\frac{2I}{K'_NV_{ON}^2}=\frac{2(100\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(0.2\ \mathrm V)^2}=45.5\quad(\text{e.g. }45\ \mu\mathrm m/1\ \mu\mathrm m),
$$

for every mirror and cascode device, with the bias diode M4B at $W/L\approx11.4$ carrying 100 µA (cascode gates at $V_T+2V_{ON}=1.1$ V), sources $I=100\ \mu$A, $2I=200\ \mu$A and $I=100\ \mu$A. This gives $R_{in}=1$ kΩ and 100 µA with the input at 0.9 V.

To reach 1.0 V as well without disturbing $i_O=i_1-i_2$, return the sources of all n-channel mirror and bias devices to a stiff +0.1-V dc rail instead of ground. Every node voltage then shifts up by 0.1 V while all currents and small-signal parameters stay the same: the input sits at 1.0 V, $R_{in}\approx1$ kΩ, the cascode bias at 1.2 V.

A level-1 ngspice simulation of one mirror at these sizes (λ = 0.04 V⁻¹) gives an input of 0.899 V (0.999 V with the 0.1-V rail), $R_{in}=1.05$ kΩ and an output current of 100.05 µA. The extra 5 % in $R_{in}$ comes from M3 sitting just at its triode edge ($V_{DS3}=0.194$ V against $V_{ON}=0.2$ V) when the bias diode is exactly one quarter size; a slightly smaller bias device removes it.
