# Detailed solution - G138

At $V_o=-10$ V the pnp output device $Q_{20}$ sinks the load current, and $Q_{14}$ is held almost off. Start from the load current to get $Q_{20}$; the diode string carries essentially all of $Q_{13A}$'s current; KVL around the loop $Q_{19}$, $Q_{18}$, $Q_{20}$, $Q_{14}$ then gives the small current of $Q_{14}$; and KCL at node $V_2$ gives $Q_{23}$. Use $|I_C|=I_S\exp(|V_{BE}|/V_T)$ with $I_S=10^{-14}$ A and $V_T=26$ mV.

### Step 1 — Output device $Q_{20}$

The load current $10\ \mathrm V/1\ \mathrm{k\Omega}=10$ mA flows from ground up through $R_L$ into the output node. With $Q_{14}$ nearly off, the emitter of $Q_{20}$ takes all of it:

$$
|I_{E20}|=10\ \mathrm{mA},\qquad |I_{C20}|=\frac{\beta_F}{\beta_F+1}|I_{E20}|=\frac{50}{51}(10\ \mathrm{mA})=9.80\ \mathrm{mA},\qquad |I_{B20}|=\frac{10\ \mathrm{mA}}{51}=0.196\ \mathrm{mA}.
$$

$$
|V_{BE20}|=(26\ \mathrm{mV})\ln\frac{9.80\ \mathrm{mA}}{10^{-14}\ \mathrm A}=0.718\ \mathrm V.
$$

### Step 2 — Diodes $Q_{19}$ and $Q_{18}$

$Q_{13A}$ forces 0.2 mA into the node at the base of $Q_{14}$. The base current of the nearly-off $Q_{14}$ is negligible (checked below), so the diode string carries $I_D\approx0.2$ mA:

$$
I_{19}=I_{18}\approx0.20\ \mathrm{mA},\qquad V_{D}=(26\ \mathrm{mV})\ln\frac{0.2\ \mathrm{mA}}{10^{-14}\ \mathrm A}=0.617\ \mathrm V .
$$

### Step 3 — $Q_{14}$ from the loop KVL

The base of $Q_{14}$ is two diode drops above $V_2$, and the output is $|V_{BE20}|$ above $V_2$, so

$$
V_{BE14}=V_{D19}+V_{D18}-|V_{BE20}|=1.233\ \mathrm V-0.718\ \mathrm V=0.516\ \mathrm V,
$$
$$
I_{C14}=I_Se^{V_{BE14}/V_T}=(10^{-14}\ \mathrm A)\,e^{0.516/0.026}\approx4.1\ \mu\mathrm A .
$$

Its base current, $4.1\ \mu\mathrm A/200\approx20$ nA, leaves 0.19998 mA in the diodes, confirming Step 2. Its emitter current changes $|I_{E20}|$ by only 0.04%.

### Step 4 — $Q_{23}$ from KCL at $V_2$

$Q_{23}$ is a pnp follower with its emitter at $V_2$. Into this node flow the diode current from above and the base current out of $Q_{20}$'s base; both leave through the emitter of $Q_{23}$:

$$
|I_{E23}|=I_D+|I_{B20}|=0.200\ \mathrm{mA}+0.196\ \mathrm{mA}=0.396\ \mathrm{mA},
$$
$$
|I_{C23}|=\frac{50}{51}(0.396\ \mathrm{mA})=0.388\ \mathrm{mA},\qquad |I_{B23}|=7.8\ \mu\mathrm A.
$$

The base current $|I_{B23}|$ flows into $Q_{17}$.

### Step 5 — Summary

| Device | Bias current |
|---|---|
| $Q_{20}$ | $\lvert I_E\rvert=10.0$ mA, $\lvert I_C\rvert=9.80$ mA, $\lvert I_B\rvert=0.196$ mA |
| $Q_{19}$, $Q_{18}$ | 0.20 mA each |
| $Q_{14}$ | $I_C\approx4.1\ \mu$A (nearly off) |
| $Q_{23}$ | $\lvert I_E\rvert=0.396$ mA, $\lvert I_C\rvert=0.388$ mA |

$Q_{14}$ is not cut off completely: the class AB bias keeps a few microamperes flowing even at a large negative swing. The figure does not show whether the diode-connected devices are npn or pnp; their terminal current is 0.2 mA either way, and the resulting $I_{C14}$ stays within about 3.9–4.1 µA.
