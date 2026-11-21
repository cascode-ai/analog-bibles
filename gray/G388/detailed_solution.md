# Detailed solution - G388

Slewing occurs when a large differential input steers the entire tail current to one side of the pair. Write KCL at each output node with the fixed PMOS load currents and the 5-pF capacitors, find each output's rate of change, and take the difference.

### Step 1 — Currents during slewing

Suppose a large positive $v_{id}$ turns $M_2$ off, so $M_1$ carries the whole tail current $I_{D5}=200\ \mu$A. The PMOS loads $M_3$ and $M_4$ remain in the active region and keep supplying $100\ \mu$A each, because their gates are biased independently of the outputs.

### Step 2 — Rate of change of each output

At $v_{o1}$, $M_3$ supplies 100 µA and $M_1$ sinks 200 µA, so a net 100 µA discharges the capacitor:

$$
\frac{dV_{o1}}{dt}=\frac{100\ \mu\mathrm A-200\ \mu\mathrm A}{5\ \mathrm{pF}}=-20\ \mathrm{V/\mu s}.
$$

At $v_{o2}$, $M_4$ supplies 100 µA and $M_2$ sinks nothing, so 100 µA charges the capacitor:

$$
\frac{dV_{o2}}{dt}=\frac{100\ \mu\mathrm A}{5\ \mathrm{pF}}=+20\ \mathrm{V/\mu s}.
$$

### Step 3 — Differential slew rate

$$
\frac{dV_{od}}{dt}=\frac{dV_{o1}}{dt}-\frac{dV_{o2}}{dt}=-40\ \mathrm{V/\mu s},
$$

and $+40$ V/µs when the input polarity is reversed, so the differential slew rate is $|dV_{od}/dt|=40$ V/µs. Equivalently, the differential output sees the two 5-pF capacitors in series (2.5 pF) driven by a net current $I_{D5}/2=100\ \mu$A:

$$
\left|\frac{dV_{od}}{dt}\right|=\frac{I_{D5}/2}{C/2}=\frac{100\ \mu\mathrm A}{2.5\ \mathrm{pF}}=40\ \mathrm{V/\mu s}.
$$

The two outputs move by equal amounts in opposite directions, so the output common-mode level does not change during slewing and the CMFB loop is not disturbed.
