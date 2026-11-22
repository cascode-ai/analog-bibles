# Detailed solution - A311

The buffer is a class-AB source-follower output stage. M18 (p-channel) and M19 (n-channel) are level shifters, each a source follower driven from the common gate node: M18's source is $V_{SG18}$ above that node and drives the gate of the n-channel output device M22, and M19's source is $V_{GS19}$ below it and drives the gate of the p-channel output device M21. With every node voltage known at the quiescent point, each device's $V_{GS}$ and source–bulk voltage are fixed, so its size follows from the square law once the body-effect threshold is computed. The bulks are as drawn (n-channel to $V_{SS}$, p-channel to $V_{DD}$), so the body effect is significant.

### Step 1 — Quiescent node voltages and currents

The gates of M21 and M22 draw no current, so M18 carries $I_{17}=100$ µA and M19 carries $I_{20}=100$ µA. With the gate node at 0 V:

$$
V_{S18}=0+1.5=1.5\ \mathrm V,\qquad V_{S19}=0-1.5=-1.5\ \mathrm V.
$$

The first node is the gate of M22, the second the gate of M21.

With $v_{out}=0$, the output devices have $V_{GS22}=1.5$ V and $V_{SG21}=1.5$ V.

### Step 2 — Body-effect thresholds

With $|V_T|=V_{T0}+\gamma\left(\sqrt{2|\phi_F|+|V_{SB}|}-\sqrt{2|\phi_F|}\right)$; for M18 the source is at 1.5 V and the bulk at 2.5 V, so $|V_{SB}|=1.0$ V:

$$
|V_{T18}|=0.7+0.57\left(\sqrt{0.8+1.0}-\sqrt{0.8}\right)=0.955\ \mathrm V .
$$

The others follow in the same way:

| Device | Type | Source (V) | $\lvert V_{SB}\rvert$ (V) | $\lvert V_T\rvert$ (V) |
|---|---|---|---|---|
| M18 | p | +1.5 | 1.0 | 0.955 |
| M19 | n | −1.5 | 1.0 | 0.887 |
| M22 | n | 0 | 2.5 | 1.081 |
| M21 | p | 0 | 2.5 | 1.226 |

### Step 3 — Aspect ratios

Each device carries 100 µA with $|V_{GS}|=1.5$ V, so $W/L=2I_D/[K'(1.5\ \mathrm V-|V_T|)^2]$. For M18:

$$
\frac{W_{18}}{L_{18}}=\frac{2(100\ \mu\mathrm A)}{(50\ \mu\mathrm{A/V^2})(1.5-0.955)^2\ \mathrm{V^2}}=13.5 .
$$

| Device | $K'$ (µA/V²) | $\lvert V_{GS}\rvert-\lvert V_T\rvert$ (V) | $W/L$ |
|---|---|---|---|
| M18 | 50 | 0.545 | 13.5 |
| M19 | 110 | 0.613 | 4.8 |
| M22 | 110 | 0.419 | 10.4 |
| M21 | 50 | 0.274 | 53 |

Without the body effect the p-channel devices would need 6.25 and the n-channel devices 2.84. The body effect more than doubles the sizes, most strongly for the output devices, whose sources sit 2.5 V from their bulks.
