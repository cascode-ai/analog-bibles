# Detailed solution - A108

The question is where each device's current ends up. Identify the physical structure of the bipolar transistors in [Fig. 1] and of the "diodes" in [Fig. 2] in a p-substrate CMOS process, follow the current of each through its terminals, and compare what reaches the substrate.

### Step 1 — [Fig. 1]: isolated vertical npn transistors

A true vertical npn that can be isolated from the substrate has an n⁺ emitter, a p base and an n collector (an n-well or deep n-well) that forms a reverse-biased junction with the grounded p-substrate. In [Fig. 1] the collector currents of Q1 and Q2 are the reference currents $I_1$ and $I_2$: they come from the PMOS mirror (Q1 directly, Q2 through $R_1$) and leave through the emitters, Q1's via $R_2$, to the ground return. None of this current crosses the collector–substrate junction.

The only substrate current is the leakage of that reverse-biased isolation junction, typically picoamperes to nanoamperes, many orders of magnitude below the microampere reference currents.

### Step 2 — [Fig. 2]: diodes in a p-substrate process

In a p-substrate CMOS process the only diode whose cathode can be returned to ground is a p⁺ diffusion in an n-well: the p⁺ region is the anode and the n-well, tied to ground, is the cathode. Underneath the n-well is the p-substrate, so the structure is a vertical pnp:

- emitter: the p⁺ anode, fed by the reference current;
- base: the n-well, the "cathode" connected to ground;
- collector: the p-substrate.

When the "diode" is forward-biased, this parasitic substrate pnp is in its forward-active region. Of each diode current only the base fraction $1/(\beta+1)$ leaves through the n-well contact, and the fraction $\beta/(\beta+1)$ is collected by the substrate.

### Step 3 — Size of the substrate current

With $\beta$ of the substrate pnp typically from about 10 to 100, nearly all of the diode currents flows into the substrate:

$$
I_{sub,\,Fig.\,2}\approx\frac{\beta}{\beta+1}\,(I_1+I_2+I_3)\approx I_1+I_2+I_3 ,
\qquad
I_{sub,\,Fig.\,1}\approx I_{leak}\ (\mathrm{pA\ to\ nA}).
$$

### Step 4 — Comparison

The reference of [Fig. 1] injects far less current into the substrate than that of [Fig. 2]: the isolated vertical transistors return their collector current to the circuit, while the diodes of [Fig. 2] are substrate pnp transistors that dump most of the reference current into the substrate.

This matters because substrate current flows through the substrate resistance to the substrate contacts. It produces local substrate potential drops, couples noise into other circuits on the die and can forward-bias junctions that trigger latch-up. This is a reason to prefer the isolated-transistor reference when such transistors are available.
