# Detailed solution - A459

Compare the C–2C charge-scaling DAC with the alternatives on the properties that usually decide a DAC choice: component spread and area, sensitivity to op-amp offset, power, speed, and sensitivity to parasitics, clocking and mismatch. Each claim below rests on the circuit's operation: capacitive division in the ladder and charge transfer onto $C_F$ at a virtual ground.

### Step 1 — Advantage: small component spread and area

The ladder uses only $C$ and $2C$ for any number of bits (plus $C_F=2C$), so the spread is $2{:}1$, compared with $2^{N-1}{:}1$ (or $2^N{:}1$ including the feedback capacitor) for a binary-weighted capacitor array. Ratios near 1 can be built from identical unit capacitors and match well, and the total capacitance grows linearly, about $3C$ per bit, instead of exponentially, so the area stays small for large $N$.

### Step 2 — Advantage: op-amp offset not multiplied by a large noise gain

During φ1 the op amp's inverting input is tied to its output, so the summing node sits at $V_{OS}$ while $C_F$ is reset. If the bit switches are already set in φ1, the selected shunt capacitors are charged to $V_{OS}$ then; charge conservation from φ1 to φ2 gives

$$
\sum_i b_iC\,V_{OS}=\sum_i b_iC\left(V_{OS}-V_{i+1}\right)+C_F\left(V_{OS}-v_{OUT}\right)
\;\Longrightarrow\;
v_{OUT}=V_{OS}-\frac{C}{C_F}\sum_i b_iV_{i+1},
$$

so the offset appears only once at the output (the array is auto-zeroed). If instead those capacitors are discharged in φ1 and connected to the summing node only in φ2, the left side is zero and $v_{OUT}$ contains $V_{OS}(1+\sum b_iC/C_F)$, at most $3V_{OS}$ here; still a modest factor compared with the noise gain of a resistive DAC with many inputs.

### Step 3 — Advantage: no static power, parallel conversion

The network is purely capacitive, so it draws no dc current from $V_{REF}$ (resistor strings and R–2R ladders do), and it fits naturally into switched-capacitor systems. All bits act in one charge transfer, so a conversion takes one clock period limited by the op amp settling.

### Step 4 — Disadvantage: floating ladder nodes and parasitics

During φ2 the internal ladder nodes 2–4 are floating; their voltages exist only through capacitive division. Any parasitic capacitance at these nodes (bottom- and top-plate parasitics of the $2C$ series capacitors, switch junction capacitances) adds to the $2C$ node load and spoils the exact halving, giving gain and nonlinearity errors that grow with the number of stages. This limits the practical resolution, unlike the binary-weighted array of a charge amplifier, whose capacitors connect only between low-impedance nodes and the virtual ground.

### Step 5 — Disadvantage: clocking, charge injection and sampled output

The DAC needs two nonoverlapping clock phases. Charge injection and clock feedthrough from the switches dump charge onto the floating ladder nodes and onto the summing node, causing offset and code-dependent errors. The output is valid only during φ2; during φ1 $C_F$ is shorted and the output is reset, so a sample-and-hold is needed for a continuous output.

### Step 6 — Disadvantage: monotonicity and speed limits

Monotonicity is not guaranteed: mismatch between the ladder capacitors can make the step at a major carry (e.g. $0111\to1000$) negative, as in any binary-weighted structure, whereas resistor-string or thermometer-coded DACs are monotonic by construction. The speed is set by op-amp settling (and slewing) in every conversion, and by the reset phase, so it is slower than a current-steering DAC.
