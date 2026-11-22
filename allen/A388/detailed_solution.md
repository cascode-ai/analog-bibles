# Detailed solution - A388

For a slew-limited delay the input is large, so the tail current is steered entirely to one side of the pair. The diode loads convert it to a gate voltage that a 1:5 mirror copies to the output, directly for sourcing and through M8–M9–M7 for sinking. The load is then charged or discharged by a constant current, and the delay is the half-swing divided by the slew rate.

### Step 1 — Branch currents for a large input

When $|v_{in}|$ exceeds $\sqrt{2I_5/\beta_1}$, one input device carries the whole $I_5=100\ \mu$A and the other is off. With M5's current fully steered:

- **M2 on** ($v_{in}>0$): 100 µA flows in the diode M4. M6, with $W_6/L_6=5(W_4/L_4)$ and the same $V_{SG}$, carries $5(100\ \mu\mathrm A)=500\ \mu$A. M3 carries nothing, so M8, M9 and M7 are off.
- **M1 on** ($v_{in}<0$): 100 µA flows in the diode M3. M8, with $W_8/L_8=5(W_3/L_3)$, carries 500 µA into the diode M9, and M7, identical to M9, sinks 500 µA from the output. M4 and therefore M6 are off.

The output is thus push–pull: it sources or sinks 500 µA, twice the quiescent output current of $5(50\ \mu\mathrm A)=250\ \mu$A that flows when the pair is balanced. The diode-connected loads keep the internal nodes clamped within about one $V_{GS}$ of the rail, so they switch quickly and the 10-pF load dominates.

### Step 2 — Slew rate

$$
SR=\frac{I_{out}}{C_L}=\frac{500\ \mu\mathrm A}{10\ \mathrm{pF}}=50\ \mathrm{V/\mu s},
$$

equal on both edges because the sourcing and sinking paths have the same 1:5 gain.

### Step 3 — Propagation delay

The output swings between the rails, $V_{OH}=2$ V and $V_{OL}=-2$ V, and the delay is the time to cover half of this swing, 2 V:

$$
t_p=\frac{(V_{OH}-V_{OL})/2}{SR}=\frac{2\ \mathrm V}{50\ \mathrm{V/\mu s}}=40\ \mathrm{ns}.
$$

Rising and falling outputs take the same 40 ns, so the comparator's propagation delay is 40 ns.
