# Detailed solution - A438

The current DAC has no reference voltage of its own; $V_{REF}$ fixes the voltage scale it must reproduce. Match the DAC's transfer characteristic to that of a conventional voltage DAC with reference $V_{REF}$ and solve for $I$.

### Step 1 — Scale of the given transfer characteristic

The output of the current-sink R–2R DAC is

$$
v_{OUT}=RI\sum_{i=1}^{N}b_i2^{-i},
$$

so $RI$ plays the role of the reference: one LSB is $RI/2^N$, the full-scale range is $RI$, and the all-ones output is $RI(1-2^{-N})$.

### Step 2 — Match it to a $V_{REF}$-based DAC

A conventional $N$-bit DAC with reference $V_{REF}$ gives $v_{OUT}=V_{REF}\sum_{i=1}^{N}b_i2^{-i}$, i.e. a full-scale range of $V_{REF}$ and an LSB of $V_{REF}/2^N$. Equating the two characteristics term by term requires

$$
RI=V_{REF}\quad\Longrightarrow\quad I=\frac{V_{REF}}{R}=\frac{5\ \mathrm V}{R}.
$$

Then $1\,\mathrm{LSB}=5\ \mathrm V/2^N$ and the full-scale value is $5\ \mathrm V\,(1-2^{-N})$. For example, $R=1\ \mathrm{k\Omega}$ gives $I=5$ mA.

### Step 3 — Alternative convention

If instead the all-ones output itself must equal $V_{REF}$, then

$$
RI\left(1-2^{-N}\right)=V_{REF}\quad\Longrightarrow\quad I=\frac{V_{REF}}{R\left(1-2^{-N}\right)}=\frac{5\ \mathrm V}{R\left(1-2^{-N}\right)},
$$

which differs from the first result by one part in $2^N-1$ and makes the LSB $V_{REF}/(2^N-1)$ rather than a binary fraction of $V_{REF}$.
