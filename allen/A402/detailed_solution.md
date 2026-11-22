# Detailed solution - A402

Compare the two kinds of latch on the points that matter for a comparator's final stage: how strongly each output is driven during regeneration, which sets speed and swing; how much supply voltage the device stack needs; and when current flows, which sets power. First describe how the dynamic latch operates, since its clocking determines most of the differences.

### Step 1 — Operation of the dynamic latch ([Fig. 2])

While $\varphi_{Latch}$ is low, M5 and M6 are off, so the cross-coupled inverters M1–M3 and M2–M4 have no path to either supply, and the pass transistors M7 and M8 (gated by $\overline{\varphi_{Latch}}$) are on. They load $v_{in}$ and $V_{REF}$ onto the two output nodes as the initial imbalance. When $\varphi_{Latch}$ goes high, M7 and M8 open, M5 and M6 connect the inverters to the rails, and the two cross-coupled inverters regenerate the imbalance until one output reaches $V_{DD}$ and the other ground. While $\varphi_{Latch}$ stays high, M1–M4 form a static CMOS latch that holds its state.

### Step 2 — Regeneration strength and output drive

For the latches of [Fig. 1], each output node is driven by one cross-coupled transistor against a fixed current source. With node capacitance $C$, the regeneration time constant is

$$
\tau_L\approx\frac C{g_m},
$$

and in large signal each output is Class A: the transistor can pull its node one way strongly, but the other way is limited to the bias current $I$, so one transition slews at only $I/C$.

In the dynamic latch both an NMOS and a PMOS device are cross-coupled at each node, so their transconductances add and the output is push–pull:

$$
\tau_L\approx\frac C{g_{mn}+g_{mp}} .
$$

Both transitions are driven by a transistor rather than a fixed current, so regeneration is faster and the outputs swing fully rail to rail.

### Step 3 — Supply voltage

In [Fig. 1], each branch holds one transistor and a current source between the rails, so the latch works from a low supply. In the dynamic latch, near the balanced point where regeneration starts, the current path stacks M6, a PMOS, an NMOS and M5:

$$
V_{DD}\gtrsim V_{SD6}+|V_{GSp}|+V_{GSn}+V_{DS5},
$$

so it needs a larger supply voltage.

### Step 4 — Power

The latches of [Fig. 1] draw their bias currents continuously. The dynamic latch draws no static current: in reset M5 and M6 are off, and after the decision each inverter has one device off. Current flows only while the nodes are charged and discharged, so the energy per decision is roughly $CV_{DD}^2$ per node, and power scales with clock rate.

### Step 5 — Summary

| | Current-source latches ([Fig. 1]) | Dynamic latch ([Fig. 2]) |
|---|---|---|
| Advantages | Simple, few devices; works from a low supply; well-defined bias current | Push–pull drive with $\tau_L\approx C/(g_{mn}+g_{mp})$: faster; full rail-to-rail outputs; no static power |
| Disadvantages | Class-A outputs limited by $I$, asymmetric and slower transitions; continuous dc current | Larger supply needed by the four-device stack; needs a clock and switches; more devices, more kickback from switching onto the input and reference sources |
