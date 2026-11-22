# Detailed solution - A386

The large input steers the whole tail current to one side of the pair, and current mirrors with a 1:10 ratio copy it to the output as either a source or a sink current. The 25-pF load is therefore slewed by a constant current on each edge, and the delay is the time to move from the starting rail to the 0-V trip point.

### Step 1 — The input step switches the tail current completely

For an NMOS pair with tail current $I_{SS}$, one side carries all of it once $|v_{in}|\ge\sqrt{2I_{SS}/\beta_1}$, with $\beta_1=K'_N(W/L)_1$:

$$
\sqrt{\frac{2I_{SS}}{\beta_1}}=\sqrt{\frac{2(50\ \mu\mathrm A)}{(110\ \mu\mathrm{A/V^2})(10)}}=0.30\ \mathrm V<1\ \mathrm V .
$$

So at $v_{in}=+1$ V, M1 carries 50 µA and M2 is off; at $v_{in}=-1$ V the roles reverse.

### Step 2 — Output currents set by the mirror ratios

Both mirror paths run from 10/1 diodes to 100/1 output devices. With equal lengths and saturation, the drain current scales with $W$:

- **Sink path.** M1's current flows in diode M3; M8 (10/1) copies it 1:1 into diode M9 (10/1), and M7 (100/1) mirrors M9 with gain 10: $I_7=10I_{D1}$.
- **Source path.** M2's current flows in diode M4 (10/1), and M6 (100/1) mirrors it with gain 10: $I_6=10I_{D2}$.

With the tail current fully switched, the output stage is push–pull: one device delivers $10(50\ \mu\mathrm A)=500\ \mu$A and the other is off. The slew rate is the same on both edges:

$$
SR=\frac{500\ \mu\mathrm A}{25\ \mathrm{pF}}=20\ \mathrm{V/\mu s}.
$$

### Step 3 — Starting voltages

With $v_{in}=-1$ V, M6 sources 500 µA and M7 is off, so nothing sinks current from the output and $v_o$ rises until M6 leaves saturation and its current falls to zero: $v_o=+2.5$ V. With $v_{in}=+1$ V the opposite holds and $v_o=-2.5$ V. In each direction the output must therefore travel 2.5 V to reach the 0-V trip point.

### Step 4 — Propagation delay

For the rising input step, M7 discharges the load from $+2.5$ V to 0 V; for the falling step, M6 charges it from $-2.5$ V to 0 V. Both take

$$
t_p=\frac{C_L\,\Delta V}{I}=\frac{(25\ \mathrm{pF})(2.5\ \mathrm V)}{500\ \mu\mathrm A}=125\ \mathrm{ns}.
$$

The falling- and rising-output delays are equal, so the comparator's propagation delay, their average, is 125 ns. This neglects the time for the internal mirror nodes to switch: no capacitances are given for them, and the small diode-node capacitances charge with the full 50 µA through a much smaller load than 25 pF. A level-1 ngspice transient of the circuit with only the 25-pF load gives 125.0 ns on both edges.
