# Detailed solution - G389

A common-mode change at the outputs requires the tail current to differ from the total current supplied by the two PMOS loads; the imbalance divides equally between the two output capacitors. Find the largest imbalance the circuit can produce when $V_{cmc}$ is driven far from its nominal value, and divide by the capacitance of each output.

### Step 1 — KCL at the outputs

Each PMOS load supplies a constant 100 µA. With no differential input, the tail current $I_{D5}$ divides equally, so each input transistor sinks $I_{D5}/2$. At each output node,

$$
C\,\frac{dV_{o1}}{dt}=C\,\frac{dV_{o2}}{dt}=100\ \mu\mathrm A-\frac{I_{D5}}{2},
$$

so both outputs move together, $V_{od}$ is unchanged, and

$$
\frac{dV_{oc}}{dt}=\frac{|I_{D3}|+|I_{D4}|-I_{D5}}{2C}.
$$

At the nominal bias $I_{D5}=200\ \mu$A this is zero, as it must be.

### Step 2 — Rising slew rate

When $V_{cmc}$ is driven low enough to turn $M_5$ off, $I_{D5}=0$ and each load current charges its own capacitor:

$$
\frac{dV_{oc}}{dt}=\frac{100\ \mu\mathrm A}{5\ \mathrm{pF}}=20\ \mathrm{V/\mu s}.
$$

This is the largest available imbalance in the rising direction, since the load currents are fixed.

### Step 3 — Falling direction

In the falling direction the rate is $(I_{D5,\max}-200\ \mu\mathrm A)/(2\times5\ \mathrm{pF})$. It depends on how far $V_{cmc}$ can raise the tail current above its nominal value, which the given bias does not fix; for example, a tail current of 400 µA would also give 20 V/µs downward.

### Step 4 — Comparison with the DM slew rate

The CM slew rate, 20 V/µs, is half of the DM value of 40 V/µs for the same circuit. In DM slewing the full tail current is steered and a net 100 µA flows into each capacitor in opposite directions; in CM slewing the same 100 µA flows into each capacitor in the same direction, so each output moves at 20 V/µs and their average does too.
