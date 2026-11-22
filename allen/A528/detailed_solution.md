# Detailed solution - A528

A comparator must swing fully for an input only half an LSB from its threshold, even when its offset opposes the decision. Refer the swing requirement to the input, add the offset, and find the largest $N$ whose half-LSB covers both.

### Step 1 — Requirement for a correct decision

With $A_{cm}=0$,

$$
v_o=1000\,(v_{id}+V_{OS}),\qquad 0\le v_o\le5\ \mathrm V .
$$

For an input $0.5$ LSB above the threshold, the output must reach 5 V even when the 40-mV offset has the opposing sign:

$$
1000\,(0.5\ \text{LSB}-40\ \mathrm{mV})\ge5\ \mathrm V
\;\Longrightarrow\;
0.5\ \text{LSB}\ge40\ \mathrm{mV}+5\ \mathrm{mV}=45\ \mathrm{mV},
$$

so $1$ LSB $\ge90$ mV. An input $0.5$ LSB below a threshold gives the same bound for an output of 0 V.

### Step 2 — Number of bits

With the 3-V input range,

$$
\frac{3\ \mathrm V}{2^N}\ge90\ \mathrm{mV}
\;\Longrightarrow\;
2^N\le33.3
\;\Longrightarrow\;
N=5 .
$$

At 5 bits, 1 LSB $=3\ \mathrm V/32=93.75$ mV satisfies the bound; at 6 bits, $46.9$ mV would not.

The offset dominates: requiring only $40\ \mathrm{mV}\le0.5$ LSB (ignoring the 5-mV swing term) gives 1 LSB $\ge80$ mV and the same $N=5$.
