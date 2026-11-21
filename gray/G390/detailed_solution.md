# Detailed solution - G390

In a Miller-compensated two-stage amplifier, slewing is set by the first stage: the current imbalance at each first-stage output flows through the compensation capacitor, while the second stage, acting as a Miller integrator, holds its input node nearly fixed. Find the current through each capacitor, the resulting rate at each output, and combine them.

### Step 1 — Currents during slewing

A large differential input turns one input device off; say $M_2$ is off and $M_1$ carries the whole tail current, 200 µA. The NMOS loads $M_3$ and $M_4$ remain active and keep sinking 100 µA each.

### Step 2 — Current through each compensation capacitor

At the drain of $M_1$ (the gate of $M_9$), $M_1$ supplies 200 µA and $M_3$ sinks 100 µA, so the excess 100 µA must flow through the Miller capacitor $C$ connected to $V_{o2}$. At the drain of $M_2$ (the gate of $M_6$), $M_2$ supplies nothing while $M_4$ sinks 100 µA, so 100 µA flows the other way through the capacitor connected to $V_{o1}$.

### Step 3 — Output rates

Because the high gain of each second stage keeps its gate node almost stationary, the capacitor current sets the rate of change of the output across it:

$$
\left|\frac{dV_{o1}}{dt}\right|=\left|\frac{dV_{o2}}{dt}\right|=\frac{100\ \mu\mathrm A}{1.39\ \mathrm{pF}}=72\ \mathrm{V/\mu s},
$$

with $V_{o2}$ falling and $V_{o1}$ rising in this case (the excess current leaves the $M_9$ gate node through $C$ toward $V_{o2}$, and with the gate fixed this requires $V_{o2}$ to fall; the opposite holds at $V_{o1}$).

### Step 4 — Differential slew rate

The outputs move in opposite directions, so

$$
\left|\frac{dV_{od}}{dt}\right|=2(72\ \mathrm{V/\mu s})=144\ \mathrm{V/\mu s}=\frac{|I_{D5}|}{C}=\frac{200\ \mu\mathrm A}{1.39\ \mathrm{pF}}.
$$

This internal slew rate applies provided the second stages can supply the capacitor current plus any load current. Each second stage has 400 µA available, so with modest external loads they do not limit slewing.
